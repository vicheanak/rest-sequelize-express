'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('STORES_REWARDs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      spent_points: {
        type: Sequelize.INTEGER
      },
      imageUrl:{
        type: Sequelize.STRING
      },
      claimedAt: {
        type: Sequelize.DATE
      },
      deliveriedAt: {
        type: Sequelize.DATE
      },
      uploaded: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('STORES_REWARDs');
  }
};
