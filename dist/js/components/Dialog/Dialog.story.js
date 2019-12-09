"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _lodash = _interopRequireDefault(require("lodash.noop"));

var _index = _interopRequireWildcard(require("./index.js"));

var _Fieldset = _interopRequireDefault(require("../Fieldset"));

var _Button = _interopRequireDefault(require("../Button"));

var _Input = _interopRequireDefault(require("../Input"));

var _index2 = _interopRequireDefault(require("../Dropdown/index.js"));

var _BlockList = _interopRequireDefault(require("../BlockList"));

var _addonActions = require("@storybook/addon-actions");

var _index3 = _interopRequireDefault(require("../Label/index.js"));

var _index4 = _interopRequireDefault(require("../ButtonRow/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = [{
  title: 'JavaScript'
}, {
  title: 'Java'
}, {
  title: 'C++'
}];

var LanguageDropdown = _react["default"].createElement(_index2["default"], {
  buttonContent: (0, _addonKnobs.text)('buttonContent', 'None Selected'),
  width: 300,
  arrowIcon: "down"
}, _react["default"].createElement(_BlockList["default"], null, data.map(function (item, index) {
  return _react["default"].createElement(_BlockList["default"].Category, {
    header: item.header,
    key: index
  }, _react["default"].createElement(_BlockList["default"].Item, {
    onClick: (0, _addonActions.action)('click on dropdown item')
  }, _react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement("div", {
    className: "flex--1"
  }, _react["default"].createElement("div", null, item.title)))));
})));

var stories = (0, _react2.storiesOf)('Dialog', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, ' ', _react["default"].createElement("p", null, "This is text behind the dialog that is blocked by the overlay.")), _react["default"].createElement(_index.DialogNew, {
    title: (0, _addonKnobs.text)('title', 'This is a  Dialog'),
    subtitle: (0, _addonKnobs.text)('subtitle', 'This is an optional subtitle'),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', true),
    hasOverlay: (0, _addonKnobs["boolean"])('hasOverlay', true),
    onClose: (0, _addonActions.action)('Dialog was closed'),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "plain",
      key: 0,
      onClick: _lodash["default"]
    }, "Cancel"), _react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 1,
      onClick: _lodash["default"]
    }, "Save")]
  }, _react["default"].createElement(_Fieldset["default"], {
    title: "Project Settings",
    description: "Some quick setup",
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-01",
    label: "Verify Email",
    type: "email"
  }), _react["default"].createElement(_Input["default"], {
    id: "input-02",
    label: "Confirm Email",
    type: "email"
  }))));
}).add('with a form and dropdown', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, ' ', _react["default"].createElement("p", null, "This is text behind the dialog that is blocked by the overlay.")), _react["default"].createElement(_index.DialogNew, {
    title: (0, _addonKnobs.text)('title', 'Welcome to this Feature'),
    subtitle: _react["default"].createElement("p", null, "Let's get you up and running with ", _react["default"].createElement("a", {
      href: "https://www.optimizely.com/"
    }, "our feature.")),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', true),
    hasOverlay: (0, _addonKnobs["boolean"])('hasOverlay', true),
    onClose: (0, _addonActions.action)('Dialog was closed'),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 0,
      onClick: _lodash["default"]
    }, "Get Started")]
  }, _react["default"].createElement(_Fieldset["default"], {
    title: "Project Settings",
    description: "Some quick setup",
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-03",
    label: "Project Name",
    type: "text"
  }), _react["default"].createElement(_Input["default"], {
    id: "input-04",
    label: "Description",
    type: "text"
  })), _react["default"].createElement(_index3["default"], null, "Select your language"), LanguageDropdown));
}).add('with scrolling', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, ' ', _react["default"].createElement("p", null, "This is text behind the dialog that is blocked by the overlay.")), _react["default"].createElement(_index.DialogNew, {
    title: (0, _addonKnobs.text)('title', 'Welcome to this Feature'),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', true),
    onClose: (0, _addonActions.action)('Dialog was closed'),
    hasOverlay: (0, _addonKnobs["boolean"])('hasOverlay', true),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 0,
      onClick: _lodash["default"]
    }, "Get Started in the Docs")]
  }, _react["default"].createElement("p", null, "Content should be kept to small, digestible amounts. If you need more space, consider using a ", _react["default"].createElement("b", null, "Sheet"), ". If the content does overflow the space, the dialog will scroll."), _react["default"].createElement("p", {
    className: "muted"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."), _react["default"].createElement("p", {
    className: "muted"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora."), _react["default"].createElement("p", {
    className: "muted"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")));
}).add('with simple text and link', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "This is text behind the dialog that is blocked by the overlay."), _react["default"].createElement(_index.DialogNew, {
    title: (0, _addonKnobs.text)('title', 'This is a Dialog'),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', false),
    hasOverlay: (0, _addonKnobs["boolean"])('hasOverlay', true),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "plain",
      key: 0,
      onClick: _lodash["default"]
    }, "No Thanks"), _react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 1,
      onClick: _lodash["default"]
    }, "Continue")]
  }, _react["default"].createElement("p", null, "Dialogs can also contain only text in the body, no data input."), _react["default"].createElement("p", null, "They can also contain links, like ", _react["default"].createElement("a", {
    href: "https://www.optimizely.com/"
  }, "learn more about Optimizely features"), ".")));
}).add('without overlay', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "This is text behind the dialog that is NOT blocked by the overlay because the overlay is hidden."), _react["default"].createElement(_index.DialogNew, {
    title: (0, _addonKnobs.text)('title', 'This is a Dialog'),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', false),
    hasOverlay: (0, _addonKnobs["boolean"])('hasOverlay', false),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "plain",
      key: 0,
      onClick: _lodash["default"]
    }, "No Thanks"), _react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 1,
      onClick: _lodash["default"]
    }, "Continue")]
  }, _react["default"].createElement("p", null, "Dialogs can also contain only text in the body, no data input."), _react["default"].createElement("p", null, "They can also contain links, like ", _react["default"].createElement("a", {
    href: "https://www.optimizely.com/"
  }, "learn more about Optimizely features"), ".")));
}).add('deprecated dialog', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"].Wrapper, null, _react["default"].createElement(_index["default"].Title, {
    subtitle: "Test Subtitle"
  }, "This is a Dialog"), _react["default"].createElement(_index["default"].Fieldset, {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-05",
    label: "Some data",
    type: "text"
  })), _react["default"].createElement(_index["default"].Fieldset, {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-06",
    label: "Some data",
    type: "text"
  })), _react["default"].createElement(_index["default"].Footer, null, _react["default"].createElement(_index4["default"], {
    rightGroup: [_react["default"].createElement(_Button["default"], {
      style: "plain",
      key: 0,
      onClick: _lodash["default"]
    }, "Cancel"), _react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 1,
      onClick: _lodash["default"]
    }, "Save")]
  }))));
});