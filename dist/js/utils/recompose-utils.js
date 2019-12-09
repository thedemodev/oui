"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withToggle = void 0;

var _recompose = require("recompose");

var withToggle = (0, _recompose.compose)((0, _recompose.withState)('isOpen', 'toggle', function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen || false;
}), (0, _recompose.withHandlers)({
  show: function show(_ref2) {
    var toggle = _ref2.toggle;
    return function (e) {
      return toggle(true);
    };
  },
  hide: function hide(_ref3) {
    var toggle = _ref3.toggle;
    return function (e) {
      return toggle(false);
    };
  },
  toggle: function toggle(_ref4) {
    var _toggle = _ref4.toggle;
    return function (e) {
      return _toggle(function (current) {
        return !current;
      });
    };
  }
}));
exports.withToggle = withToggle;