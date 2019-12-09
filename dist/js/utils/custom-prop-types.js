"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPropIsGreaterThanOrEqualTo = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var checkPropIsGreaterThanOrEqualTo = function checkPropIsGreaterThanOrEqualTo(numberToCheck, isRequired) {
  return function (props, propName, componentName) {
    if (isRequired) {
      if (props[propName] === undefined || props[propName] === null) {
        return new Error('Invalid prop `' + propName + '` (has value `' + props[propName] + '`) supplied to `' + componentName + '`. Must be defined.`');
      }
    }

    if (props[propName] < numberToCheck) {
      return new Error('Invalid prop `' + propName + '` (has value `' + props[propName] + '`) supplied to `' + componentName + '`. Must be greater than or equal to `' + numberToCheck + '.');
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return _propTypes["default"].number.apply(_propTypes["default"], [props, propName, componentName].concat(rest));
  };
};

exports.checkPropIsGreaterThanOrEqualTo = checkPropIsGreaterThanOrEqualTo;