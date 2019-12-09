import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, text } from '@storybook/addon-knobs';
import data from './data.json';
import Table from '../Table/index.js';
import CodeDiff from './index.js';
import 'react-gh-like-diff/lib/diff2html.min.css';
var stories = storiesOf('CodeDiff', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
var NEWTEXT = data.newFile;
var OLDTEXT = data.oldFile;
stories.add('Default', function () {
  return React.createElement(CodeDiff, {
    fileName: text('fileName', 'fileName.md'),
    updatedFileName: text('updatedFileName', 'updatedFileName.md'),
    oldText: text('oldText', 'Old\nText\nFile'),
    newText: text('newText', 'New file, hello\nText and some new lines.\nIt is new and improved!'),
    hideTitle: _boolean('hideTitle', false),
    hideInfo: _boolean('hideInfo', false)
  });
}).add('Minimal', function () {
  return React.createElement(CodeDiff, {
    fileName: text('fileName', 'fileName.md'),
    oldText: 'A test with old things',
    newText: 'A test with new things added and changed.',
    hideTitle: _boolean('hideTitle', false),
    hideInfo: _boolean('hideInfo', false)
  });
}).add('Nested Inside Table', function () {
  return React.createElement(Table, {
    density: "loose",
    tableLayoutAlgorithm: "fixed"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, "Before/After"))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement(CodeDiff, {
    fileName: text('fileName', 'fileName.md'),
    oldText: 'A test with old things',
    newText: 'A test with new things added and changed.',
    hideTitle: _boolean('hideTitle', false),
    hideInfo: _boolean('hideInfo', false)
  }))), React.createElement(Table.TR, {
    noHover: true
  }, React.createElement(Table.TD, null, React.createElement(Table, {
    density: "loose",
    tableLayoutAlgorithm: "fixed"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, " Experiment "), React.createElement(Table.TH, null, " Conversion Rate "), React.createElement(Table.TH, null, " Status "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Header CTA "), React.createElement(Table.TD, {
    width: "20%"
  }, " 12% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Shorter Contact Form "), React.createElement(Table.TD, null, " 4% "), React.createElement(Table.TD, null, " Draft ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Larger search bar "), React.createElement(Table.TD, null, " 6.7% "), React.createElement(Table.TD, null, " Paused ")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, " Center aligned headline "), React.createElement(Table.TD, null, " 9.3% "), React.createElement(Table.TD, null, " Running "))))))));
}).add('New Filename', function () {
  return React.createElement(CodeDiff, {
    fileName: text('fileName', 'fileName.md'),
    updatedFileName: text('updatedFileName', 'updatedFileName.md'),
    oldText: OLDTEXT,
    newText: NEWTEXT,
    hideTitle: _boolean('hideTitle', false),
    hideInfo: _boolean('hideInfo', false)
  });
}).add('Style Options', function () {
  return React.createElement("div", null, React.createElement(CodeDiff, {
    fileName: "iAmLineByLine.md",
    outputStyle: 'line-by-line',
    oldText: OLDTEXT,
    newText: NEWTEXT,
    hideTitle: _boolean('hideTitle', false),
    hideInfo: _boolean('hideInfo', false)
  }), React.createElement(CodeDiff, {
    fileName: "iAmSideBySide.md",
    outputStyle: 'side-by-side',
    oldText: OLDTEXT,
    newText: NEWTEXT,
    hideTitle: _boolean('hideTitle', false),
    hideInfo: _boolean('hideInfo', false)
  }));
}).add('No Differences', function () {
  return React.createElement(CodeDiff, {
    fileName: text('fileName', 'fileName.md'),
    oldText: OLDTEXT,
    newText: OLDTEXT,
    hideTitle: _boolean('hideTitle', false),
    hideInfo: _boolean('hideInfo', false)
  });
});