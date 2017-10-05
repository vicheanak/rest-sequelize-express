var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
  return res.jsonp({0: 'You are all good'});
});

module.exports = router;
