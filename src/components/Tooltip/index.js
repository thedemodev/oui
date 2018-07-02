import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-oui-icons';
import OverlayWrapper from '../OverlayWrapper';
import Popover from '../Popover';

/**
 * Wrapper that combines OverlayWrapper, Popover, and Icon into one simple,
 * elegant Tooltip!
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
let Tooltip = ({
  title,
  description,
  behavior,
  horizontalAttachment,
  verticalAttachment,
}) => {
  return (
    <OverlayWrapper
      behavior={ behavior }
      horizontalAttachment={ horizontalAttachment }
      verticalAttachment={ verticalAttachment }
      overlay={
        <Popover title={ title }>
          <p>
            { description }
          </p>
        </Popover>
      }>
      <span
        className="cursor--pointer"
        style={{marginBottom: '-1px', marginLeft: '6px', marginTop: '3px'}}>
        <Icon
          name="help"
          size="small"
        />
      </span>
    </OverlayWrapper>
  );
};

Tooltip.propTypes = {
  /** Event to listen to and open the overlay */
  behavior: PropTypes.oneOf(['click', 'hover']),
  /** Description of thing that the person hovered for. */
  description: PropTypes.string.isRequired,
  /** Side of the `overlay` that should attach to the `children` */
  horizontalAttachment: PropTypes.oneOf(['left', 'center', 'right']),
  /** Title of thing that is being described. */
  title: PropTypes.string.isRequired,
  /** Vertical edge of the `overlay` that should touch the `children` */
  verticalAttachment: PropTypes.oneOf(['top', 'middle', 'bottom']),
};

Tooltip.defaultProps = {
  behavior: 'hover',
  horizontalAttachment: 'left',
  verticalAttachment: 'middle',
};

export default Tooltip;
