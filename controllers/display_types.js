var models  = require('../models');
var uuid = require('uuid/v4');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  var query = {
    offset: page,
    limit: perPage,
    orderBy: [
    ['createdAt', 'DESC']
    ],
    include: [
    {
      model: models.DISPLAYS,
      attributes: ['id', 'name', 'imageUrl', 'points', 'status', 'sku']
    }
    ]
  };
  if (req.query.display_status){
    query.include[0].where = {
      status: true
    }
  }
  if (req.query.status){
    query.where = {
      status: true
    }
  }
  models.DISPLAY_TYPES.findAndCountAll(query).then(function(rec) {
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
  models.DISPLAY_TYPES.create({
    id: uuid(),
    name: req.body.name,
    status: req.body.status
  }).then(function(result) {
    return res.jsonp(result);
  });
};

exports.update = function(req, res) {
  models.DISPLAY_TYPES.update({
    name: req.body.name,
    status: req.body.status
  },{
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
};

exports.get = function(req, res) {
  models.DISPLAY_TYPES.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.getStoreType = function(req, res) {
  models.DISPLAY_TYPES.findAll(
  {
    include: [
    {
      model: models.DISPLAYS,
      where: {
        storeTypeIdDisplays: req.params.id
      },
      include: [
        {
          model: models.CONDITIONS,
          attributes: ['id', 'name']
        }
      ]
    }
    ]
  }
  ).then(function(result) {
    return res.jsonp(result);
  });
}

