function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ButtonRow from '../ButtonRow';
/**
 * Pagination
 *
 * Example:
 *  <Pagination
 *    currentPage={ 1 }
 *    onChange={ this.handlPageChange }
 *    totalPage={ 123 }
 *  />
 */

var Pagination =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Pagination, _PureComponent);

  function Pagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "createPageChangeHandler", function (nextPage) {
      return function () {
        var onChange = _this.props.onChange;
        onChange(nextPage);
      };
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentPage = _this$props.currentPage,
          totalPages = _this$props.totalPages,
          testSection = _this$props.testSection;
      return React.createElement(ButtonRow, {
        testSection: testSection,
        centerGroup: [React.createElement(Button, {
          key: "1",
          style: "outline",
          width: "default",
          onClick: this.createPageChangeHandler(1),
          isDisabled: currentPage === 1
        }, "First"), React.createElement(Button, {
          key: "2",
          style: "outline",
          width: "default",
          onClick: this.createPageChangeHandler(currentPage - 1),
          isDisabled: currentPage <= 1
        }, "Back"), React.createElement("span", {
          key: "pagenums",
          className: "soft--sides"
        }, "\xA0Page ", currentPage, " of ", totalPages, "\xA0"), React.createElement(Button, {
          key: "3",
          style: "outline",
          width: "default",
          onClick: this.createPageChangeHandler(currentPage + 1),
          isDisabled: currentPage >= totalPages
        }, "Next"), React.createElement(Button, {
          key: "4",
          style: "outline",
          width: "default",
          onClick: this.createPageChangeHandler(totalPages),
          isDisabled: currentPage === totalPages
        }, "Last")]
      });
    }
  }]);

  return Pagination;
}(PureComponent);

_defineProperty(Pagination, "defaultProps", {
  onChange: function onChange() {},
  testSection: ''
});

Pagination.propTypes = {
  /** Sets the current page number */
  currentPage: PropTypes.number.isRequired,

  /** Function that is called when a pagination Button is clicked */
  onChange: PropTypes.func,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Sets the total number of pages */
  totalPages: PropTypes.number.isRequired
};
export default Pagination;