'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var USERS_STORES = sequelize.define('USERS_STORES', {
//     position: DataTypes.STRING,
//     status: DataTypes.BOOLEAN
//   });
//   return USERS_STORES;
// };

module.exports = (sequelize, DataTypes) => {
  var USERS_STORES = sequelize.define('USERS_STORES', {}, {
    classMethods: {
      associate: function(models) {
        USERS_STORES.belongsTo(models.USERS, {
          foreignKey: 'userIdUsersStores'
        });
        USERS_STORES.belongsTo(models.STORES, {
          foreignKey: 'storeIdUsersStores'
        });
      }
    }
  });
  return USERS_STORES;
};
