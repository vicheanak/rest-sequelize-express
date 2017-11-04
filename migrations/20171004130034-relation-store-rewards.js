'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORES_REWARDs', 'storeIdStoresRewards',
        {
          type: Sequelize.STRING,
          allowNull: true,
          references: {
            model: 'STOREs',
            key: 'id'
          }
        }
      )

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORES_REWARDs', 'storeIdStoresRewards');
  }
};
