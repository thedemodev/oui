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
  sidePadding: PropTypes.bool,
};

const defaultProps = {
  as: 'div',
  fluid: false,
  sidePadding: true,
};

const Container = React.forwardRef(
  ({ bsPrefix, sidePadding, outlineDebug, paddedContent, pushRowsTop, pushColsSides, fluid, as: Component, className, ...props }, ref) => {
    const prefix = 'container';

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          className,
          !sidePadding && 'hard--sides',
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
