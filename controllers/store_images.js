var models  = require('../models');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  models.STORES_REWARDS.findAndCountAll({
    offset: page,
    limit: perPage,
    orderBy: [
    ['id', 'DESC']
    ],
    include: [
    {
      model: models.REWARDS,
      attributes: ['id', 'name']
    },
    {
      model: models.STORES,
      attributes: ['id', 'name', 'phone'],
      include: [
      {
        model: models.STORE_TYPES,
        attributes: ['id', 'name']
      },
      {
        model: models.USERS_STORES,
        include: [
        {
          model: models.USERS
        }
        ]
      }
      ]
    }
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
  models.STORE_IMAGES.create({
    name: req.body.name
  }).then(function(result) {
    return res.jsonp(result);
  });
};

exports.update = function(req, res) {
  models.STORE_IMAGES.update({
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
  models.STORE_IMAGES.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.getByStore = function(req, res) {
  models.STORE_IMAGES.find({
    where: {
      storeIdStoreImages: req.params.id
    },
    include: [
    {
      model: models.STORES,
      include: [
      {
        model: models.STORE_TYPES
      }]
    }
    ]
  }
  ).then(function(result) {
    return res.jsonp(result);
  });
}
