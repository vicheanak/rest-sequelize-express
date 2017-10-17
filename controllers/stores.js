var models  = require('../models');
var bcrypt = require('bcrypt');
var jwt  = require('jwt-simple');
var uuid = require('uuid');
var secret = require('../config/secret');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  models.STORES.findAndCountAll({
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
      models.STORES.create({
        name: req.body.name,
        location: req.body.location,
        phone: req.body.phone,
        status: req.body.status,
        username: req.body.username,
        password: req.body.password,
        token: req.body.token
      }).then(function(result) {
        console.log(result.id);
        return res.jsonp(result);
      });
    });
  });
};

exports.update = function(req, res) {
  models.STORES.update({
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
  models.STORES.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}
