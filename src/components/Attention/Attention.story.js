import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Attention from '../Attention';

const typeOptions = {
  'bad-news': 'bad-news',
  'brand': 'brand',
  'good-news': 'good-news',
  'warning': 'warning',
};

const stories = storiesOf('Attention', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('attentions states', withInfo()(() => {
    return (
      <div>
        <Attention
          alignment={ select('alignment', { center: 'center', left: 'left' }, 'center') }
          isDismissible={ boolean('isDismissible', false) }
          testSection="attention-foo"
          type={ select('type', typeOptions, 'warning') } >
          {text('content', 'Hello! This is a short attention bar.')}
        </Attention>

        <div className="oui-attention oui-text--center">
          <svg className="oui-icon oui-attention__close"></svg>
          This is a note.
        </div>

        <div className="oui-attention oui-text--center">
          <div className="oui-attention__close">
            <button data-oui-component="true" className="oui-button oui-button--plain oui-button--small oui-button--default" type="button" data-test-section="attention-foo-dismiss" aria-label="Close alert">
              <svg data-oui-component="true" className="oui-icon display--inline oui-icon--12" height="12" name="close" stroke="none" fill="currentColor" viewBox="0 0 24 24" width="12"><path d="M20.667 21.167a.502.502 0 0 1-.354-.146L2.98 3.687a.5.5 0 0 1 .707-.707L21.02 20.313a.5.5 0 0 1-.353.854z"></path><path d="M3.333 21.167a.5.5 0 0 1-.354-.853L20.313 2.98a.5.5 0 0 1 .707.707L3.687 21.02a.5.5 0 0 1-.354.147z"></path></svg>
            </button>
          </div>
          This is a note.
        </div>

      </div>
    );
  }));
