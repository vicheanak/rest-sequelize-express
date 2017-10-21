'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_IMAGEs', 'storeIdStoreImages',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'STORES',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_IMAGEs', 'storeIdStoreImages');
  }
};

