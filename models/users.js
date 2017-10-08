'use strict';
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var uuid = require('uuid');
var crypto = require('crypto');
var secret = require('../config/secret');


module.exports = (sequelize, DataTypes) => {
  var USERS = sequelize.define('USERS', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    token: DataTypes.STRING,
    role: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        USERS.hasMany(models.STORE_POINTS, {
          foreignKey: 'userIdStorePoints'
        });
        USERS.hasMany(models.USERS_STORES, {
          foreignKey: 'userIdUsersStores'
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
  return USERS;
};
