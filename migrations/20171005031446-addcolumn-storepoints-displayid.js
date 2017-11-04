'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_POINTs', 'displayIdStorePoints',
      {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'DISPLAYs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_POINTs', 'displayIdStorePoints');
  }
};

