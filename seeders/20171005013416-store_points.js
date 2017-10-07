'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, points: 800, imageUrl: 'localhost:8080/img/gallery/dimg1.jpg', createdAt: now, updatedAt: now, storeIdStorePoints: 1, userIdStorePoints: 1, displayIdStorePoints: 1},
      {id: 2, points: 3000, imageUrl: 'localhost:8080/img/gallery/dimg2.jpg', createdAt: now, updatedAt: now, storeIdStorePoints: 1, userIdStorePoints: 1, displayIdStorePoints: 1},
      {id: 3, points: 2000, imageUrl: 'localhost:8080/img/gallery/dimg3.jpg', createdAt: now, updatedAt: now, storeIdStorePoints: 1, userIdStorePoints: 1, displayIdStorePoints: 1},
    ];

    return queryInterface.bulkInsert('STORE_POINTs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STORE_POINTs', null, {});
  }
};

