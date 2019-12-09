function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

var Link = function Link(_ref) {
  var _classNames;

  var ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      href = _ref.href,
      onClick = _ref.onClick,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$newWindow = _ref.newWindow,
      newWindow = _ref$newWindow === void 0 ? false : _ref$newWindow,
      style = _ref.style,
      testSection = _ref.testSection;
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, 'link', true), _defineProperty(_classNames, "link--".concat(style), style), _defineProperty(_classNames, 'link--disabled', isDisabled), _defineProperty(_classNames, 'pointer-events--none', isDisabled), _classNames));

  if (!href && !onClick) {
    return React.createElement("span", {
      "data-oui-component": true,
      className: classes,
      "data-test-section": testSection,
      "data-track-id": testSection,
      disabled: isDisabled
    }, children);
  }

  return React.createElement("a", _extends({
    "aria-label": ariaLabel,
    "data-oui-component": true,
    href: href,
    className: classes,
    "data-test-section": testSection,
    "data-track-id": testSection,
    onClick: onClick
  }, newWindow ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {}, {
    disabled: isDisabled
  }), children);
};

Link.propTypes = {
  /** Label to use for screen readers */
  ariaLabel: PropTypes.string,

  /** Text/node that is linked */
  children: PropTypes.node.isRequired,

  /** Href for the anchor element */
  href: PropTypes.string,

  /** Disable link and interactivity */
  isDisabled: PropTypes.bool,

  /** Open link in new window */
  newWindow: PropTypes.bool,

  /** Click handler function */
  onClick: PropTypes.func,

  /** Link style options */
  style: PropTypes.oneOf(['default', 'dark', 'muted', 'bad-news', 'reverse']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default Link;