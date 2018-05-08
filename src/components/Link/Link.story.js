import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Link from './index.js';

const stories = storiesOf('Link', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));
stories
  .add('default', withInfo()(() => {
    return (
      <ul>
        <li>
          <Link
            href={ text('href', 'http://google.com') }
            isDisabled={ boolean('isDisabled', false) }
            style={ select('style',
              {
                default: 'default',
                dark: 'dark',
                muted: 'muted',
                'bad-news': 'bad-news',
                reverse: 'reverse',
              }, 'default') }>
            { text('children', 'Link') }
          </Link>
        </li>
      </ul>
    );
  }))
  .add('new window', withInfo()(() => {
    return (
      <ul>
        <li>
          <Link
            href={ text('href', 'http://google.com') }
            newWindow={ boolean('newWindow', true) }
            style={ select('style',
              {
                default: 'default',
                dark: 'dark',
                muted: 'muted',
                'bad-news': 'bad-news',
                reverse: 'reverse',
              }, 'default') }>
            { text('children', 'Link') }
          </Link>
        </li>
      </ul>
    );
  }))
  .add('all links', () => {
    return (
      <ul>
        <li><Link href="http://google.com" isDisabled={ boolean('isDisabled', false) } onClick={ action('click blocklist item home') }>{ text('default', 'Link') }</Link></li>
        <li><Link href="http://google.com" isDisabled={ boolean('isDisabled', false) } style="dark">{ text('dark', 'Link Dark') }</Link></li>
        <li><Link href="http://google.com" isDisabled={ boolean('isDisabled', false) } style="muted">{ text('muted', 'Link Muted') }</Link></li>
        <li><Link href="http://google.com" isDisabled={ boolean('isDisabled', false) } style="bad-news">{ text('bad-news', 'Link Bad News') }</Link></li>
        <li className="background--brand"><Link href="http://google.com" isDisabled={ boolean('isDisabled', false) } style="reverse">{ text('reverse', 'Link Reverse') }</Link></li>
      </ul>
    );
  })
  .add('all disabled', () => {
    return (
      <ul>
        <li><Link href="http://google.com" isDisabled={ true }>Link</Link></li>
        <li><Link href="http://google.com" isDisabled={ true } style="dark">Link Dark</Link></li>
        <li><Link href="http://google.com" isDisabled={ true } style="muted">Link Muted</Link></li>
        <li><Link href="http://google.com" isDisabled={ true } style="bad-news">Link Bad News</Link></li>
        <li className="background--brand"><Link href="http://google.com" isDisabled={ true } style="reverse">Link Reverse</Link></li>
      </ul>
    );
  })
  .add('onClick', () => {
    return (
      <ul>
        <li>
          <Link onClick={ action('Clicked a link...') }>
            Click Me!
          </Link>
        </li>
      </ul>
    );
  });
