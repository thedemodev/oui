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
  /** Display layout as vertical column. */
  displayVertical: PropTypes.bool,
  /** Removes gutters and negative margins. */
  gutters: PropTypes.bool,
  /** Force overflow scrolling */
  overflow: PropTypes.oneOf(['none', 'overflow-y--scroll', 'overflow-x--auto', 'overflow-y--auto']),
};

const defaultProps = {
  as: 'div',
  border: 'none',
  displayVertical: false,
  gutters: false,
  overflow: 'none',
};
const classes = [];

const Row = React.forwardRef(
  ({ border, gutters, overflow, displayVertical, as: Component, ...props }, ref) => {

    if (border) {
      classes.push(`border--${border}`);
    }

    if (displayVertical) {
      classes.push('flex--column');
    }

    if (overflow) {
      classes.push(overflow);
    }

    return (
      <Component
        { ...props }
        className={ classNames('row', classes, !gutters && 'gutters--none') }
      />
    );
  },
);

Row.displayName = 'Row';
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
