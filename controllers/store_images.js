var models  = require('../models');
var moment = require('moment');
var fs = require('fs');
var appRoot = require('app-root-path');
var uuid = require('uuid/v4');
var sharp = require('sharp');
var multer = require('multer');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  models.STORE_IMAGES.findAndCountAll({
    offset: page,
    limit: perPage,
    orderBy: [
    ['id', 'DESC']
    ],
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
  var fileName = req.body.fileName;
  var filePath = "/public/uploads/"+fileName;
  var appRootFilePath = appRoot + "/public/uploads/"+fileName;
  sharp(appRootFilePath)
  .resize(500)
  .toBuffer()
  .then((data) =>{
    fs.writeFile(appRootFilePath, data, 'base64', function(err) {
      var now = moment().format("YYYY-MM-DD HH:mm:ss");
      console.log('now', now);
      console.log('imageUrl', req.headers.host + filePath);
      console.log('storeIdStoreImages', req.body.storeIdStoreImages);
      models.STORE_IMAGES.create({
        capturedAt: now,
        imageUrl: req.protocol + '://' + req.headers.host + filePath,
        storeIdStoreImages: req.body.storeIdStoreImages
      }).then(function(result) {
        return res.jsonp(result);
      });
    });
  })
  .catch((err) => {
    console.log('error', err);
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
