import React from 'react';
import PropTypes from 'prop-types';

import components from 'docs/data/index.json';
import SideNav from 'docs/components/SideNav/';
import { toTitleCase } from 'docs/utils/';

const SideNavContainer = ({ categoryName, currentRoute }) => {
  const componentsInCategory = components[categoryName];
  let sideNavItems = [];

  Object.keys(componentsInCategory).map((componentId) => {
    const component = componentsInCategory[componentId];
    if (!component.private) {
      sideNavItems.push({
        name: component.name,
        href: `/${categoryName}/${component.name}/sass`,
      });
    }
  });

  return (
    <SideNav
      category={{
        name: toTitleCase(categoryName),
        href: `/${categoryName}/`,
      }}
      items={ sideNavItems }
      currentRoute={ currentRoute }
    />
  );
};

SideNavContainer.propTypes = {
  categoryName: PropTypes.string.isRequired,
  currentRoute: PropTypes.string,
};

export default SideNavContainer;
