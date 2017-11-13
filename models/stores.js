'use strict';

var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var uuid = require('uuid');
var crypto = require('crypto');
var secret = require('../config/secret');

module.exports = (sequelize, DataTypes) => {
  var STORES = sequelize.define('STORES', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    lat: DataTypes.DECIMAL(10,5),
    lng: DataTypes.DECIMAL(10,5),
    status: DataTypes.BOOLEAN,
    uploaded: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        STORES.belongsTo(models.STORE_TYPES, {
          foreignKey: 'storeTypeIdStores'
        });
        STORES.belongsTo(models.REGIONS, {
          foreignKey: 'regionIdStores'
        });
        STORES.hasMany(models.STORE_POINTS, {
          as: 'sp',
          foreignKey: 'storeIdStorePoints'
        });
        STORES.hasMany(models.STORES_REWARDS, {
          as: 'sr',
          foreignKey: 'storeIdStoresRewards'
        });
        STORES.hasMany(models.USERS_STORES, {
          foreignKey: 'storeIdUsersStores'
        });
        STORES.hasMany(models.STORE_IMAGES, {
          foreignKey: 'storeIdStoreImages'
        });
        STORES.belongsToMany(models.USERS, {
          as: 'STORES',
          through: models.USERS_STORES,
          foreignKey: 'storeIdUsersStores'
        });
      }
    },
    instanceMethods: {
    }
  });
  return STORES;
};
