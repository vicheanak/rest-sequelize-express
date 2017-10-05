'use strict';
module.exports = (sequelize, DataTypes) => {
  var REWARDS = sequelize.define('REWARDS', {
    name: DataTypes.STRING,
    points: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        REWARDS.hasMany(models.STORES_REWARDS);
      }
    }
  });
  return REWARDS;
};
