"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tab = _interopRequireDefault(require("./Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Wrapper component for a set of tabs
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
var TabNav = function TabNav(_ref) {
  var activeTab = _ref.activeTab,
      children = _ref.children,
      style = _ref.style,
      testSection = _ref.testSection;
  var tabStyleClasses = style ? style.map(function (styleName) {
    return "oui-tabs--".concat(styleName);
  }) : '';
  var classes = (0, _classnames["default"])(tabStyleClasses, 'oui-tabs'); // Determine if the child is an active tab.
  // From http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

  var childrenWithProps = _react["default"].Children.map(children, function (child) {
    // guard against conditionally rendered children
    if (child === null) {
      return null;
    }

    return _react["default"].cloneElement(child, {
      isActive: activeTab === child.props.tabId
    });
  });

  return _react["default"].createElement("div", {
    "data-oui-component": true,
    "data-test-section": testSection,
    className: classes
  }, _react["default"].createElement("ul", {
    className: "oui-tabs-nav",
    "data-test-section": "tabs-menu"
  }, childrenWithProps));
};

TabNav.propTypes = {
  /** Id corresponding to which tab should be given the active class */
  activeTab: _propTypes["default"].string.isRequired,

  /** Set of Tab components */
  children: _propTypes["default"].node.isRequired,

  /** Various styles that can be given to the navigation */
  style: _propTypes["default"].arrayOf(_propTypes["default"].oneOf(['center', 'dashboard', 'header', 'left-pad', 'plain', 'small', 'sub'])),

  /** Hook for automated JavaScript tests */
  testSection: _propTypes["default"].string
};
TabNav.Tab = _Tab["default"];
var _default = TabNav;
exports["default"] = _default;