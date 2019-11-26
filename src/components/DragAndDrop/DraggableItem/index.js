import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-oui-icons';
import { Draggable } from 'react-beautiful-dnd';

class DraggableItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };
  }


  render() {
    const { id, index, item, renderFunc, isGroup } = this.props;
    return (
      <Draggable key={ item.id } draggableId={ id.toString() } index={ index }>
        {(provided, snapshot) => (
          <li className="oui-sortable__item flex" ref={ provided.innerRef } { ...provided.draggableProps } { ...provided.dragHandleProps }>
            {isGroup && <span { ...provided.dragHandleProps }>
              <Icon fill="#c7c7c7" name="ellipsis"/>
            </span>}
            {renderFunc({item, index, snapshot})}
          </li>

        )}
      </Draggable>
    );
  }
}

DraggableItem.propTypes = {
  /**
   * The body of the dialog to request minimal information from the user.
   */
  children: PropTypes.node.isRequired,
};

DraggableItem.defaultProps = {
  hasCloseButton: true,
  hasOverlay: true,
  onClose: () => {},
  subtitle: '',
  testSection: '',
};

export default DraggableItem;
