"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CodeDiff = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactGhLikeDiff = require("react-gh-like-diff");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CodeDiff = function CodeDiff(_ref) {
  var oldText = _ref.oldText,
      newText = _ref.newText,
      hideInfo = _ref.hideInfo,
      hideTitle = _ref.hideTitle,
      fileName = _ref.fileName,
      updatedFileName = _ref.updatedFileName,
      outputStyle = _ref.outputStyle;
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('oui-codediff', 'background--white', {
      'oui-codediff__hide-info': hideInfo
    }, {
      'oui-codediff__hide-title': hideTitle
    })
  }, _react["default"].createElement(_reactGhLikeDiff.ReactGhLikeDiff, {
    options: {
      originalFileName: fileName,
      updatedFileName: updatedFileName || fileName,
      renderNothingWhenEmpty: true,
      outputFormat: outputStyle,
      hideTitle: false
    },
    past: oldText,
    current: newText
  }));
};

exports.CodeDiff = CodeDiff;
CodeDiff.propTypes = {
  /** Original filename */
  fileName: _propTypes["default"].string,

  /** Hide line change summary info */
  hideInfo: _propTypes["default"].bool,

  /** Hide top title */
  hideTitle: _propTypes["default"].bool,

  /** New content to compare against the old */
  newText: _propTypes["default"].string.isRequired,

  /** Original content to compare against new version */
  oldText: _propTypes["default"].string.isRequired,

  /** Stacked vs vertical display of code */
  outputStyle: _propTypes["default"].oneOf(['side-by-side', 'line-by-line']),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** New filename */
  updatedFileName: _propTypes["default"].string
};
CodeDiff.defaultProps = {
  fileName: '',
  hideInfo: false,
  hideTitle: false,
  newText: '',
  oldText: '',
  testSection: '',
  outputStyle: 'side-by-side'
};
var _default = CodeDiff;
exports["default"] = _default;