import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const DEVICE_SIZES = ['large', 'medium', 'small'];
const colSize = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.oneOf(['fitContent', 'fillSpace']),
]);

const stringOrNumber = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const column = PropTypes.oneOfType([
  colSize,
  PropTypes.shape({
    border: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'sides', 'ends', 'all']),
    className: PropTypes.string,
    order: stringOrNumber,
    offset: stringOrNumber,
    paddedContent: PropTypes.oneOf(['around', 'sides', 'ends']),
    size: colSize,
  }),
]);

const propTypes = {
  as: PropTypes.elementType,

  border: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
    'sides',
    'ends',
    'all',
  ]),

  children: PropTypes.node,

  className: PropTypes.string,

  /**
   * The number of columns to span on large devices (≥992px)
   *
   * @type {("fillSpace"|"fitContent"|number|
   *  { span: "fillSpace"|"fitContent"|number, offset: number, order: number }
   * )}
   */
  large: column,

  /**
   * The number of columns to span on medium devices (≥768px)
   *
   * @type {("fillSpace"|"fitContent"|number|
   *  { span: "fillSpace"|"fitContent"|number, offset: number, order: number }
   * )}
   */
  medium: column,

  paddedContent: PropTypes.oneOf([
    'around',
    'sides',
    'ends',
  ]),

  /**
   * The number of columns to span on small devices (≥576px)
   *
   * @type {("fillSpace"|"fitContent"|number|
   *  { span: "fillSpace"|"fitContent"|number, offset: number, order: number }
   * )}
   */
  small: column,

};

const defaultProps = {
  as: 'div',
};

const Col = React.forwardRef(
  ({ border, className, paddedContent, as: Component, ...props }, ref) => {
    const prefix = 'col';
    const spans = [];
    const classes = [];

    if (paddedContent && paddedContent !== 'none') {
      classes.push(`padded-content--${paddedContent}`);
    }

    if (border) {
      classes.push(`border--${border}`);
    }

    DEVICE_SIZES.forEach(brkPoint => {
      let propValue = props[brkPoint];
      delete props[brkPoint];

      let span;
      let offset;
      let order;
      if (propValue !== null && propValue !== undefined && typeof propValue === 'object') {
        ({ span = 'fillSpace', offset, order } = propValue);
      } else {
        span = propValue;
      }

      if (span !== null && span !== undefined) {
        spans.push(
          span === 'fillSpace' ? `${prefix}-${brkPoint}` : `${prefix}-${brkPoint}-${span}`,
        );
      }

      if (order !== null && order !== undefined) {
        classes.push(`order-${brkPoint}-${order}`);
      }

      if (offset !== null && offset !== undefined) {
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
