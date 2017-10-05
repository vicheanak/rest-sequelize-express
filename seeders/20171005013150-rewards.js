'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'TV', point: 30000, imageUrl: 'localhost:8080/img/gallery/tv.jpg', status: true, createdAt: now, updatedAt: now},
      {id: 2, name: 'FRIDGE', point: 20000, imageUrl: 'localhost:8080/img/gallery/fridge.jpg', status: true, createdAt: now, updatedAt: now},
      {id: 3, name: 'MICROWAVE', point: 10000, imageUrl: 'localhost:8080/img/gallery/microwave.jpg', status: true, createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('REWARDs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('REWARDs', null, {});
  }
};

