function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-oui-icons';
export default function DropdownBlockLinkSecondaryText(props) {
  var testSection = props.testSection ? 'block-link-description-' + props.testSection : null;
  return React.createElement("div", {
    className: "oui-dropdown--descriptive__content flex"
  }, props.isWarning && React.createElement("div", {
    className: "flex flex-align--center push--right"
  }, React.createElement(Icon, {
    name: "exclamation",
    size: "small"
  })), React.createElement("div", _extends({
    className: "flex flex-align--center"
  }, testSection ? {
    'data-test-section': testSection
  } : {}), props.secondaryText));
}
DropdownBlockLinkSecondaryText.defaultProps = {
  isWarning: false,
  secondaryText: null
};
DropdownBlockLinkSecondaryText.propTypes = {
  /** should show info icon */
  isWarning: PropTypes.bool,

  /** description text, if provided */
  secondaryText: PropTypes.string,

  /** test section from parent */
  testSection: PropTypes.string
};