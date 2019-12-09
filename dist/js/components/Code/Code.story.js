"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonInfo = require("@storybook/addon-info");

var _Code = _interopRequireDefault(require("../Code"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var langOptions = {
  'cs': 'cs',
  'css': 'css',
  'diff': 'diff',
  'html': 'html',
  'java': 'java',
  'javascript': 'javascript',
  'js': 'js',
  'jsx': 'jsx',
  'markdown': 'markdown',
  'md': 'md',
  'objectivec': 'objectivec',
  'php': 'php',
  'python': 'python',
  'ruby': 'ruby',
  'scss': 'scss',
  'swift': 'swift'
};
var stories = (0, _react2.storiesOf)('Code', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_Code["default"], {
    hasCopyButton: (0, _addonKnobs["boolean"])('hasCopyButton', true),
    testSection: "my-code-box",
    type: (0, _addonKnobs.select)('type', {
      inline: 'inline',
      block: 'block'
    }, 'block'),
    language: (0, _addonKnobs.select)('language', langOptions, 'js')
  }, (0, _addonKnobs.text)('code', 'var foo = `bar`; \nvar bat = `baz`;'));
}).add('With styled copy button', (0, _addonInfo.withInfo)()(function () {
  return _react["default"].createElement(_Code["default"], {
    copyButtonStyle: "none",
    hasCopyButton: (0, _addonKnobs["boolean"])('hasCopyButton', true),
    testSection: "my-code-box",
    type: (0, _addonKnobs.select)('type', {
      inline: 'inline',
      block: 'block'
    }, 'block'),
    language: (0, _addonKnobs.select)('language', langOptions, 'js')
  }, (0, _addonKnobs.text)('code', 'var foo = `bar`; var bat = `baz`; var withAReallyReallyLongName = `a value with a really really long string`'));
}));