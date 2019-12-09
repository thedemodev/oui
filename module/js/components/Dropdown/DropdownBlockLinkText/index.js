import React from 'react';
import PropTypes from 'prop-types';
export default function DropdownBlockLinkText(props) {
  var testSection = props.testSection ? 'block-link-text-' + props.testSection : null;
  return React.createElement("span", testSection ? {
    'data-test-section': testSection
  } : {}, props.text);
}
DropdownBlockLinkText.defaultProps = {
  text: null
};
DropdownBlockLinkText.propTypes = {
  /** test section from parent */
  testSection: PropTypes.string,

  /** text, if provided */
  text: PropTypes.string
};