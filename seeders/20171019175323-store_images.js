'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, imageUrl: 'localhost:3000/public/uploads/f1a1feb9-7eb7-45b1-bd5b-4582438559b0.png', capturedAt: now, storeIdStoreImages: 1, createdAt: now, updatedAt: now},
      {id: 2, imageUrl: 'localhost:3000/public/uploads/de1dbb5a-32fb-4473-a6a9-3a21e14d78b0.png', capturedAt: now, storeIdStoreImages: 1, createdAt: now, updatedAt: now},
      {id: 3, imageUrl: 'localhost:3000/public/uploads/a0cca549-4d60-4ded-8ae1-5cba5513fdbd.png', capturedAt: now, storeIdStoreImages: 1, createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('STORE_IMAGEs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STORE_IMAGEs', null, {});
  }
};

