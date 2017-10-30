'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
    queryInterface.addColumn('ISSUEs', 'issuedById', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'USERs',
        key: 'id'
      }
    }),
    queryInterface.addColumn('ISSUEs', 'fixedById', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'USERs',
        key: 'id'
      }
    }),
    queryInterface.addColumn('ISSUEs', 'closedById', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'USERs',
        key: 'id'
      }
    })
    ]
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('ISSUEs', 'issuedById').then(function(){
      return queryInterface.removeColumn('ISSUEs', 'fixedById').then(function(){
        return queryInterface.removeColumn('ISSUEs', 'closedById');
      });
    });
  }
};

