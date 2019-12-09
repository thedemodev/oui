"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../../Button"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import CloseIcon from '../../Icon/CloseIcon';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */
var DismissButton = function DismissButton(props) {
  return _react["default"].createElement("div", {
    className: "push-half--left flex",
    style: {
      height: '12px',
      width: '12px'
    }
  }, _react["default"].createElement(_Button["default"], {
    onClick: props.onClick,
    style: "unstyled",
    testSection: props.testSection && "".concat(props.testSection, "-dismiss")
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    size: "small",
    name: "close",
    fill: props.fill
  })));
};

DismissButton.propTypes = {
  /** Color of the dismiss X */
  fill: _propTypes["default"].string,

  /** Function to call that dismisses the token */
  onClick: _propTypes["default"].func.isRequired,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
DismissButton.defaultProps = {
  fill: 'white'
};
DismissButton.displayName = 'DismissButton';
var _default = DismissButton;
exports["default"] = _default;