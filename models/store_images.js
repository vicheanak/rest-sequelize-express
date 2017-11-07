'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORE_IMAGES = sequelize.define('STORE_IMAGES', {
    imageUrl: DataTypes.STRING,
    capturedAt: DataTypes.DATE,
    lat: DataTypes.DECIMAL(10,5),
    lng: DataTypes.DECIMAL(10,5),
    uploaded: DataTypes.BOOLEAN
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
