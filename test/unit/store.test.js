'use strict';

var expect = require('expect.js');

describe('STORES', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.STORE_TYPES = require('../../models').STORE_TYPES;
    this.STORES = require('../../models').STORES;
  });

  describe('CREATE', function () {
    it('CREATE STORE', function () {
      return this.STORE_TYPES.create({ name: 'store_type_1', status: true }).bind(this).then(function (storeType) {
        return this.STORES.create({ name: 'store_1', location: 'phnom penh', phone: '123', note: 'mynote', storeTypeIdStores: storeType.id }).then(function (store) {
          expect(store.name).to.equal('store_1');
          expect(store.location).to.equal('phnom penh');
          expect(store.phone).to.equal('123');
          expect(store.note).to.equal('mynote');
        });
      });
    });
  });

  describe('UPDATE', function () {
    it('UPDATE STORE', function () {
      var self = this;
      return this.STORES.create({name: 'store_1', location: 'battambang', phone: '456', note: 'newnote'}).then(function(store){
        return self.STORES.update({ name: 'store_3', location: 'phnom penh', phone:'123', note: 'mynote'}, {where: {id: store.id}}).then(function () {
          return self.STORES.find({where: {id: store.id}}).then(function(updateStore){
            expect(updateStore.name).to.equal('store_3');
            expect(updateStore.location).to.equal('phnom penh');
            expect(updateStore.phone).to.equal('123');
            expect(updateStore.note).to.equal('mynote');
          });
        });
      });
    });
  });
});
