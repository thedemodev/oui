import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean as _boolean, select } from '@storybook/addon-knobs';
import Link from './index.js';
import Button from '../Button';
var stories = storiesOf('Link', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    href: text('href', 'http://google.com'),
    isDisabled: _boolean('isDisabled', false),
    style: select('style', {
      "default": 'default',
      dark: 'dark',
      muted: 'muted',
      'bad-news': 'bad-news',
      reverse: 'reverse'
    }, 'default')
  }, text('children', 'Link'))));
}).add('New window', function () {
  return React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    href: text('href', 'http://google.com'),
    newWindow: _boolean('newWindow', true),
    style: select('style', {
      "default": 'default',
      dark: 'dark',
      muted: 'muted',
      'bad-news': 'bad-news',
      reverse: 'reverse'
    }, 'default')
  }, text('children', 'Link'))));
}).add('All links', function () {
  return React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: _boolean('isDisabled', false),
    onClick: action('click blocklist item home')
  }, text('default', 'Link'))), React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: _boolean('isDisabled', false),
    style: "dark"
  }, text('dark', 'Link Dark'))), React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: _boolean('isDisabled', false),
    style: "muted"
  }, text('muted', 'Link Muted'))), React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: _boolean('isDisabled', false),
    style: "bad-news"
  }, text('bad-news', 'Link Bad News'))), React.createElement("li", {
    className: "background--brand"
  }, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: _boolean('isDisabled', false),
    style: "reverse"
  }, text('reverse', 'Link Reverse'))));
}).add('All disabled', function () {
  return React.createElement("ul", null, React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: true
  }, "Link")), React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: true,
    style: "dark"
  }, "Link Dark")), React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: true,
    style: "muted"
  }, "Link Muted")), React.createElement("li", null, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: true,
    style: "bad-news"
  }, "Link Bad News")), React.createElement("li", {
    className: "background--brand"
  }, React.createElement(Link, {
    href: "http://google.com",
    isDisabled: true,
    style: "reverse"
  }, "Link Reverse")));
}).add('Link that looks like a Button', function () {
  return React.createElement(Link, {
    newWindow: true,
    href: text('href', 'http://google.com')
  }, React.createElement(Button, {
    onClick: null
  }, "Go To Google"));
});
storiesOf('Link (Fake)', module).addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
}).add('Enabled', function () {
  return React.createElement(Link, null, "Faux Link");
}).add('Disabled', function () {
  return React.createElement(Link, {
    isDisabled: true
  }, "Faux Link");
});