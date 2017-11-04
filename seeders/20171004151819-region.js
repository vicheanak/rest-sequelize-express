'use strict';
var moment = require('moment');
var uuid = require('uuid/v4');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Region 1', createdAt: now, updatedAt: now},
      {id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Region 2', createdAt: now, updatedAt: now},
      {id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Region 3', createdAt: now, updatedAt: now},
      {id: '4db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Region 4', createdAt: now, updatedAt: now},
      {id: '5db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Region 5', createdAt: now, updatedAt: now},
      {id: '6db8bc1a-c118-11e7-abc4-cec278b6b50a', name: 'Region 6', createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('REGIONs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('REGIONs', null, {});
  }
};

