'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {
        id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'Missing Hanger 1',
        displayIdConditions: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        createdAt: now,
        updatedAt: now
      },
      {
        id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'Missing Hanger 2',
        displayIdConditions: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        createdAt: now,
        updatedAt: now
      },
      {
        id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'Missing Must Set 1',
        displayIdConditions: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        createdAt: now,
        updatedAt: now
      },
      {
        id: '4db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'Missing Must Set 2',
        displayIdConditions: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        createdAt: now,
        updatedAt: now
      },
      {
        id: '5db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'Missing Display 1',
        displayIdConditions: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        createdAt: now,
        updatedAt: now
      },
      {
        id: '6db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'Missing Display 2',
        displayIdConditions: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        createdAt: now,
        updatedAt: now
      },
    ];

    return queryInterface.bulkInsert('CONDITIONs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('CONDITIONs', null, {});
  }
};

