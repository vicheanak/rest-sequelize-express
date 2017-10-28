'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('DISPLAYs', 'sku',
    {
      type: Sequelize.STRING,
      allowNull: true,
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('DISPLAYs', 'sku');
  }
};
