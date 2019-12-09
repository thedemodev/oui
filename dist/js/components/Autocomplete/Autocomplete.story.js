"use strict";

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index.js"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cityData = [{
  name: 'austin',
  population: '950,000'
}, {
  name: 'atlanta',
  population: '470,000'
}, {
  name: 'chicago',
  population: '2.7 million'
}, {
  name: 'boston',
  population: '670,000'
}, {
  name: 'denver',
  population: '690,000'
}, {
  name: 'detroit',
  population: '670,000'
}, {
  name: 'san jose',
  population: '1 million'
}, {
  name: 'san antonio',
  population: '1.5 million'
}, {
  name: 'san francisco',
  population: '880,000'
}, {
  name: 'st louis',
  population: '310,000'
}, {
  name: 'new haven',
  population: '130,000'
}, {
  name: 'new orleans',
  population: '390,000'
}, {
  name: 'new york',
  population: '8.5 million'
}, {
  name: 'miami',
  population: '450,00'
}, {
  name: 'philadelphia',
  population: '1.6 million'
}, {
  name: 'phoenix',
  population: '1.6 million'
}, {
  name: 'jacksonville',
  population: '880,000'
}];

var CustomSuggestion = function CustomSuggestion(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement(_Link["default"], null, props.suggestion.name), _react["default"].createElement("div", null, "population: ", props.suggestion.population));
};

CustomSuggestion.propTypes = {
  suggestion: _propTypes["default"].object
};

var CustomAction = function CustomAction(props) {
  return _react["default"].createElement(_Link["default"], null, "+ add city");
};

var filterByCityName = function filterByCityName(suggestion) {
  return suggestion.name.toLowerCase();
};

var stories = (0, _react2.storiesOf)('Autocomplete', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(_index["default"], {
    onSuggestionClick: (0, _addonActions.action)('suggestion'),
    suggestions: cityData.map(function (city) {
      return city.name;
    })
  });
}).add('Custom suggestion field', function () {
  return _react["default"].createElement(_index["default"], {
    placeholder: "Search cities",
    filterBy: filterByCityName,
    onSuggestionClick: (0, _addonActions.action)('suggestion'),
    suggestions: cityData,
    SuggestionField: CustomSuggestion
  });
}).add('Action field', function () {
  return _react["default"].createElement(_index["default"], {
    placeholder: "Search cities",
    onActionClick: (0, _addonActions.action)('action'),
    onSuggestionClick: (0, _addonActions.action)('suggestion'),
    suggestions: cityData.map(function (city) {
      return city.name;
    }),
    ActionField: CustomAction
  });
});