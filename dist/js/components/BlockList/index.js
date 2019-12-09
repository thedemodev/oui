"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Category = _interopRequireDefault(require("./Category"));

var _Item = _interopRequireDefault(require("./Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Building blocks to display a list of items that perform actions.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var BlockList = function BlockList(_ref) {
  var _ref$hasBorder = _ref.hasBorder,
      hasBorder = _ref$hasBorder === void 0 ? true : _ref$hasBorder,
      testSection = _ref.testSection,
      maxHeight = _ref.maxHeight,
      children = _ref.children;
  var classes = (0, _classnames["default"])({
    'background--white': true,
    'overflow-x--auto': true,
    'border--all': hasBorder
  });
  return _react["default"].createElement("div", {
    "data-oui-component": true,
    className: classes,
    "data-test-section": testSection,
    style: {
      maxHeight: maxHeight
    }
  }, _react["default"].createElement("ul", {
    style: {
      display: 'inline-block',
      minWidth: '100%'
    }
  }, children));
};

BlockList.propTypes = {
  /** Should be subcomponents of `BlockList` */
  children: _propTypes["default"].node.isRequired,

  /** Should the `BlockList` contain a border on all sides */
  hasBorder: _propTypes["default"].bool,

  /**
   * The max height of the `BlockList`. Pixels will be assumed if no unit is
   * provided.
   */
  maxHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
BlockList.Category = _Category["default"];
BlockList.Item = _Item["default"];
var _default = BlockList;
exports["default"] = _default;