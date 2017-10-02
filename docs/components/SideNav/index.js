import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import LinkActive from '../LinkActive';

const styles = {
  text: css({
    fontSize: '1.1rem',
  }),
  category: css({
    marginBottom: '1em',
  }),
};

const SideNav = (props) => (
  <nav>
    <h2 { ...css(styles.category, styles.text) }>
      <LinkActive
        to={ props.category.href }
        currentRoute={ props.currentRoute }>
        { props.category.name }
      </LinkActive>
    </h2>
    <ul { ...styles.text }>
      { props.items.map(item => (
        <li key={ item.name }>
          <LinkActive
            to={ item.href }
            currentRoute={ props.currentRoute }>
            { item.name }
          </LinkActive>
        </li>
      ))}
    </ul>
  </nav>
);

SideNav.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  currentRoute: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })).isRequired,
};

export default SideNav;
