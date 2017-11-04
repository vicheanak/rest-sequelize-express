'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORE_IMAGES = sequelize.define('STORE_IMAGES', {
    imageUrl: DataTypes.STRING,
    uuid: DataTypes.STRING,
    capturedAt: DataTypes.DATE,
    lat: DataTypes.DECIMAL(10,5),
    lng: DataTypes.DECIMAL(10,5),
  }, {
    classMethods: {
      associate: function(models) {
        STORE_IMAGES.belongsTo(models.STORES, {
          foreignKey: 'storeIdStoreImages'
        });
        STORE_IMAGES.hasMany(models.STORE_POINTS, {
          foreignKey: 'storeImageIdStorePoints'
        });
      }
    }
  });
  return STORE_IMAGES;
};
