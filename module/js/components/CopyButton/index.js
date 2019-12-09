import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../Button';
import Icon from 'react-oui-icons';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */

var CopyButton = function CopyButton(_ref) {
  var style = _ref.style,
      testSection = _ref.testSection,
      textToCopy = _ref.textToCopy;
  return React.createElement(CopyToClipboard, {
    text: textToCopy
  }, React.createElement(Button, {
    style: style === 'none' ? null : style,
    ariaLabel: "Copy code snippet",
    testSection: testSection ? "".concat(testSection, "-copy-button") : null
  }, React.createElement(Icon, {
    name: "clipboard"
  })));
};

CopyButton.propTypes = {
  /** Style option for the button */
  style: PropTypes.oneOf(['highlight', 'danger', 'danger-outline', 'outline', 'outline-reverse', 'plain', 'toggle', 'underline', 'unstyled', 'none']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** The text or code that will be copied */
  textToCopy: PropTypes.string.isRequired
};
CopyButton.defaultProps = {
  style: 'plain'
};
export default CopyButton;