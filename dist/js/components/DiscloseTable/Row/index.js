"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _recompose = require("recompose");

var _recomposeUtils = require("../../../utils/recompose-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DiscloseRow = function DiscloseRow(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children,
      rowContents = _ref.rowContents,
      toggle = _ref.toggle;
  var linkClass = (0, _classnames["default"])('oui-disclose-table--row__toggle', _defineProperty({}, 'is-active', isOpen));
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("tr", {
    onClick: toggle,
    className: linkClass
  }, _react["default"].createElement("td", {
    className: "soft--left vertical-align--middle"
  }, _react["default"].createElement("span", {
    className: "oui-disclose__symbol push-half--right"
  })), rowContents), isOpen && _react["default"].createElement("tr", {
    className: "oui-disclose-table--row__content"
  }, _react["default"].createElement("td", {
    colSpan: rowContents.length + 1
  }, children)));
};

DiscloseRow.propTypes = {
  /** Can be any valid HTML node */
  children: _propTypes["default"].node.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  rowContents: _propTypes["default"].array.isRequired,
  toggle: _propTypes["default"].func.isRequired
};

var _default = (0, _recomposeUtils.withToggle)((0, _recompose.toClass)(DiscloseRow));

exports["default"] = _default;