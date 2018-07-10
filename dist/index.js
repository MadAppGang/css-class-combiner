'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lol = require('./lol');

var _lol2 = _interopRequireDefault(_lol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(_lol2.default);

var CSSClassCombiner = function () {
  function CSSClassCombiner() {
    var initialCssClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, CSSClassCombiner);

    this.cssClassList = [].concat(initialCssClass);
  }

  _createClass(CSSClassCombiner, [{
    key: 'combine',
    value: function combine() {
      for (var _len = arguments.length, cssClasses = Array(_len), _key = 0; _key < _len; _key++) {
        cssClasses[_key] = arguments[_key];
      }

      this.cssClassList = this.cssClassList.concat(cssClasses.filter(function (cssClass) {
        return cssClass;
      }));

      return this;
    }
  }, {
    key: 'combineIf',
    value: function combineIf(condition) {
      if (condition) {
        for (var _len2 = arguments.length, cssClasses = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          cssClasses[_key2 - 1] = arguments[_key2];
        }

        this.combine.apply(this, cssClasses);
      }

      return this;
    }
  }]);

  return CSSClassCombiner;
}();

CSSClassCombiner.prototype.toString = function () {
  return this.cssClassList.join(' ');
};

exports.default = CSSClassCombiner;