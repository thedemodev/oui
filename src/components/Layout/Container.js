import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * You can use a custom element for this component
   */
  as: PropTypes.elementType,
  /**
   * @default 'container'
   */
  bsPrefix: PropTypes.string,
  /**
   * Allow the Container to fill all of it's availble horizontal space.
   */
  fluid: PropTypes.bool,
  hasAllGaps: PropTypes.bool,
  hasAllGutters: PropTypes.bool,
  outlineDebug: PropTypes.bool,
  paddedContent: PropTypes.oneOf(['around', 'sides', 'ends']),
};

const defaultProps = {
  as: 'div',
  fluid: false,
};

const Container = React.forwardRef(
  ({ bsPrefix, outlineDebug, paddedContent, pushRowsTop, fluid, as: Component, className, ...props }, ref) => {
    const prefix = 'container';

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          className,
          outlineDebug && 'outline--debug',
          paddedContent && `padded-content--${paddedContent}`,
          pushRowsTop && 'push-rows--top',
          fluid ? `${prefix}-fluid` : prefix,
        )}
      />
    );
  },
);

Container.displayName = 'Container';
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
