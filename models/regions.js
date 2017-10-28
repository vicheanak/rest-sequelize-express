'use strict';
module.exports = (sequelize, DataTypes) => {
  var REGIONS = sequelize.define('REGIONS', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        REGIONS.hasMany(models.USERS, {
          foreignKey: 'regionIdUsers'
        });
         REGIONS.hasMany(models.STORES, {
          foreignKey: 'regionIdStores'
        });
      }
    }
  });
  return REGIONS;
};
