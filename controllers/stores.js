var models  = require('../models');
var bcrypt = require('bcrypt');
var jwt  = require('jwt-simple');
var uuid = require('uuid');
var secret = require('../config/secret');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  var query = {
    include: [
    {
      model: models.STORE_TYPES,
      attributes: ['id', 'name', 'status']
    }
    ],
    offset: page,
    limit: perPage,
    orderBy: [
    ['id', 'DESC']
    ]
  };
  if (req.query.status){
    query.where = {
      status: true
    }
  }
  models.STORES.findAndCountAll(query).then(function(rec) {
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
  console.log('store type id ######', req.body.storeTypeId);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      req.body.password = hash;
      var token = jwt.encode(uuid.v4(), secret);
      req.body.token = token;
      models.STORES.create({
        name: req.body.name,
        location: req.body.location,
        phone: req.body.phone,
        status: req.body.status,
        username: req.body.username,
        password: req.body.password,
        token: req.body.token,
        storeTypeIdStores: req.body.storeTypeId
      }).then(function(result) {
        console.log(result.id);
        return res.jsonp(result);
      });
    });
  });
};

exports.update = function(req, res) {
  var data = {
    name: req.body.name,
    location: req.body.location,
    phone: req.body.phone,
    status: req.body.status,
    storeTypeIdStores: req.body.storeTypeIdStores
  };
  console.log('data password', req.body);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      if (req.body.password){
        data.password = hash;
      }
      console.log('data ====== ', data);
      models.STORES.update(data,{
        where: {
          id: req.params.id
        }
      }).then(function(store){
        return res.jsonp(store);
      });
    });
  });
}

exports.get = function(req, res) {
  models.STORES.find({
    where: {
      id: req.params.id
    },
    include: [
    {
      model: models.STORE_TYPES
    }
    ]
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.isAuth = function(req,res){
  console.log('req params, ', req.params.token);
  models.STORES.findOne({
    where: {
      token: req.params.token,
      status: true
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.authenticate = function(req,res){
  console.log(req.body.username);
  models.STORES.findOne({
    where: {
      username: req.body.username,
      status: true
    }
  }).then(function(store){
    if (store){
      store.verifyPassword(req.body.password, function(err, isMatch){
        console.log('isMatch');
        console.log(isMatch);
        if (isMatch){
          store.updateAttributes({
            token: jwt.encode(uuid.v4(), secret)
          }).then(function(a){
            res.jsonp(store);
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
  });
}
