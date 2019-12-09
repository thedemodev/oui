"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CopyButton = _interopRequireDefault(require("../CopyButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var code = "const CopyButton = ({ testSection, onClick, text }) => {\n  return (\n    <CopyToClipboard\n      text={ textToCopy }\n      onCopy={ onClick }>\n      <Button\n        style=\"plain\"\n        ariaLabel=\"Copy code snippet\"\n        testSection={ testSection }>\n        <Icon name='clipboard' />\n      </Button>\n    </CopyToClipboard>\n  );\n}";
var stories = (0, _react2.storiesOf)('CopyButton', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_CopyButton["default"], {
    textToCopy: code
  });
}).add('With style specified', function () {
  return _react["default"].createElement(_CopyButton["default"], {
    textToCopy: code,
    style: (0, _addonKnobs.select)('style', {
      'none': 'none (use default button style)',
      'highlight': 'highlight',
      'danger': 'danger',
      'danger-outline': 'danger-outline',
      'outline': 'outline',
      'outline-reverse': 'outline-reverse',
      'plain': 'plain',
      'toggle': 'toggle',
      'underline': 'underline',
      'unstyled': 'unstyled'
    }, 'none')
  });
});