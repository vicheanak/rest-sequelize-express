'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORES_REWARDS = sequelize.define('STORES_REWARDS', {
    status: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        STORES_REWARDS.belongsTo(models.STORES, {
          foreignKey: 'storeIdStoresRewards'
        });
        STORES_REWARDS.belongsTo(models.REWARDS, {
          foreignKey: 'rewardIdStoresRewards'
        });
      }
    }
  });
  return STORES_REWARDS;
};
