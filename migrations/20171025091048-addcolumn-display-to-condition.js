'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('CONDITIONs', 'displayIdConditions',
      {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'DISPLAYs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('CONDITIONs', 'displayIdConditions');
  }
};
