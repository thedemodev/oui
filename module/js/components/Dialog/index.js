import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import CloseButton from '../CloseButton';
import Fieldset from '../Fieldset';
import Footer from './Deprecated/Footer';
import Title from './Deprecated/Title';
import Wrapper from './Deprecated/Wrapper';
export var DialogNew = function DialogNew(props) {
  var subtitleContent;

  if (props.subtitle && typeof props.subtitle === 'string') {
    subtitleContent = React.createElement("p", {
      className: "push--top flush--bottom"
    }, props.subtitle);
  } else {
    subtitleContent = React.createElement("div", {
      className: "push--top flush--bottom"
    }, props.subtitle);
  }

  return React.createElement("div", {
    className: "oui-dialog__wrapper"
  }, props.hasOverlay && React.createElement("div", {
    className: "oui-dialog__overlay"
  }), React.createElement("div", {
    "data-oui-component": true,
    className: "oui-dialog",
    "data-test-section": props.testSection
  }, props.hasCloseButton && React.createElement(CloseButton, {
    onClick: props.onClose,
    size: "medium"
  }), React.createElement("header", {
    className: "oui-dialog__header"
  }, React.createElement("h2", {
    className: "flush--bottom"
  }, props.title), subtitleContent), React.createElement("div", {
    className: "oui-dialog__body overflow-y--auto"
  }, props.children), React.createElement("footer", {
    className: "oui-dialog__footer-container"
  }, React.createElement(ButtonRow, {
    rightGroup: props.footerButtonList
  }))));
};
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
   * Used to determine if dialog should have a semi
   * transparent overlay behind it.
   */
  hasOverlay: PropTypes.bool,

  /**
   *  Function to perform when the dialog is closed.
   */
  onClose: PropTypes.func,

  /**
   * A subtitle for the dialog.
   */
  subtitle: PropTypes.node || PropTypes.string,

  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,

  /**
   * Main title of the dialog.
   */
  title: PropTypes.string.isRequired
};
DialogNew.defaultProps = {
  hasCloseButton: true,
  hasOverlay: true,
  onClose: function onClose() {},
  subtitle: '',
  testSection: ''
};
var Dialog = {
  Fieldset: Fieldset,
  Footer: Footer,
  Title: Title,
  Wrapper: Wrapper
};
export default Dialog;