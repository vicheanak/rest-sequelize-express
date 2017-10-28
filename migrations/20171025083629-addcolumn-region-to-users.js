'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('USERs', 'regionIdUsers',
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
    return queryInterface.removeColumn('USERs', 'regionIdUsers');
  }
};
