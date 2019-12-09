"use strict";

var _react = _interopRequireDefault(require("react"));

var _icons = _interopRequireDefault(require("./icons.json"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonInfo = require("@storybook/addon-info");

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _Button = _interopRequireDefault(require("../components/Button"));

var _Table = _interopRequireDefault(require("../components/Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var stories = (0, _react2.storiesOf)('Icons', module); // this add some decorators for making addons available

stories.addDecorator(_addonKnobs.withKnobs).addDecorator((0, _addonInfo.withInfo)('react <Icon /> component')).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Everything', function () {
  var iconsElements = _icons["default"].map(function (icon, index) {
    var Box = _styledComponents["default"].div(_templateObject(), icon.title);

    return _react["default"].createElement(Box, {
      key: index,
      style: styles.iconBox
    }, _react["default"].createElement(_reactOuiIcons["default"], {
      style: styles.icon,
      description: icon.title,
      name: icon.title.split(' ').join('-'),
      fill: (0, _addonKnobs.text)('color', 'black'),
      size: (0, _addonKnobs.select)('size', {
        small: 'small',
        medium: 'medium',
        large: 'large'
      }, 'medium')
    }));
  });

  return _react["default"].createElement("div", {
    className: "App"
  }, _react["default"].createElement("h1", null, "All Icons (via react-oui-icons)"), _react["default"].createElement(Container, null, iconsElements));
});
stories.add('Knobs', function () {
  return _react["default"].createElement(_reactOuiIcons["default"], {
    name: (0, _addonKnobs.select)('name', {
      bell: 'bell',
      medium: 'medium',
      large: 'large'
    }, 'bell'),
    fill: (0, _addonKnobs.text)('color', 'black'),
    size: (0, _addonKnobs.select)('size', {
      small: 'small',
      medium: 'medium',
      large: 'large'
    }, 'medium')
  });
});
/* eslint-disable max-len */

stories.add('Alignment', function () {
  return _react["default"].createElement("div", {
    className: "reading-column--new"
  }, _react["default"].createElement("h1", null, "Icon alignment"), _react["default"].createElement("p", null, "These example stories shows approaches to align icons using various techniques and demonstrates some solutions and potential short-comings."), _react["default"].createElement("h2", null, "Inside a table"), _react["default"].createElement("p", null, "Tables vertical alignment within the entire TD, but often you want to align an icon with the text:"), _react["default"].createElement("h2", null, "Text alignment ", _react["default"].createElement("span", {
    className: "muted"
  }, "(using flex)")), _react["default"].createElement("p", null, "Example using ", _react["default"].createElement("code", null, "divs, spans, and flex helpers")), _react["default"].createElement(_Table["default"], {
    density: "loose",
    style: "rule",
    tableLayoutAlgorithm: "fixed"
  }, _react["default"].createElement(_Table["default"].THead, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TH, null, " Experiment "), _react["default"].createElement(_Table["default"].TH, {
    isNumerical: true
  }, " Some Button "))), _react["default"].createElement(_Table["default"].TBody, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("div", {
    className: "flex flex-align--start"
  }, _react["default"].createElement("span", {
    className: "flex push-half--right"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: (0, _addonKnobs.select)('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "Flex align start")), _react["default"].createElement(_Table["default"].TD, {
    isNumerical: true
  }, _react["default"].createElement(_Button["default"], null, "Hello"))), _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("div", {
    className: "flex flex-align--center"
  }, _react["default"].createElement("span", {
    className: "flex push-half--right"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: (0, _addonKnobs.select)('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "Flex align center")), _react["default"].createElement(_Table["default"].TD, {
    isNumerical: true
  }, _react["default"].createElement(_Button["default"], null, "Hello"))), _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, null, _react["default"].createElement("div", {
    className: "flex flex-align--end"
  }, _react["default"].createElement("span", {
    className: "flex push-half--right"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: (0, _addonKnobs.select)('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "Flex align end")), _react["default"].createElement(_Table["default"].TD, {
    isNumerical: true
  }, _react["default"].createElement(_Button["default"], null, "Hello"))))), _react["default"].createElement("h2", null, "Row alignment ", _react["default"].createElement("span", {
    className: "muted"
  }, "(via TD verticalAlign prop)")), _react["default"].createElement("p", null, "Another example using ", _react["default"].createElement("code", null, "verticalAlign='middle'")), _react["default"].createElement(_Table["default"], {
    density: "loose",
    style: "rule",
    tableLayoutAlgorithm: "fixed"
  }, _react["default"].createElement(_Table["default"].THead, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TH, null, " Experiment "), _react["default"].createElement(_Table["default"].TH, {
    isNumerical: true
  }, " Some Button "))), _react["default"].createElement(_Table["default"].TBody, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, {
    verticalAlign: "top"
  }, _react["default"].createElement("span", {
    className: "push-half--right"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: (0, _addonKnobs.select)('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "verticalAlign top ", _react["default"].createElement("span", {
    className: "muted"
  }, "(default)")), _react["default"].createElement(_Table["default"].TD, {
    isNumerical: true
  }, _react["default"].createElement(_Button["default"], null, "Hello"))), _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, {
    verticalAlign: "middle"
  }, _react["default"].createElement("span", {
    className: "push-half--right"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: (0, _addonKnobs.select)('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "verticalAlign middle"), _react["default"].createElement(_Table["default"].TD, {
    isNumerical: true
  }, _react["default"].createElement(_Button["default"], null, "Hello"))), _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TD, {
    verticalAlign: "bottom"
  }, _react["default"].createElement("span", {
    className: "push-half--right"
  }, _react["default"].createElement(_reactOuiIcons["default"], {
    name: (0, _addonKnobs.select)('name', {
      bell: 'bell',
      archive: 'archive',
      close: 'close',
      exclamation: 'exclamation',
      add: 'add',
      inconclusive: 'inconclusive',
      redo: 'redo',
      calendar: 'calendar'
    }, 'calendar')
  })), "verticalAlign bottom"), _react["default"].createElement(_Table["default"].TD, {
    isNumerical: true
  }, _react["default"].createElement(_Button["default"], null, "Hello"))))));
});
stories.add('Animated', function () {
  return _react["default"].createElement(_reactOuiIcons["default"], {
    className: "rotating",
    name: "settings",
    size: "large"
  });
});

var Container = _styledComponents["default"].div(_templateObject2());

var styles = {
  icon: {
    alignSelf: 'center'
  }
};