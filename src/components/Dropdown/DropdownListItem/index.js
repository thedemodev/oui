import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function DropdownListItem(props) {
  function onClick() {
    if (props.hideOnClick) {
      props.handleToggle();
    }
  }

  const classes = classNames({
    'hard--sides': props.hardSides,
    'hard--top': props.hardTop,
    'oui-dropdown__item': true,
  });

  return (
    <li
      className={ classes }
      onClick={ onClick }>
      { props.children }
    </li>
  );
}

DropdownListItem.propTypes = {
  /** Nodes to display within */
  children: PropTypes.node,
  /** Function to toggle visibility of Dropdown.Contents */
  handleToggle: PropTypes.func,
  /** Remove padding from sides */
  hardSides: PropTypes.bool,
  /** Remove padding from top */
  hardTop: PropTypes.bool,
  /** Whether to hide Dropdown.Contents when the item is clicked or not */
  hideOnClick: PropTypes.bool,
};

DropdownListItem.defaultProps = {
  hideOnClick: true,
};
