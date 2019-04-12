import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import CloseButton from '../CloseButton';
import Fieldset from '../Fieldset';
import Footer from './Deprecated/Footer';
import Title from './Deprecated/Title';
import Wrapper from './Deprecated/Wrapper';

export const DialogNew = props => (
  <div className="oui-dialog__wrapper">
    <div className="oui-dialog__overlay" />
    <div
      data-ui-component={ true }
      className="oui-dialog"
      data-test-section={ props.testSection }>
      {props.hasCloseButton && <CloseButton onClick={ props.onClose } size="medium"/>}
      <header className="oui-dialog__header">
        <h2 className="flush--bottom">{props.title}</h2>
        {props.subtitle && <p className="push--top flush--bottom">{props.subtitle}</p>}
      </header>
      <div className="oui-dialog__body overflow-y--auto">
        {props.children}
      </div>
      <footer className="oui-dialog__footer-container">
        <ButtonRow rightGroup={ props.footerButtonList }/>
      </footer>
    </div>
  </div>
);

DialogNew.propTypes = {
  /**
   * The body of the dialog to request minimal information from the user.
   */
  children: PropTypes.node.isRequired,
  /**
   * Array of buttons used in the footer of the dialog.
   */
  footerButtonList: PropTypes.array.isRequired,
  /**
   *  Used to determine if the dialog should have a close button.
   */
  hasCloseButton: PropTypes.bool,
  /**
   *  Function to perform when the dialog is closed.
   */
  onClose: PropTypes.func,
  /**
   * A subtitle for the dialog.
   */
  subtitle: PropTypes.string,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
  /**
   * Main title of the dialog.
   */
  title: PropTypes.string.isRequired,
};

DialogNew.defaultProps = {
  hasCloseButton: true,
  onClose: () => {},
  subtitle: '',
  testSection: '',
};

const Dialog = {
  Fieldset,
  Footer,
  Title,
  Wrapper,
};

export default Dialog;
