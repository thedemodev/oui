import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, text } from '@storybook/addon-knobs';
import noop from 'lodash.noop';
import Dialog, { DialogNew } from './index.js';
import Fieldset from '../Fieldset';
import Button from '../Button';
import Input from '../Input';
import Dropdown from '../Dropdown/index.js';
import BlockList from '../BlockList';
import { action } from '@storybook/addon-actions';
import Label from '../Label/index.js';
import ButtonRow from '../ButtonRow/index.js';
var data = [{
  title: 'JavaScript'
}, {
  title: 'Java'
}, {
  title: 'C++'
}];
var LanguageDropdown = React.createElement(Dropdown, {
  buttonContent: text('buttonContent', 'None Selected'),
  width: 300,
  arrowIcon: "down"
}, React.createElement(BlockList, null, data.map(function (item, index) {
  return React.createElement(BlockList.Category, {
    header: item.header,
    key: index
  }, React.createElement(BlockList.Item, {
    onClick: action('click on dropdown item')
  }, React.createElement("div", {
    className: "flex flex-align--center"
  }, React.createElement("div", {
    className: "flex--1"
  }, React.createElement("div", null, item.title)))));
})));
var stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('default', function () {
  return React.createElement("div", null, React.createElement("div", null, ' ', React.createElement("p", null, "This is text behind the dialog that is blocked by the overlay.")), React.createElement(DialogNew, {
    title: text('title', 'This is a  Dialog'),
    subtitle: text('subtitle', 'This is an optional subtitle'),
    hasCloseButton: _boolean('hasCloseButton', true),
    hasOverlay: _boolean('hasOverlay', true),
    onClose: action('Dialog was closed'),
    footerButtonList: [React.createElement(Button, {
      style: "plain",
      key: 0,
      onClick: noop
    }, "Cancel"), React.createElement(Button, {
      style: "highlight",
      key: 1,
      onClick: noop
    }, "Save")]
  }, React.createElement(Fieldset, {
    title: "Project Settings",
    description: "Some quick setup",
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-01",
    label: "Verify Email",
    type: "email"
  }), React.createElement(Input, {
    id: "input-02",
    label: "Confirm Email",
    type: "email"
  }))));
}).add('with a form and dropdown', function () {
  return React.createElement("div", null, React.createElement("div", null, ' ', React.createElement("p", null, "This is text behind the dialog that is blocked by the overlay.")), React.createElement(DialogNew, {
    title: text('title', 'Welcome to this Feature'),
    subtitle: React.createElement("p", null, "Let's get you up and running with ", React.createElement("a", {
      href: "https://www.optimizely.com/"
    }, "our feature.")),
    hasCloseButton: _boolean('hasCloseButton', true),
    hasOverlay: _boolean('hasOverlay', true),
    onClose: action('Dialog was closed'),
    footerButtonList: [React.createElement(Button, {
      style: "highlight",
      key: 0,
      onClick: noop
    }, "Get Started")]
  }, React.createElement(Fieldset, {
    title: "Project Settings",
    description: "Some quick setup",
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-03",
    label: "Project Name",
    type: "text"
  }), React.createElement(Input, {
    id: "input-04",
    label: "Description",
    type: "text"
  })), React.createElement(Label, null, "Select your language"), LanguageDropdown));
}).add('with scrolling', function () {
  return React.createElement("div", null, React.createElement("div", null, ' ', React.createElement("p", null, "This is text behind the dialog that is blocked by the overlay.")), React.createElement(DialogNew, {
    title: text('title', 'Welcome to this Feature'),
    hasCloseButton: _boolean('hasCloseButton', true),
    onClose: action('Dialog was closed'),
    hasOverlay: _boolean('hasOverlay', true),
    footerButtonList: [React.createElement(Button, {
      style: "highlight",
      key: 0,
      onClick: noop
    }, "Get Started in the Docs")]
  }, React.createElement("p", null, "Content should be kept to small, digestible amounts. If you need more space, consider using a ", React.createElement("b", null, "Sheet"), ". If the content does overflow the space, the dialog will scroll."), React.createElement("p", {
    className: "muted"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."), React.createElement("p", {
    className: "muted"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."), React.createElement("p", {
    className: "muted"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")));
}).add('with simple text and link', function () {
  return React.createElement("div", null, React.createElement("p", null, "This is text behind the dialog that is blocked by the overlay."), React.createElement(DialogNew, {
    title: text('title', 'This is a Dialog'),
    hasCloseButton: _boolean('hasCloseButton', false),
    hasOverlay: _boolean('hasOverlay', true),
    footerButtonList: [React.createElement(Button, {
      style: "plain",
      key: 0,
      onClick: noop
    }, "No Thanks"), React.createElement(Button, {
      style: "highlight",
      key: 1,
      onClick: noop
    }, "Continue")]
  }, React.createElement("p", null, "Dialogs can also contain only text in the body, no data input."), React.createElement("p", null, "They can also contain links, like ", React.createElement("a", {
    href: "https://www.optimizely.com/"
  }, "learn more about Optimizely features"), ".")));
}).add('without overlay', function () {
  return React.createElement("div", null, React.createElement("p", null, "This is text behind the dialog that is NOT blocked by the overlay because the overlay is hidden."), React.createElement(DialogNew, {
    title: text('title', 'This is a Dialog'),
    hasCloseButton: _boolean('hasCloseButton', false),
    hasOverlay: _boolean('hasOverlay', false),
    footerButtonList: [React.createElement(Button, {
      style: "plain",
      key: 0,
      onClick: noop
    }, "No Thanks"), React.createElement(Button, {
      style: "highlight",
      key: 1,
      onClick: noop
    }, "Continue")]
  }, React.createElement("p", null, "Dialogs can also contain only text in the body, no data input."), React.createElement("p", null, "They can also contain links, like ", React.createElement("a", {
    href: "https://www.optimizely.com/"
  }, "learn more about Optimizely features"), ".")));
}).add('deprecated dialog', function () {
  return React.createElement("div", null, React.createElement(Dialog.Wrapper, null, React.createElement(Dialog.Title, {
    subtitle: "Test Subtitle"
  }, "This is a Dialog"), React.createElement(Dialog.Fieldset, {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-05",
    label: "Some data",
    type: "text"
  })), React.createElement(Dialog.Fieldset, {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-06",
    label: "Some data",
    type: "text"
  })), React.createElement(Dialog.Footer, null, React.createElement(ButtonRow, {
    rightGroup: [React.createElement(Button, {
      style: "plain",
      key: 0,
      onClick: noop
    }, "Cancel"), React.createElement(Button, {
      style: "highlight",
      key: 1,
      onClick: noop
    }, "Save")]
  }))));
});