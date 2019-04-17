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
  noGutters: PropTypes.bool,
};

const defaultProps = {
  as: 'div',
  noGutters: false,
  className: ['row', 'outline--debug'],
};

const Row = React.forwardRef(
  ({ bsPrefix, noGutters, className, as: Component, ...props }, ref) => {
    return (
      <Component
        { ...props }
        className={ classNames(className, bsPrefix, noGutters && 'no-gutters') }
      />
    );
  },
);

Row.displayName = 'Row';
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
