'use strict';
var moment = require('moment');
var uuid = require('uuid/v4');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
    {
      id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
      name: 'Store 1',
      address: 'Phnom Penh',
      phone: '012111111',
      lat: 11.557731,
      lng: 104.908054,
      status: true,
      uploaded: true,
      createdAt: now,
      updatedAt: now,
      storeTypeIdStores: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
      regionIdStores: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
    },
    {
      id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
      name: 'Store 2',
      address: 'Phnom Penh',
      phone: '012222222',
      lat: 11.557731,
      lng: 104.908054,
      status: true,
      uploaded: true,
      createdAt: now,
      updatedAt: now,
      storeTypeIdStores: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
      regionIdStores: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
    },
    {
      id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
      name: 'Store 3',
      address: 'Phnom Penh',
      phone: '012333333',
      lat: 11.557731,
      lng: 104.908054,
      status: true,
      uploaded: true,
      createdAt: now,
      updatedAt: now,
      storeTypeIdStores: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
      regionIdStores: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
    },

    ];

    return queryInterface.bulkInsert('STOREs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STOREs', null, {});
  }
};

