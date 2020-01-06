import PropTypes from 'prop-types';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

class DraggableItem extends React.Component {
  render() {
    const { id, index, item, renderFunc } = this.props;
    return (
      <Draggable key={ item.id } draggableId={ id.toString() } index={ index }>
        {(provided, snapshot) => (
          <li
            className="oui-sortable__item flex"
            ref={ provided.innerRef }
            { ...provided.draggableProps }
            { ...provided.dragHandleProps }>
            {renderFunc({ item, index, snapshot })}
          </li>
        )}
      </Draggable>
    );
  }
}

DraggableItem.propTypes = {
  /**
   * Id for this particular Draggable Item
   */
  id: PropTypes.number.isRequired,
  /**
   * Current index for this particular Draggable Item
   */
  index: PropTypes.number.isRequired,
  /**
   * Item to render using render function pass as prop
   */
  item: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  /**
   * Function used to render the contents of this Draggable Item
   */
  renderFunc: PropTypes.func.isRequired,
};


export default DraggableItem;
