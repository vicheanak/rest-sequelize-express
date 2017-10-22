'use strict';
module.exports = (sequelize, DataTypes) => {
  var STORE_IMAGES = sequelize.define('STORE_IMAGES', {
    imageUrl: DataTypes.STRING,
    capturedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        STORE_IMAGES.belongsTo(models.STORES, {
          foreignKey: 'storeIdStoreImages'
        });
      }
    }
  });
  return STORE_IMAGES;
};
