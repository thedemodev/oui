"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownBlockLinkText;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DropdownBlockLinkText(props) {
  var testSection = props.testSection ? 'block-link-text-' + props.testSection : null;
  return _react["default"].createElement("span", testSection ? {
    'data-test-section': testSection
  } : {}, props.text);
}

DropdownBlockLinkText.defaultProps = {
  text: null
};
DropdownBlockLinkText.propTypes = {
  /** test section from parent */
  testSection: _propTypes["default"].string,

  /** text, if provided */
  text: _propTypes["default"].string
};