"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Generates an <select> element
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Select = function Select(_ref) {
  var children = _ref.children,
      id = _ref.id,
      isDisabled = _ref.isDisabled,
      name = _ref.name;
  return _react["default"].createElement("select", {
    "data-oui-component": true,
    disabled: isDisabled,
    name: name,
    id: id,
    className: "oui-select"
  }, children);
};

Select.propTypes = {
  /** options elements */
  children: _propTypes["default"].node,

  /** select id */
  id: _propTypes["default"].string,

  /** boolean for when select is disabled */
  isDisabled: _propTypes["default"].bool,

  /** select name */
  name: _propTypes["default"].string
};
Select.displayName = 'Select';
var _default = Select;
exports["default"] = _default;