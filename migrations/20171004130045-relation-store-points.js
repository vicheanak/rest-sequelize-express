'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_POINTs', 'storeIdStorePoints',
      {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'STOREs',
          key: 'id'
        }
      })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_POINTs', 'storeIdStorePoints');
  }
};
