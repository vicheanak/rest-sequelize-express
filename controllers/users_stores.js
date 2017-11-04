var models  = require('../models');
var uuid = require('uuid/v4');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  models.USERS_STORES.findAndCountAll({
    offset: page,
    limit: perPage,
    orderBy: [
      ['createdAt', 'DESC']
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
    console.log('######', rec.rows);
    return res.jsonp(result);
  });
};

exports.getByUser = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  var data = {
    offset: page,
    limit: perPage,
    orderBy: [
      ['createdAt', 'DESC']
    ],
    where: {
      userIdUsersStores: req.params.id
    },
    include: [
    {
      model: models.STORES,
      attributes: ['id', 'name', 'phone', 'location'],
      include: [
        {
          model: models.STORE_TYPES,
          attributes: ['id', 'name']
        }
      ]
    }
    ]
  };
  models.USERS_STORES.findAndCountAll(data).then(function(rec) {
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
    console.log('######', rec.rows);
    return res.jsonp(result);
  });
};

exports.getByStore = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  var data = {
    offset: page,
    limit: perPage,
    orderBy: [
      ['id', 'DESC']
    ],
    where: {
      storeIdUsersStores: req.params.id
    },
    include: [
    {
      model: models.USERS
    }
    ]
  };
  models.USERS_STORES.findAndCountAll(data).then(function(rec) {
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
    console.log('######', rec.rows);
    return res.jsonp(result);
  });
};

exports.create = function(req, res) {
  models.USERS_STORES.create({
    id: uuid(),
    name: req.body.name
  }).then(function(result) {
    return res.jsonp(result);
  });
};

exports.update = function(req, res) {
  models.USERS_STORES.update({
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
  models.USERS_STORES.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

