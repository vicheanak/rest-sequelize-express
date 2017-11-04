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
  models.REGIONS.findAndCountAll(query).then(function(rec) {
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
  models.REGIONS.create({
    id: uuid(),
    name: req.body.name,
    status: req.body.status
  }).then(function(result) {
    return res.jsonp(result);
  });
};

exports.update = function(req, res) {
  models.REGIONS.update({
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
  models.REGIONS.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

