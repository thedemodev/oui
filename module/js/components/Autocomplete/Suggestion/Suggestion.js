import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link';
/**
 * Suggestion
 * This compononent renders a single auto-complete suggestion
 * It's purpose is to act as the default auto-complete SuggestionField
 */

var Suggestion = function Suggestion(props) {
  var suggestion = props.suggestion,
      testSection = props.testSection;
  return React.createElement(Link, {
    testSection: testSection
  }, suggestion);
};

Suggestion.defaultProps = {
  suggestion: '',
  testSection: ''
};
Suggestion.propTypes = {
  /** Autocomplete suggestion */
  suggestion: PropTypes.string,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string
};
export default Suggestion;