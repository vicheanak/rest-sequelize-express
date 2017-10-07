var models  = require('../models');


exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = page--;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  models.USERS.findAndCountAll({
    offset: page,
    limit: perPage,
    orderBy: [
      ['id', 'DESC']
    ]
  }).then(function(rec) {
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
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      req.body.password = hash;
      var token = jwt.encode(uuid.v4(), secret);
      req.body.token = token;
      models.USERS.create({
        fullname: req.body.name,
        username:req.body.username,
        password:req.body.password,
        phone: req.body.phone,
        token: req.body.token,
        role: req.body.role,
        status: req.body.status
      }).then(function(user){
        res.jsonp(user);
      });
    });
  });
};

exports.update = function(req, res) {
  models.USERS.update({
    name: req.body.name
  },{
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
};

exports.get = function(req, res) {
  models.USERS.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
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
    console.log('IS ADMIN ---> ', user);
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

exports.authenticate = function(req,res){
  db.User.findOne({
    where: {
      username: req.body.username,
      $or: [{role: 'admin'}, {role: 'viewer'}],
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
      return res.jsonp({err: 'user not exist'});
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
  console.log('CALLED USER ======> ', id);
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

