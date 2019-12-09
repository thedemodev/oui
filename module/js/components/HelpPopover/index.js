import PropTypes from 'prop-types';
import React from 'react';
import OverlayWrapper from '../OverlayWrapper';
import Popover from '../Popover';
import ButtonIcon from '../ButtonIcon';

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
  return React.createElement(OverlayWrapper, {
    behavior: behavior,
    horizontalAttachment: horizontalAttachment,
    isConstrainedToScreen: isConstrainedToScreen,
    overlay: React.createElement(Popover, {
      title: popoverTitle,
      popoverId: popoverId
    }, children),
    testSection: testSection,
    verticalAttachment: verticalAttachment
  }, React.createElement(ButtonIcon, {
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
  behavior: PropTypes.oneOf(['click', 'hover']),

  /** Description of thing that the person hovered for. */
  children: PropTypes.node.isRequired,

  /** Side of the `overlay` that should attach to the `children` */
  horizontalAttachment: PropTypes.oneOf(['left', 'center', 'right']),

  /** Size of icon */
  iconSize: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Attach `overlay` to an edge of the screen if it is going to move off */
  isConstrainedToScreen: PropTypes.bool,

  /** Id of the thing that is being described. */
  popoverId: PropTypes.string,

  /** Title of the thing that is being described. */
  popoverTitle: PropTypes.string,

  /** Test section */
  testSection: PropTypes.string,

  /** Vertical edge of the `overlay` that should touch the `children` */
  verticalAttachment: PropTypes.oneOf(['top', 'middle', 'bottom'])
};
HelpPopover.defaultProps = {
  behavior: 'click',
  iconSize: 'medium',
  isConstrainedToScreen: true,
  testSection: 'help-popover'
};
export default HelpPopover;