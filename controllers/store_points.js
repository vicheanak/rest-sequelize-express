var models  = require('../models');
var fs = require('fs');
var appRoot = require('app-root-path');
var uuid = require('uuid/v4');
var sharp = require('sharp');
var multer = require('multer');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = page--;
  var perPage = req.query.per_page ? req.query.per_page : 30;
  models.STORE_POINTS.findAndCountAll({
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
          models.STORE_POINTS.create({
            points: req.body.name,
            imageUrl: req.header.host + filePath,
            storeIdStorePoints: req.body.storeIdStorePoints,
            userIdStorePoints: req.body.userIdStorePoints,
            displayIdStorePoints: req.body.displayIdStorePoints
          }).then(function(result) {
            return res.jsonp(result);
          });
        });
      })
      .catch((err) => {
        console.log('error', err);
      });


    //fs.readFile(appRoot + filePath, function(err, data) {
      //if (err) throw err;
      //res.send(data);
    //});
  });

};

exports.update = function(req, res) {
  models.STORE_POINTS.update({
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
  models.STORE_POINTS.find({
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}
