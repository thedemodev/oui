"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */
var PaperclipIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/paperclip-16.svg');

var PaperclipIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/paperclip-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var PaperclipIcon = function PaperclipIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = PaperclipIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = PaperclipIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = PaperclipIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return _react["default"].createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

PaperclipIcon.propTypes = {
  /** Size of the icon */
  size: _propTypes["default"].oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = PaperclipIcon;
exports["default"] = _default;