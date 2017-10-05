'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'FOOD GOLD', status: true, createdAt: now, updatedAt: now},
      {id: 2, name: 'HPC GOLD', status: true, createdAt: now, updatedAt: now},
      {id: 3, name: 'SKIN CARE GOLD', status: true, createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('STORE_TYPEs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STORE_TYPEs', null, {});
  }
};

