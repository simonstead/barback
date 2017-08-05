const expect = require('expect')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).toBe(-1);
    });
  });

  describe('app', (done) => {
    it('should exist', (done) => {
	const app = require('../app.js')
	done()
    });
  });
});
