import PropTypes from 'prop-types';
import React from 'react';
import HelpPopover from '../HelpPopover';

var Fieldset = function Fieldset(props) {
  return React.createElement("fieldset", {
    "data-test-section": props.testSection
  }, props.title && React.createElement("div", {
    className: "gamma push--bottom"
  }, props.title, props.isOptional && React.createElement("span", {
    className: "oui-label__optional"
  }, "(Optional)"), props.helpIcon && React.createElement(HelpPopover, {
    popoverTitle: props.popoverTitle,
    horizontalAttachment: "left",
    verticalAttachment: "middle"
  }, React.createElement("p", null, props.popoverText))), props.description && React.createElement("div", {
    className: "push--bottom"
  }, props.description), props.children);
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.node,
  helpIcon: PropTypes.bool,
  isOptional: PropTypes.bool,
  popoverText: PropTypes.string,
  popoverTitle: PropTypes.string,
  testSection: PropTypes.string,
  title: PropTypes.string
};
export default Fieldset;