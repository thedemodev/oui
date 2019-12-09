import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean as _boolean, select } from '@storybook/addon-knobs';
import BlockList from './index.js';
import Button from '../Button';
import Token from '../Token';
import OverlayWrapper from '../OverlayWrapper';
var stories = storiesOf('BlockList', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Blocklist with knobs', function () {
  var guttersValue = select('gutters', ['loose', 'tight'], 'loose');
  var hrefValue = text('href', 'https://www.optimizely.com');
  var hrefTargetValue = select('hrefTarget', ['_self', '_blank'], '_blank');
  var hrefTitleValue = text('hrefTitle', 'Optimizely');

  var isDisabledValue = _boolean('isDisabled', false);

  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: true
  }, React.createElement(BlockList.Category, {
    header: "Recent Pages"
  }, React.createElement(BlockList.Item, {
    gutters: guttersValue,
    href: hrefValue,
    hrefTarget: hrefTargetValue,
    hrefTitle: hrefTitleValue,
    isDisabled: isDisabledValue
  }, "Home"), React.createElement(BlockList.Item, {
    gutters: guttersValue,
    href: hrefValue,
    hrefTarget: hrefTargetValue,
    hrefTitle: hrefTitleValue,
    isDisabled: isDisabledValue
  }, "Shopping Cart"), React.createElement(BlockList.Item, {
    gutters: guttersValue,
    href: hrefValue,
    hrefTarget: hrefTargetValue,
    hrefTitle: hrefTitleValue,
    isDisabled: isDisabledValue
  }, "Order Confirmation"))));
}).add('Blocklist with border', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: true
  }, React.createElement(BlockList.Category, {
    header: "Recent Pages"
  }, React.createElement(BlockList.Item, {
    onClick: action('click blocklist item home')
  }, "Home"), React.createElement(BlockList.Item, {
    onClick: action('click blocklist item shopping cart')
  }, "Shopping Cart"), React.createElement(BlockList.Item, {
    onClick: action('click blocklist item order confirmation')
  }, "Order Confirmation"))));
}).add('Blocklist with target link', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: true
  }, React.createElement(BlockList.Category, {
    header: React.createElement("div", {
      className: "flex"
    }, React.createElement("div", {
      className: "flex--1"
    }, "Attic & Button"), React.createElement("div", null, React.createElement("a", {
      href: "https://www.example.com/"
    }, "https://www.example.com/")))
  }, React.createElement(BlockList.Item, {
    onClick: action('clicked ')
  }, "Home"), React.createElement(BlockList.Item, {
    onClick: action('clicked ')
  }, "Shopping Cart"), React.createElement(BlockList.Item, {
    onClick: action('clicked ')
  }, "Order Confirmation"))));
}).add('Blocklist with inner button', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: true
  }, React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: action('click on example')
  }, " onClick Example")), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    href: "https://www.optimizely.com/",
    hrefTarget: "_blank"
  }, "href Example")), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: action('click on complex item')
  }, React.createElement("div", {
    className: "flex flex-align--center"
  }, React.createElement("div", {
    className: "flex--1"
  }, React.createElement("div", null, "Complex Item"), React.createElement("div", {
    className: "muted micro"
  }, "This is the item description.")), React.createElement(Button, {
    size: "small",
    style: "outline",
    width: "default"
  }, "Inner Button")))), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, null, "Plain Text Example"))));
}).add('Results with border', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: true
  }, React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: action('clicked Archive link')
  }, "Archive"), React.createElement(BlockList.Item, {
    onClick: action('clicked Pause link')
  }, "Pause")), React.createElement(BlockList.Item, {
    onClick: action('clicked on results')
  }, "View Results")));
}).add('Results with no border', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: false
  }, React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: action('clicked on Archive')
  }, "Archive"), React.createElement(BlockList.Item, {
    onClick: action('clicked on Pause')
  }, "Pause")), React.createElement(BlockList.Item, {
    onClick: action('clicked on Results')
  }, "View Results")));
}).add('Three dots', function () {
  return React.createElement("div", null, React.createElement(OverlayWrapper, {
    behavior: "click",
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    overlay: React.createElement(BlockList, {
      hasBorder: true
    }, React.createElement(BlockList.Item, null, "Archive"), React.createElement(BlockList.Item, null, "Pause"), React.createElement(BlockList.Item, null, "View Results")),
    shouldHideOnClick: true,
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, React.createElement(Button, {
    style: "unstyled",
    width: "default"
  }, "...")));
}).add('With text', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: true
  }, React.createElement(BlockList.Category, {
    header: "Recent Pages"
  }, React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus nulla, placerat at semper in, bibendum in lorem. Aenean rhoncus ac lectus et rutrum. Sed et arcu sit amet leo maximus facilisis quis non augue. Nullam enim sem, hendrerit id sapien ac, rhoncus hendrerit tortor. Proin id elit elementum, iaculis est vitae, ullamcorper neque. Proin efficitur porttitor nunc quis suscipit. Maecenas odio elit, varius et aliquam ac."), React.createElement(BlockList.Item, null, "https://wwww.example.com/path1/path2/path3/path4/path5/superlongvaluethatdoesntfitintheblocklistwhenitgetsveryveryveryveryveryveryveryveryverylong"))));
}).add('With scroll', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: true,
    maxHeight: "150px"
  }, React.createElement(BlockList.Category, {
    header: "BlockList with Scroll"
  }, React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, null, "Lorem ipsum dolor sit amet."))));
}).add('Blocklist with no side padding on items', function () {
  return React.createElement("div", null, React.createElement(BlockList, {
    hasBorder: false
  }, React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    gutters: "tight"
  }, React.createElement(Token, {
    name: "Global shoppers"
  }))), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    gutters: "tight"
  }, React.createElement(Token, {
    name: "Cold weather"
  }))), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    gutters: "tight"
  }, React.createElement(Token, {
    name: "Puppies"
  })))));
});