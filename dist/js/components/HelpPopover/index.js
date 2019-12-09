"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _OverlayWrapper = _interopRequireDefault(require("../OverlayWrapper"));

var _Popover = _interopRequireDefault(require("../Popover"));

var _ButtonIcon = _interopRequireDefault(require("../ButtonIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HelpPopover = function HelpPopover(_ref) {
  var behavior = _ref.behavior,
      children = _ref.children,
      horizontalAttachment = _ref.horizontalAttachment,
      iconSize = _ref.iconSize,
      isConstrainedToScreen = _ref.isConstrainedToScreen,
      popoverId = _ref.popoverId,
      popoverTitle = _ref.popoverTitle,
      verticalAttachment = _ref.verticalAttachment,
      testSection = _ref.testSection;
  return _react["default"].createElement(_OverlayWrapper["default"], {
    behavior: behavior,
    horizontalAttachment: horizontalAttachment,
    isConstrainedToScreen: isConstrainedToScreen,
    overlay: _react["default"].createElement(_Popover["default"], {
      title: popoverTitle,
      popoverId: popoverId
    }, children),
    testSection: testSection,
    verticalAttachment: verticalAttachment
  }, _react["default"].createElement(_ButtonIcon["default"], {
    ariaDescribedBy: popoverId,
    className: "cursor--pointer push-half--left",
    style: "plain",
    "data-test-section": "help-popover-icon",
    iconName: "help",
    iconSize: iconSize,
    title: "Help"
  }));
};

HelpPopover.propTypes = {
  /** Event to listen to and open the overlay */
  behavior: _propTypes["default"].oneOf(['click', 'hover']),

  /** Description of thing that the person hovered for. */
  children: _propTypes["default"].node.isRequired,

  /** Side of the `overlay` that should attach to the `children` */
  horizontalAttachment: _propTypes["default"].oneOf(['left', 'center', 'right']),

  /** Size of icon */
  iconSize: _propTypes["default"].oneOf(['small', 'medium', 'large']),

  /** Attach `overlay` to an edge of the screen if it is going to move off */
  isConstrainedToScreen: _propTypes["default"].bool,

  /** Id of the thing that is being described. */
  popoverId: _propTypes["default"].string,

  /** Title of the thing that is being described. */
  popoverTitle: _propTypes["default"].string,

  /** Test section */
  testSection: _propTypes["default"].string,

  /** Vertical edge of the `overlay` that should touch the `children` */
  verticalAttachment: _propTypes["default"].oneOf(['top', 'middle', 'bottom'])
};
HelpPopover.defaultProps = {
  behavior: 'click',
  iconSize: 'medium',
  isConstrainedToScreen: true,
  testSection: 'help-popover'
};
var _default = HelpPopover;
exports["default"] = _default;