import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { css } from 'glamor';

const headerStyles = css({
  marginBottom: '0.6em',
});

const CategorySection = (props) => (
  <section>
    <h2 { ...headerStyles }>
      <Link
        to={ `/${props.categorySlug}` }
        className="color--base"
        title={ `View all OUI ${props.categoryName}` }>
        { props.categoryName }
      </Link>
    </h2>
    { props.children }
  </section>
);

CategorySection.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categorySlug: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CategorySection;
