"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _DismissButton = _interopRequireDefault(require("./DismissButton"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LIGHT_BACKGROUND_STYLES = ['tertiary']; // Light backgrounds require a dark font and dismiss Icon color.

var getStylingInfo = function getStylingInfo(style) {
  return LIGHT_BACKGROUND_STYLES.includes(style) ? {
    fontClass: 'oui-token--font-dark',
    fillColor: 'black'
  } : {
    fontClass: 'oui-token--font-light',
    fillColor: 'white'
  };
};
/**
 * Token to be used to make token lists.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var Token = function Token(_ref) {
  var description = _ref.description,
      hasSnugWrap = _ref.hasSnugWrap,
      hasWrap = _ref.hasWrap,
      isDismissible = _ref.isDismissible,
      isDraggable = _ref.isDraggable,
      isFullWidth = _ref.isFullWidth,
      name = _ref.name,
      onDismiss = _ref.onDismiss,
      order = _ref.order,
      style = _ref.style,
      showWell = _ref.showWell,
      testSection = _ref.testSection,
      usesDragHandle = _ref.usesDragHandle;
  var classes = (0, _classnames["default"])('flex', {
    'oui-token-wrap': hasWrap && !hasSnugWrap,
    'oui-token-wrap--snug': hasSnugWrap,
    'oui-token-wrap--well': showWell,
    'oui-token--full-width': isFullWidth
  });
  var tokenToolsClasses = (0, _classnames["default"])({
    'oui-token-tool': isDraggable || order,
    'cursor--move': isDraggable
  });

  var _getStylingInfo = getStylingInfo(style),
      fontClass = _getStylingInfo.fontClass,
      fillColor = _getStylingInfo.fillColor;

  if (usesDragHandle) {
    return (
      /* eslint-disable react/jsx-boolean-value */
      _react["default"].createElement("div", {
        "data-oui-component": true,
        className: classes,
        "data-test-section": testSection
      }, _react["default"].createElement("div", {
        className: "oui-token oui-token--".concat(style)
      }, _react["default"].createElement("div", {
        className: "flex flex-align--center"
      }, _react["default"].createElement("div", {
        className: tokenToolsClasses,
        "data-token-handle": true
      }, order && _react["default"].createElement("span", {
        className: "oui-token__number"
      }, order), isDraggable && _react["default"].createElement("div", {
        className: "oui-icon oui-token__move push-half--right oui-token__move--drag-handle"
      }, _react["default"].createElement(_reactOuiIcons["default"], {
        name: "hamburger",
        fill: "#ffffff"
      }))), _react["default"].createElement("div", {
        className: fontClass
      }, name, description && _react["default"].createElement("div", {
        className: "oui-token__description"
      }, description))), isDismissible && onDismiss && _react["default"].createElement(_DismissButton["default"], {
        onClick: onDismiss,
        fill: fillColor,
        testSection: testSection
      })))
      /* eslint-enable */

    );
  }

  return (
    /* eslint-disable react/jsx-boolean-value */
    _react["default"].createElement("div", {
      "data-oui-component": true,
      className: classes,
      "data-test-section": testSection
    }, _react["default"].createElement("div", {
      className: tokenToolsClasses,
      "data-token-handle": true
    }, order && _react["default"].createElement("span", {
      className: "oui-token__number"
    }, order), isDraggable && _react["default"].createElement("div", {
      className: "oui-icon oui-token__move"
    }, _react["default"].createElement(_reactOuiIcons["default"], {
      name: "ellipsis",
      fill: "#c7c7c7"
    }))), _react["default"].createElement("div", {
      className: "oui-token oui-token--".concat(style)
    }, _react["default"].createElement("div", {
      className: fontClass
    }, name, description && _react["default"].createElement("div", {
      className: "oui-token__description"
    }, description)), isDismissible && onDismiss && _react["default"].createElement(_DismissButton["default"], {
      onClick: onDismiss,
      fill: fillColor,
      testSection: testSection
    })))
    /* eslint-enable */

  );
};

Token.propTypes = {
  /** Description explaining the token */
  description: _propTypes["default"].string,

  /** Whether or not the token should have a tighter wrap */
  hasSnugWrap: _propTypes["default"].bool,

  /** Whether or not the token should have a wrap */
  hasWrap: _propTypes["default"].bool,

  /**
   * Determines if token has dismissible feature or not. If true, `onDismiss`
   * is required.
   */
  isDismissible: _propTypes["default"].bool,

  /** Shows an icon indicating that the token is draggable */
  isDraggable: _propTypes["default"].bool,

  /** Makes the component full width of container */
  isFullWidth: _propTypes["default"].bool,

  /** Name label on token */
  name: _propTypes["default"].string.isRequired,

  /**
   * Function to call that dismisses the token. Required if the token is
   * dismissible.
   */
  onDismiss: _propTypes["default"].func,

  /** Show a number indicating the token's order */
  order: _propTypes["default"].number,

  /** Whether or not a well is presented around the token. */
  showWell: _propTypes["default"].bool,

  /** Determines style of token depending on priority level or error */
  style: _propTypes["default"].oneOf(['primary', 'secondary', 'tertiary', 'error']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** Used to switch drag handle */
  usesDragHandle: _propTypes["default"].bool
};
Token.defaultProps = {
  hasWrap: true,
  isDismissible: false,
  style: 'secondary',
  showWell: true
};
var _default = Token;
exports["default"] = _default;