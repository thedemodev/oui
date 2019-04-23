import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Col from './Col';
import Row from './Row';
import Container from './Container';

class Layout extends React.Component {
  render() {
    const {
      activator,
      arrowIcon,
      buttonContent,
      children,
      isDisabled = false,
      isOpen,
      displayError = false,
      fullWidth,
      placement = 'bottom-start',
      style,
      testSection,
      width = 200,
      zIndex = 999,
    } = this.props;

    return (
      <Manager
        data-ui-component={ true }
        className={ groupClass }
        data-test-section={ testSection }>
      </Manager>
    );
  }
}

Layout.propTypes = {
  /** React element that when clicked activates the dropdown
   * Either this prop OR buttonContent should be used, not both
   */
  activator: PropTypes.node,
  /** Arrow icon direction:
    * - Defaults to 'none', which hides the arrow
    * - passing a prop value of false also hides the arrow
    * - passing a prop value of true uses down arrow
    */
  arrowIcon: PropTypes.oneOf([
    'down',
    'left',
    'none',
    'right',
    'up',
  ]),
  /** For automated testing only. */
  isOpen: PropTypes.bool,
  /** For automated testing only. */
  testSection: PropTypes.string,
};

Layout.Container = Container;
Layout.Row = Row;
Layout.Col = Col;

export default Layout;
