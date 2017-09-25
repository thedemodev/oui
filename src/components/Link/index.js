import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const Link = ({
  children,
  href,
  onClick,
  isDisabled = false,
  style,
  testSection,
}) => {
  const classes = classNames({
    ['link']: true,
    [`link--${style}`]: style,
    ['link--disabled']: isDisabled,
    'pointer-events--none': isDisabled,
  });

  return (
    <a
      data-ui-component={ true }
      href={ href }
      className={ classes }
      data-test-section={ testSection }
      data-track-id={ testSection }
      onClick={ onClick }
      disabled={ isDisabled }>
      { children }
    </a>
  );
};

Link.propTypes = {
  /** Text within the button */
  children: PropTypes.node.isRequired,
  /** Describes buttons that have an icon but no text */
  href: PropTypes.string,
  /** Prevent users from interacting with the button */
  isDisabled: PropTypes.bool,
  /** Make the button act as a submit button */
  onClick: PropTypes.func,
  /** Various height and width options */
  style: PropTypes.oneOf([
    'default',
    'dark',
    'muted',
    'bad-news',
    'reverse',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Link;
