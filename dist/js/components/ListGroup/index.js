"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListGroupItem = exports.ListGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListGroup = function ListGroup(_ref) {
  var children = _ref.children,
      subtitle = _ref.subtitle,
      testSection = _ref.testSection,
      title = _ref.title;
  return _react["default"].createElement("div", {
    className: "oui-listgroup flex soft--top soft--bottom border--bottom",
    "data-test-section": testSection
  }, _react["default"].createElement("div", {
    className: "width--1-4"
  }, _react["default"].createElement("div", {
    className: "zeta muted weight--normal"
  }), _react["default"].createElement("div", {
    className: "epsilon line--tight force-break"
  }, title), _react["default"].createElement("div", {
    className: "micro muted push-half--ends"
  }, subtitle)), _react["default"].createElement("div", {
    className: "group flex--1 soft--left"
  }, children));
};

exports.ListGroup = ListGroup;
ListGroup.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  subtitle: _propTypes["default"].string,
  testSection: _propTypes["default"].string,
  title: _propTypes["default"].string
};
ListGroup.defaultProps = {
  subtitle: '',
  testSection: '',
  title: ''
};

var ListGroupItem = function ListGroupItem(_ref2) {
  var children = _ref2.children,
      testSection = _ref2.testSection,
      density = _ref2.density;
  var classes = (0, _classnames["default"])({
    'listgroup__item': true,
    'border--bottom': true,
    'soft--bottom soft--top': density === 'tight',
    'soft-double--bottom soft-double--top': density === 'loose'
  });
  return _react["default"].createElement("div", {
    className: classes,
    "data-test-section": testSection
  }, children);
};

exports.ListGroupItem = ListGroupItem;
ListGroupItem.propTypes = {
  children: _propTypes["default"].node.isRequired,
  density: _propTypes["default"].oneOf(['tight', 'loose']),
  testSection: _propTypes["default"].string
};
ListGroupItem.defaultProps = {
  density: 'loose'
};
ListGroup.Item = ListGroupItem;
var _default = ListGroup;
exports["default"] = _default;