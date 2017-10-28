'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'Missing Hanger 1', displayIdConditions: 1, createdAt: now, updatedAt: now},
      {id: 2, name: 'Missing Hanger 2', displayIdConditions: 1, createdAt: now, updatedAt: now},
      {id: 3, name: 'Missing Must Set 1', displayIdConditions: 2, createdAt: now, updatedAt: now},
      {id: 4, name: 'Missing Must Set 2', displayIdConditions: 2, createdAt: now, updatedAt: now},
      {id: 5, name: 'Missing Display 1', displayIdConditions: 3, createdAt: now, updatedAt: now},
      {id: 6, name: 'Missing Display 2', displayIdConditions: 3, createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('CONDITIONs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('CONDITIONs', null, {});
  }
};

