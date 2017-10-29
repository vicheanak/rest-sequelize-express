'use strict';
module.exports = (sequelize, DataTypes) => {
  var ISSUES = sequelize.define('ISSUES', {
    application: DataTypes.STRING,
    url: DataTypes.STRING,
    device: DataTypes.STRING,
    topic: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    screenshot: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ISSUES.belongsTo(models.USERS, {
          foreignKey: 'userIdIssues'
        });
      }
    }
  });
  return ISSUES;
};
