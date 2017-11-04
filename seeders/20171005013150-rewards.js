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
        imageUrl: 'localhost:3000/public/uploads/f1a1feb9-7eb7-45b1-bd5b-4582438559b0.png',
        status: true,
        createdAt: now,
        updatedAt: now},
      {
        id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'FRIDGE',
        points: 20000,
        imageUrl: 'localhost:3000/public/uploads/de1dbb5a-32fb-4473-a6a9-3a21e14d78b0.png',
        status: true,
        createdAt: now,
        updatedAt: now
      },
      {
        id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'MICROWAVE',
        points: 10000,
        imageUrl: 'localhost:3000/public/uploads/a0cca549-4d60-4ded-8ae1-5cba5513fdbd.png',
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

