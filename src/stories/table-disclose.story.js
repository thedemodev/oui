import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Badge from '../components/Badge';
import Table from '../components/Table';
import Icon from 'react-oui-icons';

import Collapse from './Collapse';

const data = [
  {
    revision: 1,
    type: 'Snippet',
    live: true,
    status: 'success',
    created: '3 days ago',
    size: 88.37,
    revisionKey: 'PROJECT_PREVIEW-969868595',
    date: 'Fri Dec 01 2017 10:18:03 GMT-0800 (PST)',
    url: 'https://cdn.optimizely.com/js/preview_2/8484849',
  },
  {
    revision: 3,
    type: 'Preview Snippet',
    live: true,
    status: 'PENDING',
    created: '8 days ago',
    size: 88.37,
    revisionKey: 'PROJECT_PREVIEW-969868595',
    date: 'Fri Dec 01 2017 10:18:03 GMT-0800 (PST)',
    url: 'https://cdn.optimizely.com/js/preview_2/8484849',
  },
  {
    revision: 8,
    type: 'Snippet',
    live: true,
    status: 'SUCCESS',
    created: '1 hour ago',
    size: 88.37,
    revisionKey: 'PROJECT_PREVIEW-969868595',
    date: 'Fri Dec 01 2017 10:18:03 GMT-0800 (PST)',
    url: 'https://cdn.optimizely.com/js/preview_2/8484849',
  },
  {
    revision: 1,
    type: 'Snippet',
    live: true,
    status: 'SUCCESS',
    created: '3 days ago',
    size: 88.37,
    revisionKey: 'PROJECT_PREVIEW-969868595',
    date: 'Fri Dec 01 2017 10:18:03 GMT-0800 (PST)',
    url: 'https://cdn.optimizely.com/js/preview_2/8484849',
  },
  {
    revision: 5,
    type: 'Preview Snippet',
    live: true,
    status: 'PENDING',
    created: '3 days ago',
    size: 88.37,
    revisionKey: 'PROJECT_PREVIEW-969868595',
    date: 'Fri Dec 01 2017 10:18:03 GMT-0800 (PST)',
    url: 'https://cdn.optimizely.com/js/preview_2/8484849',
  },
];

const stories = storiesOf('TableDisclose', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

const styles = {
  container: {
    width: '100%',
    border: '1px solid #f6f6f6',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'repeat(auto-fill, 50px)',
  },
};

const DiscloseRow = data.map((item, index) => {
  return (<Collapse
    key={ index }
    columns='10% 10% 20% 15% 15% 15% 15%'>
    <div>
      <Icon name='arrow-right' />
      <div>{item.revision}</div>
      <div>{item.type}</div>
      <Icon name='checkmark-running' />
      <Badge color="live">{item.status}</Badge>
      <div>{item.created}</div>
      <div>{item.size} KB </div>
    </div>
    <div style={{ background: '#f6f6f6', padding: '10px 50px'}}>
      <Table density="loose" style="rule">
        <Table.TBody>
          <Table.TR>
            <Table.TD>
              Revision Key
            </Table.TD>
            <Table.TD>
              { item.revisionKey }
            </Table.TD>
          </Table.TR>

          <Table.TR>
            <Table.TD>
              Created At
            </Table.TD>
            <Table.TD>
              { item.date }
            </Table.TD>
          </Table.TR>

          <Table.TR>
            <Table.TD>
              url
            </Table.TD>
            <Table.TD>
              { item.url }
            </Table.TD>
          </Table.TR>

          <Table.TR>
            <Table.TD>
              File Size
            </Table.TD>
            <Table.TD>
              { item.size } KB
            </Table.TD>
          </Table.TR>

        </Table.TBody>
      </Table>
    </div>
  </Collapse>);
});

stories
  .add('experiment', withInfo()(() => (<div style={ styles.container }>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '10% 10% 20% 15% 15% 15% 15%',
        padding: '15px 5px 15px 15px',
        borderBottom: '1px solid #f6f6f6',
      }}>
      <div></div>
      <div>Revision</div>
      <div>Type</div>
      <div>Live</div>
      <div>Status</div>
      <div>Created</div>
      <div>File Size</div>
    </div>
    { DiscloseRow }
  </div>)));
