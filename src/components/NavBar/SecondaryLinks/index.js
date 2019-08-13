import React from 'react';
import PropTypes from 'prop-types';

import IconLink from '../IconLink';

const SecondaryLinks = (props) => {
  const { isNavOpen, items } = props;
  return (
    <li className="anchor--bottom">
      <ul>
        { items.map(item => (
          <IconLink
            { ...item }
            key={ `secondary-link-${item.iconName}` }
            isSecondaryLink={ true }
            isNavOpen={ isNavOpen }
          />
        )) }
      </ul>
    </li>
  );
};

SecondaryLinks.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      isVisible: PropTypes.bool.isRequired,
      /* Object, { type: '', action: '', pushStateHandler: '' } */
      /* type key value can be pushStateHref, linkHref, function */
      /* if key is pushStateHref, action is string, handler is function */
      /* if key is linkHref, action is string */
      /* if key is function, action is function */
      linkAction: PropTypes.object.isRequired,
      linkDescription: PropTypes.string.isRequired,
      /* Boolean Secondary Link */
      isSecondaryLink: PropTypes.bool.isRequired,
      /* String, name of test data section */
      testSection: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SecondaryLinks;
