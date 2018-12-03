import React from 'react';
import PropTypes from 'prop-types';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import { isFilterTermInItem } from '../../utils/filter';
import Input from '../Input';

/**
 * Autocomplete
 * This render an input with typeahead functionality
 *
 * Example:
 *  <Autocomplete
 *    InputField={ SearchNameInput }
 *    debounce={ 200 }
 *    filterBy={ (suggestion) => suggestion.name }
 *    placeholder='typehead...'
 *    onChange={ updateSuggestions }
 *    suggestions={[{ name: 'foo' }, { name: 'bar' }]}
 *  />
 */

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    const { debounce } = props;

    /**
     * Filters the suggestions by a query value
     * @returns {Promise}
     */
    this.querySuggestions = AwesomeDebouncePromise(() => {
      const { query } = this.state;
      const { suggestions, filterBy, onChange } = this.props;
      const nextSuggestions = suggestions.filter((suggestion) => isFilterTermInItem(query, filterBy(suggestion)));
      return onChange({
        query,
        suggestions: nextSuggestions,
      });
    }, debounce);
  }

  /**
   * Updates the query state than queries for new suggestions
   * @param {Object} event - event object from on-change event
   */
  updateQuery = (event) => {
    this.setState({
      query: event.target.value,
    }, this.querySuggestions);
  }

  render() {
    const {
      InputField = Input,
      defaultValue,
      displayError,
      focus = false,
      isDisabled,
      isFilter,
      isReadOnly,
      isRequired,
      max,
      maxLength,
      min,
      onBlur,
      onFocus,
      onInput,
      placeholder,
      testSection,
      textAlign,
      type = 'text',
    } = this.props;

    const { query } = this.state;

    return (
      <InputField
        isFilter={ isFilter }
        displayError={ displayError }
        type={ type }
        defaultValue={ defaultValue }
        placeholder={ placeholder }
        isRequired={ isRequired }
        isReadOnly={ isReadOnly }
        isDisabled={ isDisabled }
        onInput={ onInput }
        onChange={ this.updateQuery }
        onBlur={ onBlur }
        onFocus={ onFocus }
        min={ min }
        max={ max }
        maxLength={ maxLength }
        testSection={ testSection }
        focus={ focus }
        textAlign={ textAlign }
        value={ query }
      />
    );
  }
}

Autocomplete.propTypes = {
  /**
    * If true, when suggestion is selected, input value is
    * updated to suggestion value
    */
  InputField: PropTypes.func,
  /** Sets the debounce time (ms) */
  debounce: PropTypes.number,
  /** The default value of the input used on initial render */
  defaultValue: PropTypes.string,
  /** Includes search icon if true */
  displayError: PropTypes.bool,
  /**
   * Function that takes a single suggestion
   * and returns a value for a query to match
   */
  filterBy: PropTypes.func,
  /**
   * List of suggestions
   * TODO: make suggestions an instance of Immutable.List
   */

  /** Determines if the input component should autofocus */
  focus: PropTypes.bool,
  /** Prevents input from being modified and appears disabled */
  isDisabled: PropTypes.bool,
  /** Includes error if true */
  isFilter: PropTypes.bool,
  /** Adds an optional label if there is a label provided
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isOptional: function verifyIsOptionalProp(props) {
    if (props.isOptional && !props.label) {
      return new Error('Must include a value for the label prop to use the isOptional prop');
    }
    return null;
  },
  /** Prevents input from being modified but doesn't appear disabled */
  isReadOnly: PropTypes.bool,
  /** Prevents input from being submitted without value */
  isRequired: PropTypes.bool,
  /** Text that describes the input */
  label: PropTypes.string,
  /**
   * Max value for the `input`. Should be used only when `type` is `number`.
   */
  max: PropTypes.number,
  /**
   * Max length of the input value. Should be used only when type is 'text',
   * 'email', 'search', 'password', 'tel', or 'url'.
   */
  maxLength: PropTypes.number,
  /**
   * Min value for the `input`. Should be used only when `type` is `number`.
   */
  min: PropTypes.number,
  /** Form note for the input */
  note: PropTypes.string,
  /**
   * Function that fires when the input loses focus. It fires regardless of
   * whether the value has changed.
  */
  onBlur: PropTypes.func,
  /** Function that fires when the input loses focus after the value changes */
  onChange: PropTypes.func,
  /** Function that fires when the input gains focus */
  onFocus: PropTypes.func,
  /** Function that fires on keypress */
  onInput: PropTypes.func,
  /** Function that fires when a key is pressed down */
  onKeyDown: PropTypes.func,
  /** Input placeholder text */
  placeholder: PropTypes.string,
  /** List of suggestions to filter by */
  suggestions: PropTypes.array,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Align text inside input. Default is left. */
  textAlign: PropTypes.oneOf(['left', 'right']),
  /** Supported input types */
  type: PropTypes.oneOf([
    'text',
    'password',
    'date',
    'number',
    'email',
    'url',
    'search',
    'tel',
  ]).isRequired,
};

export default Autocomplete;
