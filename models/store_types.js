'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORE_TYPES = sequelize.define('STORE_TYPES', {
    name: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        STORE_TYPES.hasMany(models.STORES, {foreignKey: 'storeTypeIdStores'});
        STORE_TYPES.hasMany(models.DISPLAYS, {foreignKey: 'storeTypeIdDisplays'});
      }
    }
  });
  return STORE_TYPES;
};
