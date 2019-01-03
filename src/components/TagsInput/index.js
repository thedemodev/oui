import React from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';

import Token from '../Token';

/**
 * Key codes which should be interpreted as an
 * indication to add the current text as a new tag.
 */
const ADD_KEYS = [9, 13];

/**
 * Tags Input Component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
export const TagsInput = ({tags, spacesAllowed, placeholder, onChange}) => {
  /**
   * Wrap the layout in a flexed <div>
   * https://github.com/olahol/react-tagsinput#renderlayout
   * @param {Array<React.Component>} tagComponents
   * @param {React.Component} inputComponent
   * @returns <React.Component>
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
   * https://github.com/olahol/react-tagsinput#rendertag
   * @param {Object}
   */
  function renderTag({ tag, key, onRemove }) {
    function onDismiss() {
      onRemove(key);
    }
    return (
      <Token
        isDismissible={ true }
        onDismiss={ onDismiss }
        name={ tag.name }
        style={ tag.style }
        well={ false }
        testSection="token"
      />
    );
  }

  /**
   * When the list of tags changes, convert any string tags
   * to object form and ensure there are no duplicates.
   * @param {Array.<Object>} allTags
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

  console.log('SPACES ALLOWED: ', spacesAllowed);
  return (
    <div className="oui-text-input text--left flush">
      <ReactTagsInput
        value={ tags }
        addKeys={ ADD_KEYS.concat(spacesAllowed ? [] : /* Space Key */ 32) }
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

TagsInput.propTypes = {
  /**
   * Whether or not spaces are a valid character in a tag name.
   * If false, typing the space key will add the current text
   * as a new tag via the addKeys prop.
   */
  maxTags: PropTypes.number,

  onChange: PropTypes.func.isRequired,

  placeholder: PropTypes.string,

  /**
   * Placeholder text for the input box.
   */
  spacesAllowed: PropTypes.bool,

  /**
   * A list of tags in the form of:
   *   {
   *     name: <String>,
   *     style: <String=>
   *   }
   */
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TagsInput.defaultProps = {
  placeholder: 'enter tags',

  spacesAllowed: false,
};

export default TagsInput;
