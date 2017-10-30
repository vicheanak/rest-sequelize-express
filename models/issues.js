'use strict';
module.exports = (sequelize, DataTypes) => {
  var ISSUES = sequelize.define('ISSUES', {
    application: DataTypes.STRING,
    url: DataTypes.STRING,
    device: DataTypes.STRING,
    topic: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    status: DataTypes.STRING,
    issueType: DataTypes.STRING,
    issuedAt: DataTypes.DATE,
    fixedAt: DataTypes.DATE,
    closedAt: DataTypes.DATE,
    issueType: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ISSUES.belongsTo(models.USERS, {
          foreignKey: 'issuedById',
          as: 'issuedBy'
        });
        ISSUES.belongsTo(models.USERS, {
          foreignKey: 'fixedById',
          as: 'fixedBy'
        });
        ISSUES.belongsTo(models.USERS, {
          foreignKey: 'closedById',
          as: 'closedBy'
        });
      }
    }
  });
  return ISSUES;
};
