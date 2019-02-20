import React from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';

import Token from '../Token';

/**
 * @typedef {Object} TokenWrapper
 * @property {String} name - The text display for the token.
 * @property {String=} style - The style to use for displaying via <Token>
 *            Indicates how to style the token.
 */

/**
 * Key codes which should be interpreted as an
 * indication to add the current text as a new token.
 */
const ADD_KEYS = [
  /** TAB   */
  {
    keyCode: 9,
    match: '\t',
  },
  /** ENTER */
  {
    keyCode: 13,
    match: '\n',
  },
  /** COMMA */
  {
    keyCode: 188,
    match: ',',
  },
];

/**
 * Tokens Input Component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
export const TokensInput = ({
  extraAddKeys,
  inputStyle,
  maxTags,
  onChange,
  placeholder,
  tokens,
}) => {
  /**
   * Wrap the layout in a flexed <div>
   * https://github.com/olahol/react-tagsinput#renderlayout
   * @param {Array<ReactElement>} tokenComponents - Token components
   * @param {ReactElement} inputComponent - Input component
   * @returns {ReactElement}
   */
  function renderLayout(tokenComponents, inputComponent) {
    return (
      <div className="flex flex-1 flex-wrap">
        {tokenComponents}
        {inputComponent}
      </div>
    );
  }

  /**
   * Render an OUI Token to display each token.
   * https://github.com/olahol/react-tagsinput#rendertag
   *
   * @param {Object} renderOptions - Values to render token
   * @returns {ReactElement}
   */
  function renderToken({ tag, key, onRemove }) { // eslint-disable-line react/prop-types
    function onDismiss() {
      onRemove(key);
    }
    const { name, style } = tag;
    return (
      <Token
        key={ key }
        isDismissible={ true }
        onDismiss={ onDismiss }
        name={ name }
        style={ style }
        showWell={ false }
        testSection="token"
      />
    );
  }

  /**
   * Handler for when a string is pasted into the input.
   * Splits the string on all the addKeys and extraAddKeys.
   * https://github.com/olahol/react-tagsinput#pastesplit
   *
   * @param {string} str - The pasted string.
   * @returns {Array<string>}
   */
  function pasteSplit(str) {
    return ADD_KEYS
      .map(k => k.match)
      .concat(extraAddKeys)

      // Split the string by all our addKeys by joining with a
      // \n, which we will use as the final split operator.
      .reduce((acc, value) => acc.split(value).join('\n'), str)
      .split('\n')
      .filter(k => !!k);
  }

  /**
   * When the list of tokens changes, convert any string tokens
   * to object form and ensure there are no duplicates.
   * @param {Array.<TokenWrapper|String>} allTokens - All tokens
   */
  function __onChange(allTokens) {
    const updatedTokens = allTokens
      .reduce((acc, token) => {
        // A newly typed token will be in string form
        if (typeof token === 'string') {
          token = { name: token };
        }
        if (!acc.find(item => item.name === token.name)) {
          acc.push(token);
        }
        return acc;
      }, [])
      .filter(token => !!token.name);

    onChange(updatedTokens);
  }

  const addKeys = ADD_KEYS.map(k => k.keyCode).concat(extraAddKeys);
  const isNumberOfTokensMoreThanOrEqualToMaxTags = tokens.length >= maxTags;

  return (
    <div className="oui-text-input text--left flush">
      <ReactTagsInput
        addKeys={ addKeys }
        addOnPaste={ true }
        inputProps={{
          className: `${inputStyle} soft-half--ends soft--sides no-border width--150`,
          placeholder,
          readonly: isNumberOfTokensMoreThanOrEqualToMaxTags ? 'true' : false,
        }}
        maxTags={ maxTags }
        onChange={ __onChange }
        onlyUnique={ true }
        pasteSplit={ pasteSplit }
        renderTag={ renderToken }
        renderLayout={ renderLayout }
        value={ tokens }
      />
    </div>
  );
};

TokensInput.propTypes = {

  /**
   * Additional keycodes which should be considered
   * an intent to enter the current string as a new Token.
   * See ADD_KEYS above.
   */
  extraAddKeys: PropTypes.arrayOf([PropTypes.number, PropTypes.string]),

  /**
   * Additional styling for the input field.
   */
  inputStyle: PropTypes.string,

  /**
   * Maximum number of allowed tokens (pass-through to <ReactTagsInput>)
   */
  maxTags: PropTypes.number,

  /**
   * Handler to invoke when the token list changes.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Placeholder text for the input box.
   */
  placeholder: PropTypes.string,

  /**
   * @type {Array.<TokenWrapper>}
   */
  tokens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TokensInput.defaultProps = {

  extraAddKeys: [],

  maxTags: -1,

  placeholder: 'enter tokens',
};

export default TokensInput;
