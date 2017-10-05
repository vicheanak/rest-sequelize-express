'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STOREs', 'storeTypeIdStores', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'STORE_TYPEs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STOREs', 'storeTypeIdStores');
  }
};
