"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Sidebar
 *
 * Example:
 *
 *  <Sidebar
 *    anchor='left'
 *    border={ true }
 *    docked={ true }
 *    isOpen={ false }
 *    width={ 100 }>
 *     sidebar content goes here
 *  </Sidebar>
 *
 */
var Sidebar = function Sidebar(props) {
  var anchor = props.anchor,
      border = props.border,
      boxShadow = props.boxShadow,
      children = props.children,
      docked = props.docked,
      isOpen = props.isOpen,
      width = props.width,
      testSection = props.testSection;
  var baseClasses = (0, _classnames["default"])('background--white', 'flex', 'flex--1', 'flex--column', 'oui-sidebar', 'overflow--hidden');
  var classes = (0, _classnames["default"])(baseClasses, {
    'border--right': border && anchor === 'left',
    'border--left': border && anchor === 'right',
    'oui-shadow': boxShadow,
    'position--relative': docked,
    'position--absolute height--1-1': !docked,
    'visibility--hidden': !isOpen
  });
  var anchorPosition = anchor === 'left' ? -1 * width : 0;

  var styles = _defineProperty({
    width: isOpen ? width : 0,
    maxWidth: isOpen ? width : 0
  }, anchor, isOpen ? 0 : anchorPosition);

  return _react["default"].createElement("div", {
    "data-oui-component": true,
    "data-test-section": testSection,
    className: classes,
    style: styles
  }, isOpen && children);
};

Sidebar.defaultProps = {
  anchor: 'right',
  border: false,
  docked: false,
  isOpen: false,
  width: 0
};
Sidebar.propTypes = {
  /**
   * Determines whether the sidebar should render on
   * the left or right side of the page
   */
  anchor: _propTypes["default"].oneOf(['left', 'right']),

  /** Determines if the sidebar should have a border */
  border: _propTypes["default"].bool,

  /** Determines if the sidebar should have a box shadow */
  boxShadow: _propTypes["default"].bool,

  /** Sidebar children */
  children: _propTypes["default"].node.isRequired,

  /**
   * Docked sidebars push page-content to left or right when open.
   * Un-docked sidebars render open over page-content (i.e postition absolute)
   */
  docked: _propTypes["default"].bool,

  /** Determines if the sidebar is visible */
  isOpen: _propTypes["default"].bool,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string,

  /** The pixel width of the sidebar */
  width: _propTypes["default"].number.isRequired
};
var _default = Sidebar;
exports["default"] = _default;