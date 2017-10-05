'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORES = sequelize.define('STORES', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    note: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        STORES.belongsTo(models.STORE_TYPES, {
          foreignKey: {
            allowNull: false 
          }
        });
        STORES.hasMany(models.STORE_POINTS);
        STORES.hasMany(models.STORES_REWARDS);
        STORES.hasMany(models.USERS_STORES);
      }
    }
  });
  return STORES;
};
