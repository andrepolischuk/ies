
var ies = require('..');
var assert = require('assert');

describe('ies', function() {

  it('should return number in ie', function() {
    assert(typeof ies === 'number');
  });

  it('should return undefined in other browser', function() {
    assert(ies === undefined);
  });

});
