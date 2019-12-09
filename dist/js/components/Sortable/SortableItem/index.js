"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _immutable = _interopRequireDefault(require("immutable"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * handleBeginDrag
 * @description Begins drag interaction for the current item
 * @param {Object} props - SortableItem props
 * @returns {Object} Information passed to item renderer + sort target upon drag
 */
function handleBeginDrag(props) {
  var item = props.item,
      position = props.position,
      id = props.id;
  return {
    data: item,
    id: id,
    position: position,
    type: 'item'
  };
}
/**
 * handleEndDrag
 * @description Ends drag interaction for the current item
 * @param {Object} props - SortableItem props
 */


function handleEndDrag(props) {
  props.endDrag();
}
/**
 * isItemBeingDragged
 * @description Calculates whether the current item is being dragged
 * @param {Object} props - SortableItem props
 * @param {Object} monitor - Interface to interact with react-dnd state
 * @returns {Boolean} Whether or not the current item is being dragged
 */


function isItemBeingDragged(props, monitor) {
  return !monitor.didDrop() && monitor.getItem().id === props.id && monitor.getItem().type === 'item';
}

var SortableItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SortableItem, _React$Component);

  function SortableItem() {
    _classCallCheck(this, SortableItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SortableItem).apply(this, arguments));
  }

  _createClass(SortableItem, [{
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
      var _this$props = this.props,
          baseTestSection = _this$props.baseTestSection,
          connectDragSource = _this$props.connectDragSource,
          isDragging = _this$props.isDragging,
          isDragPreview = _this$props.isDragPreview,
          item = _this$props.item,
          position = _this$props.position,
          onMove = _this$props.onMove,
          render = _this$props.render;
      var targetPosition = [].concat(_toConsumableArray(position.slice(0, -1)), [position[position.length - 1] + 1]);
      var className = (0, _classnames["default"])({
        'oui-sortable__drag-placeholder': !isDragPreview && isDragging,
        'oui-sortable__item': true,
        'pointer-events--none': !isDragPreview && isDragging
      });
      var renderedItem = render({
        baseTestSection: baseTestSection,
        connectDragSource: connectDragSource,
        item: item,
        isDragging: isDragging,
        isDragPreview: isDragPreview,
        position: position
      });
      var testSectionName = isDragPreview ? 'item-preview' : 'item';
      var testSectionId = position.join('-');
      var testSection = "".concat(baseTestSection, "-").concat(testSectionName, "-").concat(testSectionId);
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("li", {
        className: className,
        "data-test-section": testSection
      }, renderedItem), _react["default"].createElement(_SortTarget["default"], {
        baseTestSection: baseTestSection,
        onMove: onMove,
        ownerId: item.get('id'),
        ownerType: "item",
        position: targetPosition
      }));
    }
  }]);

  return SortableItem;
}(_react["default"].Component);

_defineProperty(SortableItem, "propTypes", {
  baseTestSection: _propTypes["default"].string.isRequired,
  connectDragPreview: _propTypes["default"].func.isRequired,
  connectDragSource: _propTypes["default"].func.isRequired,
  endDrag: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  isDragPreview: _propTypes["default"].bool,
  isDragging: _propTypes["default"].bool.isRequired,
  item: _propTypes["default"].instanceOf(_immutable["default"].Map).isRequired,
  onMove: _propTypes["default"].func.isRequired,
  position: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  render: _propTypes["default"].func.isRequired
});

_defineProperty(SortableItem, "defaultProps", {
  isDragPreview: false
});

var _default = (0, _reactDnd.DragSource)(_draggableTypes["default"].item, {
  beginDrag: handleBeginDrag,
  endDrag: handleEndDrag,
  isDragging: isItemBeingDragged
}, function (connect, monitor) {
  return {
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})(SortableItem);

exports["default"] = _default;