"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownBlockLinkSecondaryText;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function DropdownBlockLinkSecondaryText(props) {
  var testSection = props.testSection ? 'block-link-description-' + props.testSection : null;
  return _react["default"].createElement("div", {
    className: "oui-dropdown--descriptive__content flex"
  }, props.isWarning && _react["default"].createElement("div", {
    className: "flex flex-align--center push--right"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "exclamation",
    size: "small"
  })), _react["default"].createElement("div", _extends({
    className: "flex flex-align--center"
  }, testSection ? {
    'data-test-section': testSection
  } : {}), props.secondaryText));
}

DropdownBlockLinkSecondaryText.defaultProps = {
  isWarning: false,
  secondaryText: null
};
DropdownBlockLinkSecondaryText.propTypes = {
  /** should show info icon */
  isWarning: _propTypes["default"].bool,

  /** description text, if provided */
  secondaryText: _propTypes["default"].string,

  /** test section from parent */
  testSection: _propTypes["default"].string
};