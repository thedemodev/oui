import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import CloseButton from '../CloseButton';
import Attention from '../Attention';

var Sheet = function Sheet(props) {
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
    className: "oui-sheet__wrapper"
  }, React.createElement("div", {
    className: "oui-sheet__overlay"
  }), React.createElement("div", {
    "data-oui-component": true,
    className: "oui-sheet overflow-y--auto",
    "data-test-section": props.testSection
  }, props.hasCloseButton && React.createElement(CloseButton, {
    onClick: props.onClose,
    size: "large"
  }), props.warningContent && React.createElement("div", {
    className: "oui-sheet__warning"
  }, React.createElement(Attention, {
    alignment: "center",
    type: "warning",
    testSection: props.warningTestSection
  }, props.warningContent)), React.createElement("header", {
    className: "oui-sheet__header"
  }, React.createElement("h2", {
    className: "flush--bottom"
  }, props.title), subtitleContent), React.createElement("div", {
    className: "oui-sheet__body"
  }, props.children), React.createElement("footer", {
    className: "oui-sheet__footer"
  }, React.createElement(ButtonRow, {
    rightGroup: props.footerButtonList
  }))));
};

Sheet.propTypes = {
  /**
   *  The body of the sheet to request information and data from the user.
   */
  children: PropTypes.node.isRequired,

  /**
   * Array of buttons used in the footer of the sheet.
   */
  footerButtonList: PropTypes.array.isRequired,

  /**
   *  Used to determine if the sheet should have a close button.
   */
  hasCloseButton: PropTypes.bool,

  /**
   * Function to perform when the sheet is closed.
   */
  onClose: PropTypes.func,

  /**
   * A subtitle for the sheet.
   */
  subtitle: PropTypes.node || PropTypes.string,

  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,

  /**
   * Main title of the sheet.
   */
  title: PropTypes.string.isRequired,

  /**
   * Content of the warning Attention bar.
   */
  warningContent: PropTypes.string,

  /**
   * Identifier used to create data-test-section
   * attribute for the Attention bar.
   */
  warningTestSection: PropTypes.string
};
Sheet.defaultProps = {
  hasCloseButton: true,
  onClose: function onClose() {},
  subtitle: '',
  testSection: '',
  warningTestSection: ''
};
export default Sheet;