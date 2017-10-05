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
        STORES.hasMany(model.STORE_POINTS);
        STORES.hasMany(model.STORES_REWARDS);
        STORES.hasMany(model.USERS_STORES);
      }
    }
  });
  return STORES;
};
