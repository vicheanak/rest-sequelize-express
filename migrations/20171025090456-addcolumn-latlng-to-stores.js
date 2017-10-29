'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
    queryInterface.addColumn('STOREs', 'lat',{
      type: Sequelize.DECIMAL(10,5),
      allowNull: true
    }),
    queryInterface.addColumn('STOREs', 'lng',{
      type: Sequelize.DECIMAL(10,5),
      allowNull: true
    })
    ]
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('STOREs', 'lat').then(function () {
      return queryInterface.removeColumn('STOREs', 'lng');
    });
  }
};