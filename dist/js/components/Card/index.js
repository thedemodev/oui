"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Provide a basic card display which has a title and inner content.
 * The card can have an optional close icon.
 *
 * @param {String} title - text for card title
 * @param {Function} onClose - method to fire when X is clicked
 * @param {Node} children - element for body
 * @param {String} testSection - string for testing
 * @param {String} shadow - boolean
 *
 * @returns {ReactElement}
 */
var Card = function Card(_ref) {
  var title = _ref.title,
      onClose = _ref.onClose,
      testSection = _ref.testSection,
      children = _ref.children,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? false : _ref$shadow;

  var closer = _react["default"].createElement(_Button["default"], {
    style: "unstyled",
    onClick: onClose,
    "data-test-section": "".concat(testSection, "-close")
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "close"
  }));

  var classes = (0, _classnames["default"])({
    'push--bottom border--all': true,
    'oui-shadow--light': shadow
  });
  return _react["default"].createElement("div", {
    "data-oui-component": true,
    className: classes
  }, title && _react["default"].createElement("div", {
    className: "flex border--bottom background--faint soft soft-half--ends"
  }, _react["default"].createElement("h4", {
    className: "flex--1",
    "data-test-section": "".concat(testSection, "-title")
  }, title), _react["default"].createElement("div", null, onClose && closer)), _react["default"].createElement("div", {
    className: "soft",
    "data-test-section": "".concat(testSection, "-body")
  }, children));
};

Card.propTypes = {
  /** Elements that appears within the component */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,

  /** method to invoke when a close element is clicked */
  onClose: _propTypes["default"].func,

  /** Display a subtle shadow around card. */
  shadow: _propTypes["default"].bool,

  /** For automated testing only. */
  testSection: _propTypes["default"].string,

  /** What is the card title */
  title: _propTypes["default"].string.isRequired
};
var _default = Card;
exports["default"] = _default;