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
 * indication to add the current text as a new tag.
 */
const ADD_KEYS = [
  /** TAB   */ 9,
  /** ENTER */ 13,
  /** COMMA */ 188,
];

/**
 * Tags Input Component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
export const TokensInput = ({tags, spacesAllowed, placeholder, onChange}) => {
  /**
   * Wrap the layout in a flexed <div>
   * https://github.com/olahol/react-TokensInput#renderlayout
   * @param {Array<ReactElement>} tagComponents - Tag components
   * @param {ReactElement} inputComponent - Input component
   * @returns {ReactElement}
   */
  function defaultRenderLayout(tagComponents, inputComponent) {
    return (
      <div className="flex flex-1 flex-wrap">
        {tagComponents}
        {inputComponent}
      </div>
    );
  }

  /**
   * Render an OUI Token to display each tag.
   * https://github.com/olahol/react-TokensInput#rendertag
   * @param {Object} renderOptions - values to render tag
   * @returns {ReactElement}
   */
  function renderTag({ tag, key, onRemove }) { // eslint-disable-line react/prop-types
    function onDismiss() {
      onRemove(key);
    }
    return (
      <Token
        isDismissible={ true }
        onDismiss={ onDismiss }
        name={ tag.name }
        style={ tag.style }
        showWell={ false }
        testSection="token"
      />
    );
  }

  /**
   * When the list of tags changes, convert any string tags
   * to object form and ensure there are no duplicates.
   * @param {Array.<TokenWrapper|String>} allTags - All tags
   */
  function __onChange(allTags) {
    const updatedTags = allTags.reduce((acc, tag) => {
      // A newly typed tag will be in string form
      if (typeof tag === 'string') {
        tag = { name: tag };
      }
      if (!acc.find(item => item.name === tag.name)) {
        acc.push(tag);
      }
      return acc;
    }, []);

    onChange(updatedTags);
  }

  return (
    <div className="oui-text-input text--left flush">
      <ReactTagsInput
        value={ tags }
        addKeys={ ADD_KEYS.concat(spacesAllowed ? [] : /** SPACE */ 32) }
        onlyUnique={ true }
        addOnPaste={ true }
        maxTags={ 12 }
        onChange={ __onChange }
        renderTag={ renderTag }
        renderLayout={ defaultRenderLayout }
        inputProps={{
          className: 'no-border width--150',
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
   * Whether or not spaces are a valid character in a tag name.
   * If false, typing the space key will add the current text
   * as a new tag via the addKeys prop.
   */
  spacesAllowed: PropTypes.bool,

  /**
   * A list of tags in the form of:
   *   {
   *     name: <String>,
   *     style: <String=>
   *   }
   * @type {Array.<TokenWrapper>}
   */
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TokensInput.defaultProps = {
  maxTags: -1,

  placeholder: 'enter tags',

  spacesAllowed: false,
};

export default TokensInput;
