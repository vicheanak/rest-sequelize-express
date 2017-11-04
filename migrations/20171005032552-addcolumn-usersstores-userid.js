'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('USERS_STOREs', 'userIdUsersStores',
      {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'USERs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('USERS_STOREs', 'userIdUsersStores');
  }
};

