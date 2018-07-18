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
      <DiscloseTable.Head headerContents={
        <Table.TR>
          <Table.TH width="1%"></Table.TH>
          <Table.TH width="35%">Experiment Name</Table.TH>
          <Table.TH width="7%">Start Date</Table.TH>
          <Table.TH width="7%">End Date</Table.TH>
          <Table.TH width="7%">Visitors</Table.TH>
          <Table.TH width="7%">Status</Table.TH>
          <Table.TH>Project</Table.TH>
          <Table.TH width="5%">Type</Table.TH>
        </Table.TR>
      }>
      </DiscloseTable.Head>
      <DiscloseTable.Row rowContents={
          <Table.TR>
            <Table.TD width="1%">&gt;</Table.TD>
            <Table.TD width="35%">Experiment 1</Table.TD>
            <Table.TD width="7%">May 5, 2018</Table.TD>
            <Table.TD width="7%">June 1, 2018</Table.TD>
            <Table.TD width="7%">358</Table.TD>
            <Table.TD width="7%">Running</Table.TD>
            <Table.TD>Optimizely App - Web long name...</Table.TD>
            <Table.TD width="5%"></Table.TD>
          </Table.TR>
        }>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </DiscloseTable.Row>
      <DiscloseTable.Row rowContents={
          <Table.TR>
            <Table.TD width="1%">&gt;</Table.TD>
            <Table.TD width="35%">Experiment 2</Table.TD>
            <Table.TD width="7%">May 5, 2018</Table.TD>
            <Table.TD width="7%">June 1, 2018</Table.TD>
            <Table.TD width="7%">538</Table.TD>
            <Table.TD width="7%">Running</Table.TD>
            <Table.TD>Optimizely App - Web long name...</Table.TD>
            <Table.TD width="5%"></Table.TD>
          </Table.TR>
        }>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius
        expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis
        accusantium corporis, beatae maxime quasi. Tempora.</p>
      </DiscloseTable.Row>
    </DiscloseTable>
  </div>)))