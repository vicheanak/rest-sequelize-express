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
  return res.jsonp({0: 'Perfect Store API End Point - Provided by Edge Advertising'});
});

router.get('/display_types', cors(), displayTypes.all);
router.get('/display_types/:id', cors(), displayTypes.get);
router.post('/display_types', cors(), displayTypes.create);
router.put('/display_types/:id', cors(), displayTypes.update);

router.get('/displays', cors(), displays.all);
router.get('/displays/:id', cors(), displays.get);
router.post('/displays', cors(), displays.create);
router.put('/displays/:id', cors(), displays.update);

router.get('/rewards', cors(), rewards.all);
router.get('/rewards/:id', cors(), rewards.get);
router.post('/rewards', cors(), rewards.create);
router.put('/rewards/:id', cors(), rewards.update);

router.get('/store_points', cors(), storePoints.all);
router.get('/store_points/:id', cors(), storePoints.get);
router.post('/store_points', cors(), storePoints.create);
router.put('/store_points/:id', cors(), storePoints.update);

router.get('/stores_rewards', cors(), storesRewards.all);
router.get('/stores_rewards/:id', cors(), storesRewards.get);
router.post('/stores_rewards', cors(), storesRewards.create);
router.put('/stores_rewards/:id', cors(), storesRewards.update);

router.get('/store_types', cors(), storeTypes.all);
router.get('/store_types/:id', cors(), storeTypes.get);
router.post('/store_types', cors(), storeTypes.create);
router.put('/store_types/:id', storeTypes.update);

router.get('/stores', cors(), stores.all);
router.get('/stores/:id', cors(), stores.get);
router.post('/stores', cors(), stores.create);
router.put('/stores/:id', stores.update);

router.put('/auth_store', cors(), stores.authenticate);

router.get('/users', cors(), users.all);
router.get('/users/:id', cors(), users.get);
router.post('/users', cors(), users.create);
router.put('/users/:id', cors(), users.update);

router.get('/admins', cors(), users.all);
router.get('/admins/:id', cors(), users.get);
router.post('/admins', cors(), users.create);
router.put('/admins/:id', cors(), users.update);

router.get('/viewers', cors(), users.all);
router.get('/viewers/:id', cors(), users.get);
router.post('/viewers', cors(), users.create);
router.put('/viewers/:id', cors(), users.update);

router.get('/auditors', cors(), users.all);
router.get('/auditors/:id', cors(), users.get);
router.post('/auditors', cors(), users.create);
router.put('/auditors/:id', cors(), users.update);

router.put('/logout', cors(), users.logout);
router.get('/is_auth/:token', cors(), users.isAuth);
router.get('/is_admin/:token', cors(), users.isAdmin);
router.get('/is_viewer/:token', cors(), users.isViewer);
router.get('/is_auditor/:token', cors(), users.isAuditor);

router.put('/auth', cors(), users.authenticate);
router.put('/auth_auditor', cors(), users.authAuditor);

router.get('/users_stores', cors(), usersStores.all);
router.get('/users_stores/:id', cors(), usersStores.get);
router.get('/users_stores/users/:id', cors(), usersStores.getByUser);
router.get('/users_stores/stores/:id', cors(), usersStores.getByStore);
router.post('/users_stores', cors(), usersStores.create);
router.put('/users_stores/:id', cors(), usersStores.update);


module.exports = router;
