'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, position: 'Owner', status: true, createdAt: now, updatedAt: now, userIdUsersStores: 1, storeIdUsersStores: 1},
      {id: 2, position: 'Auditor', status: true, createdAt: now, updatedAt: now, userIdUsersStores: 2, storeIdUsersStores: 1},
      {id: 3, position: 'Owner', status: true, createdAt: now, updatedAt: now, userIdUsersStores: 2, storeIdUsersStores: 2},
    ];

    return queryInterface.bulkInsert('USERS_STOREs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('USERS_STOREs', null, {});
  }
};

