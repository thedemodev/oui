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
  /** Pad inner content. */
  paddedContent: PropTypes.oneOf(['none', 'around', 'sides', 'ends', 'remove']),
};

const defaultProps = {
  as: 'div',
  border: 'none',
  displayVertical: false,
  gutters: false,
  overflow: 'none',
  paddedContent: 'none',
};

const Row = React.forwardRef(
  ({ border, gutters, overflow, displayVertical, paddedContent, as: Component, ...props }, ref) => {

    const classes = [];

    if (border) {
      classes.push(`border--${border}`);
    }

    if (paddedContent && paddedContent !== 'none') {
      classes.push(`padded-content--${paddedContent}`);
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
