import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function DropdownListItem(props) {
  const classes = classNames({
    'hard--sides': props.hardSides,
    'hard--top': props.hardTop,
    'oui-dropdown__item': true,
  });

  function handleOnClick(event) {
    if (props.ignoreToggle) {
      event.ignoreToggle = true;
      event.persist();
    }
  }

  return (
    <li
      className={ classes }   
      onClick={ handleOnClick } 
      role={ props.role }>
      { props.children }
    </li>
  );
}

DropdownListItem.propTypes = {
  /** Nodes to display within */
  children: PropTypes.node,
  /** Remove padding from sides */
  hardSides: PropTypes.bool,
  /** Remove padding from top */
  hardTop: PropTypes.bool,
  /**
   * Instruct the parent Dropdown instance to not consider
   * clicks on this element for toggling open/close.
   **/
  ignoreToggle: PropTypes.bool,
  /**
   * Aria role for this list item. See roles here:
   * https://www.w3.org/WAI/PF/aria/roles
   */
  role: PropTypes.string,
};
