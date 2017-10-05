'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'Store 1', location: 'Phnom Penh', phone: '012111111', note:'', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 1},
      {id: 2, name: 'Store 2', location: 'Phnom Penh', phone: '012222222', note:'', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 2},
      {id: 3, name: 'Store 3', location: 'Phnom Penh', phone: '012333333', note:'', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 3},
      {id: 4, name: 'Store 4', location: 'Phnom Penh', phone: '012444444', note:'', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 1},
      {id: 5, name: 'Store 5', location: 'Phnom Penh', phone: '012555555', note:'', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 2},
      {id: 6, name: 'Store 6', location: 'Phnom Penh', phone: '012666666', note:'', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 3},
    ];

    return queryInterface.bulkInsert('STOREs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STOREs', null, {});
  }
};

