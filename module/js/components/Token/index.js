import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-oui-icons';
import DismissButton from './DismissButton';
import classNames from 'classnames';
var LIGHT_BACKGROUND_STYLES = ['tertiary']; // Light backgrounds require a dark font and dismiss Icon color.

var getStylingInfo = function getStylingInfo(style) {
  return LIGHT_BACKGROUND_STYLES.includes(style) ? {
    fontClass: 'oui-token--font-dark',
    fillColor: 'black'
  } : {
    fontClass: 'oui-token--font-light',
    fillColor: 'white'
  };
};
/**
 * Token to be used to make token lists.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var Token = function Token(_ref) {
  var description = _ref.description,
      hasSnugWrap = _ref.hasSnugWrap,
      hasWrap = _ref.hasWrap,
      isDismissible = _ref.isDismissible,
      isDraggable = _ref.isDraggable,
      isFullWidth = _ref.isFullWidth,
      name = _ref.name,
      onDismiss = _ref.onDismiss,
      order = _ref.order,
      style = _ref.style,
      showWell = _ref.showWell,
      testSection = _ref.testSection,
      usesDragHandle = _ref.usesDragHandle;
  var classes = classNames('flex', {
    'oui-token-wrap': hasWrap && !hasSnugWrap,
    'oui-token-wrap--snug': hasSnugWrap,
    'oui-token-wrap--well': showWell,
    'oui-token--full-width': isFullWidth
  });
  var tokenToolsClasses = classNames({
    'oui-token-tool': isDraggable || order,
    'cursor--move': isDraggable
  });

  var _getStylingInfo = getStylingInfo(style),
      fontClass = _getStylingInfo.fontClass,
      fillColor = _getStylingInfo.fillColor;

  if (usesDragHandle) {
    return (
      /* eslint-disable react/jsx-boolean-value */
      React.createElement("div", {
        "data-oui-component": true,
        className: classes,
        "data-test-section": testSection
      }, React.createElement("div", {
        className: "oui-token oui-token--".concat(style)
      }, React.createElement("div", {
        className: "flex flex-align--center"
      }, React.createElement("div", {
        className: tokenToolsClasses,
        "data-token-handle": true
      }, order && React.createElement("span", {
        className: "oui-token__number"
      }, order), isDraggable && React.createElement("div", {
        className: "oui-icon oui-token__move push-half--right oui-token__move--drag-handle"
      }, React.createElement(Icon, {
        name: "hamburger",
        fill: "#ffffff"
      }))), React.createElement("div", {
        className: fontClass
      }, name, description && React.createElement("div", {
        className: "oui-token__description"
      }, description))), isDismissible && onDismiss && React.createElement(DismissButton, {
        onClick: onDismiss,
        fill: fillColor,
        testSection: testSection
      })))
      /* eslint-enable */

    );
  }

  return (
    /* eslint-disable react/jsx-boolean-value */
    React.createElement("div", {
      "data-oui-component": true,
      className: classes,
      "data-test-section": testSection
    }, React.createElement("div", {
      className: tokenToolsClasses,
      "data-token-handle": true
    }, order && React.createElement("span", {
      className: "oui-token__number"
    }, order), isDraggable && React.createElement("div", {
      className: "oui-icon oui-token__move"
    }, React.createElement(Icon, {
      name: "ellipsis",
      fill: "#c7c7c7"
    }))), React.createElement("div", {
      className: "oui-token oui-token--".concat(style)
    }, React.createElement("div", {
      className: fontClass
    }, name, description && React.createElement("div", {
      className: "oui-token__description"
    }, description)), isDismissible && onDismiss && React.createElement(DismissButton, {
      onClick: onDismiss,
      fill: fillColor,
      testSection: testSection
    })))
    /* eslint-enable */

  );
};

Token.propTypes = {
  /** Description explaining the token */
  description: PropTypes.string,

  /** Whether or not the token should have a tighter wrap */
  hasSnugWrap: PropTypes.bool,

  /** Whether or not the token should have a wrap */
  hasWrap: PropTypes.bool,

  /**
   * Determines if token has dismissible feature or not. If true, `onDismiss`
   * is required.
   */
  isDismissible: PropTypes.bool,

  /** Shows an icon indicating that the token is draggable */
  isDraggable: PropTypes.bool,

  /** Makes the component full width of container */
  isFullWidth: PropTypes.bool,

  /** Name label on token */
  name: PropTypes.string.isRequired,

  /**
   * Function to call that dismisses the token. Required if the token is
   * dismissible.
   */
  onDismiss: PropTypes.func,

  /** Show a number indicating the token's order */
  order: PropTypes.number,

  /** Whether or not a well is presented around the token. */
  showWell: PropTypes.bool,

  /** Determines style of token depending on priority level or error */
  style: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'error']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Used to switch drag handle */
  usesDragHandle: PropTypes.bool
};
Token.defaultProps = {
  hasWrap: true,
  isDismissible: false,
  style: 'secondary',
  showWell: true
};
export default Token;