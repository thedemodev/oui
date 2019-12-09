"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Link = function Link(_ref) {
  var _classNames;

  var ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      href = _ref.href,
      onClick = _ref.onClick,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$newWindow = _ref.newWindow,
      newWindow = _ref$newWindow === void 0 ? false : _ref$newWindow,
      style = _ref.style,
      testSection = _ref.testSection;
  var classes = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, 'link', true), _defineProperty(_classNames, "link--".concat(style), style), _defineProperty(_classNames, 'link--disabled', isDisabled), _defineProperty(_classNames, 'pointer-events--none', isDisabled), _classNames));

  if (!href && !onClick) {
    return _react["default"].createElement("span", {
      "data-oui-component": true,
      className: classes,
      "data-test-section": testSection,
      "data-track-id": testSection,
      disabled: isDisabled
    }, children);
  }

  return _react["default"].createElement("a", _extends({
    "aria-label": ariaLabel,
    "data-oui-component": true,
    href: href,
    className: classes,
    "data-test-section": testSection,
    "data-track-id": testSection,
    onClick: onClick
  }, newWindow ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}, {
    disabled: isDisabled
  }), children);
};

Link.propTypes = {
  /** Label to use for screen readers */
  ariaLabel: _propTypes["default"].string,

  /** Text/node that is linked */
  children: _propTypes["default"].node.isRequired,

  /** Href for the anchor element */
  href: _propTypes["default"].string,

  /** Disable link and interactivity */
  isDisabled: _propTypes["default"].bool,

  /** Open link in new window */
  newWindow: _propTypes["default"].bool,

  /** Click handler function */
  onClick: _propTypes["default"].func,

  /** Link style options */
  style: _propTypes["default"].oneOf(['default', 'dark', 'muted', 'bad-news', 'reverse']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = Link;
exports["default"] = _default;