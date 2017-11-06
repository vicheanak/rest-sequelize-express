'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {
        id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        status: 1,
        imageUrl: 'http://192.168.8.104/public/uploads/deliver_slip1.jpg',
        deliveriedAt: now,
        points: 500,
        uploaded: true,
        createdAt: now,
        updatedAt: now,
        storeIdStoresRewards: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        rewardIdStoresRewards: '1db8bc1a-c118-11e7-abc4-cec278b6b50a'
      },
      {
        id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        status: 1,
        imageUrl: 'http://192.168.8.104/public/uploads/deliver_slip1.jpg',
        deliveriedAt: now,
        points: 500,
        uploaded: true,
        createdAt: now,
        updatedAt: now,
        storeIdStoresRewards: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        rewardIdStoresRewards: '2db8bc1a-c118-11e7-abc4-cec278b6b50a'
      },
      {
        id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        status: 2,
        imageUrl: 'http://192.168.8.104/public/uploads/deliver_slip1.jpg',
        deliveriedAt: null,
        points: 500,
        uploaded: true,
        createdAt: now,
        updatedAt: now,
        storeIdStoresRewards: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        rewardIdStoresRewards: '3db8bc1a-c118-11e7-abc4-cec278b6b50a'
      },
      {
        id: '4db8bc1a-c118-11e7-abc4-cec278b6b50a',
        status: 1,
        imageUrl: 'http://192.168.8.104/public/uploads/deliver_slip1.jpg',
        deliveriedAt: null,
        points: 500,
        uploaded: true,
        createdAt: now,
        updatedAt: now,
        storeIdStoresRewards: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        rewardIdStoresRewards: '1db8bc1a-c118-11e7-abc4-cec278b6b50a'
      },
      {
        id: '5db8bc1a-c118-11e7-abc4-cec278b6b50a',
        status: 1,
        imageUrl: 'http://192.168.8.104/public/uploads/deliver_slip1.jpg',
        deliveriedAt: null,
        points: 500,
        uploaded: true,
        createdAt: now,
        updatedAt: now,
        storeIdStoresRewards: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        rewardIdStoresRewards: '2db8bc1a-c118-11e7-abc4-cec278b6b50a'
      },
      {
        id: '6db8bc1a-c118-11e7-abc4-cec278b6b50a',
        status: 2,
        imageUrl: 'http://192.168.8.104/public/uploads/deliver_slip1.jpg',
        deliveriedAt: null,
        points: 500,
        uploaded: true,
        createdAt: now,
        updatedAt: now,
        storeIdStoresRewards: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        rewardIdStoresRewards: '3db8bc1a-c118-11e7-abc4-cec278b6b50a'
      },
    ];

    return queryInterface.bulkInsert('STORES_REWARDs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STORES_REWARDs', null, {});
  }
};

