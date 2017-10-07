'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('USERS_STOREs', 'userIdUsersStores',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'USERS',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('USERS_STOREs', 'userIdUsersStores');
  }
};

