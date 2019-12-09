"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UnwrappedSortable = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _SortDragLayer = _interopRequireDefault(require("./SortDragLayer"));

var _SortableGroup = _interopRequireDefault(require("./SortableGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * getKeypathFromPosition
 * @description Converts an index-based keypath to be Immutable-compatible
 * @param {Array.<Number>} position Array of indeces pointing to item/group
 * @returns {Array.<Number|String>} Keypath pointing to item/group data in state
 */
function getKeypathFromPosition(position) {
  // Insert 'children' in between each index in position
  return position.reduce(function (currentKeypath, currentIndex, currentDepth) {
    if (currentDepth === position.length - 1) {
      return [].concat(_toConsumableArray(currentKeypath), [currentIndex]);
    }

    return [].concat(_toConsumableArray(currentKeypath), [currentIndex, 'children']);
  }, []);
}
/**
 * removeItem
 * @description Removes item at position and returns resulting item list
 * @param {Array.<Number>} position Array of indeces pointing to item
 * @param {Immutable.List} items List of items in Sortable component
 * @returns {Immutable.List} List of items without item at given position
 */


function removeItem(position, items) {
  var keypathToItem = getKeypathFromPosition(position);
  var updatedItems = items;
  updatedItems = updatedItems.removeIn(keypathToItem);
  return updatedItems;
}
/**
 * insertItem
 * @description Inserts item at position and returns resulting item list
 * @param {Array.<Number>} position Array of indeces pointing to item
 * @param {Immutable.List} items List of items in Sortable component
 * @param {Immutable.Map} newItem New item to insert into Sortable component
 * @returns {Immutable.List} List of items including new item at given position
 */


function insertItem(position, items, newItem) {
  var keypathToItem = getKeypathFromPosition(position);
  var updatedItems = items;
  updatedItems = updatedItems.updateIn(keypathToItem.slice(0, -1), function (list) {
    return list.splice(keypathToItem.slice(-1), 0, newItem);
  });
  return updatedItems;
}
/**
 * getRealNextPosition
 * @description Adjust next position when item is removed and added during drag
 * @param {Array.<Number>} prev Array of indeces pointing prev item position
 * @param {Array.<Number>} next Array of indeces pointing next item position
 * @returns {Array.<Number>} Array of corrected indeces pointing next position
 */


function getRealNextPosition(prev, next) {
  /**
   * Account for removal of item at original position when dragging downward or
   * into a group by decrementing affected indeces in the next position array
   */
  if (prev.length <= next.length) {
    return next.map(function (nextIndex, i) {
      return nextIndex > prev[i] ? nextIndex - 1 : nextIndex;
    });
  }

  return next;
}
/**
 * enforceGrouping
 * @description Ensures all items exist within a sortable group
 * @param {Immutable.List} items List of items in Sortable component
 * @param {Function} generateGroupId Creates a new unique group key
 * @returns {Immutable.List} Items wrapped in groups at top level
 */


function enforceGrouping(items, generateGroupId) {
  /**
   * Ensure that all top-level drag items in the sortable list are groups and
   * move all top-level items into groups.
   */
  return items.map(function (item) {
    // If a group exists but has not been formatted yet, format it
    if (_immutable["default"].List.isList(item)) {
      return _immutable["default"].fromJS({
        type: 'group',
        children: item,
        id: generateGroupId()
      });
    } // If a group already exists, pass the group through


    if (item.get('type') === 'group') {
      return item;
    } // If the item is a standalone ungrouped item, place it in a group


    return _immutable["default"].fromJS({
      type: 'group',
      children: [item],
      id: generateGroupId()
    });
  });
}
/**
 * prohibitGrouping
 * @description Ensures all items exist at the top level (not grouped)
 * @param {Immutable.List} items List of items in Sortable component
 * @returns {Immutable.List} Items extracted from all grouping levels
 */


function prohibitGrouping(items) {
  return items.reduce(function (updatedItems, currentItem) {
    // If a group exists and is unformatted, extract any items from it
    if (_immutable["default"].List.isList(currentItem)) {
      return updatedItems.concat(currentItem);
    } // If an item exists, pass the item through


    if (currentItem.get('type') === 'item') {
      return updatedItems.push(currentItem);
    } // If a group exists and is formatted, extract any items from it


    if (currentItem.get('type') === 'group' && currentItem.has('children') && currentItem.get('children').size > 0) {
      return updatedItems.concat(currentItem.get('children'));
    }

    return updatedItems;
  }, _immutable["default"].List());
}
/**
 * formatItemsForOutput
 * @description Removes internal group data from items before passing items
 *              to the consumer
 * @param {Immutable.List} items Items to format
 * @returns {Immutable.List} The formatted items list
 */


function formatItemsForOutput(items) {
  return items.map(function (item) {
    return item.get('type') === 'group' ? item.get('children') : item;
  });
}

var Sortable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sortable, _React$Component);

  function Sortable(props) {
    var _this;

    _classCallCheck(this, Sortable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sortable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "generateGroupId", function () {
      var result = _this.groupKeyCounter;
      _this.groupKeyCounter += 1;
      return result;
    });

    _defineProperty(_assertThisInitialized(_this), "moveItem", function (currentPosition, nextPosition) {
      var currentItemKeypath = getKeypathFromPosition(currentPosition);

      var currentItem = _this.state.items.getIn(currentItemKeypath);

      var realNextPosition = getRealNextPosition(currentPosition, nextPosition);
      var updatedItems = _this.state.items; // Move the item at the current position to the next position in the state

      updatedItems = removeItem(currentPosition, updatedItems);
      updatedItems = insertItem(realNextPosition, updatedItems, currentItem);

      _this.setState({
        items: updatedItems
      });

      return Promise.resolve({
        position: realNextPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "endDrag", function () {
      var _this$props = _this.props,
          allowGrouping = _this$props.allowGrouping,
          onChange = _this$props.onChange;
      var items = _this.state.items; // After dragging is complete, remove all empty top-level groups

      var updatedItems = items;
      updatedItems = updatedItems.filter(function (item) {
        return item.get('type') !== 'group' || item.get('children').size > 0;
      });

      if (allowGrouping) {
        updatedItems = enforceGrouping(updatedItems, _this.generateGroupId);
      }

      _this.setState({
        items: updatedItems
      });

      onChange(formatItemsForOutput(updatedItems));
    });

    var _this$props2 = _this.props,
        _allowGrouping = _this$props2.allowGrouping,
        _items = _this$props2.defaultValue;
    var coercedItems = _immutable["default"].List.isList(_items) ? _items : _immutable["default"].fromJS(_items);
    _this.groupKeyCounter = 0;
    _this.state = {
      items: _allowGrouping ? enforceGrouping(coercedItems, _this.generateGroupId) : prohibitGrouping(coercedItems)
    };
    return _this;
  }

  _createClass(Sortable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var currentAllowGrouping = this.props.allowGrouping;
      var prevAllowGrouping = prevProps.allowGrouping;
      var items = this.state.items;

      if (prevAllowGrouping && !currentAllowGrouping) {
        this.setState({
          items: prohibitGrouping(items)
        });
      } else if (!prevAllowGrouping && currentAllowGrouping) {
        this.setState({
          items: enforceGrouping(items, this.generateGroupId)
        });
      }

      if (!currentAllowGrouping) {
        var coercedNewItems = _immutable["default"].List.isList(this.props.defaultValue) ? this.props.defaultValue : _immutable["default"].fromJS(this.props.defaultValue);

        if (items.size !== coercedNewItems.size) {
          this.setState({
            items: currentAllowGrouping ? enforceGrouping(coercedNewItems, this.generateGroupId) : prohibitGrouping(coercedNewItems)
          });
        }
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !nextState.items.equals(this.state.items) || nextProps.allowGrouping !== this.props.allowGrouping || nextProps.defaultValue !== this.props.defaultValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          renderItem = _this$props3.renderItem,
          testSection = _this$props3.testSection;
      var items = this.state.items;
      return _react["default"].createElement("div", {
        className: "oui-sortable",
        "data-test-section": testSection
      }, _react["default"].createElement(_SortableGroup["default"], {
        items: items,
        onMove: this.moveItem,
        endDrag: this.endDrag,
        position: [],
        renderItem: renderItem,
        baseTestSection: testSection,
        id: "root"
      }), _react["default"].createElement(_SortDragLayer["default"], {
        renderItem: renderItem,
        baseTestSection: testSection
      }));
    }
  }]);

  return Sortable;
}(_react["default"].Component);
/**
 * Please note: in order to test this component with Enzyme, this component must
 * by wrapped in a test version of HTML5Backend. Therefore, an unwrapped version
 * of this component must be accessible to unit test files.
 */


_defineProperty(Sortable, "propTypes", {
  /** Whether or not to force items into groups */
  allowGrouping: _propTypes["default"].bool,

  /**
   * Initial value of the <Sortable /> component. List of items and groups.
   * Can either be an Immutable.List or a JS array containing Immutable.Maps
   * or JS objects for items/groups, respectively.
   *
   * Default value format: [ <groups or items> ]
   * Item format: { type: 'item', id: 1, text: 'Hello' }
   * Group format: [ <items only> ]
   */
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    type: _propTypes["default"].oneOf(['item']).isRequired,
    children: _propTypes["default"].array,
    text: _propTypes["default"].string
  }), _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    type: _propTypes["default"].oneOf(['item']).isRequired,
    children: _propTypes["default"].array,
    text: _propTypes["default"].string
  }))])), _propTypes["default"].instanceOf(_immutable["default"].List)]).isRequired,

  /**
   * Handler that is called when a drag interaction ends. This function
   * receives the Immutable.List value of the drag and drop component as
   * an argument.
   */
  onChange: _propTypes["default"].func,

  /**
   * Function for rendering custom components in the drag-and-drop context.
   * This function will receive one object argument with the following
   * properties:
   *
   * - baseTestSection (String): Test section name passed to <Sortable />
   * - connectDragSource (Function): Wrap your item component with
   *                                 this function to make it draggable
   * - item (Immutable.Map): Contains item data (id, text)
   * - isDragPreview (Boolean): Whether the current item is a preview
   * - isDragging (Boolean): Whether the current item is being dragged
   * - position (Array<Number>): Indeces representing the nested item position
   */
  renderItem: _propTypes["default"].func.isRequired,

  /** Test section name */
  testSection: _propTypes["default"].string
});

_defineProperty(Sortable, "defaultProps", {
  allowGrouping: false,
  onChange: function onChange() {},
  testSection: 'sortable'
});

var UnwrappedSortable = Sortable;
exports.UnwrappedSortable = UnwrappedSortable;

var _default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend["default"])(Sortable);

exports["default"] = _default;