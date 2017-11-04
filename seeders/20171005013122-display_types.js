'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Must Set', status: true, createdAt: now, updatedAt: now},
      {id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Shelf', status: true, createdAt: now, updatedAt: now},
      {id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Hanger', status: true, createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('DISPLAY_TYPEs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DISPLAY_TYPEs', null, {});
  }
};

