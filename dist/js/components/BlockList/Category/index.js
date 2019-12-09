"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Category = function Category(props) {
  return _react["default"].createElement("li", {
    className: "oui-block-list__category",
    "data-test-section": props.testSection
  }, props.header && _react["default"].createElement("div", {
    className: "oui-block-list__category__name soft-half--ends soft--sides",
    style: {
      wordBreak: 'break-word'
    }
  }, props.header), props.children && _react["default"].createElement("ul", null, props.children));
};

Category.propTypes = {
  /** Items that appears within the category */
  children: _propTypes["default"].node.isRequired,

  /** Node or component that appears above the `children` */
  header: _propTypes["default"].node,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Category.displayName = 'BlockList.Category';
var _default = Category;
exports["default"] = _default;