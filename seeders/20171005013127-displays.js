'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, name: 'ឈុតដាក់ផលិតផល ៣ ព្យួរ', points: 600, imageUrl: 'localhost:8080/img/gallery/d1.jpg', status: true,  createdAt: now, updatedAt: now, displayTypeIdDisplays: 1, storeTypeIdDisplays: 1},
      {id: 2, name: 'ឈុតដាក់លើធ្នើរ', points: 3600, imageUrl: 'localhost:8080/img/gallery/d2.jpg', status: true,  createdAt: now, updatedAt: now, displayTypeIdDisplays: 2, storeTypeIdDisplays: 2},
      {id: 3, name: 'ឈុតដាក់ផលិតផល ៤ ព្យួរ', points:800, imageUrl: 'localhost:8080/img/gallery/d3.jpg', status: true,  createdAt: now, updatedAt: now, displayTypeIdDisplays: 3, storeTypeIdDisplays: 3},
      {id: 4, name: 'ឈុតដាក់ផលិតផល ៣ ព្យួរ', points: 600, imageUrl: 'localhost:8080/img/gallery/d1.jpg', status: true,  createdAt: now, updatedAt: now, displayTypeIdDisplays: 1, storeTypeIdDisplays: 1},
      {id: 5, name: 'ឈុតដាក់លើធ្នើរ', points: 3600, imageUrl: 'localhost:8080/img/gallery/d2.jpg', status: true,  createdAt: now, updatedAt: now, displayTypeIdDisplays: 2, storeTypeIdDisplays: 2},
      {id: 6, name: 'ឈុតដាក់ផលិតផល ៤ ព្យួរ', points:800, imageUrl: 'localhost:8080/img/gallery/d3.jpg', status: true,  createdAt: now, updatedAt: now, displayTypeIdDisplays: 3, storeTypeIdDisplays: 3},

    ];

    return queryInterface.bulkInsert('DISPLAYs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DISPLAYs', null, {});
  }
};

