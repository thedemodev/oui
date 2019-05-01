import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const DEVICE_SIZES = ['large', 'medium', 'small'];
const colSize = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.oneOf(['auto']),
]);

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const column = PropTypes.oneOfType([
  colSize,
  PropTypes.shape({
    size: colSize,
    order: stringOrNumber,
    offset: stringOrNumber,
  }),
]);

/**
* TODO[1]: col and row gap split
* hasAllPadding?
* paddedContent
*/

const propTypes = {
  as: PropTypes.elementType,

  /**
   * @default 'col'
   */
  bsPrefix: PropTypes.string,

  /**
   * The number of columns to span on large devices (≥992px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  large: column,

  /**
   * The number of columns to span on medium devices (≥768px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  medium: column,

  paddedContent: PropTypes.bool,

  /**
   * The number of columns to span on small devices (≥576px)
   *
   * @type {(true|"auto"|number|{ span: true|"auto"|number, offset: number, order: number })}
   */
  small: column,

};

const defaultProps = {
  as: 'div',
};

const Col = React.forwardRef(
  ({ bsPrefix, className, as: Component, ...props }, ref) => {
    const prefix = 'col';
    const spans = [];
    const classes = [];

    DEVICE_SIZES.forEach(brkPoint => {
      let propValue = props[brkPoint];
      delete props[brkPoint];

      let span, offset, order;
      if (propValue != null && typeof propValue === 'object') {
        ({ span = true, offset, order } = propValue);
      } else {
        span = propValue;
      }

      if (span != null) {
        spans.push(
          span === true ? `${prefix}-${brkPoint}` : `${prefix}-${brkPoint}-${span}`,
        );
      }

      if (order != null) {
        classes.push(`order-${brkPoint}-${order}`);
      }

      if (offset != null) {
        classes.push(`offset-${brkPoint}-${offset}`);
      }

    });

    if (!spans.length) {
      spans.push(prefix); // plain 'col'
    }

    return (
      <Component
        { ...props }
        ref={ ref }
        className={ classNames(className, ...spans, ...classes) }
      />
    );
  },
);

Col.displayName = 'Col';
Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
