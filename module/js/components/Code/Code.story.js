import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean as _boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Code from '../Code';
var langOptions = {
  'cs': 'cs',
  'css': 'css',
  'diff': 'diff',
  'html': 'html',
  'java': 'java',
  'javascript': 'javascript',
  'js': 'js',
  'jsx': 'jsx',
  'markdown': 'markdown',
  'md': 'md',
  'objectivec': 'objectivec',
  'php': 'php',
  'python': 'python',
  'ruby': 'ruby',
  'scss': 'scss',
  'swift': 'swift'
};
var stories = storiesOf('Code', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Code, {
    hasCopyButton: _boolean('hasCopyButton', true),
    testSection: "my-code-box",
    type: select('type', {
      inline: 'inline',
      block: 'block'
    }, 'block'),
    language: select('language', langOptions, 'js')
  }, text('code', 'var foo = `bar`; \nvar bat = `baz`;'));
}).add('With styled copy button', withInfo()(function () {
  return React.createElement(Code, {
    copyButtonStyle: "none",
    hasCopyButton: _boolean('hasCopyButton', true),
    testSection: "my-code-box",
    type: select('type', {
      inline: 'inline',
      block: 'block'
    }, 'block'),
    language: select('language', langOptions, 'js')
  }, text('code', 'var foo = `bar`; var bat = `baz`; var withAReallyReallyLongName = `a value with a really really long string`'));
}));