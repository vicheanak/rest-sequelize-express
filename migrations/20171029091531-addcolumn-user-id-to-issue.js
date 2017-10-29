'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('ISSUEs', 'userIdIssues',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'USERs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('ISSUEs', 'userIdIssues');
  }
};

