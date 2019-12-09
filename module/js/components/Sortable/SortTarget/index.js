function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React from 'react';
import { DropTarget } from 'react-dnd';
import types from '../draggableTypes';
/**
 * areArraysEqual
 * @param {Array.<Any>} a - First array to compare
 * @param {Array.<Any>} b - Second array to compare
 * @returns {Boolean} - Whether or not the arrays are equal
 */

function areArraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  return a.reduce(function (isEqual, itemInA, i) {
    return isEqual && itemInA === b[i];
  }, true);
}
/**
 * handleHover
 * @description Adjusts the item order when an item is dragged over this target
 * @param {Object} props - SortTarget props
 * @param {Object} monitor - Interface for accessing react-dnd state
 */


function handleHover(props, monitor) {
  var dragItem = monitor.getItem();
  var currentPosition = dragItem.position;
  var nextPosition = props.position,
      onMove = props.onMove,
      ownerId = props.ownerId,
      ownerType = props.ownerType;

  if (!areArraysEqual(currentPosition, nextPosition)) {
    if (dragItem.type === 'item' && ownerType === 'item' && dragItem.data.get('id') === ownerId) {
      return;
    }

    if (dragItem.type === 'group' && (ownerType === 'group' && dragItem.id === ownerId || nextPosition.length !== 1)) {
      return;
    }

    onMove(currentPosition, nextPosition).then(function (_ref) {
      var position = _ref.position;
      dragItem.position = position;
    });
  }
}

var SortTarget =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SortTarget, _React$PureComponent);

  function SortTarget() {
    _classCallCheck(this, SortTarget);

    return _possibleConstructorReturn(this, _getPrototypeOf(SortTarget).apply(this, arguments));
  }

  _createClass(SortTarget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          baseTestSection = _this$props.baseTestSection,
          connectDropTarget = _this$props.connectDropTarget,
          position = _this$props.position;
      var testSectionId = position.join('-');
      var testSection = "".concat(baseTestSection, "-target-").concat(testSectionId);
      return connectDropTarget(React.createElement("li", {
        className: "soft-half--top",
        "data-test-section": testSection
      }));
    }
  }]);

  return SortTarget;
}(React.PureComponent);

_defineProperty(SortTarget, "propTypes", {
  baseTestSection: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
  ownerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  ownerType: PropTypes.oneOf(['item', 'group']).isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired
});

export default DropTarget(types.item, {
  hover: handleHover
}, function (connect, monitor) {
  return {
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
})(SortTarget);