import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import BlockList from './index.js';
import Button from '../Button';
import OverlayWrapper from '../OverlayWrapper';

const stories = storiesOf('BlockList', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('blocklist with border', withInfo()(() => <div>
    <BlockList hasBorder={ true } >
      <BlockList.Category header="Recent Pages">
        <BlockList.Item onClick={ action('click blocklist item home') }>
          Home
        </BlockList.Item>
        <BlockList.Item onClick={ action('click blocklist item shopping cart') }>
          Shopping Cart
        </BlockList.Item>
        <BlockList.Item onClick={ action('click blocklist item order confirmation') }>
          Order Confirmation
        </BlockList.Item>
      </BlockList.Category>
    </BlockList>
  </div>))
  .add('blocklist with target link', withInfo()(() => <div>
    <BlockList hasBorder={ true }>
      <BlockList.Category
        header={ <div className="flex"><div className="flex--1">Attic & Button</div>
          <div><a href="https://www.example.com/">https://www.example.com/</a></div></div> }>
        <BlockList.Item onClick={ action('clicked ') }>
          Home
        </BlockList.Item>
        <BlockList.Item onClick={ action('clicked ') }>
          Shopping Cart
        </BlockList.Item>
        <BlockList.Item onClick={ action('clicked ') }>
          Order Confirmation
        </BlockList.Item>
      </BlockList.Category>
    </BlockList>
  </div>))
  .add('blocklist with inner button', withInfo()(() => <div>
    <BlockList hasBorder={ true }>
      <BlockList.Category>
        <BlockList.Item onClick={ action('click on example') }> onClick Example</BlockList.Item>
      </BlockList.Category>
      <BlockList.Category>
        <BlockList.Item href="https://www.optimizely.com/" hrefTarget="_blank">href Example</BlockList.Item>
      </BlockList.Category>
      <BlockList.Category>
        <BlockList.Item onClick={ action('click on complex item') }>
          <div className="flex flex-align--center">
            <div className="flex--1">
              <div>Complex Item</div>
              <div className="muted micro">This is the item description.</div>
            </div>
            <Button size="small" style="outline" width="default">Inner Button</Button>
          </div>
        </BlockList.Item>
      </BlockList.Category>
      <BlockList.Category>
        <BlockList.Item>Plain Text Example</BlockList.Item>
      </BlockList.Category>
    </BlockList>
  </div>))
  .add('results with border', withInfo()(() => <div>
    <BlockList hasBorder={ true }>
      <BlockList.Category>
        <BlockList.Item onClick={ action('clicked Archive link') }>Archive</BlockList.Item>
        <BlockList.Item onClick={ action('clicked Pause link') }>Pause</BlockList.Item>
      </BlockList.Category>
      <BlockList.Item onClick={ action('clicked on results') }>View Results</BlockList.Item>
    </BlockList>
  </div>))
  .add('results with no border', withInfo()(() => <div>
    <BlockList hasBorder={ false }>
      <BlockList.Category>
        <BlockList.Item onClick={ action('clicked on Archive') }>Archive</BlockList.Item>
        <BlockList.Item onClick={ action('clicked on Pause') }>Pause</BlockList.Item>
      </BlockList.Category>
      <BlockList.Item onClick={ action('clicked on Results') }>View Results</BlockList.Item>
    </BlockList>
  </div>))
  .add('three dots', withInfo()(() => <div>
    <OverlayWrapper
      behavior="click" horizontalAttachment="left" horizontalTargetAttachment="left"
      overlay={ <BlockList
        hasBorder={ true }><BlockList.Item>Archive</BlockList.Item>
        <BlockList.Item>Pause</BlockList.Item>
        <BlockList.Item>View Results</BlockList.Item></BlockList> }
      shouldHideOnClick={ true } verticalAttachment="top" verticalTargetAttachment="bottom">
      <Button style="unstyled" width="default">
                ...
      </Button>
    </OverlayWrapper>
  </div>))
  .add('with text', withInfo()(() => <div>
    <BlockList hasBorder={ true }>
      <BlockList.Category header="Recent Pages">
        <BlockList.Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus nulla, placerat at semper in,
          bibendum in lorem. Aenean rhoncus ac lectus et rutrum. Sed et arcu sit amet leo maximus facilisis quis non
          augue. Nullam enim sem, hendrerit id sapien ac, rhoncus hendrerit tortor. Proin id elit elementum, iaculis
          est vitae, ullamcorper neque. Proin efficitur porttitor nunc quis suscipit. Maecenas odio elit, varius et aliquam ac.
        </BlockList.Item>
        <BlockList.Item>
            https://wwww.example.com/path1/path2/path3/path4/path5/superlongvaluethatdoesntfitintheblocklistwhenitgetsveryveryveryveryveryveryveryveryverylong
        </BlockList.Item>
      </BlockList.Category>
    </BlockList>
  </div>))
  .add('with scroll', withInfo()(() => <div>
    <BlockList hasBorder={ true } maxHeight="150px">
      <BlockList.Category header="BlockList with Scroll">
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
        <BlockList.Item>Lorem ipsum dolor sit amet.</BlockList.Item>
      </BlockList.Category>
    </BlockList>
  </div>));

