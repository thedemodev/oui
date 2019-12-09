"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownListItem;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DropdownListItem(props) {
  var classes = (0, _classnames["default"])({
    'hard--sides': props.hardSides,
    'hard--top': props.hardTop,
    'soft--sides': props.role === 'separator',
    'oui-dropdown__item--separator': props.role === 'separator',
    'oui-dropdown__item': true
  });

  function handleMouseDownCapture(event) {
    // Make the mousedown event a no-op for separators.
    // This prevents clicks on them from stealing focus.
    if (props.role === 'separator') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function handleOnClick(event) {
    if (props.role === 'separator') {
      event.preventDefault();
      event.stopPropagation();
    } else if (props.ignoreToggle) {
      event.ignoreToggle = true;
      event.persist();
    }
  }

  return _react["default"].createElement("li", {
    className: classes,
    onClick: handleOnClick,
    onMouseDownCapture: handleMouseDownCapture,
    role: props.role
  }, props.children);
}

DropdownListItem.propTypes = {
  /** Nodes to display within */
  children: _propTypes["default"].node,

  /** Remove padding from sides */
  hardSides: _propTypes["default"].bool,

  /** Remove padding from top */
  hardTop: _propTypes["default"].bool,

  /** Instructs the Dropdown parent to ignore clicks for toggle purposes. */
  ignoreToggle: _propTypes["default"].bool,

  /**
   * Aria role for this list item. See roles here:
   * https://www.w3.org/WAI/PF/aria/roles
   */
  role: _propTypes["default"].string
};