import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import data from './data.json';
import Table from '../Table/index.js';

import CodeDiff from './index.js';
import 'react-gh-like-diff/lib/diff2html.min.css';

const stories = storiesOf('CodeDiff', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

const NEWTEXT = data.newFile;
const OLDTEXT = data.oldFile;

stories
  .add('Default test', (() => {
    return (
      <CodeDiff
        fileName={ text('fileName', 'fileName.md') }
        updatedFileName={ text('updatedFileName', 'updatedFileName.md') }
        oldText={ text('oldText', 'Old\nText\nFile') }
        newText={ text('newText', 'New file, hello\nText and some new lines.\nIt is new and improved!') }
        hideTitle={ boolean('hideTitle', false) }
        hideInfo={ boolean('hideInfo', false) }
      />
    );
  }))
  .add('Simple test', (() => {
    return (
      <CodeDiff
        fileName={ text('fileName', 'fileName.md') }
        oldText={ 'A test with old things' }
        newText={ 'A test with new things added and changed.' }
        hideTitle={ boolean('hideTitle', false) }
        hideInfo={ boolean('hideInfo', false) }
      />
    );
  }))
  .add('Tables nested', (() => {
    return (
      <Table density="loose" tableLayoutAlgorithm="fixed">
        <Table.THead>
          <Table.TR>
            <Table.TH>Before/After</Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR>
            <Table.TD>
              <CodeDiff
                fileName={ text('fileName', 'fileName.md') }
                oldText={ 'A test with old things' }
                newText={ 'A test with new things added and changed.' }
                hideTitle={ boolean('hideTitle', false) }
                hideInfo={ boolean('hideInfo', false) }
              />
            </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    );
  }))
  .add('New filename', (() => {
    return (
      <CodeDiff
        fileName={ text('fileName', 'fileName.md') }
        updatedFileName={ text('updatedFileName', 'updatedFileName.md') }
        oldText={ OLDTEXT }
        newText={ NEWTEXT }
        hideTitle={ boolean('hideTitle', false) }
        hideInfo={ boolean('hideInfo', false) }
      />
    );
  }))
  .add('Style options', (() => {
    return (
      <div>
        <CodeDiff
          fileName='iAmLineByLine.md'
          outputStyle={ 'line-by-line' }
          oldText={ OLDTEXT }
          newText={ NEWTEXT }
          hideTitle={ boolean('hideTitle', false) }
          hideInfo={ boolean('hideInfo', false) }
        />
        <CodeDiff
          fileName='iAmSideBySide.md'
          outputStyle={ 'side-by-side' }
          oldText={ OLDTEXT }
          newText={ NEWTEXT }
          hideTitle={ boolean('hideTitle', false) }
          hideInfo={ boolean('hideInfo', false) }
        />
      </div>
    );
  }))
  .add('No differences', (() => {
    return (
      <CodeDiff
        fileName={ text('fileName', 'fileName.md') }
        oldText={ OLDTEXT }
        newText={ OLDTEXT }
        hideTitle={ boolean('hideTitle', false) }
        hideInfo={ boolean('hideInfo', false) }
      />
    );
  }));
