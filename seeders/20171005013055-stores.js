'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'Store 1', location: 'Phnom Penh', phone: '012111111', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 1, username: 'store1', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', token: ''},
      {id: 2, name: 'Store 2', location: 'Phnom Penh', phone: '012222222', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 2, username: 'store2', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', token: ''},
      {id: 3, name: 'Store 3', location: 'Phnom Penh', phone: '012333333', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 3, username: 'store3012333333', password: '123456', token: ''},
      {id: 4, name: 'Store 4', location: 'Phnom Penh', phone: '012444444', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 1, username: 'store4012444444', password: '123456', token: ''},
      {id: 5, name: 'Store 5', location: 'Phnom Penh', phone: '012555555', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 2, username: 'store5012555555', password: '123456', token: ''},
      {id: 6, name: 'Store 6', location: 'Phnom Penh', phone: '012666666', status: true,  createdAt: now, updatedAt: now, storeTypeIdStores: 3, username: 'store6012666666', password: '123456', token: ''},
    ];

    return queryInterface.bulkInsert('STOREs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STOREs', null, {});
  }
};

