'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORES_REWARDs', 'points',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORES_REWARDs', 'points');
  }
};

