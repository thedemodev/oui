import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import TagsInputCore from './index.js';

const SAMPLE_DATA = [
  { name: 'error', style: 'error' },
  { name: 'no-style' },
  { name: 'primary', style: 'primary' },
  { name: 'secondary', style: 'secondary' },
  { name: 'tertiary', style: 'tertiary' },
];

const stories = storiesOf('TagsInput', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

// Helper wrapper class to store the state so the stories are usable/interactive
class TagsInput extends React.Component {
  state = {
    tags: this.props.tags,
  };

  onChange = (tags) => {
    this.setState({ tags });
    this.props.onChange(tags);
  }

  render() {
    const { tags, onChange, ...rest } = this.props; //eslint-disable-line
    return <TagsInputCore tags={ this.state.tags } onChange={ this.onChange } { ...rest } />;
  }
}

stories.add('Default', withInfo()(() => {
  return <TagsInput onChange={ action('tokens changed') } tags={ SAMPLE_DATA }/>;
}));

stories.add('spacesAllowed', withInfo()(() => {
  return (
    <TagsInput
      onChange={ action('tokens changed') }
      tags={ SAMPLE_DATA }
      spacesAllowed={ true }
    />
  );
}));
