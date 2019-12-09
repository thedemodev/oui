"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ButtonIcon = function ButtonIcon(_ref) {
  var ariaDescribedBy = _ref.ariaDescribedBy,
      iconName = _ref.iconName,
      isDisabled = _ref.isDisabled,
      onClick = _ref.onClick,
      size = _ref.size,
      style = _ref.style,
      testSection = _ref.testSection,
      title = _ref.title;

  function handleOnClick(event) {
    if (isDisabled) {
      return;
    }

    onClick(event);
  }

  return _react["default"].createElement("button", {
    "aria-describedby": ariaDescribedBy,
    className: (0, _classnames["default"])('oui-button', 'oui-button-icon', "oui-button-icon__".concat(size), "oui-button--".concat(style)),
    "data-oui-component": true,
    "data-test-section": testSection,
    disabled: isDisabled,
    onClick: handleOnClick,
    title: title
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: iconName,
    size: size
  }));
};

ButtonIcon.propTypes = {
  /**
   *  Used to associate this button icon with a popover
   */
  ariaDescribedBy: _propTypes["default"].string,

  /**
   *  Name of the icon to use
   */
  iconName: _propTypes["default"].string.isRequired,

  /**
   * Prevent users from interacting with the button
   */
  isDisabled: _propTypes["default"].bool,

  /**
   *  Function to perform when the close button is clicked.
   */
  onClick: _propTypes["default"].func.isRequired,

  /**
   *  Size of the button, medium by default
   */
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),

  /**
   *  Various style options
   */
  style: _propTypes["default"].oneOf(['highlight', 'danger', 'danger-outline', 'outline', 'plain']),

  /**
   * Hook for automated JavaScript tests
   */
  testSection: _propTypes["default"].string,

  /**
   *  Title of the button used on hover and for screen readers
   */
  title: _propTypes["default"].string.isRequired
};
ButtonIcon.defaultProps = {
  iconName: 'add',
  onClick: function onClick() {},
  size: 'medium',
  title: ''
};
var _default = ButtonIcon;
exports["default"] = _default;