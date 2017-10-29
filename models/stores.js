'use strict';

var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var uuid = require('uuid');
var crypto = require('crypto');
var secret = require('../config/secret');

module.exports = (sequelize, DataTypes) => {
  var STORES = sequelize.define('STORES', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    lat: DataTypes.DECIMAL(10,5),
    lng: DataTypes.DECIMAL(10,5),
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
        STORES.belongsTo(models.REGIONS, {
          foreignKey: 'regionIdStores'
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
      toJSON: function () {
        var values = this.get();
        delete values.password;
        delete values.salt;
        return values;
      },
      makeSalt: function() {
        return bcrypt.randomBytes(16).toString('base64');
      },
      authenticate: function(plainText){
        return this.encryptPassword(plainText, this.salt) === this.password;
      },
      encryptPassword: function(password, salt) {
        if (!password || !salt) {
          return '';
        }
        salt = new Buffer(salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
      },
      verifyPassword: function(pwd, cb){
        bcrypt.compare(pwd, this.password, function (err, isMatch) {
          return cb(err, isMatch);
        });
      },
      verifyToken: function(token, cb){
        if (token == this.token){
          return cb(true);
        }
        return cb(false);
      }
    }
  });
  return STORES;
};
