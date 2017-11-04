'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a', createdAt: now, updatedAt: now, userIdUsersStores: '3db8bc1a-c118-11e7-abc4-cec278b6b50a', storeIdUsersStores: '1db8bc1a-c118-11e7-abc4-cec278b6b50a'},
      {id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a', createdAt: now, updatedAt: now, userIdUsersStores: '3db8bc1a-c118-11e7-abc4-cec278b6b50a', storeIdUsersStores: '2db8bc1a-c118-11e7-abc4-cec278b6b50a'},
      {id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a', createdAt: now, updatedAt: now, userIdUsersStores: '3db8bc1a-c118-11e7-abc4-cec278b6b50a', storeIdUsersStores: '3db8bc1a-c118-11e7-abc4-cec278b6b50a'},
    ];

    return queryInterface.bulkInsert('USERS_STOREs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('USERS_STOREs', null, {});
  }
};

