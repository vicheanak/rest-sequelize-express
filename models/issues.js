'use strict';
module.exports = (sequelize, DataTypes) => {
  var ISSUES = sequelize.define('ISSUES', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ISSUES;
};
