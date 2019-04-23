import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * @default 'container'
   */
  bsPrefix: PropTypes.string,

  /**
   * Allow the Container to fill all of it's availble horizontal space.
   */
  fluid: PropTypes.bool,

  outlineDebug: PropTypes.bool,
  hasAllGutters: PropTypes.bool,
  hasAllGaps: PropTypes.bool,

  /**
   * You can use a custom element for this component
   */
  as: PropTypes.elementType,
};

const defaultProps = {
  as: 'div',
  fluid: false,
};

const Container = React.forwardRef(
  ({ bsPrefix, outlineDebug, paddedContent, pushRowsTop, pushColsSides, fluid, as: Component, className, ...props }, ref) => {
    const prefix = 'container';

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          className,
          outlineDebug && 'outline--debug',
          paddedContent && 'content--padded',
          pushRowsTop && 'push-rows--top',
          pushColsSides && 'push-cols--sides',
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
