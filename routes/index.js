var models  = require('../models');
var express = require('express');
var users = require('../controllers/users');
var router  = express.Router();

router.get('/', users.all);



module.exports = router;
