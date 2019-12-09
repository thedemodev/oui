"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _filter = require("../../utils/filter");

var _FilterPickerListItem = _interopRequireDefault(require("./FilterPickerListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * - Using this instead of isImmutable() because OUI does not have immutable,
 *   only react-immutable-proptypes for propType checking
 *
 * @param {Object|Immutable.Map} itemToCheck
 * - item to evaluate
 * @returns {boolean}
 * - very crude check to detect whether we're dealing with an Immutable Map
 *   or a POJO
 */
function isItemImmutable(itemToCheck) {
  return typeof itemToCheck.size === 'number';
}
/**
 * Based off isItemImmutable, uses the get() for Immutable.Maps or bracket
 * notation for POJO
 * @param {Object|Immutable.Map} pojoOrMap
 * - POJO or Immutable.Map to get key from
 * @param {string} key
 * - top level key to retrieve from POJO or Immutable.Map
 * @returns {*}
 */


function getKeyFromPojoOrImmutableMap(pojoOrMap, key) {
  return isItemImmutable(pojoOrMap) ? pojoOrMap.get(key) : pojoOrMap[key];
}
/**
 *
 * @param {Array} keysToSearch
 * - top level keys in allEntities to join and search for the filterQuery
 * @param {string} filterQuery
 * - value of search input query
 * @param {Function} filterFn
 * - filter function to execute and return from inner function
 * @param {boolean} isCustomFilterFn
 * - determines what arguments are passed to the provided filterFn
 * @returns {Function}
 * - provided an item from an iterable (Object|Immutable.Map), this function
 *   should return a Boolean from the executed filterFn. if isCustomFilterFn
 *   is falsy, the default filter function will be used and only passed
 *   filterQuery and contentToSearch. Otherwise the item argument will
 *   precede filterQuery and contentToSearch
 */


function filterSetup(keysToSearch, filterQuery, filterFn, isCustomFilterFn) {
  return function (item) {
    var contentToSearch = keysToSearch.map(function (key) {
      return getKeyFromPojoOrImmutableMap(item, key) || '';
    }).join(' '); // If a customFilterFn is used, item should be sent as the first argument
    // before filterQuery and contentToSearch. This is worthwhile since
    // it makes more sense for the component consumer to receive item
    // first in the custom filter function. If not a custom filter function,
    // just send filterQuery and contentToSearch since isFilterTermInItem
    // doesn't need the item argument.

    return filterFn.apply(void 0, _toConsumableArray((isCustomFilterFn ? [item] : []).concat([filterQuery, contentToSearch])));
  };
}

var FilterPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(FilterPicker, _Component);

  function FilterPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FilterPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FilterPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filterQuery: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilterInput", function (event) {
      _this.setState({
        filterQuery: event.target.value
      });
    });

    return _this;
  }

  _createClass(FilterPicker, [{
    key: "render",
    value: function render() {
      var filterQuery = this.state.filterQuery;
      var _this$props = this.props,
          allEntities = _this$props.allEntities,
          children = _this$props.children,
          customFilterFn = _this$props.customFilterFn,
          keysToSearch = _this$props.keysToSearch,
          selectedEntityIds = _this$props.selectedEntityIds,
          testSection = _this$props.testSection;
      var isCustomFilterFn = customFilterFn() !== null;
      var filterFn = isCustomFilterFn ? customFilterFn : _filter.isFilterTermInItem;
      var availableEntitiesFilter = filterSetup(keysToSearch, filterQuery, filterFn, isCustomFilterFn);
      var availableEntities = allEntities.filter(function (entity) {
        return !selectedEntityIds.includes(getKeyFromPojoOrImmutableMap(entity, 'id'));
      }).filter(availableEntitiesFilter);
      var selectedEntities = allEntities.filter(function (entity) {
        return selectedEntityIds.includes(getKeyFromPojoOrImmutableMap(entity, 'id'));
      });
      return _react["default"].createElement("div", {
        className: "oui-filter-picker",
        "data-test-section": testSection
      }, children({
        handleFilterInput: this.handleFilterInput.bind(this),
        availableEntities: availableEntities,
        filterQuery: filterQuery,
        selectedEntities: selectedEntities
      }));
    }
  }]);

  return FilterPicker;
}(_react.Component);

_defineProperty(FilterPicker, "propTypes", {
  /**
   * Array of Objects or Immutable.List of Immutable.Maps of all entities,
   * including selected ones
   */
  allEntities: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].object), _reactImmutableProptypes["default"].listOf(_reactImmutableProptypes["default"].map)]),

  /**
   * Function that should return a child node, passed an object
   * as an argument with the following keys:
   * - availableEntities {Array|Immutable.List}:
   *    The difference of allEntities and entities based on provided
   *    selectedEntityIds. Additionally, filtered via the default filter
   *    function based on the filterQuery value set in handleFilterInput,
   *    or alternatively a provided custom filter function
   * - filterQuery {string}:
   *    Value stored in component state via handleFilterInput
   * - handleFilterInput {Function}:
   *    Function that can be used in an input, that sets the input value
   *    in component state as filterQuery. This can be used for filtering
   *    in the default or custom filter function. If a search Input will
   *    be used with Blocklist and FilterList.ListItem, consider wrapping
   *    Blocklist inside a div with the oui-filter-picker-list class to
   *    remove the Input's bottom border (see story/story source for example)
   * - selectedEntities {Array|Immutable.List}:
   *    Given the optionally provided selectedEntityIds, an array or
   *    Immutable.List of entities, based on ID, from allEntities
   **/
  children: _propTypes["default"].func.isRequired,

  /**
   * Optional function that, if provided, can be used in place of the
   * standard filter function.
   * - Function will receive item, filterQuery, and contentToSearch arguments
   *   from a filter iterable, the last two values may be undefined so some
   *   sane defaults aren't a bad idea
   * - Should return a boolean value, if null is returned by customFilterFn,
   *   the default filter function will be used instead
   * - Example of a customFilterFn that behaves similarly to the default
   *   filter function:
   *    <FilterPicker
   *      customFilterFn={ (item, filterQuery = '', contentToSearch = '') => {
   *          return (
   *            !item.get('archived') &&
   *            contentToSearch.includes(filterQuery);
   *          );
   *      } }>
   */
  customFilterFn: _propTypes["default"].func,

  /**
   * Optional array of top level keys in allEntities to join and search for
   * the filterQuery
   */
  keysToSearch: _propTypes["default"].array,

  /**
   * Optional array or Immutable.List of numbers of selected entity IDs.
   * Do not provide if selected entities shouldn't be filtered
   * from availableEntities
   */
  selectedEntityIds: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].number), _reactImmutableProptypes["default"].listOf(_propTypes["default"].number)]),

  /**
   * String value for the outermost container's
   * data-test-section attribute
   **/
  testSection: _propTypes["default"].string
});

_defineProperty(FilterPicker, "defaultProps", {
  allEntities: [],
  customFilterFn: function customFilterFn() {
    return null;
  },
  keysToSearch: ['name', 'description'],
  selectedEntityIds: [],
  testSection: ''
});

FilterPicker.ListItem = _FilterPickerListItem["default"];
var _default = FilterPicker;
exports["default"] = _default;