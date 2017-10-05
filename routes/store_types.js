var models  = require('../models');
var express = require('express');
var storeTypes = require('../controllers/store_types');
var router  = express.Router();

router.get('/store_types', (req, res) => {
  models.STORE_TYPES.findAll({}).then(function(storeTypes) {
    return res.jsonp(storeTypes);
  });
});

router.post('/store_types', storeTypes.create);

router.get('/store_types/:store_type_id', storeTypes.getOne);

module.exports = router;
