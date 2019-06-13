import classNames from 'classnames';
import PropTypes from 'prop-types';

import React from 'react';

const propTypes = {
  /**
   * @default 'row'
   */
  as: PropTypes.elementType,
  /** Add visible border to row */
  border: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'sides', 'ends', 'all']),
  /** Removes gutters and negative margins. */
  gutters: PropTypes.bool,
  /** Force overflow scrolling */
  overflow: PropTypes.oneOf(['none', 'overflow-y--scroll', 'overflow-x--auto', 'overflow-y--auto']),
};

const defaultProps = {
  as: 'div',
  border: 'none',
  gutters: false,
  displayVertical: false,
  overflow: 'none',
  className: ['row'],
};
const classes = [];

const Row = React.forwardRef(
  ({ border, gutters, overflow, displayVertical, className, as: Component, ...props }, ref) => {

    if (border) {
      classes.push(`border--${border}`);
    }

    if (className) {
      classes.push(className);
    }

    if (overflow) {
      classes.push(overflow);
    }

    return (
      <Component
        { ...props }
        className={ classNames(className, !gutters && 'gutters--none') }
      />
    );
  },
);

Row.displayName = 'Row';
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
