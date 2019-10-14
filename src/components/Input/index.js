import React from 'react';
import Label from '../Label';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Generates an `input` element (optionally wrapped in a label) and accepts
 * most of the common input types.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

class Input extends React.Component {
  blur() {
    if (this._input) {
      this._input.blur();
    }
  }

  renderInput({
    isFilter,
    displayError,
    type,
    value,
    defaultValue,
    placeholder,
    isRequired,
    isReadOnly,
    isDisabled,
    onInput,
    onChange,
    onBlur,
    onKeyDown,
    onFocus,
    min,
    max,
    step,
    maxLength,
    testSection,
    focus,
    textAlign,
    id }) {

    let hasAlignStyle = false;
    if (textAlign) {
      hasAlignStyle = true;
    }

    let classes = classNames(
      'oui-text-input',
      {'oui-text-input--read-only': isReadOnly},
      {'oui-text-input--search': isFilter},
      {'oui-form-bad-news': displayError},
      {[`text--${textAlign}`]: hasAlignStyle}
    );

    return (
      /* eslint-disable react/jsx-no-bind */
      <input
        data-oui-component={ true }
        className={ classes }
        id={ id }
        ref={ (c) => { this._input = c; } }
        type={ type }
        value={ value }
        defaultValue={ defaultValue }
        placeholder={ placeholder }
        required={ isRequired }
        readOnly={ isReadOnly }
        disabled={ isDisabled }
        onInput={ onInput }
        onChange={ onChange }
        onBlur={ onBlur }
        onKeyDown={ onKeyDown }
        onFocus={ onFocus }
        min={ min }
        max={ max }
        step={ step }
        { ...(typeof maxLength === 'undefined' ? {} : { maxLength }) }
        data-test-section={ testSection }
        autoFocus={ focus }
      />
      /* eslint-enable */
    );
  }

  renderNote({note, testSection}) {
    return (<div className='oui-form-note' data-test-section={ testSection && testSection + '-note' }>{note}</div>);
  }

  render() {
    const {
      label,
      displayError,
      testSection,
      isOptional,
      note,
      isRequired,
      id,
    } = this.props;

    if (label) {
      return (
        <div
          data-oui-component={ true }
          className={ classNames({'oui-form-bad-news': displayError}) }>
          <Label
            testSection={ testSection && testSection + '-label' }
            isRequired={ isRequired }
            isOptional={ isOptional }
            inputId={ id }>
            { label }
          </Label>
          { this.renderInput(this.props) }
          { note && this.renderNote(this.props)}
        </div>
      );
    }

    if (note) {
      return [
        this.renderInput(this.props),
        this.renderNote(this.props),
      ];
    }

    return this.renderInput(this.props);

  }
}

Input.propTypes = {
  /** The default value of the input used on initial render */
  defaultValue: PropTypes.string,
  /** Includes search icon if true */
  displayError: PropTypes.bool,
  /** Id of the input to properly associate with the input's label */
  id: PropTypes.string,
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
  /** Includes required asterisk label if true
   *  @param {Object} props Object of props
   *  @returns {Error} Error or null
   */
  isRequired: function verifyIsRequiredProp(props) {
    if (props.isRequired && !props.label) {
      return new Error('Must include a value for the label prop to use the isRequired prop');
    }
    return null;
  },
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
  /** Input step value */
  step: PropTypes.string,
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
    'time',
  ]).isRequired,
  /** Text within the input */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Input.defaultProps = {
  note: null,
  isRequired: false,
};

export default Input;
