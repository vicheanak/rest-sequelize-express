'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORES_REWARDs', 'rewardIdStoresRewards',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'REWARDs',
          key: 'id'
        }
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORES_REWARDs', 'rewardIdStoresRewards');
  }
};
