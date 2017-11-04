'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('DISPLAYs', 'displayTypeIdDisplays',
      {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'DISPLAY_TYPEs',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('DISPLAYs', 'displayTypeIdDisplays');
  }
};
