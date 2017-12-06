import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Badge from '../components/Badge';
import Table from '../components/Table';
import Icon from 'react-oui-icons';

import Collapse from './Collapse';
import CollapseTable from './CollapseTable';

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
  },
};

const DiscloseRow = data.map((item, index) => {
  return (<Collapse
    key={ index }
    columns='10% 10% 20% 15% 15% 15% 15%'>
    <div>
      <Icon name='arrow-right' size='small' />
      <div>{item.revision}</div>
      <div>{item.type}</div>
      <Icon name='checkmark-running' />
      <Badge color="live">{item.status}</Badge>
      <div>{item.created}</div>
      <div>{item.size} KB </div>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: '#f6f6f6',
        padding: '0px 100px',
      }}>
      <div style={{ padding: '15px 0 15px 0', color: 'silver', borderBottom: '1px solid lightgrey'}}>Revision Key</div>
      <div style={{ padding: '15px 0 15px 0', borderBottom: '1px solid lightgrey'}}>{ item.revisionKey }</div>
      <div style={{ padding: '15px 0 15px 0', color: 'silver', borderBottom: '1px solid lightgrey'}}>Created At</div>
      <div style={{ padding: '15px 0 15px 0', borderBottom: '1px solid lightgrey'}}>{ item.date }</div>
      <div style={{ padding: '15px 0 15px 0', color: 'silver', borderBottom: '1px solid lightgrey'}}>url</div>
      <div style={{ padding: '15px 0 15px 0', borderBottom: '1px solid lightgrey'}}><a href="#">{ item.url }</a></div>
      <div style={{ padding: '15px 0 15px 0', color: 'silver'}}>File Size</div>
      <div style={{ padding: '15px 0 15px 0' }}>{ item.size } KB</div>
    </div>
  </Collapse>);
});

const DiscloseRowOld = data.map((item, index) => {
  return (<CollapseTable key={ index }>
    <Table.TR>
      <Table.TD>
        <Icon name='arrow-right' size='small' />
      </Table.TD>
      <Table.TD>
        <div>{item.revision}</div>
      </Table.TD>
      <Table.TD>
        <div>{item.type}</div>
      </Table.TD>
      <Table.TD>
        <Icon name='checkmark-running' />
      </Table.TD>
      <Table.TD>
        <Badge color="live">{item.status}</Badge>
      </Table.TD>
      <Table.TD>
        <div>{item.created}</div>
      </Table.TD>
      <Table.TD>
        <div>{item.size} KB </div>
      </Table.TD>
    </Table.TR>
    <Table.TR>
      <div style={{ background: '#f6f6f6', width: '100%'}}>
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
    </Table.TR>
  </CollapseTable>);
});

stories
  .add('with css grid', withInfo()(() => (<div style={ styles.container }>
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
  </div>)))
  .add('with table tags', withInfo()(() => (<div style={ styles.container }>
    <Table density="loose" style="rule">
      <Table.TBody>
        <Table.TR>
          <Table.TH>
          </Table.TH>
          <Table.TH>
            Revision
          </Table.TH>
          <Table.TH>
            Type
          </Table.TH>
          <Table.TH>
            Live
          </Table.TH>
          <Table.TH>
            Status
          </Table.TH>
          <Table.TH>
            Created At
          </Table.TH>
          <Table.TH>
            File Size
          </Table.TH>
        </Table.TR>
        { DiscloseRowOld }
      </Table.TBody>
    </Table>
  </div>)));
