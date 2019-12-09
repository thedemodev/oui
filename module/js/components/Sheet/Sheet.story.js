import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean as _boolean } from '@storybook/addon-knobs';
import noop from 'lodash.noop';
import { action } from '@storybook/addon-actions';
import Sheet from './index.js';
import Button from '../Button';
import Fieldset from '../Fieldset';
import Input from '../Input';
var stories = storiesOf('Sheet', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("div", null, React.createElement("p", null, "This is text behind the sheet that is blocked by the overlay."), React.createElement(Sheet, {
    title: text('title', 'This is a Sheet'),
    subtitle: text('subtitle', 'This is an optional subtitle string'),
    hasCloseButton: _boolean('hasCloseButton', true),
    onClose: action('Sheet was closed'),
    footerButtonList: [React.createElement(Button, {
      style: "plain",
      key: 0,
      onClick: noop
    }, "Cancel"), React.createElement(Button, {
      style: "highlight",
      key: 1,
      onClick: noop
    }, "Confirm")]
  }, React.createElement(Fieldset, {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-01",
    label: "Some data",
    type: "text"
  }), React.createElement(Input, {
    id: "input-02",
    label: "Some more data",
    type: "text"
  })), React.createElement(Fieldset, {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-03",
    label: "Some data",
    type: "text"
  })), React.createElement(Fieldset, {
    title: "Project Details"
  }, React.createElement(Input, {
    id: "input-04",
    label: "Target URL",
    type: "text",
    isRequired: true
  }))));
}).add('With a link in subtitle', function () {
  return React.createElement("div", null, React.createElement("p", null, "This is text behind the sheet that is blocked by the overlay."), React.createElement(Sheet, {
    title: text('title', 'This is a Sheet'),
    subtitle: React.createElement("p", null, "Subtitles can also take nodes,", ' ', React.createElement("a", {
      href: "https://www.optimizely.com/"
    }, "like a link")),
    hasCloseButton: _boolean('hasCloseButton', true),
    onClose: action('Sheet was closed'),
    footerButtonList: [React.createElement(Button, {
      style: "plain",
      key: 0,
      onClick: noop
    }, "Cancel"), React.createElement(Button, {
      style: "highlight",
      key: 1,
      onClick: noop
    }, "Confirm")]
  }, React.createElement(Fieldset, {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-01",
    label: "Some data",
    type: "text"
  }), React.createElement(Input, {
    id: "input-02",
    label: "Some more data",
    type: "text"
  })), React.createElement(Fieldset, {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-03",
    label: "Some data",
    type: "text"
  })), React.createElement(Fieldset, {
    title: "Project Details"
  }, React.createElement(Input, {
    id: "input-04",
    label: "Target URL",
    type: "text",
    isRequired: true
  }))));
}).add('With a warning', function () {
  return React.createElement("div", null, React.createElement("p", null, "This is text behind the sheet that is blocked by the overlay."), React.createElement(Sheet, {
    title: text('title', 'This is a Sheet'),
    subtitle: React.createElement("p", null, "Subtitles can also take nodes,", ' ', React.createElement("a", {
      href: "https://www.optimizely.com/"
    }, "like a link")),
    hasCloseButton: _boolean('hasCloseButton', true),
    onClose: action('Sheet was closed'),
    warningContent: text('warningContent', 'You do not have permissions to edit.'),
    warningTestSection: text('warningTestSection', 'sheet-warning-01'),
    footerButtonList: [React.createElement(Button, {
      style: "plain",
      key: 0,
      onClick: noop
    }, "Cancel"), React.createElement(Button, {
      style: "highlight",
      key: 1,
      onClick: noop
    }, "Confirm")]
  }, React.createElement(Fieldset, {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-01",
    label: "Some data",
    type: "text"
  }), React.createElement(Input, {
    id: "input-02",
    label: "Some more data",
    type: "text"
  })), React.createElement(Fieldset, {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, React.createElement(Input, {
    id: "input-03",
    label: "Some data",
    type: "text"
  })), React.createElement(Fieldset, {
    title: "Project Details"
  }, React.createElement(Input, {
    id: "input-04",
    label: "Target URL",
    type: "text",
    isRequired: true
  }))));
});