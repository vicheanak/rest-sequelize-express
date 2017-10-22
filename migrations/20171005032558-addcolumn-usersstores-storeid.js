'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('USERS_STOREs', 'storeIdUsersStores',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'STOREs',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('USERS_STOREs', 'storeIdUsersStores');
  }
};

