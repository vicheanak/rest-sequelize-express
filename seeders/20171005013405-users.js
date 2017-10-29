'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
      {id: 1, fullname: 'Admin 1', username: 'admin', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:1, status: true, createdAt: now, updatedAt: now},
      {id: 2, fullname: 'Regional 2', username: 'regional2', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:2, status: true, createdAt: now, updatedAt: now, regionIdUsers: 1},
      {id: 3, fullname: 'Auditor 3', username: 'auditor', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:3, status: true, createdAt: now, updatedAt: now},
      {id: 4, fullname: 'Regional 3', username: 'regional3', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:2, status: true, createdAt: now, updatedAt: now, regionIdUsers: 1},
      {id: 5, fullname: 'Regional 4', username: 'regional4', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:2, status: true, createdAt: now, updatedAt: now, regionIdUsers: 2},
      {id: 6, fullname: 'Regional 5', username: 'regional5', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:2, status: true, createdAt: now, updatedAt: now, regionIdUsers: 3},
      {id: 7, fullname: 'Regional 6', username: 'regional6', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:2, status: true, createdAt: now, updatedAt: now, regionIdUsers: 4},
      {id: 8, fullname: 'Regional 7', username: 'regional7', password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2', phone: '012222222', token: '111', role:2, status: true, createdAt: now, updatedAt: now, regionIdUsers: 5},
    ];

    return queryInterface.bulkInsert('USERs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('USERs', null, {});
  }
};

