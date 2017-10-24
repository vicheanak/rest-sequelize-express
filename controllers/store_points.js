var models  = require('../models');
var fs = require('fs');
var appRoot = require('app-root-path');
var uuid = require('uuid/v4');
var sharp = require('sharp');
var multer = require('multer');

exports.all = (req, res) => {
  var page = req.query.page ? req.query.page : 1;
  page = parseInt(page) - 1;
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

// exports.create = function(req, res) {
//   var fileUuid = uuid();
//   var base64Data = req.body.imageUrl;
//   var filePath = "/public/uploads/"+fileUuid+".png";
//   fs.writeFile(appRoot+filePath, base64Data, 'base64', function(err) {
//     if (err) console.log(err);
//     sharp(appRoot+filePath)
//     .resize(500)
//     .toBuffer()
//     .then((data) =>{
//       fs.writeFile(appRoot+filePath, data, 'base64', function(err) {
//         models.STORE_POINTS.create({
//           points: req.body.name,
//           imageUrl: req.header.host + filePath,
//           storeIdStorePoints: req.body.storeIdStorePoints,
//           userIdStorePoints: req.body.userIdStorePoints,
//           displayIdStorePoints: req.body.displayIdStorePoints
//         }).then(function(result) {
//           return res.jsonp(result);
//         });
//       });
//     })
//     .catch((err) => {
//       console.log('error', err);
//     });


//     //fs.readFile(appRoot + filePath, function(err, data) {
//       //if (err) throw err;
//       //res.send(data);
//     //});
//   });

// };

exports.create = function(req, res) {

  var fileName = req.body.fileName;

  var filePath = "/public/uploads/"+fileName;
  var appRootFilePath = appRoot + "/public/uploads/"+fileName;
  console.log('')
  sharp(appRootFilePath)
  .resize(500)
  .toBuffer()
  .then((data) =>{
    fs.writeFile(appRootFilePath, data, 'base64', function(err) {
      models.STORE_POINTS.create({
        points: req.body.points,
        uId: req.body.uId,
        imageUrl: req.protocol + '://' + req.headers.host + filePath,
        storeIdStorePoints: req.body.storeIdStorePoints,
        userIdStorePoints: req.body.userIdStorePoints,
        displayIdStorePoints: req.body.displayIdStorePoints,
        storeImageIdStorePoints: req.body.storeImageIdStorePoints
      }).then(function(result) {
        return res.jsonp(result);
      });
    });
  })
  .catch((err) => {
    console.log('error', err);
  });

};



exports.upload = function(req, res){
 console.log("##### uploaded");
 res.json({result:1});
}

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

exports.getStore = function(req, res){
 models.STORE_POINTS.findAll({
  where: {
    storeImageIdStorePoints: req.params.id
  },
  include: [
  {
    model: models.DISPLAYS
  }
  ]
}).then(function(result) {
  return res.jsonp(result);
});
}

exports.getStoreSum = function(req, res) {
  models.STORE_POINTS.findAll({
    where: {
      storeIdStorePoints: req.params.id
    },
    attributes: [
    'id',
    'storeImageIdStorePoints',
    'storeIdStorePoints',
    [models.sequelize.fn('sum', models.sequelize.col('points')), 'total_points']
    ],
    order: [
    ['id', 'DESC'],
    ],
    group: ['storeImageIdStorePoints'],
    include: [
    {
      model: models.STORE_IMAGES,
      attributes: ['id', 'capturedAt', 'imageUrl']
    },
    {
      model: models.STORES,
      attributes: ['id', 'name'],
      include: [
      {
        model: models.STORE_TYPES,
        attributes: ['id', 'name']
      }
      ]
    }
    ]
  }).then(function(result) {
    return res.jsonp(result);
  });
}

exports.getEarned = function(req, res, next) {
  models.STORE_POINTS.find({
    where: {
      storeIdStorePoints: req.params.id
    },
    attributes: [
    [models.sequelize.fn('sum', models.sequelize.col('points')), 'total_earned']
    ],
    group: ['storeIdStorePoints'],
  }).then(function(result) {
    res.locals.totalEarned = result;
    next();
  });
}

exports.getSpent = function(req, res, next) {
  models.STORES_REWARDS.find({
    attributes: [
    [models.sequelize.fn('sum', models.sequelize.col('STORES_REWARDS.points')),
    'total_spent']
    ],
    group: ['storeIdStoresRewards'],
    where: {
      storeIdStoresRewards: req.params.id
    }
  }).then(function(result) {
    res.locals.totalSpent = result;
    next();
  });
}

exports.getRemaining = function(req, res, next) {

  var totalSpent = res.locals.totalSpent.dataValues.total_spent;
  var totalEarned = res.locals.totalEarned.dataValues.total_earned;

  var remains = '(' + totalEarned + '-' + totalSpent + ')';

  models.STORE_POINTS.find({
    attributes: [
    [remains, 'total_remaining']
    ]
  }).then(function(result) {
    res.locals.totalRemaining = result;
    next();
  });
}


exports.printEarned = function(req, res){
  return res.json(res.locals.totalEarned);
}

exports.printSpent = function(req, res){
  return res.json(res.locals.totalSpent);
}

exports.printRemaining = function(req, res){
  return res.json(res.locals.totalRemaining);
}

exports.get = function(req, res) {
  models.STORE_POINTS.findAll().then(function(result) {
    return res.jsonp(result);
  });
}

