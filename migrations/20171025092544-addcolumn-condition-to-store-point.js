'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_POINTs', 'conditionIdStorePoints',
      {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'CONDITIONs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_POINTs', 'conditionIdStorePoints');
  }
};
