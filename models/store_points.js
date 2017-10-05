'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORE_POINTS = sequelize.define('STORE_POINTS', {
    points: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        STORE_POINTS.belongsTo(models.STORES, {
          foreignKey: {
            allowNull: false 
          }
        });
        STORE_POINTS.belongsTo(models.USERS, {
          foreignKey: {
            allowNull: false 
          }
        });
        STORE_POINTS.belongsTo(models.DISPLAYS, {
          foreignKey: {
            allowNull: false 
          }
        });
      }
    }
  });
  return STORE_POINTS;
};
