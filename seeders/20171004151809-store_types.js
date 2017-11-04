'use strict';
var moment = require('moment');
var uuid = require('uuid/v4');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {
        id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'FOOD GOLD',
        status: true,
        createdAt: now,
        updatedAt: now
      },
      {
        id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'HPC GOLD',
        status: true,
        createdAt: now,
        updatedAt: now
      },
      {
        id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'SKIN CARE GOLD',
        status: true,
        createdAt: now,
        updatedAt: now
      },
    ];

    return queryInterface.bulkInsert('STORE_TYPEs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STORE_TYPEs', null, {});
  }
};

