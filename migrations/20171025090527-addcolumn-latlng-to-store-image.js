'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
    queryInterface.addColumn('STORE_IMAGEs', 'lat',{
      type: Sequelize.DECIMAL,
      allowNull: true
    }),
    queryInterface.addColumn('STORE_IMAGEs', 'lng',{
      type: Sequelize.DECIMAL,
      allowNull: true
    })
    ]
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STORE_IMAGEs', 'lat').then(function () {
      return queryInterface.removeColumn('STORE_IMAGEs', 'lng');
    });
  }
};
