import PropTypes from 'prop-types';
import React from 'react';
import CloseButton from '../CloseButton';
import DockableFooter from '../DockableFooter';

const Sheet = props => {
  let subtitleContent;
  if (props.subtitle && typeof (props.subtitle) === 'string') {
    subtitleContent = <p className="push--top flush--bottom">{props.subtitle}</p>;
  } else {
    subtitleContent = <div className="push--top flush--bottom">{props.subtitle}</div>;
  }

  return (
    <div className="oui-sheet__wrapper">
      <div className="oui-sheet__overlay" />
      <div
        data-oui-component={ true }
        className="oui-sheet overflow-y--auto"
        data-test-section={ props.testSection }>
        {props.hasCloseButton && <CloseButton onClick={ props.onClose } size="large"/>}
        <header className="oui-sheet__header">
          <h2 className="flush--bottom">{props.title}</h2>
          {subtitleContent}
        </header>
        <div className="oui-sheet__body">
          {props.children}
        </div>
        <DockableFooter
          parentTestSection={ props.testSection }
          isDocked={ props.footerDocked }>
          { props.footerButtonList }
        </DockableFooter>
      </div>
    </div>
  );
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
   *  Dock footer to bottom of window.
   */
  footerDocked: PropTypes.bool,
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
};

Sheet.defaultProps = {
  hasCloseButton: true,
  onClose: () => {},
  subtitle: '',
  testSection: '',
};

export default Sheet;
