import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import Icon from 'react-oui-icons';
/**
 * Provide a basic card display which has a title and inner content.
 * The card can have an optional close icon.
 *
 * @param {String} title - text for card title
 * @param {Function} onClose - method to fire when X is clicked
 * @param {Node} children - element for body
 * @param {String} testSection - string for testing
 * @param {String} shadow - boolean
 *
 * @returns {ReactElement}
 */

var Card = function Card(_ref) {
  var title = _ref.title,
      onClose = _ref.onClose,
      testSection = _ref.testSection,
      children = _ref.children,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? false : _ref$shadow;
  var closer = React.createElement(Button, {
    style: "unstyled",
    onClick: onClose,
    "data-test-section": "".concat(testSection, "-close")
  }, React.createElement(Icon, {
    name: "close"
  }));
  var classes = classNames({
    'push--bottom border--all': true,
    'oui-shadow--light': shadow
  });
  return React.createElement("div", {
    "data-oui-component": true,
    className: classes
  }, title && React.createElement("div", {
    className: "flex border--bottom background--faint soft soft-half--ends"
  }, React.createElement("h4", {
    className: "flex--1",
    "data-test-section": "".concat(testSection, "-title")
  }, title), React.createElement("div", null, onClose && closer)), React.createElement("div", {
    className: "soft",
    "data-test-section": "".concat(testSection, "-body")
  }, children));
};

Card.propTypes = {
  /** Elements that appears within the component */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /** method to invoke when a close element is clicked */
  onClose: PropTypes.func,

  /** Display a subtle shadow around card. */
  shadow: PropTypes.bool,

  /** For automated testing only. */
  testSection: PropTypes.string,

  /** What is the card title */
  title: PropTypes.string.isRequired
};
export default Card;