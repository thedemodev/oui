import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Autocomplete from './index.js';
import Link from '../Link';
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
  return React.createElement("div", null, React.createElement(Link, null, props.suggestion.name), React.createElement("div", null, "population: ", props.suggestion.population));
};

CustomSuggestion.propTypes = {
  suggestion: PropTypes.object
};

var CustomAction = function CustomAction(props) {
  return React.createElement(Link, null, "+ add city");
};

var filterByCityName = function filterByCityName(suggestion) {
  return suggestion.name.toLowerCase();
};

var stories = storiesOf('Autocomplete', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Autocomplete, {
    onSuggestionClick: action('suggestion'),
    suggestions: cityData.map(function (city) {
      return city.name;
    })
  });
}).add('Custom suggestion field', function () {
  return React.createElement(Autocomplete, {
    placeholder: "Search cities",
    filterBy: filterByCityName,
    onSuggestionClick: action('suggestion'),
    suggestions: cityData,
    SuggestionField: CustomSuggestion
  });
}).add('Action field', function () {
  return React.createElement(Autocomplete, {
    placeholder: "Search cities",
    onActionClick: action('action'),
    onSuggestionClick: action('suggestion'),
    suggestions: cityData.map(function (city) {
      return city.name;
    }),
    ActionField: CustomAction
  });
});