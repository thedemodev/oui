"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Individual tab component. Only meant to be used within the
 * TabNav wrapper component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var Tab = function Tab(props) {
  var classes = (0, _classnames["default"])({
    'oui-tabs-nav__item': true,
    'oui-tab-disabled': props.isDisabled,
    'is-active': props.isActive
  });
  return _react["default"].createElement("li", {
    "data-test-section": props.testSection,
    className: classes,
    onClick: props.onClick
  }, props.children);
};

Tab.propTypes = {
  /** Text or element that appears within the component */
  children: _propTypes["default"].node,

  /** Should the `TabNav.Tab` visually appear to be active */
  isActive: _propTypes["default"].bool,

  /** Boolean for whether the tab should be given the disabled class */
  isDisabled: _propTypes["default"].bool,

  /** Function to perform when tab is clicked */
  onClick: _propTypes["default"].func.isRequired,

  /** String to identify tab, used in conjunction with activeTab */
  tabId: _propTypes["default"].string.isRequired,

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
Tab.displayName = 'TabNav.Tab';
var _default = Tab;
exports["default"] = _default;