'use strict';
module.exports = (sequelize, DataTypes) => {
  var DISPLAY_TYPES = sequelize.define('DISPLAY_TYPES', {
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        DISPLAY_TYPES.hasMany(model.DISPLAYS);
      }
    }
  });
  return DISPLAY_TYPES;
};
