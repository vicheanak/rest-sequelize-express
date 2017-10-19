'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, createdAt: now, updatedAt: now, userIdUsersStores: 3, storeIdUsersStores: 1},
      {id: 2, createdAt: now, updatedAt: now, userIdUsersStores: 3, storeIdUsersStores: 2},
      {id: 3, createdAt: now, updatedAt: now, userIdUsersStores: 3, storeIdUsersStores: 3},
    ];

    return queryInterface.bulkInsert('USERS_STOREs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('USERS_STOREs', null, {});
  }
};

