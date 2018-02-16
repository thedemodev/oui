import React from 'react';
import PropTypes from 'prop-types';
// import EllipsisIcon from '../Icon/EllipsisIcon';
import Icon from 'react-oui-icons';
import DismissButton from './DismissButton';
import classNames from 'classnames';

/**
 * Token to be used to make token lists.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Token = ({
  description,
  isDismissible,
  isDraggable,
  name,
  onDismiss,
  order,
  style,
  testSection,
}) => {
  const classes = classNames({
    'oui-token-wrap': true,
    'flex': true,
    'highlight-react--oui': localStorage.getItem('show_ouireact') === 'true',
  });
  const tokenToolsClasses = classNames({
    'oui-token-tool': isDraggable,
  });

  return (
    /* eslint-disable react/jsx-boolean-value */
    <div
      data-oui-component={ true }
      className={ classes }
      data-test-section={ testSection }>
      <div
        className={ tokenToolsClasses }
        data-token-handle>
        { order &&
          <span className="oui-token__number">
            { order }
          </span>
        }
        { isDraggable &&
          <div className="oui-icon oui-token__move">
            <Icon name="ellipsis" fill="#c7c7c7" />
          </div>
        }
      </div>
      <div className={ `oui-token oui-token--${style}` }>
        <div>
          { name }
          { description &&
            <div className="oui-token__description">
              { description }
            </div>
          }
        </div>
        { (isDismissible && onDismiss) &&
          <DismissButton
            onClick={ onDismiss }
            testSection={ testSection }
          />
        }
      </div>
    </div>
    /* eslint-enable */
  );
};

Token.propTypes = {
  /** Description explaining the token */
  description: PropTypes.string,
  /**
   * Determines if token has dismissible feature or not. If true, `onDismiss`
   * is required.
   */
  isDismissible: PropTypes.bool,
  /** Shows an icon indicating that the token is draggable */
  isDraggable: PropTypes.bool,
  /** Name label on token */
  name: PropTypes.string.isRequired,
  /**
   * Function to call that dismisses the token. Required if the token is
   * dismissible.
   */
  onDismiss: PropTypes.func,
  /** Show a number indicating the token's order */
  order: PropTypes.number,
  /** Determines style of token depending on priority level */
  style: PropTypes.oneOf(['primary', 'secondary']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

Token.defaultProps = {
  isDismissible: false,
  style: 'secondary',
};

export default Token;
