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
