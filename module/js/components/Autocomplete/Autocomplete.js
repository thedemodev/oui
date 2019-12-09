function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { isFilterTermInItem } from '../../utils/filter';
import Input from '../Input';
import BlockList from '../BlockList';
import Suggestion from './Suggestion';
/**
 * Autocomplete
 * This render an input with typeahead functionality
 *
 * Example:
 *  <Autocomplete
 *    placeholder='typehead...'
 *    suggestions={['foo', 'bar']}
 *    onSuggestionClick={ this.handleSuggestionClick }
 *    ActionField={ CustomActionField }
 *  />
 */

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "inputChange", function (event) {
      var _this$props = _this.props,
          onInputChange = _this$props.onInputChange,
          stateful = _this$props.stateful;
      var query = event.target.value;

      _this.setState({
        inputValue: query
      }, function () {
        var queryCallback = function queryCallback() {
          return onInputChange(query);
        };

        return stateful ? _this.querySuggestions(query, queryCallback) : _this.debouncedOnInputChange(query);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "querySuggestions", function (query, callback) {
      var _this$props2 = _this.props,
          filterBy = _this$props2.filterBy,
          suggestions = _this$props2.suggestions;
      var nextSuggestions = suggestions.filter(function (suggestion) {
        return isFilterTermInItem(query, filterBy(suggestion));
      });

      _this.setState({
        suggestions: nextSuggestions
      }, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "createFocusHandler", function (isFocused) {
      return function () {
        _this.setState({
          isFocused: isFocused
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "createSuggestionClickHandler", function (suggestion) {
      return function () {
        var _this$props3 = _this.props,
            filterBy = _this$props3.filterBy,
            onSuggestionClick = _this$props3.onSuggestionClick,
            autoFillInputValue = _this$props3.autoFillInputValue;

        if (autoFillInputValue) {
          _this.setState({
            inputValue: filterBy(suggestion)
          });
        }

        onSuggestionClick(suggestion);
      };
    });

    _this.state = {
      isFocused: false,
      suggestions: props.suggestions,
      inputValue: props.value
    };

    if (!props.stateful) {
      _this.debouncedOnInputChange = AwesomeDebouncePromise(props.onInputChange, props.debounce);
    }

    return _this;
  }
  /**
   * If stateful query internal suggestions state,
   * else call input change handler
   * @param {String} event - on-change input event
   * @returns {undefined}
   */


  _createClass(Autocomplete, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          inputValue = _this$state.inputValue;
      var _this$props4 = this.props,
          ActionField = _this$props4.ActionField,
          InputField = _this$props4.InputField,
          SuggestionField = _this$props4.SuggestionField,
          maxHeight = _this$props4.maxHeight,
          onActionClick = _this$props4.onActionClick,
          placeholder = _this$props4.placeholder,
          stateful = _this$props4.stateful,
          testSection = _this$props4.testSection;

      var _ref = stateful ? this.state : this.props,
          suggestions = _ref.suggestions;

      var numberOfSuggestions = suggestions.size ? suggestions.size : suggestions.length;
      return React.createElement("div", {
        "data-oui-component": true
      }, React.createElement(InputField, {
        type: "text",
        placeholder: placeholder,
        onFocus: this.createFocusHandler(true),
        onBlur: this.createFocusHandler(false),
        onChange: this.inputChange,
        testSection: "".concat(testSection, "-input"),
        value: inputValue
      }), isFocused && numberOfSuggestions > 0 && React.createElement(BlockList, {
        maxHeight: maxHeight
      }, React.createElement(BlockList.Category, {
        testSection: "".concat(testSection, "-suggestions")
      }, onActionClick && React.createElement(BlockList.Item, {
        key: "action-suggestion",
        onMouseDown: onActionClick,
        testSection: "".concat(testSection, "-action")
      }, React.createElement(ActionField, null)), suggestions.map(function (suggestion, i) {
        return React.createElement(BlockList.Item, {
          key: "suggestion-".concat(i),
          onMouseDown: _this2.createSuggestionClickHandler(suggestion),
          testSection: "".concat(testSection, "-block-item")
        }, React.createElement(SuggestionField, {
          suggestion: suggestion,
          testSection: "".concat(testSection, "-suggestion")
        }));
      }))));
    }
  }]);

  return Autocomplete;
}(Component);

_defineProperty(Autocomplete, "defaultProps", {
  autoFillInputValue: false,
  ActionField: function ActionField(props) {
    return React.createElement("span", props);
  },
  InputField: Input,
  SuggestionField: Suggestion,
  debounce: 200,
  filterBy: function filterBy(x) {
    return x;
  },
  maxHeight: 200,
  onActionClick: function onActionClick() {},
  onInputChange: function onInputChange() {},
  onSuggestionClick: function onSuggestionClick() {},
  placeholder: '',
  stateful: true,
  suggestions: [],
  testSection: '',
  value: ''
});

Autocomplete.propTypes = {
  /** React component that renders an action field */
  ActionField: PropTypes.func,

  /**
    * If true, when suggestion is selected, input value is
    * updated to suggestion value
    */
  InputField: PropTypes.func,

  /** React component that renders an input field */
  SuggestionField: PropTypes.func,

  /** React component that renders a suggestion field */
  autoFillInputValue: PropTypes.bool,

  /** Sets the debounce time (ms) */
  debounce: PropTypes.number,

  /**
   * Function that takes a single suggestion
   * and returns a value for a query to match
   */
  filterBy: PropTypes.func,

  /** Sets the maximum height of the suggestions list */
  maxHeight: PropTypes.number,

  /** Function that is called when the action field is clicked */
  onActionClick: PropTypes.func,

  /** Function that is called when the input field changes its value */
  onInputChange: PropTypes.func,

  /** Function that is called when a suggestion is clicked */
  onSuggestionClick: PropTypes.func,

  /** Placeholder text of input field */
  placeholder: PropTypes.string,

  /** Determines if the list of suggestions should be managed internally  */
  stateful: PropTypes.bool,

  /**
   * List of suggestions
   * TODO: make suggestions an instance of Immutable.List
   */
  suggestions: PropTypes.array,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Default Input value */
  value: PropTypes.string
};
export default Autocomplete;