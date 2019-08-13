import React from 'react';
import PropTypes from 'prop-types';

import IconLink from '../IconLink';

const PrimaryLinks = (props) => {
  const { isNavOpen, items } = props;
  return (
    <li className="push-double--ends">
      <ul>
        { items.map(item => (
          <IconLink
            { ...item }
            key={ `primary-link-${item.iconName}` }
            isSecondaryLink={ false }
            isNavOpen={ isNavOpen }
          />
        )) }
      </ul>
    </li>
  );
};

PrimaryLinks.propTypes = {
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
      /* String, name of test data section */
      testSection: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PrimaryLinks;
