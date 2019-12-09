"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Col = _interopRequireDefault(require("./Col"));

var _Row = _interopRequireDefault(require("./Row"));

var _Container = _interopRequireDefault(require("./Container"));

var _Card = _interopRequireDefault(require("../Card"));

var _Button = _interopRequireDefault(require("../Button"));

var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon"));

var _Code = _interopRequireDefault(require("../Code"));

var _SelectDropdown = _interopRequireDefault(require("../SelectDropdown"));

var _Input = _interopRequireDefault(require("../Input"));

var _ButtonRow = _interopRequireDefault(require("../ButtonRow"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var viewports = {
  iphone5: {
    name: 'Small Phone',
    styles: {
      height: '568px',
      width: '320px'
    },
    type: 'mobile'
  },
  iphonex: {
    name: 'Large Phone',
    styles: {
      height: '812px',
      width: '375px'
    },
    type: 'mobile'
  },
  ipad: {
    name: 'Tablet',
    styles: {
      height: '1024px',
      width: '768px'
    },
    type: 'tablet'
  }
};
(0, _react2.addParameters)({
  viewport: {
    viewports: viewports
  }
});
var items = [{
  label: 'does match',
  value: 'does'
}, {
  label: 'Simple match',
  value: 'simple'
}];
var paddingOptions = {
  none: 'none',
  around: 'around',
  sides: 'sides',
  ends: 'ends',
  remove: 'remove'
};
var borderOptions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  sides: 'sides',
  ends: 'ends',
  all: 'all',
  none: 'none'
};
var stories = (0, _react2.storiesOf)('Layout', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("h1", null, "Default (Equal Widths)"), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    fluid: (0, _addonKnobs["boolean"])('fluid', false),
    pullRowPadding: (0, _addonKnobs["boolean"])('pullRowPadding', false),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', false),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none')
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    displayVertical: (0, _addonKnobs["boolean"])('displayVertical', false)
  }, _react["default"].createElement(_Col["default"], null, "Col"), _react["default"].createElement(_Col["default"], null, "Col")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    displayVertical: (0, _addonKnobs["boolean"])('displayVertical', false)
  }, _react["default"].createElement(_Col["default"], null, "Col"), _react["default"].createElement(_Col["default"], null, "Col"), _react["default"].createElement(_Col["default"], null, "Col")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    displayVertical: (0, _addonKnobs["boolean"])('displayVertical', false)
  }, _react["default"].createElement(_Col["default"], null, "Col"), _react["default"].createElement(_Col["default"], null, "Col"), _react["default"].createElement(_Col["default"], null, "Col"), _react["default"].createElement(_Col["default"], null, "Col"))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "Widths"), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', false),
    pullRowPadding: (0, _addonKnobs["boolean"])('pullRowPadding', false),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 12
  }, "12")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 11
  }, "11"), _react["default"].createElement(_Col["default"], {
    small: 1
  }, "1")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 10
  }, "10"), _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 9
  }, "9"), _react["default"].createElement(_Col["default"], {
    small: 3
  }, "3")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 8
  }, "8"), _react["default"].createElement(_Col["default"], {
    small: 4
  }, "4")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 7
  }, "7"), _react["default"].createElement(_Col["default"], {
    small: 5
  }, "5")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 6
  }, "6"), _react["default"].createElement(_Col["default"], {
    small: 6
  }, "6")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 5
  }, "5"), _react["default"].createElement(_Col["default"], {
    small: 7
  }, "7")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 4
  }, "4"), _react["default"].createElement(_Col["default"], {
    small: 8
  }, "8")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 3
  }, "3"), _react["default"].createElement(_Col["default"], {
    small: 9
  }, "9")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2"), _react["default"].createElement(_Col["default"], {
    small: 10
  }, "10")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    small: 11
  }, "11"))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "Equal Widths"), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', false),
    pullRowPadding: (0, _addonKnobs["boolean"])('pullRowPadding', false),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 6
  }, "6"), _react["default"].createElement(_Col["default"], {
    small: 6
  }, "6")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 4
  }, "4"), _react["default"].createElement(_Col["default"], {
    small: 4
  }, "4"), _react["default"].createElement(_Col["default"], {
    small: 4
  }, "4")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 3
  }, "3"), _react["default"].createElement(_Col["default"], {
    small: 3
  }, "3"), _react["default"].createElement(_Col["default"], {
    small: 3
  }, "3"), _react["default"].createElement(_Col["default"], {
    small: 3
  }, "3")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2"), _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2"), _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2"), _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2"), _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2"), _react["default"].createElement(_Col["default"], {
    small: 2
  }, "2")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"), _react["default"].createElement(_Col["default"], {
    large: 1
  }, "1"))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "\"Auto\""), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', false),
    pullRowPadding: (0, _addonKnobs["boolean"])('pullRowPadding', false),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: true
  }, "true"), _react["default"].createElement(_Col["default"], {
    small: true
  }, "true"), _react["default"].createElement(_Col["default"], {
    small: true
  }, "true")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 'auto'
  }, "auto"), _react["default"].createElement(_Col["default"], {
    small: 'auto'
  }, "auto"), _react["default"].createElement(_Col["default"], {
    small: 'auto'
  }, "auto"))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "fillSpace"), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    small: 'fillSpace'
  }, "fillSpace"), _react["default"].createElement(_Col["default"], {
    small: 'fillSpace'
  }, "fillSpace"), _react["default"].createElement(_Col["default"], {
    small: 'fillSpace'
  }, "fillSpace"))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "fitContent"), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    small: 'fitContent'
  }, "fitContent"), _react["default"].createElement(_Col["default"], {
    small: 'fitContent'
  }, "fitContent"), _react["default"].createElement(_Col["default"], {
    small: 'fitContent'
  }, "fitContent"))));
}).add('Container vs None', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("h1", null, "With Container"), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pullRowPadding: (0, _addonKnobs["boolean"])('pullRowPadding', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', true)
  }, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], null, "Hello short example"), _react["default"].createElement(_Col["default"], null, "Hello short example"))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "No Container"), _react["default"].createElement(_Row["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true)
  }, _react["default"].createElement(_Col["default"], {
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none')
  }, "Hello short example"), _react["default"].createElement(_Col["default"], {
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none')
  }, "Hello short example")));
}).add('Column Padding', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', false),
    paddedContent: 'none',
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    large: 'fillSpace',
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'around'),
    border: (0, _addonKnobs.select)('Col border', borderOptions, 'all')
  }, "Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together."), _react["default"].createElement(_Col["default"], {
    large: 'fillSpace',
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'around'),
    border: (0, _addonKnobs.select)('Col border', borderOptions, 'all')
  }, "Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together.")));
}).add('Borders', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', false),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', false),
    pullRowPadding: (0, _addonKnobs["boolean"])('pullRowPadding', false),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'around'),
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    fluid: (0, _addonKnobs["boolean"])('fluid', true)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    border: 'ends',
    paddedContent: 'ends'
  }, _react["default"].createElement(_Col["default"], {
    paddedContent: 'around'
  }, _react["default"].createElement("h2", {
    className: "push-half--bottom"
  }, "Some Title"), "Col with border sides"), _react["default"].createElement(_Col["default"], {
    paddedContent: 'around',
    border: 'left'
  }, _react["default"].createElement("h2", {
    className: "push-half--bottom"
  }, "A Longer Page Title"), "Col with border sides and long-ish content that will definitely run to multiple lines."), _react["default"].createElement(_Col["default"], {
    paddedContent: 'around',
    border: 'left'
  }, "Col with border sides"), _react["default"].createElement(_Col["default"], {
    paddedContent: 'around',
    border: 'left'
  }, "Col with border sides"), _react["default"].createElement(_Col["default"], {
    paddedContent: 'around',
    border: 'left'
  }, "Col with border right")));
}).add('Pull Row Padding', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pullRowPadding: (0, _addonKnobs["boolean"])('pullRowPadding', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'around'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], null, "pullRowPadding removes left padding here"), _react["default"].createElement(_Col["default"], null, "pullRowPadding does nothing here"), _react["default"].createElement(_Col["default"], null, "pullRowPadding does nothing here"), _react["default"].createElement(_Col["default"], null, "pullRowPadding does nothing here"), _react["default"].createElement(_Col["default"], null, "pullRowPadding removes right padding here")));
}).add('Vertical Columns', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    displayVertical: (0, _addonKnobs["boolean"])('displayVertical', true)
  }, _react["default"].createElement(_Col["default"], null, "1 of 6"), _react["default"].createElement(_Col["default"], null, "2 of 6"), _react["default"].createElement(_Col["default"], null, "3 of 6"), _react["default"].createElement(_Col["default"], null, "4 of 6"), _react["default"].createElement(_Col["default"], null, "5 of 6"), _react["default"].createElement(_Col["default"], null, "6 of 6")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    displayVertical: (0, _addonKnobs["boolean"])('displayVertical', true)
  }, _react["default"].createElement(_Col["default"], null, "1 of 4"), _react["default"].createElement(_Col["default"], null, "2 of 4"), _react["default"].createElement(_Col["default"], null, "3 of 4"), _react["default"].createElement(_Col["default"], null, "4 of 4")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    displayVertical: (0, _addonKnobs["boolean"])('displayVertical', true)
  }, _react["default"].createElement(_Col["default"], null, "1 of 2"), _react["default"].createElement(_Col["default"], null, "2 of 2")));
}).add('Changing Order', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: true
  }, "First, but unordered"), _react["default"].createElement(_Col["default"], {
    small: {
      order: 12
    }
  }, "Second, but last"), _react["default"].createElement(_Col["default"], {
    small: {
      order: 1
    }
  }, "Third, but second")));
}).add('Adjustable Size', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], null, "left column"), _react["default"].createElement(_Col["default"], {
    small: (0, _addonKnobs.number)('small', 6)
  }, "middle column (small=6)", _react["default"].createElement("br", null), "Adjust this size via knob \"small\""), _react["default"].createElement(_Col["default"], null, "right column")));
}).add('Rows example: URL Match', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    paddedContent: 'around',
    fluid: (0, _addonKnobs["boolean"])('fluid', true)
  }, _react["default"].createElement(_Row["default"], {
    border: 'all',
    paddedContent: 'ends'
  }, _react["default"].createElement(_Col["default"], null, _react["default"].createElement("h6", null, "URL Match")), _react["default"].createElement(_Col["default"], {
    small: 'auto'
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: "close"
  }))), _react["default"].createElement(_Row["default"], {
    border: 'all',
    paddedContent: 'ends'
  }, _react["default"].createElement(_Container["default"], {
    pushRowsTop: true,
    paddedContent: 'none',
    fluid: (0, _addonKnobs["boolean"])('fluid', true)
  }, _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    small: 'auto'
  }, "URL"), _react["default"].createElement(_Col["default"], {
    small: 'fitContent'
  }, _react["default"].createElement(_SelectDropdown["default"], {
    items: items,
    value: 'does'
  })), _react["default"].createElement(_Col["default"], {
    small: 'auto'
  }, "these ", _react["default"].createElement("strong", null, "URLs"), ":")), _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    small: 'fillSpace'
  }, _react["default"].createElement(_Input["default"], {
    id: "input-01",
    type: "text"
  })), _react["default"].createElement(_Col["default"], {
    small: 'fitContent'
  }, _react["default"].createElement(_SelectDropdown["default"], {
    items: items,
    value: 'simple',
    width: '200px'
  })), _react["default"].createElement(_Col["default"], {
    small: 'fitContent',
    paddedContent: 'sides'
  }, _react["default"].createElement(_ButtonRow["default"], {
    centerGroup: [_react["default"].createElement(_ButtonIcon["default"], {
      key: 1,
      iconName: "add",
      isDisabled: false,
      size: "large",
      title: "Add Row"
    }), _react["default"].createElement(_ButtonIcon["default"], {
      key: 2,
      iconName: "close",
      isDisabled: false,
      size: "large",
      title: "Remove Row"
    })]
  }))), _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    small: 'fillSpace'
  }, _react["default"].createElement(_Input["default"], {
    id: "input-01",
    type: "text"
  })), _react["default"].createElement(_Col["default"], {
    small: 'fitContent'
  }, _react["default"].createElement(_SelectDropdown["default"], {
    items: items,
    value: 'simple',
    width: '200px'
  })), _react["default"].createElement(_Col["default"], {
    small: 'fitContent',
    paddedContent: 'sides'
  }, _react["default"].createElement(_ButtonRow["default"], {
    centerGroup: [_react["default"].createElement(_ButtonIcon["default"], {
      key: 3,
      iconName: "add",
      isDisabled: false,
      size: "large",
      title: "Add Row"
    }), _react["default"].createElement(_ButtonIcon["default"], {
      key: 4,
      iconName: "close",
      isDisabled: false,
      size: "large",
      title: "Remove Row"
    })]
  }))))));
}).add('With Cards Inside', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement("h1", null, "fillSpace"), _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    large: 'fillSpace'
  }, _react["default"].createElement(_Card["default"], {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye.")), _react["default"].createElement(_Col["default"], {
    large: 'fillSpace'
  }, _react["default"].createElement(_Card["default"], {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye."))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "fitContent"), _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    large: 'fitContent'
  }, _react["default"].createElement(_Card["default"], {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye.")), _react["default"].createElement(_Col["default"], {
    large: 'fitContent'
  }, _react["default"].createElement(_Card["default"], {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye."))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "4/8"), _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    large: 4
  }, _react["default"].createElement(_Card["default"], {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye.")), _react["default"].createElement(_Col["default"], {
    large: 8
  }, _react["default"].createElement(_Card["default"], {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye."))));
}).add('Special: Responsive Tests', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement("h1", null, "Simple"), _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', true)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 8
  }, "small=8"), _react["default"].createElement(_Col["default"], {
    small: 4
  }, "small=4")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: true
  }, "small=true"), _react["default"].createElement(_Col["default"], {
    small: true
  }, "small=true"), _react["default"].createElement(_Col["default"], {
    small: true
  }, "small=true")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: false
  }, "small=false"), _react["default"].createElement(_Col["default"], {
    small: false
  }, "small=false"), _react["default"].createElement(_Col["default"], {
    small: false
  }, "small=false")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    large: 8
  }, "large=8"), _react["default"].createElement(_Col["default"], {
    large: 4
  }, "large=4")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    large: true
  }, "large=true"), _react["default"].createElement(_Col["default"], {
    large: true
  }, "large=true"), _react["default"].createElement(_Col["default"], {
    large: true
  }, "large=true"))), _react["default"].createElement("h1", {
    className: "push-triple--top"
  }, "Complex"), _react["default"].createElement(_Container["default"], {
    fluid: (0, _addonKnobs["boolean"])('fluid', false),
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', true),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none')
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 12,
    medium: 8
  }, "small=12 medium=8"), _react["default"].createElement(_Col["default"], {
    small: 6,
    medium: 4
  }, "small=6 medium=4")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 6,
    medium: 3
  }, "small=6 medium=3"), _react["default"].createElement(_Col["default"], {
    small: 6,
    medium: 3
  }, "small=6 medium=3"), _react["default"].createElement(_Col["default"], {
    small: 6,
    medium: 3
  }, "small=6 medium=3"), _react["default"].createElement(_Col["default"], {
    small: 6,
    medium: 3
  }, "small=6 medium=3")), _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false)
  }, _react["default"].createElement(_Col["default"], {
    small: 6
  }, "small=6"), _react["default"].createElement(_Col["default"], {
    small: 6
  }, "small=6"))));
}).add('Special: Responsive Layout', function () {
  return _react["default"].createElement(_Container["default"], {
    outlineDebug: (0, _addonKnobs["boolean"])('outlineDebug', true),
    pushRowsTop: (0, _addonKnobs["boolean"])('pushRowsTop', false),
    paddedContent: (0, _addonKnobs.select)('paddedContent', paddingOptions, 'none'),
    fluid: (0, _addonKnobs["boolean"])('fluid', false)
  }, _react["default"].createElement(_Row["default"], {
    removeGutters: (0, _addonKnobs["boolean"])('Row removeGutters', false),
    paddedContent: 'around'
  }, _react["default"].createElement("div", null, _react["default"].createElement("h2", null, "Features"), _react["default"].createElement("p", {
    className: "lead"
  }, "Manage your app\u2019s feature flags"))), _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    small: 6
  }, _react["default"].createElement("img", {
    src: "https://s3-us-west-1.amazonaws.com/zach-designs/flagly/thing.svg"
  })), _react["default"].createElement(_Col["default"], {
    small: 6
  }, _react["default"].createElement("h6", null, "What\u2019s a Feature Flag?"), _react["default"].createElement("p", null, "Feature flags, also known as feature toggles, are a software development technique that lets you turn certain functionality on and off without deploying new code. This allows for better control and more experimentation over the full lifecycle of features. You can toggle a feature off to release code quickly without exposing it to users."), _react["default"].createElement("h6", null, "Try it for yourself"), _react["default"].createElement(_Code["default"], null, "var enabled = optimizely.isFeatureEnabled(\u201Dchat_window\u201D, userId); if(enabled)", ' ', ' ', "else", ' '), _react["default"].createElement(_Row["default"], null, _react["default"].createElement(_Col["default"], {
    large: 6
  }, _react["default"].createElement(_Button["default"], {
    width: 'full'
  }, "View Docs")), _react["default"].createElement(_Col["default"], {
    large: 6
  }, _react["default"].createElement(_Button["default"], {
    width: 'full'
  }, "Create Feature"))))));
});