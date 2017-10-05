'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORE_TYPES = sequelize.define('STORE_TYPES', {
    name: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        STORE_TYPES.hasMany(models.STORES);
        STORE_TYPES.hasMany(models.DISPLAYS);
      }
    }
  });
  return STORE_TYPES;
};
