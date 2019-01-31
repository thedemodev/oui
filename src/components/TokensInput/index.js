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
  /** TAB   */ 9,
  /** ENTER */ 13,
  /** COMMA */ 188,
];

/**
 * Tokens Input Component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
export const TokensInput = ({
  maxTags,
  onChange,
  placeholder,
  spacesAllowedInToken,
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

  return (
    <div className="oui-text-input text--left flush">
      <ReactTagsInput
        value={ tokens }
        addKeys={ ADD_KEYS.concat(spacesAllowedInToken ? [] : /** SPACE */ 32) }
        onlyUnique={ true }
        addOnPaste={ true }
        maxTags={ maxTags }
        onChange={ __onChange }
        renderTag={ renderToken }
        renderLayout={ renderLayout }
        inputProps={{
          className: 'soft-half--ends soft--sides no-border width--150',
          placeholder,
        }}
      />
    </div>
  );
};

TokensInput.propTypes = {

  maxTags: PropTypes.number,

  onChange: PropTypes.func.isRequired,

  /**
   * Placeholder text for the input box.
   */
  placeholder: PropTypes.string,

  /**
   * Whether or not spaces are a valid character in a token name.
   * If false, typing the space key will add the current text
   * as a new token via the addKeys prop.
   */
  spacesAllowedInToken: PropTypes.bool,

  /**
   * @type {Array.<TokenWrapper>}
   */
  tokens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TokensInput.defaultProps = {
  maxTags: -1,

  placeholder: 'enter tokens',

  spacesAllowedInToken: false,
};

export default TokensInput;
