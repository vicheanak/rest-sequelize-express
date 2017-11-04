'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {
        id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'ឈុតដាក់ផលិតផល ៣ ព្យួរ',
        points: 600,
        imageUrl: 'localhost:8080/img/gallery/d1.jpg',
        status: true,
        createdAt: now,
        updatedAt: now,
        displayTypeIdDisplays: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        storeTypeIdDisplays: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        sku: '001',
      },
      {
        id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'ឈុតដាក់លើធ្នើរ',
        points: 3600,
        imageUrl: 'localhost:8080/img/gallery/d2.jpg',
        status: true,
        createdAt: now,
        updatedAt: now,
        displayTypeIdDisplays: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        storeTypeIdDisplays: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        sku: '002'
      },
      {
        id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'ឈុតដាក់ផលិតផល ៤ ព្យួរ',
        points:800,
        imageUrl: 'localhost:8080/img/gallery/d3.jpg',
        status: true,
        createdAt: now,
        updatedAt: now,
        displayTypeIdDisplays: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        storeTypeIdDisplays: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        sku: '003'
      },
      {
        id: '4db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'ឈុតដាក់ផលិតផល ៣ ព្យួរ',
        points: 600,
        imageUrl: 'localhost:8080/img/gallery/d1.jpg',
        status: true,
        createdAt: now,
        updatedAt: now,
        displayTypeIdDisplays: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        storeTypeIdDisplays: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
        sku: '004',
      },
      {
        id: '5db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'ឈុតដាក់លើធ្នើរ',
        points: 3600,
        imageUrl: 'localhost:8080/img/gallery/d2.jpg',
        status: true,
        createdAt: now,
        updatedAt: now,
        displayTypeIdDisplays: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        storeTypeIdDisplays: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
        sku: '005',
      },
      {
        id: '6db8bc1a-c118-11e7-abc4-cec278b6b50a',
        name: 'ឈុតដាក់ផលិតផល ៤ ព្យួរ',
        points:800,
        imageUrl: 'localhost:8080/img/gallery/d3.jpg',
        status: true,
        createdAt: now,
        updatedAt: now,
        displayTypeIdDisplays: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        storeTypeIdDisplays: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
        sku: '006'
      },
    ];

    return queryInterface.bulkInsert('DISPLAYs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DISPLAYs', null, {});
  }
};

