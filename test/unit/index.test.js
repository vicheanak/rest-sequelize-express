'use strict';

var expect = require('expect.js');

describe('models/DISPLAY_TYPES', function () {
  it('returns the DISPLAY_TYPES model', function () {
    var models = require('../../models');
    expect(models.DISPLAY_TYPES).to.be.ok();
  });
});

describe('models/DISPLAYS', function () {
  it('returns the DISPLAYS model', function () {
    var models = require('../../models');
    expect(models.DISPLAYS).to.be.ok();
  });
});

describe('models/REWARDS', function () {
  it('returns the REWARDS model', function () {
    var models = require('../../models');
    expect(models.REWARDS).to.be.ok();
  });
});

describe('models/STORE_POINTS', function () {
  it('returns the STORE_POINTS model', function () {
    var models = require('../../models');
    expect(models.STORE_POINTS).to.be.ok();
  });
});

describe('models/STORE_TYPES', function () {
  it('returns the STORE_TYPES model', function () {
    var models = require('../../models');
    expect(models.STORE_TYPES).to.be.ok();
  });
});

describe('models/STORES', function () {
  it('returns the STORES model', function () {
    var models = require('../../models');
    expect(models.STORES).to.be.ok();
  });
});

describe('models/STORES_REWARDS', function () {
  it('returns the STORES_REWARDS model', function () {
    var models = require('../../models');
    expect(models.STORES_REWARDS).to.be.ok();
  });
});

describe('models/USERS', function () {
  it('returns the USERS model', function () {
    var models = require('../../models');
    expect(models.STORES).to.be.ok();
  });
});

describe('models/USERS_STORES', function () {
  it('returns the USERS_STORES model', function () {
    var models = require('../../models');
    expect(models.USERS_STORES).to.be.ok();
  });
});
