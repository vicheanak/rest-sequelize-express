var models  = require('../models');
var multer = require('multer');
var fs = require('fs');
var appRoot = require('app-root-path');
var uuid = require('uuid/v4');
var sharp = require('sharp');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;

  var query = {
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
  models.ISSUES.findAndCountAll(query).then(function(rec) {
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
  var fileUuid = uuid();
  var base64Data = req.body.imageUrl;
  var filePath = "/public/uploads/"+fileUuid+".png";
  fs.writeFile(appRoot+filePath, base64Data, 'base64', function(err) {
    if (err) console.log(err);
    sharp(appRoot+filePath)
    .resize(500)
    .toBuffer()
    .then((data) =>{
      fs.writeFile(appRoot+filePath, data, 'base64', function(err) {
        models.ISSUES.create({
          name: req.body.name,
          points: req.body.points,
          imageUrl: req.protocol + '://' + req.headers.host + filePath,
          status: req.body.status
        }).then(function(result) {
          return res.jsonp(result);
        });
      });
    })
    .catch((err) => {
      console.log('error', err);
    });
  });
};

exports.update = function(req, res) {
  if (req.body.imageUrl.length > 200){
    var fileUuid = uuid();
    var base64Data = req.body.imageUrl;
    var filePath = "/public/uploads/"+fileUuid+".png";
    fs.writeFile(appRoot+filePath, base64Data, 'base64', function(err) {
      if (err) console.log(err);
      sharp(appRoot+filePath)
      .resize(500)
      .toBuffer()
      .then((data) =>{
        fs.writeFile(appRoot+filePath, data, 'base64', function(err) {
         models.ISSUES.update({
           name: req.body.name,
           points: req.body.points,
           imageUrl: req.headers.host + filePath,
           status: req.body.status
         },{
          where: {
            id: req.params.id
          }
        }).then(function(result) {
          return res.jsonp(result);
        });
      });
      })
      .catch((err) => {
        console.log('error', err);
      });
    });
  }
  else{
   models.ISSUES.update({
    name: req.body.name,
    points: req.body.points,
    status: req.body.status
  },{
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}
};

exports.get = function(req, res) {
  models.ISSUES.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}

