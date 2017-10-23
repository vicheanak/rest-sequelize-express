'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_POINTs', 'storeImageIdStorePoints',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'STORE_IMAGEs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_POINTs', 'storeImageIdStorePoints');
  }
};

