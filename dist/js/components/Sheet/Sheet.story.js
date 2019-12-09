"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _lodash = _interopRequireDefault(require("lodash.noop"));

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

var _Fieldset = _interopRequireDefault(require("../Fieldset"));

var _Input = _interopRequireDefault(require("../Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Sheet', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "This is text behind the sheet that is blocked by the overlay."), _react["default"].createElement(_index["default"], {
    title: (0, _addonKnobs.text)('title', 'This is a Sheet'),
    subtitle: (0, _addonKnobs.text)('subtitle', 'This is an optional subtitle string'),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', true),
    onClose: (0, _addonActions.action)('Sheet was closed'),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "plain",
      key: 0,
      onClick: _lodash["default"]
    }, "Cancel"), _react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 1,
      onClick: _lodash["default"]
    }, "Confirm")]
  }, _react["default"].createElement(_Fieldset["default"], {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-01",
    label: "Some data",
    type: "text"
  }), _react["default"].createElement(_Input["default"], {
    id: "input-02",
    label: "Some more data",
    type: "text"
  })), _react["default"].createElement(_Fieldset["default"], {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-03",
    label: "Some data",
    type: "text"
  })), _react["default"].createElement(_Fieldset["default"], {
    title: "Project Details"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-04",
    label: "Target URL",
    type: "text",
    isRequired: true
  }))));
}).add('With a link in subtitle', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "This is text behind the sheet that is blocked by the overlay."), _react["default"].createElement(_index["default"], {
    title: (0, _addonKnobs.text)('title', 'This is a Sheet'),
    subtitle: _react["default"].createElement("p", null, "Subtitles can also take nodes,", ' ', _react["default"].createElement("a", {
      href: "https://www.optimizely.com/"
    }, "like a link")),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', true),
    onClose: (0, _addonActions.action)('Sheet was closed'),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "plain",
      key: 0,
      onClick: _lodash["default"]
    }, "Cancel"), _react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 1,
      onClick: _lodash["default"]
    }, "Confirm")]
  }, _react["default"].createElement(_Fieldset["default"], {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-01",
    label: "Some data",
    type: "text"
  }), _react["default"].createElement(_Input["default"], {
    id: "input-02",
    label: "Some more data",
    type: "text"
  })), _react["default"].createElement(_Fieldset["default"], {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-03",
    label: "Some data",
    type: "text"
  })), _react["default"].createElement(_Fieldset["default"], {
    title: "Project Details"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-04",
    label: "Target URL",
    type: "text",
    isRequired: true
  }))));
}).add('With a warning', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "This is text behind the sheet that is blocked by the overlay."), _react["default"].createElement(_index["default"], {
    title: (0, _addonKnobs.text)('title', 'This is a Sheet'),
    subtitle: _react["default"].createElement("p", null, "Subtitles can also take nodes,", ' ', _react["default"].createElement("a", {
      href: "https://www.optimizely.com/"
    }, "like a link")),
    hasCloseButton: (0, _addonKnobs["boolean"])('hasCloseButton', true),
    onClose: (0, _addonActions.action)('Sheet was closed'),
    warningContent: (0, _addonKnobs.text)('warningContent', 'You do not have permissions to edit.'),
    warningTestSection: (0, _addonKnobs.text)('warningTestSection', 'sheet-warning-01'),
    footerButtonList: [_react["default"].createElement(_Button["default"], {
      style: "plain",
      key: 0,
      onClick: _lodash["default"]
    }, "Cancel"), _react["default"].createElement(_Button["default"], {
      style: "highlight",
      key: 1,
      onClick: _lodash["default"]
    }, "Confirm")]
  }, _react["default"].createElement(_Fieldset["default"], {
    title: "Project Name",
    description: "Give your project a name",
    isOptional: false,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-01",
    label: "Some data",
    type: "text"
  }), _react["default"].createElement(_Input["default"], {
    id: "input-02",
    label: "Some more data",
    type: "text"
  })), _react["default"].createElement(_Fieldset["default"], {
    title: "Project Description",
    description: "Give your project a description",
    isOptional: true,
    helpIcon: true,
    popoverTitle: "Popover title",
    popoverText: "This should help you figure out what to do"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-03",
    label: "Some data",
    type: "text"
  })), _react["default"].createElement(_Fieldset["default"], {
    title: "Project Details"
  }, _react["default"].createElement(_Input["default"], {
    id: "input-04",
    label: "Target URL",
    type: "text",
    isRequired: true
  }))));
});