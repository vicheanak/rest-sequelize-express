'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STORE_POINTs', 'storeIdStorePoints', 
      {
        type: Sequelize.INTEGER,
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
