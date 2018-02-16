import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Link } from 'react-router';

const styles = {
  header: css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  }),
  title: css({
    fontSize: '1.25rem',
  }),
  badges: css({
    marginLeft: '0.5em',
  }),
};

const MatrixFileCard = (props) => (
  <div>
    <div { ...styles.header }>
      <Link
        to={ props.link }
        title={ `View documentation for “${props.children}”` }>
        <h3 { ...styles.title }>
          { props.children }
        </h3>
      </Link>
    </div>
  </div>
);

MatrixFileCard.propTypes = {
  children: PropTypes.string.isRequired,
  languages: PropTypes.array,
  link: PropTypes.string.isRequired,
};

export default MatrixFileCard;
