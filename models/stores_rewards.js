'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORES_REWARDS = sequelize.define('STORES_REWARDS', {
    status: DataTypes.INTEGER
    imageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        STORES_REWARDS.belongsTo(models.STORES, {
          foreignKey: {
            allowNull: false 
          }
        });
        STORES_REWARDS.belongsTo(models.REWARDS, {
          foreignKey: {
            allowNull: false 
          }
        });
      }
    }
  });
  return STORES_REWARDS;
};
