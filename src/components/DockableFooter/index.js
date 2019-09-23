import PropTypes from 'prop-types';
import React from 'react';
import ButtonRow from '../ButtonRow';
import classNames from 'classnames';

const DockableFooter = props => {

  return (
    <footer
      className={ classNames({
        'oui-sheet__footer--dockable': true,
        'is-docked': props.isDocked,
      }) }>
      <ButtonRow rightGroup={ props.children }/>
    </footer>
  );
};

DockableFooter.propTypes = {
  /**
   *  The body of the sheet to request information and data from the user.
   */
  children: PropTypes.node,
  /**
   *  Used to determine if the sheet should have a close button.
   */
  isDocked: PropTypes.bool,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
};

DockableFooter.defaultProps = {
  isDocked: false,
  testSection: '',
};

export default DockableFooter;
