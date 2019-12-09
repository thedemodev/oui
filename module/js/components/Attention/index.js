function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from 'react-oui-icons';
import classNames from 'classnames';
import { getAssistiveTextFromColorClass } from '../../utils/accessibility';

var renderDismissButton = function renderDismissButton(testSection) {
  return React.createElement("div", {
    className: "oui-attention__close"
  }, React.createElement(Button, {
    style: "plain",
    size: "small",
    ariaLabel: "Close alert",
    testSection: "".concat(testSection, "-dismiss")
  }, React.createElement(Icon, {
    name: "close",
    size: "small"
  })));
};
/**
 * Provide contextual feedback with a wide range of styles that can be used to
 * convey the message's importance.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */


var Attention = function Attention(_ref) {
  var _ref$alignment = _ref.alignment,
      alignment = _ref$alignment === void 0 ? 'left' : _ref$alignment,
      children = _ref.children,
      isDismissible = _ref.isDismissible,
      testSection = _ref.testSection,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'brand' : _ref$type;
  var colorClassName = "oui-attention--".concat(type);
  var alignmentClassName = "oui-text--".concat(alignment);
  var attentionAriaLabel = getAssistiveTextFromColorClass(type);
  var alignClass = "oui-attention ".concat(colorClassName, " ").concat(alignmentClassName).trim();
  var classes = classNames(_defineProperty({}, "".concat(alignClass), true));
  var dismissBtn = isDismissible ? renderDismissButton(testSection) : null;
  return React.createElement("div", {
    "data-oui-component": true,
    className: classes,
    "data-test-section": testSection,
    "aria-label": attentionAriaLabel,
    role: "alert"
  }, children, dismissBtn);
};

Attention.propTypes = {
  /** How the text is aligned */
  alignment: PropTypes.oneOf(['left', 'center']),

  /** Text that appears within the component */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /** Button allowing users to dismiss the component */
  isDismissible: PropTypes.bool,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Various color schemes */
  type: PropTypes.oneOf(['bad-news', 'brand', 'good-news', 'warning'])
};
export default Attention;