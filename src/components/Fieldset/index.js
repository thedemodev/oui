import PropTypes from 'prop-types';
import React from 'react';
import HelpPopover from '../HelpPopover';

const Fieldset = props => (
  <fieldset data-test-section={ props.testSection }>
    { props.title && (
      <h2>
        { props.title }
        { props.isOptional && (
          <span className="oui-label__optional">(Optional)</span>
        ) }
        { props.helpIcon && (
          <HelpPopover
            popoverTitle={ props.popoverTitle }
            horizontalAttachment="left"
            verticalAttachment="middle">
            <p>{ props.popoverText }</p>
          </HelpPopover>

        ) }
      </h2>
    ) }

    { props.description && (
      <div className="push-double--bottom">
        { props.description }
      </div>
    ) }

    { props.children }
  </fieldset>
);

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.node,
  helpIcon: PropTypes.bool,
  isOptional: PropTypes.bool,
  popoverText: PropTypes.string,
  popoverTitle: PropTypes.string,
  testSection: PropTypes.string,
  title: PropTypes.string,
};

export default Fieldset;
