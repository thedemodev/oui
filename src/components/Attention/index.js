import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from 'react-oui-icons';
import classNames from 'classnames';
import { getAssistiveTextFromColorClass } from '../../utils/accessibility';

const renderDismissButton = (testSection) => {
  return (
    <div className="oui-attention__close">
      <Button
        style="plain"
        size="small"
        ariaLabel="Close alert"
        testSection={ testSection + '-dismiss' }>
        <Icon name='close' size='small' />
      </Button>
    </div>
  );
};

/**
 * Provide contextual feedback with a wide range of styles that can be used to
 * convey the message's importance.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Attention = ({
  alignment,
  children,
  isDismissible,
  testSection,
  type,
}) => {
  let colorClassName = type ? 'oui-attention--' + type : '';
  let alignmentClassName = (alignment === 'center') ? 'oui-text--center' : '';
  let attentionAriaLabel = type ? getAssistiveTextFromColorClass(type) : null;
  let alignClass = ('oui-attention ' + colorClassName + ' ' + alignmentClassName).trim();
  let classes = classNames({
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
    [`${alignClass}`]: true,
  });

  return (
    <div
      data-oui-component={ true }
      className={ classes }
      data-test-section={ testSection }
      aria-label={ attentionAriaLabel }
      role="alert">
      { isDismissible ? renderDismissButton(testSection) : null }
      { children }
    </div>
  );
};

Attention.propTypes = {
  /** How the text is aligned */
  alignment: PropTypes.oneOf(['left', 'center']),
  /** Text that appears within the component */
  children: PropTypes.string.isRequired,
  /** Button allowing users to dismiss the component */
  isDismissible: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Various color schemes */
  type: PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning']),
};

export default Attention;
