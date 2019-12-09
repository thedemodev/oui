"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Button = function Button(_ref) {
  var _classNames;

  var ariaLabel = _ref.ariaLabel,
      isSubmit = _ref.isSubmit,
      isLink = _ref.isLink,
      children = _ref.children,
      isActive = _ref.isActive,
      isDisabled = _ref.isDisabled,
      isLoading = _ref.isLoading,
      loadingText = _ref.loadingText,
      onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      size = _ref.size,
      style = _ref.style,
      testSection = _ref.testSection,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'default' : _ref$width,
      buttonRef = _ref.buttonRef,
      title = _ref.title;
  var buttonClassNames = (0, _classnames["default"])('oui-button', (_classNames = {}, _defineProperty(_classNames, "oui-button--".concat(style), style), _defineProperty(_classNames, "oui-button--".concat(size), size), _defineProperty(_classNames, "oui-button--".concat(width), width), _defineProperty(_classNames, 'is-active', isActive), _defineProperty(_classNames, 'oui-button--loading', isLoading), _classNames));
  var type = isSubmit ? 'submit' : 'button';

  function handleOnClick(event) {
    if (isDisabled || isLoading) {
      return;
    }

    onClick(event);
  }

  if (isLink) {
    return _react["default"].createElement("div", {
      "data-oui-component": true,
      className: buttonClassNames,
      disabled: isDisabled,
      onBlur: onBlur,
      "data-test-section": testSection,
      ref: buttonRef
    }, children);
  }

  return _react["default"].createElement("button", {
    "data-oui-component": true,
    className: buttonClassNames,
    disabled: isDisabled || isLoading,
    type: type,
    onBlur: onBlur,
    onClick: handleOnClick,
    onMouseDown: onMouseDown,
    "data-test-section": testSection,
    "aria-label": ariaLabel,
    "aria-live": "polite",
    title: title,
    ref: buttonRef
  }, isLoading && _react["default"].createElement(_Spinner["default"], {
    "data-test-section": "button-spinner",
    size: "tiny"
  }), isLoading ? loadingText || 'Processing' : children);
};

Button.propTypes = {
  /** Describes buttons that have an icon but no text */
  ariaLabel: _propTypes["default"].string,

  /** React ref to the underlying button component */
  buttonRef: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    current: _propTypes["default"].instanceOf(Element)
  })]),

  /** Text within the button */
  children: _propTypes["default"].node.isRequired,

  /** Render button with active state */
  isActive: _propTypes["default"].bool,

  /** Prevent users from interacting with the button */
  isDisabled: _propTypes["default"].bool,

  /** Changes the button to a div for insertion within a Link component */
  isLink: _propTypes["default"].bool,

  /** When true, adds a spinner to the button and disables the button */
  isLoading: _propTypes["default"].bool,

  /** Make the button act as a submit button */
  isSubmit: _propTypes["default"].bool,

  /** When the button adds a spinner, it displays this text */
  loadingText: _propTypes["default"].string,

  /** Function that fires when the button loses focus */
  onBlur: _propTypes["default"].func,

  /** Function that fires when the button is clicked on */
  onClick: _propTypes["default"].func,

  /** Function that fires when the button is mouse downed */
  onMouseDown: _propTypes["default"].func,

  /** Various height and width options */
  size: _propTypes["default"].oneOf(['tiny', 'small', 'large', 'narrow', 'tight']),

  /** Various color options */
  style: _propTypes["default"].oneOf(['highlight', 'danger', 'danger-outline', 'outline', 'outline-reverse', 'plain', 'toggle', 'underline', 'unstyled']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Title of the button shown as tooltip text when the button is hovered */
  title: _propTypes["default"].string,

  /** Various height and width options */
  width: _propTypes["default"].oneOf(['default', 'full'])
};
Button.defaultProps = {
  isLink: false,
  isLoading: false,
  isDisabled: false,
  isSubmit: false,
  loadingText: '',
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onMouseDown: function onMouseDown() {},
  width: 'default'
};
Button.displayName = 'Button';
var _default = Button;
exports["default"] = _default;