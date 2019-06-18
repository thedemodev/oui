import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * You can use a custom element for this component
   */
  as: PropTypes.elementType,
  className: PropTypes.string,
  /**
   * Allow the Container to fill all of it's availble horizontal space.
   */
  fluid: PropTypes.bool,
  hasAllGaps: PropTypes.bool,
  hasAllGutters: PropTypes.bool,
  outlineDebug: PropTypes.bool,
  paddedContent: PropTypes.oneOf(['around', 'sides', 'ends']),
  pull: PropTypes.bool,
  pushRowsTop: PropTypes.bool,
};

const defaultProps = {
  as: 'div',
  fluid: false,
};

const Container = React.forwardRef(
  ({ outlineDebug, paddedContent, pull, pushRowsTop, fluid, as: Component, className, ...props }, ref) => {
    const prefix = 'container';

    return (
      <Component
        ref={ ref }
        { ...props }
        className={ classNames(
          className,
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
