import classNames from 'classnames';
import PropTypes from 'prop-types';

import React from 'react';

const propTypes = {
  as: PropTypes.elementType,
  /**
   * @default 'row'
   */
  bsPrefix: PropTypes.string,
  /** Removes gutters and negative margins. */
  gutters: PropTypes.bool,
};

const defaultProps = {
  as: 'div',
  gutters: false,
  className: ['row'],
};

const Row = React.forwardRef(
  ({ bsPrefix, gutters, className, as: Component, ...props }, ref) => {
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
