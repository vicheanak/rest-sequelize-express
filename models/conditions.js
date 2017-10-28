'use strict';
module.exports = (sequelize, DataTypes) => {
  var CONDITIONS = sequelize.define('CONDITIONS', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        CONDITIONS.hasMany(models.STORE_POINTS, {
          foreignKey: 'conditionIdStorePoints'
        });
        CONDITIONS.belongsTo(models.DISPLAYS, {
          foreignKey: 'displayIdConditions'
        });
      }
    }
  });
  return CONDITIONS;
};
