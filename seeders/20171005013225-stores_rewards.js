'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, status: 1, imageUrl: 'localhost:8080/img/gallery/deliver_slip1.jpg', createdAt: now, updatedAt: now, storeIdStoresRewards: 1, rewardIdStoresRewards: 1},
      {id: 2, status: 1, imageUrl: 'localhost:8080/img/gallery/deliver_slip1.jpg', createdAt: now, updatedAt: now, storeIdStoresRewards: 1, rewardIdStoresRewards: 2},
      {id: 3, status: 2, imageUrl: 'localhost:8080/img/gallery/deliver_slip1.jpg', createdAt: now, updatedAt: now, storeIdStoresRewards: 1, rewardIdStoresRewards: 3},
      {id: 4, status: 1, imageUrl: 'localhost:8080/img/gallery/deliver_slip1.jpg', createdAt: now, updatedAt: now, storeIdStoresRewards: 2, rewardIdStoresRewards: 1},
      {id: 5, status: 1, imageUrl: 'localhost:8080/img/gallery/deliver_slip1.jpg', createdAt: now, updatedAt: now, storeIdStoresRewards: 2, rewardIdStoresRewards: 2},
      {id: 6, status: 2, imageUrl: 'localhost:8080/img/gallery/deliver_slip1.jpg', createdAt: now, updatedAt: now, storeIdStoresRewards: 2, rewardIdStoresRewards: 3},
    ];

    return queryInterface.bulkInsert('STORES_REWARDs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STORES_REWARDs', null, {});
  }
};

