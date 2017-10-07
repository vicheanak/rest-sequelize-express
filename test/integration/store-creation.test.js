'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('STORES creation page', function () {
  before(function () {
    return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.models = require('../../models');

    //return Bluebird.all([
      //this.models.STORES.destroy({ truncate: true }),
      //this.models.STORE_TYPES.destroy({ truncate: true }),
    //]);
  });

  it('/stores loads correctly', function (done) {
    request(app).get('/stores').expect(200, done);
  });

  it('lists a STORE if there is one', function (done) {
    this.models.STORES.create({ name: 'store1' }).then(function () {
      request(app).get('/stores').expect(/store1/, done);
    })
  });

  it('lists the STORES for the STORE_TYPE if available', function (done) {
    this.models.STORE_TYPES.create({ name: 'store_type_2', status: true }).bind(this).then(function (storeType) {
      return this.models.STORES.create({ name: 'store2', status: true, storeTypeIdStores: storeType.id });
    }).then(function () {
      request(app).get('/stores').expect(/store2/, done);
    });
  });
});
