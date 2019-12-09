"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _immutable = _interopRequireDefault(require("immutable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _SortableItem = _interopRequireDefault(require("../SortableItem"));

var _SortTarget = _interopRequireDefault(require("../SortTarget"));

var _draggableTypes = _interopRequireDefault(require("../draggableTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * handleBeginDrag
 * @description Begins drag interaction for the current group
 * @param {Object} props - SortableGroup props
 * @returns {Object} Information passed to sort targets upon drag
 */
function handleBeginDrag(props) {
  var items = props.items,
      position = props.position,
      id = props.id;
  return {
    data: items,
    type: 'group',
    position: position,
    id: id
  };
}
/**
 * handleEndDrag
 * @description Ends drag interaction for the current group
 * @param {Object} props - SortableGroup props
 */


function handleEndDrag(props) {
  props.endDrag();
}
/**
 * isGroupBeingDragged
 * @description Calculates whether the current group is being dragged
 * @param {Object} props - SortableGroup props
 * @param {Object} monitor - Interface to interact with react-dnd state
 * @returns {Boolean} Whether or not the current group is being dragged
 */


function isGroupBeingDragged(props, monitor) {
  return !monitor.didDrop() && monitor.getItem().id === props.id && monitor.getItem().type === 'group';
}

var SortableGroupContainer = function SortableGroupContainer(_ref) {
  var isRootGroup = _ref.isRootGroup,
      children = _ref.children,
      testSection = _ref.testSection,
      props = _objectWithoutProperties(_ref, ["isRootGroup", "children", "testSection"]);

  return isRootGroup ? _react["default"].createElement("div", _extends({
    "data-test-section": testSection
  }, props), children) : _react["default"].createElement("li", _extends({
    "data-test-section": testSection
  }, props), children);
};

SortableGroupContainer.propTypes = {
  children: _propTypes["default"].node,
  isRootGroup: _propTypes["default"].bool,
  testSection: _propTypes["default"].string
};

var SortableGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SortableGroup, _React$Component);

  function SortableGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SortableGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SortableGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderItems", function () {
      var _this$props = _this.props,
          baseTestSection = _this$props.baseTestSection,
          endDrag = _this$props.endDrag,
          isDragPreview = _this$props.isDragPreview,
          items = _this$props.items,
          onMove = _this$props.onMove,
          position = _this$props.position,
          renderItem = _this$props.renderItem;
      return items.map(function (item, i) {
        if (item.get('type') === 'group') {
          return _react["default"].createElement(WrappedGroup, {
            baseTestSection: baseTestSection,
            endDrag: endDrag,
            id: item.get('id'),
            isDragPreview: isDragPreview,
            items: item.get('children'),
            key: "group-".concat(item.get('id')),
            onMove: onMove,
            position: [].concat(_toConsumableArray(position), [i]),
            renderItem: renderItem
          });
        }

        return _react["default"].createElement(_SortableItem["default"], {
          baseTestSection: baseTestSection,
          endDrag: endDrag,
          id: item.get('id'),
          isDragPreview: isDragPreview,
          item: item,
          key: "item-".concat(item.get('id')),
          onMove: onMove,
          position: [].concat(_toConsumableArray(position), [i]),
          render: renderItem
        });
      });
    });

    return _this;
  }

  _createClass(SortableGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connectDragPreview = this.props.connectDragPreview;
      connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
        captureDragState: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          baseTestSection = _this$props2.baseTestSection,
          connectDragSource = _this$props2.connectDragSource,
          id = _this$props2.id,
          isDragging = _this$props2.isDragging,
          isDragPreview = _this$props2.isDragPreview,
          onMove = _this$props2.onMove,
          position = _this$props2.position;
      var isRootGroup = position.length === 0;

      var trailingTarget = !isRootGroup && _react["default"].createElement(_SortTarget["default"], {
        baseTestSection: baseTestSection,
        onMove: onMove,
        ownerId: id,
        ownerType: "group",
        position: [].concat(_toConsumableArray(position.slice(0, -1)), [position[position.length - 1] + 1])
      });

      var handle = !isRootGroup && connectDragSource(_react["default"].createElement("div", {
        className: "flex flex--column flex-grow--none flex-shrink--none flex-justified--center soft--ends"
      }, _react["default"].createElement("div", {
        className: "oui-icon oui-sortable__group__handle cursor--move",
        "data-test-section": "".concat(baseTestSection, "-handle")
      }, _react["default"].createElement(_reactOuiIcons["default"], {
        fill: "#c7c7c7",
        name: "ellipsis"
      }))));
      var className = (0, _classnames["default"])({
        'flex': true,
        'hard--top': isRootGroup,
        'oui-sortable__drag-placeholder': !isDragPreview && isDragging,
        'oui-sortable__group': true,
        'pointer-events--none': !isDragPreview && isDragging,
        'no-border--top': isDragPreview && isDragging || isRootGroup
      });
      var testSectionName = isDragPreview ? 'group-preview' : 'group';
      var testSectionId = position.length > 0 ? position.join('-') : 'root';
      var testSection = "".concat(baseTestSection, "-").concat(testSectionName, "-").concat(testSectionId);
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(SortableGroupContainer, {
        className: className,
        testSection: testSection,
        isRootGroup: isRootGroup
      }, handle, _react["default"].createElement("ul", {
        className: "flex flex--column width--1-1"
      }, _react["default"].createElement(_SortTarget["default"], {
        baseTestSection: baseTestSection,
        onMove: onMove,
        ownerId: id,
        ownerType: "group",
        position: [].concat(_toConsumableArray(position), [0])
      }), this.renderItems())), trailingTarget);
    }
  }]);

  return SortableGroup;
}(_react["default"].Component);

_defineProperty(SortableGroup, "propTypes", {
  baseTestSection: _propTypes["default"].string.isRequired,
  connectDragPreview: _propTypes["default"].func.isRequired,
  connectDragSource: _propTypes["default"].func.isRequired,
  endDrag: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  isDragPreview: _propTypes["default"].bool,
  isDragging: _propTypes["default"].bool.isRequired,
  items: _propTypes["default"].instanceOf(_immutable["default"].List).isRequired,
  onMove: _propTypes["default"].func.isRequired,
  position: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  renderItem: _propTypes["default"].func.isRequired
});

_defineProperty(SortableGroup, "defaultProps", {
  isDragPreview: false
});

var WrappedGroup = (0, _reactDnd.DragSource)(_draggableTypes["default"].item, {
  beginDrag: handleBeginDrag,
  endDrag: handleEndDrag,
  isDragging: isGroupBeingDragged
}, function (connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource()
  };
})(SortableGroup);
var _default = WrappedGroup;
exports["default"] = _default;