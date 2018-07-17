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
        <Table.TBody>
          <DiscloseTable.Row 
            rowContents={
              <Table.TR>
                <Table.TD>Experiment 2</Table.TD>
                <Table.TD>May 5, 2018</Table.TD>
                <Table.TD>June 1, 2018</Table.TD>
                <Table.TD>538</Table.TD>
                <Table.TD>Running</Table.TD>
                <Table.TD>Optimizely App - Web long name...</Table.TD>
                <Table.TD></Table.TD>
              </Table.TR>
            }>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
            expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
            accusantium corporis, beatae maxime quasi. Tempora.</p>
          </DiscloseTable.Row>
        </Table.TBody>
    </DiscloseTable>
  </div>)))