'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'Region 1', createdAt: now, updatedAt: now},
      {id: 2, name: 'Region 2', createdAt: now, updatedAt: now},
      {id: 3, name: 'Region 3', createdAt: now, updatedAt: now},
      {id: 4, name: 'Region 4', createdAt: now, updatedAt: now},
      {id: 5, name: 'Region 5', createdAt: now, updatedAt: now},
      {id: 6, name: 'Region 6', createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('REGIONs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('REGIONs', null, {});
  }
};

