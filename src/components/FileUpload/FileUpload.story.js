import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import FileUpload from './index.js';

const stories = storiesOf('FileUpload', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('default', withInfo()(() => {
    return (
      <FileUpload
        onDrop={ action('file dropped') }
        onReject={ action('file rejected') }
        maxSize={ number('maxSize', 200) }
      />
    );
  }));

