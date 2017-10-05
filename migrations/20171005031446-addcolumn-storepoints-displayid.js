'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_POINTs', 'displayIdStorePoints',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'DISPLAYS',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_POINTs', 'displayIdStorePoints');
  }
};

