"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */
var CodeIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/code-16.svg');

var CodeIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/code-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var CodeIcon = function CodeIcon(props) {
  var Svg;
  var sizeclass;

  switch (props.size) {
    case 16:
      Svg = CodeIcon16;
      sizeclass = 'oui-icon--16';
      break;

    case 24:
      Svg = CodeIcon24;
      sizeclass = 'oui-icon--24';
      break;

    default:
      Svg = CodeIcon16;
      sizeclass = "oui-icon--".concat(props.size);
  }

  return _react["default"].createElement(Svg, {
    className: 'oui-icon display--inline ' + sizeclass,
    "data-test-section": props.testSection
  });
};

CodeIcon.propTypes = {
  /** Size of the icon */
  size: _propTypes["default"].oneOf([12, 16, 24]).isRequired,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
var _default = CodeIcon;
exports["default"] = _default;