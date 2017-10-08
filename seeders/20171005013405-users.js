'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, fullname: 'Fullname 1', username: 'username1', password: '123456', phone: '012222222', token: '111', role:1, status: true, createdAt: now, updatedAt: now},
      {id: 2, fullname: 'Fullname 2', username: 'username2', password: '123456', phone: '012222222', token: '111', role:1, status: true, createdAt: now, updatedAt: now},
      {id: 3, fullname: 'Fullname 3', username: 'username3', password: '123456', phone: '012222222', token: '111', role:1, status: true, createdAt: now, updatedAt: now},
    ];

    return queryInterface.bulkInsert('USERs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('USERs', null, {});
  }
};

