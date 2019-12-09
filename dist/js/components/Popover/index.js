"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_PADDING_PROP = 'default';
var HARD_PADDING_PROP = 'hard';
var SOFT_DOUBLE_PROP = 'soft-double';
var SOFT_HALF_PADDING_PROP = 'soft-half';
/**
 * Simple component often used to display supplemental information to contents
 * on a page.
 *
 * See `OverlayWrapper` component to position a popover on a page.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Popover = function Popover(_ref) {
  var children = _ref.children,
      padding = _ref.padding,
      testSection = _ref.testSection,
      title = _ref.title,
      popoverId = _ref.popoverId;
  var popOverClasses = (0, _classnames["default"])({
    'oui-pop--over': true
  });
  var popOverContentClasses = (0, _classnames["default"])({
    'oui-pop--over__content': true
  });
  var shouldAddPaddingClass = padding !== DEFAULT_PADDING_PROP && [HARD_PADDING_PROP, SOFT_DOUBLE_PROP, SOFT_HALF_PADDING_PROP].includes(padding);

  if (shouldAddPaddingClass) {
    popOverContentClasses = (0, _classnames["default"])(_defineProperty({
      'oui-pop--over__content': true
    }, padding, true));
  }

  return _react["default"].createElement("div", {
    id: popoverId,
    "data-oui-component": true,
    className: popOverClasses,
    style: {
      display: 'block',
      opacity: 1,
      position: 'initial'
    },
    "data-test-section": testSection
  }, _react["default"].createElement("div", {
    className: popOverContentClasses
  }, title && _react["default"].createElement("div", {
    className: "oui-pop--over__title"
  }, title), children));
};

Popover.propTypes = {
  /** Content that appears within the popover body */
  children: _propTypes["default"].node.isRequired,

  /** Padding class or 'default' padding for the popover container */
  padding: _propTypes["default"].oneOf([DEFAULT_PADDING_PROP, HARD_PADDING_PROP, SOFT_DOUBLE_PROP, SOFT_HALF_PADDING_PROP]),

  /** Id used to associate Popover to trigger */
  popoverId: _propTypes["default"].string,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Text describing the popover contents */
  title: _propTypes["default"].string
};
Popover.defaultProps = {
  padding: 'default'
};
var _default = Popover;
exports["default"] = _default;