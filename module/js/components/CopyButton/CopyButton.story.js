import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import CopyButton from '../CopyButton';
var code = "const CopyButton = ({ testSection, onClick, text }) => {\n  return (\n    <CopyToClipboard\n      text={ textToCopy }\n      onCopy={ onClick }>\n      <Button\n        style=\"plain\"\n        ariaLabel=\"Copy code snippet\"\n        testSection={ testSection }>\n        <Icon name='clipboard' />\n      </Button>\n    </CopyToClipboard>\n  );\n}";
var stories = storiesOf('CopyButton', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(CopyButton, {
    textToCopy: code
  });
}).add('With style specified', function () {
  return React.createElement(CopyButton, {
    textToCopy: code,
    style: select('style', {
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