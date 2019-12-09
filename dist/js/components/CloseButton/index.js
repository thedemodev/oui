"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CloseButton = function CloseButton(props) {
  return _react["default"].createElement("button", {
    className: "oui-close-button",
    onClick: props.onClick
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "close",
    size: props.size
  }));
};

CloseButton.propTypes = {
  /**
   *  Function to perform when the close button is clicked.
   */
  onClick: _propTypes["default"].func.isRequired,

  /**
   *  Size of the close button.
   */
  size: _propTypes["default"].oneOf(['small', 'medium', 'large'])
};
CloseButton.defaultProps = {
  size: 'medium'
};
var _default = CloseButton;
exports["default"] = _default;