import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-oui-icons';
import ButtonRow from '../ButtonRow';

const Prompt = props => (
  <div className="oui-dialog__wrapper">
    <div className="oui-dialog__overlay" />
    <div
      data-ui-component={ true }
      className="oui-dialog oui-prompt overflow-y--auto"
      data-test-section={ props.testSection }>
      {props.hasCloseButton && (
        <button className="oui-dialog__close" onClick={ props.onClose }>
          <Icon name="close" />
        </button>
      )}
      <div className="oui-dialog__header">
        <h2 className="push--bottom">{props.title}</h2>
      </div>
      <div className="oui-dialog__body">
        {props.children}
      </div>
      <div className="oui-dialog__footer">
        <ButtonRow rightGroup={ props.footerButtonContent }/>
      </div>
    </div>
  </div>
);

Prompt.propTypes = {
  /**
   *  The body of the prompt to request acknowledgement from the user.
   *  Should not contain data input.
   */
  children: PropTypes.node.isRequired,
  /**
   * Array of buttons used in the footer of the prompt.
   */
  footerButtonContent: PropTypes.array.isRequired,
  /**
   *  Used to determine if the prompt should have a close button.
   */
  hasCloseButton: PropTypes.bool,
  /**
   *  Function to be called when the close button is clicked.
   */
  onClose: PropTypes.func,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
  /**
   * Main title of the prompt.
   */
  title: PropTypes.string.isRequired,
};

Prompt.defaultProps = {
  hasCloseButton: true,
};

export default Prompt;
