var models  = require('../models');

exports.all = (req, res) => {
  models.STORE_TYPES.findAll({}).then(function(storeTypes) {
    return res.jsonp(storeTypes);
  });
};

exports.create = function(req, res) {
  models.STORE_TYPES.create({
    username: req.body.username
  }).then(function(result) {
    return res.jsonp(result);
  });
};

exports.getOne = function(req, res) {
  models.STORE_TYPES.destroy({
    where: {
      id: req.params.store_type_id
    }
  }).then(function(result) {
    return res.jsonp(result);
  });
}
