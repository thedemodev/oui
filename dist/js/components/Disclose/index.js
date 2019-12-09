"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _recompose = require("recompose");

var _recomposeUtils = require("../../utils/recompose-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Disclose = function Disclose(_ref) {
  var _classNames, _classNames2;

  var children = _ref.children,
      childrenStyle = _ref.childrenStyle,
      headerStyle = _ref.headerStyle,
      isOpen = _ref.isOpen,
      indented = _ref.indented,
      title = _ref.title,
      toggle = _ref.toggle;
  var contentClass = (0, _classnames["default"])('oui-disclose__content', (_classNames = {}, _defineProperty(_classNames, 'border--sides border--bottom', childrenStyle === 'border'), _defineProperty(_classNames, 'border--bottom', childrenStyle === 'divider' && isOpen), _classNames));
  var linkClass = (0, _classnames["default"])('oui-disclose__link link--dark soft-half flush', (_classNames2 = {}, _defineProperty(_classNames2, 'background--faint display--block', headerStyle === 'header'), _defineProperty(_classNames2, 'border--all background--faint display--block', headerStyle === 'header-bordered'), _defineProperty(_classNames2, 'hard--left', !indented), _classNames2));
  var arrowClass = (0, _classnames["default"])('oui-disclose', _defineProperty({}, 'is-active', isOpen));
  return _react["default"].createElement("div", {
    className: arrowClass,
    style: {
      marginTop: '-1px'
    }
  }, _react["default"].createElement("a", {
    onClick: toggle,
    className: linkClass
  }, _react["default"].createElement("div", {
    className: "oui-disclose__arrow"
  }, _react["default"].createElement("span", {
    className: "oui-disclose__symbol push-half--right"
  }), title)), _react["default"].createElement("div", {
    className: contentClass
  }, isOpen && children));
};

Disclose.propTypes = {
  children: _propTypes["default"].node.isRequired,
  childrenStyle: _propTypes["default"].string,
  headerStyle: _propTypes["default"].string,
  indented: _propTypes["default"].bool,
  isOpen: _propTypes["default"].bool,
  noBorder: _propTypes["default"].bool,
  title: _propTypes["default"].string.isRequired,
  toggle: _propTypes["default"].func
};
Disclose.defaultProps = {
  indented: true
};

var _default = (0, _recomposeUtils.withToggle)((0, _recompose.toClass)(Disclose));

exports["default"] = _default;