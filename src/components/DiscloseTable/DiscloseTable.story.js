import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import DiscloseTable from './index.js';
import Table from '../Table';

const stories = storiesOf('DiscloseTable', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

  stories
  .add('default', withInfo()(() => (<div>
    <DiscloseTable>
        <Table.THead>
            <Table.TR>
                <Table.TH>Experiment Name</Table.TH>
                <Table.TH>Start Date</Table.TH>
                <Table.TH>End Date</Table.TH>
                <Table.TH>Visitors</Table.TH>
                <Table.TH>Status</Table.TH>
                <Table.TH>Project</Table.TH>
                <Table.TH>Type</Table.TH>
            </Table.TR>
        </Table.THead>
    </DiscloseTable>
  </div>)))