'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {
        id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'TV',
        points: 30000,
        imageUrl: 'http://192.168.8.104:3000/public/uploads/tv.jpg',
        status: true,
        createdAt: now,
        updatedAt: now},
      {
        id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'FRIDGE',
        points: 20000,
        imageUrl: 'http://192.168.8.104:3000/public/uploads/fridge.jpg',
        status: true,
        createdAt: now,
        updatedAt: now
      },
      {
        id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'MICROWAVE',
        points: 10000,
        imageUrl: 'http://192.168.8.104:3000/public/uploads/microwave.jpg',
        status: true,
        createdAt: now,
        updatedAt: now
      },
    ];

    return queryInterface.bulkInsert('REWARDs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('REWARDs', null, {});
  }
};

