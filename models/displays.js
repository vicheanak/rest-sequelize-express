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
          foreignKey: {
            allowNull: false
          }
        });
        DISPLAYS.belongsTo(models.STORE_TYPES, {
          foreignKey: {
            allowNull: false
          }
        });
        DISPLAYS.hasMany(models.STORE_POINTS);
      }
    }
  });
  return DISPLAYS;
};
