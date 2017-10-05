'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('DISPLAYs', 'storeTypeIdDisplays', 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'STORE_TYPEs',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('DISPLAYs', 'storeTypeIdDisplays');
  }
};
