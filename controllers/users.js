var models  = require('../models');

exports.all = function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    return res.jsonp(users);
  });
};
