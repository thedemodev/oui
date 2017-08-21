import React from 'react';
import PropTypes from 'prop-types';
import OverlayWrapper from '../OverlayWrapper';
import Poptip from './Poptip';

/**
 * Displays help text when hovering on an element.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PoptipWrapper = ({
  children,
  content,
  horizontalAttachment,
  horizontalTargetAttachment,
  verticalAttachment,
  verticalTargetAttachment,
  testSection,
}) => (
  <OverlayWrapper
    behavior="hover"
    overlay={ <Poptip testSection={ testSection }>
      { content }
    </Poptip> }
    horizontalAttachment={ horizontalAttachment }
    horizontalTargetAttachment={ horizontalTargetAttachment }
    verticalAttachment={ verticalAttachment }
    verticalTargetAttachment={ verticalTargetAttachment }>
    { children }
  </OverlayWrapper>
);

PoptipWrapper.displayName = 'Poptip';

PoptipWrapper.propTypes = {
  /** Content that, when hovered on, makes the Poptip appear */
  children: PropTypes.node.isRequired,
  /** Text that appears within the poptip */
  content: PropTypes.string.isRequired,
  /** Side of the poptip that should attach to the `children` */
  horizontalAttachment: PropTypes.oneOf(['left', 'center', 'right']),
  /** Side of `children` that should attach to the poptip */
  horizontalTargetAttachment: PropTypes.oneOf(['left', 'center', 'right']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** Vertical edge of the poptip that should touch the `children` */
  verticalAttachment: PropTypes.oneOf(['top', 'middle', 'bottom']),
  /** Vertical edge of the `children` that should touch the poptip */
  verticalTargetAttachment: PropTypes.oneOf(['top', 'middle', 'bottom']),
};

export default PoptipWrapper;
