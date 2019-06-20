import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Use a custom element for this component
   */
  as: PropTypes.elementType,
  /**
   * Allow the Container to fill availble horizontal space.
   */
  fluid: PropTypes.bool,
  /**
   * For dev only -- show hotpink border and background on grid elements.
   */
  outlineDebug: PropTypes.bool,
  /**
   * Pad inner content.
   */
  paddedContent: PropTypes.oneOf([
    'none',
    'around',
    'sides',
    'ends',
    'remove',
  ]),
  /**
   * Remove first and last child side padding.
   */
  pull: PropTypes.bool,
  /**
   * Add top margin space between rows.
   */
  pushRowsTop: PropTypes.bool,
};

const defaultProps = {
  as: 'div',
  fluid: false,
};

const Container = React.forwardRef(({
  as: Component,
  fluid,
  outlineDebug,
  paddedContent,
  pull,
  pushRowsTop,
  ...props
}, ref) => {
  const prefix = 'container';

  return (
    <Component
      ref={ ref }
      { ...props }
      className={ classNames(
        fluid ? `${prefix}-fluid` : prefix,
        outlineDebug && 'outline--debug',
        paddedContent && `padded-content--${paddedContent}`,
        pull && 'container--pull',
        pushRowsTop && 'push-rows--top',
      ) }
    />
  );
},
);

Container.displayName = 'Container';
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
