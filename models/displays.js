'use strict';
module.exports = (sequelize, DataTypes) => {
  var DISPLAYS = sequelize.define('DISPLAYS', {
    name: DataTypes.STRING,
    points: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        DISPLAYS.belongsTo(models.DISPLAY_TYPES, {
          foreignKey: 'displayTypeIdDisplays'
        });
        DISPLAYS.belongsTo(models.STORE_TYPES, {
          foreignKey: 'storeTypeIdDisplays'
        });
        DISPLAYS.hasMany(models.STORE_POINTS, {
          foreignKey: 'displayIdStorePoints'
        });
      }
    }
  });
  return DISPLAYS;
};
