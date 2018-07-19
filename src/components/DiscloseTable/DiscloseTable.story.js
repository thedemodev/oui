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
    <Table>
      <Table.THead>
        <Table.TR>
          <Table.TH isCollapsed={true}></Table.TH>
          <Table.TH>Experiment Name</Table.TH>
          <Table.TH isNumerical={true}>Start Date</Table.TH>
          <Table.TH isNumerical={true}>End Date</Table.TH>
          <Table.TH isNumerical={true}>Visitors</Table.TH>
          <Table.TH isNumerical={true}>Status</Table.TH>
          <Table.TH isNumerical={true}>Project</Table.TH>
          <Table.TH isNumerical={true}>Type</Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <DiscloseTable.Row rowContents={ [
              <Table.TD>Experiment 1</Table.TD>,
              <Table.TD isNumerical={true}>May 5, 2018</Table.TD>,
              <Table.TD isNumerical={true}>June 1, 2018</Table.TD>,
              <Table.TD isNumerical={true}>358</Table.TD>,
              <Table.TD isNumerical={true}>Running</Table.TD>,
              <Table.TD isNumerical={true}>Optimizely App - Web long name...</Table.TD>,
              <Table.TD isNumerical={true}>A/B</Table.TD>,
            ]
          }>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
          expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
          accusantium corporis, beatae maxime quasi. Tempora.</p>
        </DiscloseTable.Row>
        <DiscloseTable.Row rowContents={ [
              <Table.TD>Experiment 1</Table.TD>,
              <Table.TD isNumerical={true}>May 5, 2018</Table.TD>,
              <Table.TD isNumerical={true}>June 1, 2018</Table.TD>,
              <Table.TD isNumerical={true}>358</Table.TD>,
              <Table.TD isNumerical={true}>Running</Table.TD>,
              <Table.TD isNumerical={true}>Optimizely App - Web long name...</Table.TD>,
              <Table.TD isNumerical={true}>A/B</Table.TD>,
            ]
          }>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
          expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
          accusantium corporis, beatae maxime quasi. Tempora.</p>
        </DiscloseTable.Row>
      </Table.TBody>
    </Table>
  </div>)))