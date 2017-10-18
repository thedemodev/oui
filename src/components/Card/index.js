import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from 'react-oui-icons';

/**
 * Provide a basic card display which has a title and inner content
 * The card can have an optional close icon
 * @param {String} title - text for card title
 * @param {Function} onClose - method to fire when X is clicked
 * @param {Node} children - element for body
 * @param {String} testSection - string for testing
 * @returns {ReactElement}
 */
const Card = ({
  title,
  onClose,
  testSection,
  children,
}) => {
  const closer = (
    <Button style="unstyled" onClick={ onClose } data-test-section={ `${testSection}-close` }>
      <Icon name='close'/>
    </Button>
  );

  return (
    <div className="push--bottom">
      <div className="flex background--faint soft border--all soft-half--ends">
        <div className="width--3-4 epsilon line--loose" data-test-section={ `${testSection}-title` }>
          { title }
        </div>
        <div className="width--1-4 text--right push--right push-half--top">
          { onClose && closer }
        </div>
      </div>
      <div className="soft border--sides border--bottom" data-test-section={ `${testSection}-body` }>
        { children }
      </div>
    </div>
  );
};

Card.propTypes = {
  /** Elements that appears within the component */
  children: PropTypes.string.isRequired,
  /** method to invoke when a close element is clicked */
  onClose: PropTypes.func,
  /** For automated testing only. */
  testSection: PropTypes.string,
  /** What is the card title */
  title: PropTypes.string.isRequired,
};

export default Card;
