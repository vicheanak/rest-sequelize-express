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
var storeImages = require('../controllers/store_images');
var regions = require('../controllers/regions');
var conditions = require('../controllers/conditions');
var issues = require('../controllers/issues');
var multer = require('multer');
var appRoot = require('app-root-path');
var sharp = require('sharp');

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
router.get('/store_points/store_images/:id', cors(), storePoints.getStore);
router.get('/store_points/store_sum/:id', cors(), storePoints.getStoreSum);
router.get('/store_points/store_earned/:id', cors(), storePoints.getEarned, storePoints.printEarned);
router.get('/store_points/store_spent/:id', cors(), storePoints.getSpent, storePoints.printSpent);
// router.get('/store_points/store_remaining/:id', cors(), storePoints.getStoreEarnedPoints, storePoints.getStoreSpentPoints, storePoints.getStoreRemainingPoints);
router.get('/store_points/store_remaining/:id', cors(), storePoints.getEarned, storePoints.getSpent, storePoints.getRemaining, storePoints.printRemaining);
router.post('/store_points', cors(), storePoints.create);
router.put('/store_points/:id', cors(), storePoints.update);

var storage = multer.diskStorage(
{
	destination:function(req, file, cb){
		console.log('test');
		var filePath = appRoot + "/public/uploads/";

		cb(null,filePath);
	},
	filename:function(req,file,cb){
		console.log('geas');
		var filename = file.originalname;
		console.log('filename', filename);
		if(filename != undefined){
			cb(null, filename);
		}
	}
});

//For multipart/form-data Uploading
var upload = multer({storage:storage});

router.post('/store_points_upload', cors(), upload.single('file'), storePoints.upload);


router.get('/stores_rewards', cors(), storesRewards.all);
router.get('/stores_rewards/:id', cors(), storesRewards.get);
router.post('/stores_rewards', cors(), storesRewards.create);
router.put('/stores_rewards/:id', cors(), storesRewards.update);

router.get('/store_types', cors(), storeTypes.all);
router.get('/store_types/:id', cors(), storeTypes.get);
router.post('/store_types', cors(), storeTypes.create);
router.put('/store_types/:id', storeTypes.update);

router.get('/stores', cors(), stores.all);
router.get('/stores/reports', cors(), stores.reports);
router.get('/stores/:id', cors(), stores.get);
router.post('/stores', cors(), stores.create);
router.put('/stores/:id', stores.update);

router.put('/auth_store', cors(), stores.authenticate);

router.get('/users', cors(), users.all);
router.get('/users/:id', cors(), users.get);
router.post('/users', cors(), users.create);
router.put('/users/:id', cors(), users.update);

router.get('/managers', cors(), users.all);
router.get('/managers/:id', cors(), users.get);
router.post('/managers', cors(), users.create);
router.put('/managers/:id', cors(), users.update);

router.get('/regionals', cors(), users.all);
router.get('/regionals/:id', cors(), users.get);
router.post('/regionals', cors(), users.create);
router.put('/regionals/:id', cors(), users.update);

router.get('/auditors', cors(), users.all);
router.get('/auditors/:id', cors(), users.get);
router.post('/auditors', cors(), users.create);
router.put('/auditors/:id', cors(), users.update);
router.put('/auditors/changepassword/:id', cors(), users.changePassword);

router.get('/regions', cors(), regions.all);
router.get('/regions/:id', cors(), regions.get);
router.post('/regions', cors(), regions.create);
router.put('/regions/:id', cors(), regions.update);

router.get('/conditions', cors(), conditions.all);
router.get('/conditions/displays/:id', cors(), conditions.allDisplay);
router.get('/conditions/:id', cors(), conditions.get);
router.post('/conditions', cors(), conditions.create);
router.put('/conditions/:id', cors(), conditions.update);

router.get('/issues', cors(), issues.all);
router.get('/issues/:id', cors(), issues.get);
router.post('/issues', cors(), issues.create);
router.put('/issues/:id', cors(), issues.update);

router.put('/logout', cors(), users.logout);
router.get('/is_auth/:token', cors(), users.isAuth);
router.get('/is_manager/:token', cors(), users.isManager);
router.get('/is_regional/:token', cors(), users.isRegional);
router.get('/is_auditor/:token', cors(), users.isAuditor);

router.put('/auth', cors(), users.authenticate);
router.put('/auth_auditor', cors(), users.authAuditor);

router.get('/users_stores', cors(), usersStores.all);
router.get('/users_stores/:id', cors(), usersStores.get);
router.get('/users_stores/users/:id', cors(), usersStores.getByUser);
router.get('/users_stores/stores/:id', cors(), usersStores.getByStore);
router.post('/users_stores', cors(), usersStores.create);
router.put('/users_stores/:id', cors(), usersStores.update);

router.get('/store_images/', cors(), storeImages.all);
router.get('/store_images/stores/:id', cors(), storeImages.getByStore);
router.post('/store_images', cors(), storeImages.create);
router.put('/store_images/:id', cors(), storeImages.update);



module.exports = router;
