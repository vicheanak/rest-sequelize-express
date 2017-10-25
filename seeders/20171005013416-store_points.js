'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('STORE_POINTs', null, {});
  }
};

