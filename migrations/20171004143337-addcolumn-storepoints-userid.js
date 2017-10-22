'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_POINTs', 'userIdStorePoints',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'USERs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_POINTs', 'userIdStorePoints');
  }
};

