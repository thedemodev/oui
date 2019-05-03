import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ButtonRow from './index.js';
import Button from '../Button';

const stories = storiesOf('ButtonRow', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('button row skip step', (() => (<div>
    <ButtonRow
      leftGroup={ [
        <Button key="1" style="plain" width="default">Skip this step</Button>,
      ] }
      rightGroup={ [
        <Button key="1" style="plain" width="default">Plain Button</Button>,
        <Button key="2" style="highlight" width="default">Highlight Button</Button>,
      ] }
    />
  </div>)))
  .add('buttons centered', (() => (<div>
    <ButtonRow
      centerGroup={ [
        <Button key="1" style="outline" width="default">Center Button</Button>,
        <Button key="2" style="highlight" width="default">Center Button</Button>,
      ] }
    />
  </div>)))
  .add('buttons fullwidth', (() => (<div>
    <ButtonRow
      centerGroup={ [
        <Button key="1" style="outline" width="full">Full Width</Button>,
        <Button key="2" style="outline" width="full">Full Width</Button>,
        <Button key="3" style="highlight" width="full">Full Width</Button>,
      ] }
    />
  </div>)));


