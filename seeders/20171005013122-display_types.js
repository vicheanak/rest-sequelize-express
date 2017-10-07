'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'Must Set', status: true, createdAt: now, updatedAt: now},
      {id: 2, name: 'Shelf', status: true, createdAt: now, updatedAt: now},
      {id: 3, name: 'Hanger', status: true, createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('DISPLAY_TYPEs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DISPLAY_TYPEs', null, {});
  }
};

