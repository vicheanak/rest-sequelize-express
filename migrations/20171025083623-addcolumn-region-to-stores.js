'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('STOREs', 'regionIdStores',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'REGIONs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STOREs', 'regionIdStores');
  }
};
