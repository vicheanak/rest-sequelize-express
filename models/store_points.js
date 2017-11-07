'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORE_POINTS = sequelize.define('STORE_POINTS', {
    points: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    uuid: DataTypes.STRING,
    uploaded: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        STORE_POINTS.belongsTo(models.STORES, {
          foreignKey: 'storeIdStorePoints'
        });
        STORE_POINTS.belongsTo(models.USERS, {
          foreignKey: 'userIdStorePoints'
        });
        STORE_POINTS.belongsTo(models.DISPLAYS, {
          foreignKey: 'displayIdStorePoints'
        });
        STORE_POINTS.belongsTo(models.CONDITIONS, {
          foreignKey: 'conditionIdStorePoints'
        });
        STORE_POINTS.belongsTo(models.STORE_IMAGES, {
          foreignKey: 'storeImageIdStorePoints'
        });
      }
    }
  });
  return STORE_POINTS;
};
