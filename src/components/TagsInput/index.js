import React from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';

import Token from '../Token';

/**
 * Tags Input Component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
export const TagsInput = ({tags, addKeys, placeholder, onChange}) => {
  function renderTag(componentProps) {
    const { tag, key, onRemove } = componentProps;
    function onDismiss() {
      onRemove(key);
    }
    const style = tag.style || undefined;
    return (
      <Token
        isDismissible={ true }
        onDismiss={ onDismiss }
        name={ tag.name }
        style={ style }
        padding={ false }
        testSection="token"
      />
    );
  }

  function __onChange(data, changedIndexes) {
    const updatedTags = data.reduce((acc, tag, index) => {
      if (typeof tag === 'string') {
        tag = {
          name: tag,
          style: null,
        };
      }

      const existing = changedIndexes.indexOf(index) < 0;
      const notDuplicate = !acc.find(item => item.name === tag.name);

      if (existing || notDuplicate) {
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
        addKeys={ addKeys }
        onlyUnique={ true }
        addOnPaste={ true }
        maxTags={ 12 }
        onChange={ __onChange }
        renderTag={ renderTag }
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
   * Keys which control when a new tag is created.
   */
  addKeys: PropTypes.array,

  maxTags: PropTypes.number,

  onChange: PropTypes.func.isRequired,

  /**
   * Placeholder text for the input box.
   */
  placeholder: PropTypes.string,

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
  /**
   * Default to space, enter, comma.
   */
  addKeys: [9, 13, 32],

  placeholder: 'enter tags',
};

export default TagsInput;
