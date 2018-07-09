class CSSClassCombiner {
  constructor(initialCssClass = '') {
    this.cssClassList = [].concat(initialCssClass);
  }

  combine(...cssClasses) {
    this.cssClassList = this.cssClassList
      .concat(cssClasses.filter(cssClass => cssClass));

    return this;
  }

  combineIf(condition, ...cssClasses) {
    if (condition) {
      this.combine(...cssClasses);
    }

    return this;
  }
}

CSSClassCombiner.prototype.toString = function() {
  return this.cssClassList.join(' ');
};

Object.defineProperty(exports, "__esModule", { value: true });

exports.default = CSSClassCombiner;

module.exports = CSSClassCombiner;
