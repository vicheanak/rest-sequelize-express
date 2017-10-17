'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORES = sequelize.define('STORES', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        STORES.belongsTo(models.STORE_TYPES, {
          foreignKey: 'storeTypeIdStores'
        });
        STORES.hasMany(models.STORE_POINTS, {
          foreignKey: 'storeIdStorePoints'
        });
        STORES.hasMany(models.STORES_REWARDS, {
          foreignKey: 'storeIdStoresRewards'
        });
        STORES.hasMany(models.USERS_STORES, {
          foreignKey: 'storeIdUsersStores'
        });
      }
    }
  });
  return STORES;
};
