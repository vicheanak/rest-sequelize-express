'use strict';
module.exports = (sequelize, DataTypes) => {
  var USERS = sequelize.define('USERS', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        USERS.hasMany(models.STORE_POINTS);
        USERS.hasMany(models.USERS_STORES);
      }
    }
  });
  return USERS;
};
