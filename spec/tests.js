(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var FuzzBuzz = (function () {

  var getReturned = function getReturned(n) {
    if (n % 3 == 0 && n % 5 == 0) {
      return 'fizzbuzz';
    } else if (n % 3 == 0) {
      return 'fizz';
    } else if (n % 5 == 0) {
      return 'buzz';
    } else {
      return n;
    }
  };

  return {
    getReturned: getReturned
  };
})();

exports['default'] = FuzzBuzz;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fizzbuzz = require('./fizzbuzz');

var _fizzbuzz2 = _interopRequireDefault(_fizzbuzz);

(function () {
  'use strict';

  describe('Cata', function () {
    describe('FizzBuzz', function () {
      it('should return fizz for multiples of three', function () {
        var returned = _fizzbuzz2['default'].getReturned(3);
        expect(returned).to.equal('fizz');
      });
      it('should return fizz for multiples of five', function () {
        var returned = _fizzbuzz2['default'].getReturned(20);
        expect(returned).to.equal('buzz');
      });
      it('should return fizz for multiples of three and five', function () {
        var returned = _fizzbuzz2['default'].getReturned(15);
        expect(returned).to.equal('fizzbuzz');
      });
      it('should return number for non-multiples of three and five', function () {
        var returned = _fizzbuzz2['default'].getReturned(4);
        expect(returned).to.equal(4);
      });
    });
  });
})();

},{"./fizzbuzz":1}]},{},[2])


//# sourceMappingURL=tests.js.map
