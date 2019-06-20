import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * You can use a custom element for this component
   */
  as: PropTypes.elementType,
  /**
   * Allow the Container to fill all of it's availble horizontal space.
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
  outlineDebug,
  paddedContent,
  pull,
  pushRowsTop,
  fluid,
  as: Component,
  ...props
}, ref) => {
  const prefix = 'container';

  return (
    <Component
      ref={ ref }
      { ...props }
      className={ classNames(
        pull && 'container--pull',
        outlineDebug && 'outline--debug',
        paddedContent && `padded-content--${paddedContent}`,
        pushRowsTop && 'push-rows--top',
        fluid ? `${prefix}-fluid` : prefix,
      ) }
    />
  );
},
);

Container.displayName = 'Container';
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
