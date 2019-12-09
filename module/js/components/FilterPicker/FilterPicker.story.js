import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Dropdown from '../Dropdown';
import Button from '../Button';
import BlockList from '../BlockList';
import HelpPopover from '../HelpPopover';
import Input from '../Input';
import Token from '../Token';
import FilterPicker from './index.js';
/**
 * This is a clone of the contents of README.md,
 * temporarily inlined due to Storybook Issue #3458 (see below)
 *
 * TODO(https://github.com/storybooks/storybook/issues/3458) Remove and use imported README.md #3458 is released and we've updated
 * TODO(https://github.com/storybooks/storybook/issues/4499) Find a way to improve markdown formatting in the "Show Info" section
 */

/* eslint-disable max-len */

var infoAddonConfig = {
  header: false,
  text: "\n# FilterList\n.\n### ABOUT:\nFilterPicker is React _Render Component_ that uses [render props](https://reactjs.org/docs/render-props.html) to abstract\naway some of the implementation complexity while allowing for maximum extensibility. This pattern was used to avoid a\n\"props explosion\" that would come with all the variations we have of this pattern. This approach will give control to\nthe implementer and keep this component lean.\n.\n*-* **ATTN:** If a max scrollable height should be used (likely in most cases), consider using use an oui class like \"max-scroll--medium\" around `BlockList.Category`\n*-* **ATTN:** If a search Input will be used with `Blocklist` and `FilterList.ListItem`, consider wrapping `Blocklist` inside a div with the `oui-filter-picker-list` class to remove the Input's bottom border (see story and story source for example)\n*-* Using `react-immutable-proptypes`, FilterPicker can be used with Immutable or POJO datasets\n*-* By default, this component filters `selectedEntityIds` and items that don't match the `filterQuery` to create and return `availableEntities` via the render props function\n*-* If a `customFilterFn` is used, it will be used in place of the `filterQuery` filter. If `selectedEntityIds` should be kept in, simply do not include that list as a component prop\n*-* Find out more below\n.\nSee more how this was implemented in [`FilterPicker.story.js`](https://github.com/optimizely/oui/blob/devel/src/components/FilterPicker/FilterPicker.story.js).\n"
};
/* eslint-enable max-len */

storiesOf('FilterPicker', module).addDecorator(withKnobs).addDecorator(withInfo(infoAddonConfig)).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
}).add('Audiences', function () {
  var AudienceConfig = {
    ANY: 'ANY',
    ALL: 'ALL',
    CUSTOM: 'CUSTOM'
  };
  var dropdownOptions = object('Dropdown Options', [{
    renderTitle: function renderTitle() {
      return React.createElement("span", null, "Match ", React.createElement("strong", null, "any"), " audience");
    },
    // eslint-disable-line react/display-name
    description: 'A visitor will be in this experiment if they match one or more of the audiences specified.',
    id: AudienceConfig.ANY
  }, {
    renderTitle: function renderTitle() {
      return React.createElement("span", null, "Match ", React.createElement("strong", null, "all"), " audiences");
    },
    // eslint-disable-line react/display-name
    description: 'A visitor will be in this experiment if they match all of the audiences specified.',
    id: AudienceConfig.ALL
  }, {
    renderTitle: function renderTitle() {
      return 'Custom';
    },
    description: 'Visitors will be in this experiment if they match the provided audience JSON object.',
    id: AudienceConfig.CUSTOM
  }]);
  var allEntityDataValue = object('allEntities', [{
    name: 'QA Group',
    description: 'An audience used by QA to verify tests are working.',
    id: 123
  }, {
    name: 'Lifetime Revenue Over 5k',
    description: 'Authenticated users who have purchased over 5k.',
    id: 456
  }, {
    name: 'Lifetime Revenue Under 1k',
    description: 'Authenticated users who have purchased under 1k.',
    id: 789
  }, {
    name: 'Men over 25',
    description: 'Authenticated users over 25 who identify as male.',
    id: 135
  }, {
    name: 'Women over 25',
    description: 'Authenticated users over 25 who identify as female.',
    id: 246
  }]);
  var keysToSearchValue = object('keysToSearch', ['name', 'description']);
  var selectedEntityIdsValue = object('selectedEntityIds', [123, 456]); // Use recompose withState and return below to make
  // a more comprehensive and interactive story

  return React.createElement(FilterPicker, {
    allEntities: allEntityDataValue,
    selectedEntityIds: selectedEntityIdsValue,
    keysToSearch: keysToSearchValue
  }, function (_ref) {
    var availableEntities = _ref.availableEntities,
        filterQuery = _ref.filterQuery,
        handleFilterInput = _ref.handleFilterInput,
        selectedEntities = _ref.selectedEntities;
    return React.createElement(React.Fragment, null, React.createElement("h3", {
      className: "flex"
    }, "Audiences", React.createElement("div", {
      className: "push-half--left"
    }, React.createElement(HelpPopover, {
      horizontalAttachment: "left",
      popoverTitle: "Audiences",
      verticalAttachment: "top"
    }, React.createElement("p", null, "Who do you want to see your campaign? Audiences in Optimizely X work much like they did in Optimizely Classic. Use them to show your experiment to groups of visitors that you define."), React.createElement("p", null, "Add conditions to define an audience, including: location, device, and more. In Optimizely X, you can also target visitors based on their behavior on your site (using events and tags)."), React.createElement("p", null, "Audiences are optional for experiments, so skip this if you want your experiment to run for all visitors.")))), React.createElement("div", null, "Choose the audience(s) you'd like to show this experience to. If you choose more than one audience, you'll be prompted to choose a match type."), React.createElement("div", {
      className: "push--ends"
    }, React.createElement(Dropdown, {
      arrowIcon: "down",
      buttonContent: dropdownOptions.find(function (option) {
        return option.id === 'ANY';
      }).renderTitle(),
      style: "outline",
      value: 'ANY'
    }, React.createElement(BlockList, null, dropdownOptions.map(function (item) {
      return React.createElement(BlockList.Category, {
        key: item.id
      }, React.createElement(BlockList.Item, {
        onClick: function onClick() {
          // eslint-disable-line react/jsx-no-bind
          action('Dropdown Select')(item.id);
        }
      }, React.createElement("div", {
        className: "flex flex-align--center"
      }, React.createElement("div", {
        className: "flex--1"
      }, React.createElement("div", null, dropdownOptions.find(function (option) {
        return option.id === item.id;
      }).renderTitle()), React.createElement("div", {
        className: "muted micro"
      }, item.description)))));
    })))), !selectedEntities.length && React.createElement("div", {
      className: "flex--none push-double--ends"
    }, React.createElement(Token, {
      name: "Everyone"
    })), !!selectedEntities.length && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "muted"
    }, "To be in this experiment, a visitor must match"), React.createElement("div", {
      className: "push-half--top push-double--bottom"
    }, selectedEntities.map(function (item, index) {
      var id = item.id,
          name = item.name;
      return React.createElement(React.Fragment, {
        key: id
      }, React.createElement("div", {
        className: "flex flex-align--center"
      }, React.createElement(Token, {
        name: name,
        isDismissible: true,
        onDismiss: action("Entity Remove: ".concat(id))
      }), React.createElement("div", {
        className: "flex flex--1 flex-justified--end"
      }, React.createElement(Button, {
        size: "tiny",
        style: "outline",
        width: "default",
        onClick: action("Selected Entity View: ".concat(id))
      }, "View"))), selectedEntities.length !== index + 1 && React.createElement("div", {
        className: "push-half--sides push-half--ends muted"
      }, "Or"));
    }))), React.createElement("div", {
      className: "oui-filter-picker-list"
    }, React.createElement(Input, {
      isFilter: true,
      onInput: handleFilterInput,
      placeholder: "Browse for Audiences",
      type: "search"
    }), React.createElement(BlockList, {
      hasBorder: true
    }, React.createElement(BlockList.Category, null, React.createElement(FilterPicker.ListItem, {
      name: 'Create New Audience',
      onClick: action('Create Entity')
    })), React.createElement("div", {
      className: "max-scroll--medium"
    }, React.createElement(BlockList.Category, {
      header: "Recently Created Audiences"
    }, availableEntities.map(function (item, index) {
      return React.createElement(FilterPicker.ListItem, {
        key: item.id,
        id: item.id,
        name: item.name,
        description: item.description,
        onClick: action("Entity Add: ".concat(item.id)),
        buttonText: 'View',
        onButtonClick: action("Entity Picker View: ".concat(item.id))
      });
    }))))));
  });
});