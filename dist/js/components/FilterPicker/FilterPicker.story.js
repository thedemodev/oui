"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonInfo = require("@storybook/addon-info");

var _addonActions = require("@storybook/addon-actions");

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _Button = _interopRequireDefault(require("../Button"));

var _BlockList = _interopRequireDefault(require("../BlockList"));

var _HelpPopover = _interopRequireDefault(require("../HelpPopover"));

var _Input = _interopRequireDefault(require("../Input"));

var _Token = _interopRequireDefault(require("../Token"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

(0, _react2.storiesOf)('FilterPicker', module).addDecorator(_addonKnobs.withKnobs).addDecorator((0, _addonInfo.withInfo)(infoAddonConfig)).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
}).add('Audiences', function () {
  var AudienceConfig = {
    ANY: 'ANY',
    ALL: 'ALL',
    CUSTOM: 'CUSTOM'
  };
  var dropdownOptions = (0, _addonKnobs.object)('Dropdown Options', [{
    renderTitle: function renderTitle() {
      return _react["default"].createElement("span", null, "Match ", _react["default"].createElement("strong", null, "any"), " audience");
    },
    // eslint-disable-line react/display-name
    description: 'A visitor will be in this experiment if they match one or more of the audiences specified.',
    id: AudienceConfig.ANY
  }, {
    renderTitle: function renderTitle() {
      return _react["default"].createElement("span", null, "Match ", _react["default"].createElement("strong", null, "all"), " audiences");
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
  var allEntityDataValue = (0, _addonKnobs.object)('allEntities', [{
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
  var keysToSearchValue = (0, _addonKnobs.object)('keysToSearch', ['name', 'description']);
  var selectedEntityIdsValue = (0, _addonKnobs.object)('selectedEntityIds', [123, 456]); // Use recompose withState and return below to make
  // a more comprehensive and interactive story

  return _react["default"].createElement(_index["default"], {
    allEntities: allEntityDataValue,
    selectedEntityIds: selectedEntityIdsValue,
    keysToSearch: keysToSearchValue
  }, function (_ref) {
    var availableEntities = _ref.availableEntities,
        filterQuery = _ref.filterQuery,
        handleFilterInput = _ref.handleFilterInput,
        selectedEntities = _ref.selectedEntities;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("h3", {
      className: "flex"
    }, "Audiences", _react["default"].createElement("div", {
      className: "push-half--left"
    }, _react["default"].createElement(_HelpPopover["default"], {
      horizontalAttachment: "left",
      popoverTitle: "Audiences",
      verticalAttachment: "top"
    }, _react["default"].createElement("p", null, "Who do you want to see your campaign? Audiences in Optimizely X work much like they did in Optimizely Classic. Use them to show your experiment to groups of visitors that you define."), _react["default"].createElement("p", null, "Add conditions to define an audience, including: location, device, and more. In Optimizely X, you can also target visitors based on their behavior on your site (using events and tags)."), _react["default"].createElement("p", null, "Audiences are optional for experiments, so skip this if you want your experiment to run for all visitors.")))), _react["default"].createElement("div", null, "Choose the audience(s) you'd like to show this experience to. If you choose more than one audience, you'll be prompted to choose a match type."), _react["default"].createElement("div", {
      className: "push--ends"
    }, _react["default"].createElement(_Dropdown["default"], {
      arrowIcon: "down",
      buttonContent: dropdownOptions.find(function (option) {
        return option.id === 'ANY';
      }).renderTitle(),
      style: "outline",
      value: 'ANY'
    }, _react["default"].createElement(_BlockList["default"], null, dropdownOptions.map(function (item) {
      return _react["default"].createElement(_BlockList["default"].Category, {
        key: item.id
      }, _react["default"].createElement(_BlockList["default"].Item, {
        onClick: function onClick() {
          // eslint-disable-line react/jsx-no-bind
          (0, _addonActions.action)('Dropdown Select')(item.id);
        }
      }, _react["default"].createElement("div", {
        className: "flex flex-align--center"
      }, _react["default"].createElement("div", {
        className: "flex--1"
      }, _react["default"].createElement("div", null, dropdownOptions.find(function (option) {
        return option.id === item.id;
      }).renderTitle()), _react["default"].createElement("div", {
        className: "muted micro"
      }, item.description)))));
    })))), !selectedEntities.length && _react["default"].createElement("div", {
      className: "flex--none push-double--ends"
    }, _react["default"].createElement(_Token["default"], {
      name: "Everyone"
    })), !!selectedEntities.length && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
      className: "muted"
    }, "To be in this experiment, a visitor must match"), _react["default"].createElement("div", {
      className: "push-half--top push-double--bottom"
    }, selectedEntities.map(function (item, index) {
      var id = item.id,
          name = item.name;
      return _react["default"].createElement(_react["default"].Fragment, {
        key: id
      }, _react["default"].createElement("div", {
        className: "flex flex-align--center"
      }, _react["default"].createElement(_Token["default"], {
        name: name,
        isDismissible: true,
        onDismiss: (0, _addonActions.action)("Entity Remove: ".concat(id))
      }), _react["default"].createElement("div", {
        className: "flex flex--1 flex-justified--end"
      }, _react["default"].createElement(_Button["default"], {
        size: "tiny",
        style: "outline",
        width: "default",
        onClick: (0, _addonActions.action)("Selected Entity View: ".concat(id))
      }, "View"))), selectedEntities.length !== index + 1 && _react["default"].createElement("div", {
        className: "push-half--sides push-half--ends muted"
      }, "Or"));
    }))), _react["default"].createElement("div", {
      className: "oui-filter-picker-list"
    }, _react["default"].createElement(_Input["default"], {
      isFilter: true,
      onInput: handleFilterInput,
      placeholder: "Browse for Audiences",
      type: "search"
    }), _react["default"].createElement(_BlockList["default"], {
      hasBorder: true
    }, _react["default"].createElement(_BlockList["default"].Category, null, _react["default"].createElement(_index["default"].ListItem, {
      name: 'Create New Audience',
      onClick: (0, _addonActions.action)('Create Entity')
    })), _react["default"].createElement("div", {
      className: "max-scroll--medium"
    }, _react["default"].createElement(_BlockList["default"].Category, {
      header: "Recently Created Audiences"
    }, availableEntities.map(function (item, index) {
      return _react["default"].createElement(_index["default"].ListItem, {
        key: item.id,
        id: item.id,
        name: item.name,
        description: item.description,
        onClick: (0, _addonActions.action)("Entity Add: ".concat(item.id)),
        buttonText: 'View',
        onButtonClick: (0, _addonActions.action)("Entity Picker View: ".concat(item.id))
      });
    }))))));
  });
});