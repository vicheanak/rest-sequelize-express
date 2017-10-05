'use strict';
module.exports = (sequelize, DataTypes) => {
  var REWARDS = sequelize.define('REWARDS', {
    name: DataTypes.STRING,
    point: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    status: DataTypes.BOOEAN
  }, {
    classMethods: {
      associate: function(models) {
        REWARDS.hasMany(models.STORES_REWARDS);
      }
    }
  });
  return REWARDS;
};
