import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tab from './Tab';
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
  var classes = classNames(tabStyleClasses, 'oui-tabs'); // Determine if the child is an active tab.
  // From http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

  var childrenWithProps = React.Children.map(children, function (child) {
    // guard against conditionally rendered children
    if (child === null) {
      return null;
    }

    return React.cloneElement(child, {
      isActive: activeTab === child.props.tabId
    });
  });
  return React.createElement("div", {
    "data-oui-component": true,
    "data-test-section": testSection,
    className: classes
  }, React.createElement("ul", {
    className: "oui-tabs-nav",
    "data-test-section": "tabs-menu"
  }, childrenWithProps));
};

TabNav.propTypes = {
  /** Id corresponding to which tab should be given the active class */
  activeTab: PropTypes.string.isRequired,

  /** Set of Tab components */
  children: PropTypes.node.isRequired,

  /** Various styles that can be given to the navigation */
  style: PropTypes.arrayOf(PropTypes.oneOf(['center', 'dashboard', 'header', 'left-pad', 'plain', 'small', 'sub'])),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
TabNav.Tab = Tab;
export default TabNav;