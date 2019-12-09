function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: 1px dashed #ccc;\n    border-radius: 8px;\n    box-sizing: border-box;\n    display: flex;\n    height: 100px;\n    justify-content: center;\n    margin: 5px;\n    padding: 20px 10px\n    text-align: center;\n    width: 100px;\n    &:after {\n      color: white;\n      transition: all 0.4s ease;\n      content: '", "';\n      font-family: Helvetica;\n      font-size: 0.5rem;\n      max-width: 90px;\n      position: absolute;\n      margin-top: 70px;\n    }\n    &:hover:after {\n      color: #666;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import icons from './icons.json';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Icon from 'react-oui-icons';
import Button from '../components/Button';
import Table from '../components/Table';
var stories = storiesOf('Icons', module); // this add some decorators for making addons available

stories.addDecorator(withKnobs).addDecorator(withInfo('react <Icon /> component')).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Everything', function () {
  var iconsElements = icons.map(function (icon, index) {
    var Box = styled.div(_templateObject(), icon.title);
    return React.createElement(Box, {
      key: index,
      style: styles.iconBox
    }, React.createElement(Icon, {
      style: styles.icon,
      description: icon.title,
      name: icon.title.split(' ').join('-'),
      fill: text('color', 'black'),
      size: select('size', {
        small: 'small',
        medium: 'medium',
        large: 'large'
      }, 'medium')
    }));
  });
  return React.createElement("div", {
    className: "App"
  }, React.createElement("h1", null, "All Icons (via react-oui-icons)"), React.createElement(Container, null, iconsElements));
});
stories.add('Knobs', function () {
  return React.createElement(Icon, {
    name: select('name', {
      bell: 'bell',
      medium: 'medium',
      large: 'large'
    }, 'bell'),
    fill: text('color', 'black'),
    size: select('size', {
      small: 'small',
      medium: 'medium',
      large: 'large'
    }, 'medium')
  });
});
/* eslint-disable max-len */

stories.add('Alignment', function () {
  return React.createElement("div", {
    className: "reading-column--new"
  }, React.createElement("h1", null, "Icon alignment"), React.createElement("p", null, "These example stories shows approaches to align icons using various techniques and demonstrates some solutions and potential short-comings."), React.createElement("h2", null, "Inside a table"), React.createElement("p", null, "Tables vertical alignment within the entire TD, but often you want to align an icon with the text:"), React.createElement("h2", null, "Text alignment ", React.createElement("span", {
    className: "muted"
  }, "(using flex)")), React.createElement("p", null, "Example using ", React.createElement("code", null, "divs, spans, and flex helpers")), React.createElement(Table, {
    density: "loose",
    style: "rule",
    tableLayoutAlgorithm: "fixed"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, " Experiment "), React.createElement(Table.TH, {
    isNumerical: true
  }, " Some Button "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("div", {
    className: "flex flex-align--start"
  }, React.createElement("span", {
    className: "flex push-half--right"
  }, React.createElement(Icon, {
    name: select('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "Flex align start")), React.createElement(Table.TD, {
    isNumerical: true
  }, React.createElement(Button, null, "Hello"))), React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("div", {
    className: "flex flex-align--center"
  }, React.createElement("span", {
    className: "flex push-half--right"
  }, React.createElement(Icon, {
    name: select('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "Flex align center")), React.createElement(Table.TD, {
    isNumerical: true
  }, React.createElement(Button, null, "Hello"))), React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("div", {
    className: "flex flex-align--end"
  }, React.createElement("span", {
    className: "flex push-half--right"
  }, React.createElement(Icon, {
    name: select('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "Flex align end")), React.createElement(Table.TD, {
    isNumerical: true
  }, React.createElement(Button, null, "Hello"))))), React.createElement("h2", null, "Row alignment ", React.createElement("span", {
    className: "muted"
  }, "(via TD verticalAlign prop)")), React.createElement("p", null, "Another example using ", React.createElement("code", null, "verticalAlign='middle'")), React.createElement(Table, {
    density: "loose",
    style: "rule",
    tableLayoutAlgorithm: "fixed"
  }, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, " Experiment "), React.createElement(Table.TH, {
    isNumerical: true
  }, " Some Button "))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, {
    verticalAlign: "top"
  }, React.createElement("span", {
    className: "push-half--right"
  }, React.createElement(Icon, {
    name: select('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "verticalAlign top ", React.createElement("span", {
    className: "muted"
  }, "(default)")), React.createElement(Table.TD, {
    isNumerical: true
  }, React.createElement(Button, null, "Hello"))), React.createElement(Table.TR, null, React.createElement(Table.TD, {
    verticalAlign: "middle"
  }, React.createElement("span", {
    className: "push-half--right"
  }, React.createElement(Icon, {
    name: select('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "verticalAlign middle"), React.createElement(Table.TD, {
    isNumerical: true
  }, React.createElement(Button, null, "Hello"))), React.createElement(Table.TR, null, React.createElement(Table.TD, {
    verticalAlign: "bottom"
  }, React.createElement("span", {
    className: "push-half--right"
  }, React.createElement(Icon, {
    name: select('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "verticalAlign bottom"), React.createElement(Table.TD, {
    isNumerical: true
  }, React.createElement(Button, null, "Hello"))))));
});
stories.add('Animated', function () {
  return React.createElement(Icon, {
    className: "rotating",
    name: "settings",
    size: "large"
  });
});
var Container = styled.div(_templateObject2());
var styles = {
  icon: {
    alignSelf: 'center'
  }
};