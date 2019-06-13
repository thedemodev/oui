import classNames from 'classnames';
import PropTypes from 'prop-types';

import React from 'react';

const propTypes = {
  as: PropTypes.elementType,
  /**
   * @default 'row'
   */
  border: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'sides', 'ends', 'all']),
  bsPrefix: PropTypes.string,
  /** Removes gutters and negative margins. */
  gutters: PropTypes.bool,
};

const defaultProps = {
  as: 'div',
  border: 'none',
  gutters: false,
  displayVertical: false,
  className: ['row'],
};
const classes = [];

const Row = React.forwardRef(
  ({ border, bsPrefix, gutters, displayVertical, className, as: Component, ...props }, ref) => {

    if (border) {
      classes.push(`border--${border}`);
    }

    if (className) {
      classes.push(className);
    }

    return (
      <Component
        { ...props }
        className={ classNames(className, bsPrefix, !gutters && 'gutters--none') }
      />
    );
  },
);

Row.displayName = 'Row';
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
