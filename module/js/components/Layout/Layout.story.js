import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, number, select } from '@storybook/addon-knobs';
import Col from './Col';
import Row from './Row';
import Container from './Container';
import Card from '../Card';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import Code from '../Code';
import SelectDropdown from '../SelectDropdown';
import Input from '../Input';
import ButtonRow from '../ButtonRow';
import Icon from 'react-oui-icons';
import { addParameters } from '@storybook/react';
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
addParameters({
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
var stories = storiesOf('Layout', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("div", null, React.createElement("h1", null, "Default (Equal Widths)"), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    fluid: _boolean('fluid', false),
    pullRowPadding: _boolean('pullRowPadding', false),
    pushRowsTop: _boolean('pushRowsTop', false),
    paddedContent: select('paddedContent', paddingOptions, 'none')
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    displayVertical: _boolean('displayVertical', false)
  }, React.createElement(Col, null, "Col"), React.createElement(Col, null, "Col")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    displayVertical: _boolean('displayVertical', false)
  }, React.createElement(Col, null, "Col"), React.createElement(Col, null, "Col"), React.createElement(Col, null, "Col")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    displayVertical: _boolean('displayVertical', false)
  }, React.createElement(Col, null, "Col"), React.createElement(Col, null, "Col"), React.createElement(Col, null, "Col"), React.createElement(Col, null, "Col"))), React.createElement("h1", {
    className: "push-triple--top"
  }, "Widths"), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pushRowsTop: _boolean('pushRowsTop', false),
    pullRowPadding: _boolean('pullRowPadding', false),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 12
  }, "12")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 11
  }, "11"), React.createElement(Col, {
    small: 1
  }, "1")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 10
  }, "10"), React.createElement(Col, {
    small: 2
  }, "2")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 9
  }, "9"), React.createElement(Col, {
    small: 3
  }, "3")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 8
  }, "8"), React.createElement(Col, {
    small: 4
  }, "4")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 7
  }, "7"), React.createElement(Col, {
    small: 5
  }, "5")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 6
  }, "6"), React.createElement(Col, {
    small: 6
  }, "6")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 5
  }, "5"), React.createElement(Col, {
    small: 7
  }, "7")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 4
  }, "4"), React.createElement(Col, {
    small: 8
  }, "8")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 3
  }, "3"), React.createElement(Col, {
    small: 9
  }, "9")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 2
  }, "2"), React.createElement(Col, {
    small: 10
  }, "10")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 1
  }, "1"), React.createElement(Col, {
    small: 11
  }, "11"))), React.createElement("h1", {
    className: "push-triple--top"
  }, "Equal Widths"), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pushRowsTop: _boolean('pushRowsTop', false),
    pullRowPadding: _boolean('pullRowPadding', false),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 6
  }, "6"), React.createElement(Col, {
    small: 6
  }, "6")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 4
  }, "4"), React.createElement(Col, {
    small: 4
  }, "4"), React.createElement(Col, {
    small: 4
  }, "4")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 3
  }, "3"), React.createElement(Col, {
    small: 3
  }, "3"), React.createElement(Col, {
    small: 3
  }, "3"), React.createElement(Col, {
    small: 3
  }, "3")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 2
  }, "2"), React.createElement(Col, {
    small: 2
  }, "2"), React.createElement(Col, {
    small: 2
  }, "2"), React.createElement(Col, {
    small: 2
  }, "2"), React.createElement(Col, {
    small: 2
  }, "2"), React.createElement(Col, {
    small: 2
  }, "2")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"), React.createElement(Col, {
    large: 1
  }, "1"))), React.createElement("h1", {
    className: "push-triple--top"
  }, "\"Auto\""), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pushRowsTop: _boolean('pushRowsTop', false),
    pullRowPadding: _boolean('pullRowPadding', false),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: true
  }, "true"), React.createElement(Col, {
    small: true
  }, "true"), React.createElement(Col, {
    small: true
  }, "true")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 'auto'
  }, "auto"), React.createElement(Col, {
    small: 'auto'
  }, "auto"), React.createElement(Col, {
    small: 'auto'
  }, "auto"))), React.createElement("h1", {
    className: "push-triple--top"
  }, "fillSpace"), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, null, React.createElement(Col, {
    small: 'fillSpace'
  }, "fillSpace"), React.createElement(Col, {
    small: 'fillSpace'
  }, "fillSpace"), React.createElement(Col, {
    small: 'fillSpace'
  }, "fillSpace"))), React.createElement("h1", {
    className: "push-triple--top"
  }, "fitContent"), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, null, React.createElement(Col, {
    small: 'fitContent'
  }, "fitContent"), React.createElement(Col, {
    small: 'fitContent'
  }, "fitContent"), React.createElement(Col, {
    small: 'fitContent'
  }, "fitContent"))));
}).add('Container vs None', function () {
  return React.createElement("div", null, React.createElement("h1", null, "With Container"), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pullRowPadding: _boolean('pullRowPadding', true),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', true)
  }, React.createElement(Row, null, React.createElement(Col, null, "Hello short example"), React.createElement(Col, null, "Hello short example"))), React.createElement("h1", {
    className: "push-triple--top"
  }, "No Container"), React.createElement(Row, {
    outlineDebug: _boolean('outlineDebug', true)
  }, React.createElement(Col, {
    paddedContent: select('paddedContent', paddingOptions, 'none')
  }, "Hello short example"), React.createElement(Col, {
    paddedContent: select('paddedContent', paddingOptions, 'none')
  }, "Hello short example")));
}).add('Column Padding', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', false),
    paddedContent: 'none',
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    large: 'fillSpace',
    paddedContent: select('paddedContent', paddingOptions, 'around'),
    border: select('Col border', borderOptions, 'all')
  }, "Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together."), React.createElement(Col, {
    large: 'fillSpace',
    paddedContent: select('paddedContent', paddingOptions, 'around'),
    border: select('Col border', borderOptions, 'all')
  }, "Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together.")));
}).add('Borders', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', false),
    pushRowsTop: _boolean('pushRowsTop', false),
    pullRowPadding: _boolean('pullRowPadding', false),
    paddedContent: select('paddedContent', paddingOptions, 'around'),
    removeGutters: _boolean('Row removeGutters', false),
    fluid: _boolean('fluid', true)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    border: 'ends',
    paddedContent: 'ends'
  }, React.createElement(Col, {
    paddedContent: 'around'
  }, React.createElement("h2", {
    className: "push-half--bottom"
  }, "Some Title"), "Col with border sides"), React.createElement(Col, {
    paddedContent: 'around',
    border: 'left'
  }, React.createElement("h2", {
    className: "push-half--bottom"
  }, "A Longer Page Title"), "Col with border sides and long-ish content that will definitely run to multiple lines."), React.createElement(Col, {
    paddedContent: 'around',
    border: 'left'
  }, "Col with border sides"), React.createElement(Col, {
    paddedContent: 'around',
    border: 'left'
  }, "Col with border sides"), React.createElement(Col, {
    paddedContent: 'around',
    border: 'left'
  }, "Col with border right")));
}).add('Pull Row Padding', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pullRowPadding: _boolean('pullRowPadding', true),
    paddedContent: select('paddedContent', paddingOptions, 'around'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, null, React.createElement(Col, null, "pullRowPadding removes left padding here"), React.createElement(Col, null, "pullRowPadding does nothing here"), React.createElement(Col, null, "pullRowPadding does nothing here"), React.createElement(Col, null, "pullRowPadding does nothing here"), React.createElement(Col, null, "pullRowPadding removes right padding here")));
}).add('Vertical Columns', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pushRowsTop: _boolean('pushRowsTop', true),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    displayVertical: _boolean('displayVertical', true)
  }, React.createElement(Col, null, "1 of 6"), React.createElement(Col, null, "2 of 6"), React.createElement(Col, null, "3 of 6"), React.createElement(Col, null, "4 of 6"), React.createElement(Col, null, "5 of 6"), React.createElement(Col, null, "6 of 6")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    displayVertical: _boolean('displayVertical', true)
  }, React.createElement(Col, null, "1 of 4"), React.createElement(Col, null, "2 of 4"), React.createElement(Col, null, "3 of 4"), React.createElement(Col, null, "4 of 4")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    displayVertical: _boolean('displayVertical', true)
  }, React.createElement(Col, null, "1 of 2"), React.createElement(Col, null, "2 of 2")));
}).add('Changing Order', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: true
  }, "First, but unordered"), React.createElement(Col, {
    small: {
      order: 12
    }
  }, "Second, but last"), React.createElement(Col, {
    small: {
      order: 1
    }
  }, "Third, but second")));
}).add('Adjustable Size', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, null, React.createElement(Col, null, "left column"), React.createElement(Col, {
    small: number('small', 6)
  }, "middle column (small=6)", React.createElement("br", null), "Adjust this size via knob \"small\""), React.createElement(Col, null, "right column")));
}).add('Rows example: URL Match', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    paddedContent: 'around',
    fluid: _boolean('fluid', true)
  }, React.createElement(Row, {
    border: 'all',
    paddedContent: 'ends'
  }, React.createElement(Col, null, React.createElement("h6", null, "URL Match")), React.createElement(Col, {
    small: 'auto'
  }, React.createElement(Icon, {
    name: "close"
  }))), React.createElement(Row, {
    border: 'all',
    paddedContent: 'ends'
  }, React.createElement(Container, {
    pushRowsTop: true,
    paddedContent: 'none',
    fluid: _boolean('fluid', true)
  }, React.createElement(Row, null, React.createElement(Col, {
    small: 'auto'
  }, "URL"), React.createElement(Col, {
    small: 'fitContent'
  }, React.createElement(SelectDropdown, {
    items: items,
    value: 'does'
  })), React.createElement(Col, {
    small: 'auto'
  }, "these ", React.createElement("strong", null, "URLs"), ":")), React.createElement(Row, null, React.createElement(Col, {
    small: 'fillSpace'
  }, React.createElement(Input, {
    id: "input-01",
    type: "text"
  })), React.createElement(Col, {
    small: 'fitContent'
  }, React.createElement(SelectDropdown, {
    items: items,
    value: 'simple',
    width: '200px'
  })), React.createElement(Col, {
    small: 'fitContent',
    paddedContent: 'sides'
  }, React.createElement(ButtonRow, {
    centerGroup: [React.createElement(ButtonIcon, {
      key: 1,
      iconName: "add",
      isDisabled: false,
      size: "large",
      title: "Add Row"
    }), React.createElement(ButtonIcon, {
      key: 2,
      iconName: "close",
      isDisabled: false,
      size: "large",
      title: "Remove Row"
    })]
  }))), React.createElement(Row, null, React.createElement(Col, {
    small: 'fillSpace'
  }, React.createElement(Input, {
    id: "input-01",
    type: "text"
  })), React.createElement(Col, {
    small: 'fitContent'
  }, React.createElement(SelectDropdown, {
    items: items,
    value: 'simple',
    width: '200px'
  })), React.createElement(Col, {
    small: 'fitContent',
    paddedContent: 'sides'
  }, React.createElement(ButtonRow, {
    centerGroup: [React.createElement(ButtonIcon, {
      key: 3,
      iconName: "add",
      isDisabled: false,
      size: "large",
      title: "Add Row"
    }), React.createElement(ButtonIcon, {
      key: 4,
      iconName: "close",
      isDisabled: false,
      size: "large",
      title: "Remove Row"
    })]
  }))))));
}).add('With Cards Inside', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement("h1", null, "fillSpace"), React.createElement(Row, null, React.createElement(Col, {
    large: 'fillSpace'
  }, React.createElement(Card, {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye.")), React.createElement(Col, {
    large: 'fillSpace'
  }, React.createElement(Card, {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye."))), React.createElement("h1", {
    className: "push-triple--top"
  }, "fitContent"), React.createElement(Row, null, React.createElement(Col, {
    large: 'fitContent'
  }, React.createElement(Card, {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye.")), React.createElement(Col, {
    large: 'fitContent'
  }, React.createElement(Card, {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye."))), React.createElement("h1", {
    className: "push-triple--top"
  }, "4/8"), React.createElement(Row, null, React.createElement(Col, {
    large: 4
  }, React.createElement(Card, {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye.")), React.createElement(Col, {
    large: 8
  }, React.createElement(Card, {
    title: "Hello Card",
    shadow: false,
    testSection: "card"
  }, "I am the short card example. Bye."))));
}).add('Special: Responsive Tests', function () {
  return React.createElement("div", null, React.createElement("h1", null, "Simple"), React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pushRowsTop: _boolean('pushRowsTop', true),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', true)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 8
  }, "small=8"), React.createElement(Col, {
    small: 4
  }, "small=4")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: true
  }, "small=true"), React.createElement(Col, {
    small: true
  }, "small=true"), React.createElement(Col, {
    small: true
  }, "small=true")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: false
  }, "small=false"), React.createElement(Col, {
    small: false
  }, "small=false"), React.createElement(Col, {
    small: false
  }, "small=false")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    large: 8
  }, "large=8"), React.createElement(Col, {
    large: 4
  }, "large=4")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    large: true
  }, "large=true"), React.createElement(Col, {
    large: true
  }, "large=true"), React.createElement(Col, {
    large: true
  }, "large=true"))), React.createElement("h1", {
    className: "push-triple--top"
  }, "Complex"), React.createElement(Container, {
    fluid: _boolean('fluid', false),
    outlineDebug: _boolean('outlineDebug', true),
    pushRowsTop: _boolean('pushRowsTop', true),
    paddedContent: select('paddedContent', paddingOptions, 'none')
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 12,
    medium: 8
  }, "small=12 medium=8"), React.createElement(Col, {
    small: 6,
    medium: 4
  }, "small=6 medium=4")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 6,
    medium: 3
  }, "small=6 medium=3"), React.createElement(Col, {
    small: 6,
    medium: 3
  }, "small=6 medium=3"), React.createElement(Col, {
    small: 6,
    medium: 3
  }, "small=6 medium=3"), React.createElement(Col, {
    small: 6,
    medium: 3
  }, "small=6 medium=3")), React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false)
  }, React.createElement(Col, {
    small: 6
  }, "small=6"), React.createElement(Col, {
    small: 6
  }, "small=6"))));
}).add('Special: Responsive Layout', function () {
  return React.createElement(Container, {
    outlineDebug: _boolean('outlineDebug', true),
    pushRowsTop: _boolean('pushRowsTop', false),
    paddedContent: select('paddedContent', paddingOptions, 'none'),
    fluid: _boolean('fluid', false)
  }, React.createElement(Row, {
    removeGutters: _boolean('Row removeGutters', false),
    paddedContent: 'around'
  }, React.createElement("div", null, React.createElement("h2", null, "Features"), React.createElement("p", {
    className: "lead"
  }, "Manage your app\u2019s feature flags"))), React.createElement(Row, null, React.createElement(Col, {
    small: 6
  }, React.createElement("img", {
    src: "https://s3-us-west-1.amazonaws.com/zach-designs/flagly/thing.svg"
  })), React.createElement(Col, {
    small: 6
  }, React.createElement("h6", null, "What\u2019s a Feature Flag?"), React.createElement("p", null, "Feature flags, also known as feature toggles, are a software development technique that lets you turn certain functionality on and off without deploying new code. This allows for better control and more experimentation over the full lifecycle of features. You can toggle a feature off to release code quickly without exposing it to users."), React.createElement("h6", null, "Try it for yourself"), React.createElement(Code, null, "var enabled = optimizely.isFeatureEnabled(\u201Dchat_window\u201D, userId); if(enabled)", ' ', ' ', "else", ' '), React.createElement(Row, null, React.createElement(Col, {
    large: 6
  }, React.createElement(Button, {
    width: 'full'
  }, "View Docs")), React.createElement(Col, {
    large: 6
  }, React.createElement(Button, {
    width: 'full'
  }, "Create Feature"))))));
});