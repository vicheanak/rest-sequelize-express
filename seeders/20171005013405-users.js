'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
    {
      id: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
      fullname: 'Admin 1',
      username: 'admin',
      password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2',
      phone: '012222222',
      token: '111',
      role:1,
      status: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
      fullname: 'Regional 2',
      username: 'regional2',
      password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2',
      phone: '012222222',
      token: '111',
      role:2,
      status: true,
      createdAt: now,
      updatedAt: now,
      regionIdUsers: '1db8bc1a-c118-11e7-abc4-cec278b6b50a',
    },
    {
      id: '3db8bc1a-c118-11e7-abc4-cec278b6b50a',
      fullname: 'Auditor 3',
      username: 'auditor',
      password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2',
      phone: '012222222',
      token: '111',
      role:3,
      status: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: '4db8bc1a-c118-11e7-abc4-cec278b6b50a',
      fullname: 'Regional 3',
      username: 'regional3',
      password: '$2a$10$7cZltRpyWE5WH6LSHVMlse2AW2/P.jywT0n87YoliM3uB4H4FrRs2',
      phone: '012222222',
      token: '111',
      role:2,
      status: true,
      createdAt: now,
      updatedAt: now,
      regionIdUsers: '2db8bc1a-c118-11e7-abc4-cec278b6b50a',
    },
    ];

    return queryInterface.bulkInsert('USERs', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('USERs', null, {});
  }
};

