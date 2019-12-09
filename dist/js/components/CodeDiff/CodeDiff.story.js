"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _data = _interopRequireDefault(require("./data.json"));

var _index = _interopRequireDefault(require("../Table/index.js"));

var _index2 = _interopRequireDefault(require("./index.js"));

require("react-gh-like-diff/lib/diff2html.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('CodeDiff', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
var NEWTEXT = _data["default"].newFile;
var OLDTEXT = _data["default"].oldFile;
stories.add('Default', function () {
  return _react["default"].createElement(_index2["default"], {
    fileName: (0, _addonKnobs.text)('fileName', 'fileName.md'),
    updatedFileName: (0, _addonKnobs.text)('updatedFileName', 'updatedFileName.md'),
    oldText: (0, _addonKnobs.text)('oldText', 'Old\nText\nFile'),
    newText: (0, _addonKnobs.text)('newText', 'New file, hello\nText and some new lines.\nIt is new and improved!'),
    hideTitle: (0, _addonKnobs["boolean"])('hideTitle', false),
    hideInfo: (0, _addonKnobs["boolean"])('hideInfo', false)
  });
}).add('Minimal', function () {
  return _react["default"].createElement(_index2["default"], {
    fileName: (0, _addonKnobs.text)('fileName', 'fileName.md'),
    oldText: 'A test with old things',
    newText: 'A test with new things added and changed.',
    hideTitle: (0, _addonKnobs["boolean"])('hideTitle', false),
    hideInfo: (0, _addonKnobs["boolean"])('hideInfo', false)
  });
}).add('Nested Inside Table', function () {
  return _react["default"].createElement(_index["default"], {
    density: "loose",
    tableLayoutAlgorithm: "fixed"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, "Before/After"))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, _react["default"].createElement(_index2["default"], {
    fileName: (0, _addonKnobs.text)('fileName', 'fileName.md'),
    oldText: 'A test with old things',
    newText: 'A test with new things added and changed.',
    hideTitle: (0, _addonKnobs["boolean"])('hideTitle', false),
    hideInfo: (0, _addonKnobs["boolean"])('hideInfo', false)
  }))), _react["default"].createElement(_index["default"].TR, {
    noHover: true
  }, _react["default"].createElement(_index["default"].TD, null, _react["default"].createElement(_index["default"], {
    density: "loose",
    tableLayoutAlgorithm: "fixed"
  }, _react["default"].createElement(_index["default"].THead, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TH, null, " Experiment "), _react["default"].createElement(_index["default"].TH, null, " Conversion Rate "), _react["default"].createElement(_index["default"].TH, null, " Status "))), _react["default"].createElement(_index["default"].TBody, null, _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Header CTA "), _react["default"].createElement(_index["default"].TD, {
    width: "20%"
  }, " 12% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Shorter Contact Form "), _react["default"].createElement(_index["default"].TD, null, " 4% "), _react["default"].createElement(_index["default"].TD, null, " Draft ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Larger search bar "), _react["default"].createElement(_index["default"].TD, null, " 6.7% "), _react["default"].createElement(_index["default"].TD, null, " Paused ")), _react["default"].createElement(_index["default"].TR, null, _react["default"].createElement(_index["default"].TD, null, " Center aligned headline "), _react["default"].createElement(_index["default"].TD, null, " 9.3% "), _react["default"].createElement(_index["default"].TD, null, " Running "))))))));
}).add('New Filename', function () {
  return _react["default"].createElement(_index2["default"], {
    fileName: (0, _addonKnobs.text)('fileName', 'fileName.md'),
    updatedFileName: (0, _addonKnobs.text)('updatedFileName', 'updatedFileName.md'),
    oldText: OLDTEXT,
    newText: NEWTEXT,
    hideTitle: (0, _addonKnobs["boolean"])('hideTitle', false),
    hideInfo: (0, _addonKnobs["boolean"])('hideInfo', false)
  });
}).add('Style Options', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index2["default"], {
    fileName: "iAmLineByLine.md",
    outputStyle: 'line-by-line',
    oldText: OLDTEXT,
    newText: NEWTEXT,
    hideTitle: (0, _addonKnobs["boolean"])('hideTitle', false),
    hideInfo: (0, _addonKnobs["boolean"])('hideInfo', false)
  }), _react["default"].createElement(_index2["default"], {
    fileName: "iAmSideBySide.md",
    outputStyle: 'side-by-side',
    oldText: OLDTEXT,
    newText: NEWTEXT,
    hideTitle: (0, _addonKnobs["boolean"])('hideTitle', false),
    hideInfo: (0, _addonKnobs["boolean"])('hideInfo', false)
  }));
}).add('No Differences', function () {
  return _react["default"].createElement(_index2["default"], {
    fileName: (0, _addonKnobs.text)('fileName', 'fileName.md'),
    oldText: OLDTEXT,
    newText: OLDTEXT,
    hideTitle: (0, _addonKnobs["boolean"])('hideTitle', false),
    hideInfo: (0, _addonKnobs["boolean"])('hideInfo', false)
  });
});