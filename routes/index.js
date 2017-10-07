var express = require('express');
var router  = express.Router();
var displayTypes = require('../controllers/display_types');
var displays = require('../controllers/displays');
var rewards = require('../controllers/rewards');
var storePoints = require('../controllers/store_points');
var storesRewards = require('../controllers/stores_rewards');
var storeTypes = require('../controllers/store_types');
var stores = require('../controllers/stores');
var users = require('../controllers/users');
var usersStores = require('../controllers/users_stores');

var cors = require('cors');

router.get('/', (req, res) => {
  return res.jsonp({0: 'You are all good'});
});

router.get('/display_types', displayTypes.all);
router.get('/display_types/:id', displayTypes.get);
router.post('/display_types', displayTypes.create);
router.put('/display_types/:id', displayTypes.update);

router.get('/displays', displays.all);
router.get('/displays/:id', displays.get);
router.post('/displays', displays.create);
router.put('/displays/:id', displays.update);

router.get('/rewards', cors(), rewards.all);
router.get('/rewards/:id', cors(), rewards.get);
router.post('/rewards', cors(), rewards.create);
router.put('/rewards/:id', cors(), rewards.update);

router.get('/store_points', storePoints.all);
router.get('/store_points/:id', storePoints.get);
router.post('/store_points', storePoints.create);
router.put('/store_points/:id', storePoints.update);

router.get('/stores_rewards', storesRewards.all);
router.get('/stores_rewards/:id', storesRewards.get);
router.post('/stores_rewards', storesRewards.create);
router.put('/stores_rewards/:id', storesRewards.update);

router.get('/store_types', storeTypes.all);
router.get('/store_types/:id', storeTypes.get);
router.post('/store_types', storeTypes.create);
router.put('/store_types/:id', storeTypes.update);

router.get('/stores', stores.all);
router.get('/stores/:id', stores.get);
router.post('/stores', stores.create);
router.put('/stores/:id', stores.update);

router.get('/users', users.all);
router.get('/users/:id', users.get);
router.post('/users', users.create);
router.put('/users/:id', users.update);

router.get('/users_stores', usersStores.all);
router.get('/users_stores/:id', usersStores.get);
router.post('/users_stores', usersStores.create);
router.put('/users_stores/:id', usersStores.update);

module.exports = router;
