"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Link = _interopRequireDefault(require("../../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Suggestion
 * This compononent renders a single auto-complete suggestion
 * It's purpose is to act as the default auto-complete SuggestionField
 */
var Suggestion = function Suggestion(props) {
  var suggestion = props.suggestion,
      testSection = props.testSection;
  return _react["default"].createElement(_Link["default"], {
    testSection: testSection
  }, suggestion);
};

Suggestion.defaultProps = {
  suggestion: '',
  testSection: ''
};
Suggestion.propTypes = {
  /** Autocomplete suggestion */
  suggestion: _propTypes["default"].string,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = Suggestion;
exports["default"] = _default;