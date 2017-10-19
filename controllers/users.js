var models  = require('../models');
var bcrypt = require('bcrypt');
var jwt  = require('jwt-simple');
var uuid = require('uuid');
var secret = require('../config/secret');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;

  var routePath = req.route.path;
  console.log('ROUTE PATH ======>', routePath);
  if (routePath == '/admins'){
    req.body.role = 1;
  }
  if (routePath == '/viewers'){
    req.body.role = 2;
  }
  if (routePath == '/auditors'){
    req.body.role = 3;
  }

  var query = {
    offset: page,
    limit: perPage,
    orderBy: [
    ['id', 'DESC']
    ],
    where: {
      role: req.body.role
    }
  }

  if (req.query.status){
    query.where.status = true;
  }

  models.USERS.findAndCountAll(query).then(function(rec) {
    var routePath = req.route.path;
    var pageCount = Math.ceil(rec.count / perPage)
    var result = {
      '_metadata': {
        'page': rec.length,
        'per_page': perPage,
        'page_count': pageCount,
        'total_count': rec.count,
        'Links': [
        {'self': routePath+'?page='+page+'&per_page='+perPage},
        {'first': routePath+'?page=1&per_page='+perPage},
        {'previous': routePath+'?page='+(page-1)+'&per_page='+perPage},
        {'next': routePath+'?page='+(page+1)+'&per_page='+perPage},
        {'last': routePath+'?page='+pageCount+'&per_page='+perPage},
        ]
      },
      'records': rec.rows
    }

    return res.jsonp(result);
  });
};

exports.create = function(req, res) {
  var routePath = req.route.path;
  if (routePath == '/admins'){
    req.body.role = 1;
  }
  if (routePath == '/viewers'){
    req.body.role = 2;
  }
  if (routePath == '/auditors'){
    req.body.role = 3;
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      req.body.password = hash;
      var token = jwt.encode(uuid.v4(), secret);
      req.body.token = token;
      models.USERS.create({
        fullname: req.body.fullname,
        username:req.body.username,
        password:req.body.password,
        phone: req.body.phone,
        token: req.body.token,
        role: req.body.role,
        status: req.body.status
      }).then(function(user){
        if (req.body.storeIds){
          var usersStores = [];
          for (var i = 0; i < req.body.storeIds.length; i ++){
            usersStores.push({
              userIdUsersStores: user.id,
              storeIdUsersStores: req.body.storeIds[i]
            });
          }
          models.USERS_STORES.bulkCreate(usersStores).then(() => {
            return res.jsonp(user);
          });
        }
        else{
          res.jsonp(user);
        }
      });
    });
  });
};

exports.update = function(req, res) {
  var data = {
    fullname: req.body.fullname,
    phone: req.body.phone,
    status: req.body.status
  };
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      if (req.body.password){
        data.password = hash;
      }
      console.log('data ====> ', data);
      models.USERS.update(
        data
        ,{
          where: {
            id: req.params.id
          }
        }).then(function(user) {
          var routePath = req.route.path;
          console.log('user ===> ', routePath);
          var role = '';
          if (routePath == '/admins/:id'){
            role = 'admin';
          }
          if (routePath == '/viewers/:id'){
            role = 'viewers';
          }
          if (routePath == '/auditors/:id'){
            role = 'auditors';
          }
          if (role == 'auditors'){
            var usersStores = [];
            for (var i = 0; i < req.body.storeIds.length; i ++){
              usersStores.push({
                userIdUsersStores: req.params.id,
                storeIdUsersStores: req.body.storeIds[i]
              });
            }
            models.USERS_STORES.destroy({
              where: {
                userIdUsersStores: req.params.id
              }
            }).then(function(updatedData){
              models.USERS_STORES.bulkCreate(usersStores).then(() => {
                return res.jsonp(user);
              });
            });
          }
          else{
            return res.jsonp(user);
          }
        });
      });
  });


};

exports.get = function(req, res) {
  var routePath = req.route.path;
  console.log('route path', routePath);
  if (routePath == '/admins/:id'){
    req.body.role = 1;
  }
  if (routePath == '/viewers/:id'){
    req.body.role = 2;
  }
  if (routePath == '/auditors/:id'){
    req.body.role = 3;
  }

  models.USERS.find({
    include: [{
      model: models.USERS_STORES,
      attributes: ['storeIdUsersStores']
    }],
    where: {
      id: req.params.id,
      role: req.body.role
    }
  }).then(function(result) {
    var storeIds = []
    for (var i = 0; i < result.USERS_STOREs.length; i ++){
      storeIds.push(result.USERS_STOREs[i].storeIdUsersStores);
    }
    result.storeIds = storeIds;
    return res.jsonp(result);
  });
}


exports.changePassword = function(req, res){
  console.log('oldPassword', req.body.oldPassword);
  console.log('newPassword', req.body.newPassword);

  db.User.findOne({
    where: {
      username: req.get('username')
    }
  }).then(function(user){
    if (user){
      user.verifyPassword(req.body.oldPassword, function(err, isMatch){
        if (isMatch){
          //update password
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.newPassword, salt, function (err, hash) {
              req.body.newPassword = hash;
              var token = jwt.encode(uuid.v4(), secret);
              req.body.token = token;
              user.updateAttributes({
                password: req.body.newPassword
              }).then(function(a){
                return res.jsonp(a);
              }).catch(function(err){
                db.User.find({
                  where: {
                    id: user.id
                  }
                }).then(function(user){
                  var error = {
                    error: err,
                    data: user
                  }
                  return res.jsonp(error);
                });
              });
            });
          });
        }
        else{
          res.jsonp({success: false, msg: 'Your old password is incorrect'});
        }
      })
    }
    else{
      return res.jsonp({err: 'user not exist'});
    }
  })
}

exports.isAdmin = function(req, res, next){
  var token = req.get('token');
  db.User.findOne({
    where: {
      username: req.get('username'),
      role: 'admin'
    }
  }).then(function(user){
    if (user){
      user.verifyToken(token, function(isMatch){
        if (isMatch){
          next();
        }
        else{
          res.jsonp({success: false, err: 'Failed Auth'});
        }
      })
    }
    else{
      return res.jsonp({success: false, err: 'User is not admin'});
    }
  })
}

exports.requiredAdmin = function(req, res, next){
  var token = req.get('token');
  console.log('TOKEN ##########', token);

  models.USERS.find({
    where: {
      token: token,
      role: 1,
      status: true
    }
  }).then(function(result) {
    if (result){
      next();
    }
    else{
      return res.jsonp({err: 'Permission Denied'});
    }
  });
}

exports.requiredLogin = function(req, res, next){
  var token = req.get('token');

  models.USERS.find({
    where: {
      token: token,
      status: true
    }
  }).then(function(result) {
    if (result){
      next();
    }
    else{
      return res.jsonp({err: 'Permission Denied'});
    }
  });
}

exports.createSp = function(req, res, next){
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {

      req.body.password = hash;
      var token = jwt.encode(uuid.v4(), secret);
      req.body.token = token;
      db.User.create({
        name: req.body.name,
        username:req.body.username,
        password:req.body.password,
        token: req.body.token,
        role: 'sp'
      }).then(function(user){
        res.jsonp(user);
      });
    });
  });
}

exports.requiredAuth = function(req, res, next){
  var token = req.get('token');
  db.User.findOne({
    where: {
      username: req.get('username')
    }
  }).then(function(user){
    if (user){
      user.verifyToken(token, function(isMatch){
        if (isMatch){
          next();
        }
        else{
          res.jsonp({success: false, err: 'Failed Auth'});
        }
      })
    }
    else{
      return res.jsonp({err: 'user not exist'});
    }
  })
}

exports.islogin = function(req, res){
  var token = req.get('token');
  db.User.findOne({
    where: {
      username: req.body.username
    }
  }).then(function(user){
    if (user){
      user.verifyToken(token, function(isMatch){
        if (isMatch){
          res.jsonp(user);
        }
        else{
          res.jsonp({err: 'Invalid Token'});
        }
      })
    }
    else{
      return res.jsonp({err: 'user not exist'});
    }
  })
}

exports.logout = function(req,res){

  var token = req.body.token;

  models.USERS.update({
    token: ''
  },{
    where: {
      token: token
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.isAuth = function(req,res){
  console.log('req params, ', req.params.token);
  models.USERS.findOne({
    where: {
      token: req.params.token,
      $or: [{role: 1}, {role:2}],
      status: true
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.isAdmin = function(req,res){
  console.log('req params, ', req.params.token);
  models.USERS.findOne({
    where: {
      token: req.params.token,
      role: 1,
      status: true
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.isViewer = function(req,res){
  console.log('req params, ', req.params.token);
  models.USERS.findOne({
    where: {
      token: req.params.token,
      role: 2,
      status: true
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.isAuditor = function(req,res){
  console.log('req params, ', req.params.token);
  models.USERS.findOne({
    where: {
      token: req.params.token,
      role: 3,
      status: true
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.authenticate = function(req,res){
  console.log(req.body.username);
  models.USERS.findOne({
    where: {
      username: req.body.username,
      $or: [{role: 1}, {role: 2}],
      status: true
    }
  }).then(function(user){
    if (user){
      user.verifyPassword(req.body.password, function(err, isMatch){
        console.log('isMatch');
        console.log(isMatch);
        if (isMatch){
          user.updateAttributes({
            token: jwt.encode(uuid.v4(), secret)
          }).then(function(a){
            res.jsonp(user);
          });
        }
        else{
          res.jsonp({err: "Incorrect Password"});
        }
      })
    }
    else{
      return res.jsonp({err: "Username does Not Exist or Inactive"});
    }
  })
}
exports.authAuditor = function(req,res){
  console.log(req.body.username);
  models.USERS.findOne({
    where: {
      username: req.body.username,
      role: 3,
      status: true
    }
  }).then(function(user){
    if (user){
      user.verifyPassword(req.body.password, function(err, isMatch){
        console.log('isMatchAuditor');
        console.log(isMatch);
        if (isMatch){
          user.updateAttributes({
            token: jwt.encode(uuid.v4(), secret)
          }).then(function(a){
            res.jsonp(user);
          });
        }
        else{
          res.jsonp({err: "Incorrect Password"});
        }
      })
    }
    else{
      return res.jsonp({err: "Username does Not Exist or Inactive"});
    }
  })
}

exports.mobileAuthenticate = function(req,res){
  db.User.findOne({
    where: {
      username: req.body.username,
      role: 'sp',
      active: true
    }
  }).then(function(user){
    if (user){
      user.verifyPassword(req.body.password, function(err, isMatch){
        if (isMatch){
          user.updateAttributes({
            token: jwt.encode(uuid.v4(), secret)
          }).then(function(a){
            console.log(a);
            res.jsonp(user);
          });
        }
        else{
          res.jsonp({err: 'wrong password'});
        }
      })
    }
    else{
      return res.jsonp({err: 'User not exist'});
    }
  })
}
/**
 * Find user by id
 */
 exports.user = function(req, res, next, id) {
  db.User.find({where : { id: id }}).then(function(user){
    if (!user) {
      return next(new Error('Failed to load User ' + id));
    }
    req.profile = user;
    next();
  }).catch(function(err){
    next(err);
  });
};

/**
 * Generic require login routing middleware
 */
 exports.requiresLogin = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

/**
 * User authorizations routing middleware
 */
 exports.hasAuthorization = function(req, res, next) {
  if (req.profile.id !== req.user.id) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

