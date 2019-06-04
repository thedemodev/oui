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
  displayVertical: false,
  className: ['row'],
};
const classes = [];

const Row = React.forwardRef(
  ({ bsPrefix, gutters, displayVertical, className, as: Component, ...props }, ref) => {

    // let classes = classNames({
    //   className,
    //   bsPrefix,
    //   !gutters && 'gutters--none',
    //   displayVertical && 'test',
    // });

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
