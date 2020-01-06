import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableItem from './DraggableItem';

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const currentItems = this.props.items;
    const newOrderOfItems = Array.from(currentItems);
    const removedItem = newOrderOfItems.splice(source.index, 1);
    newOrderOfItems.splice(destination.index, 0, removedItem[0]);

    this.props.onDragEnd(newOrderOfItems);
  }

  renderDraggableItems(items) {
    if (Array.isArray(items)) {
      return items.map((nestedItem, index) => {
        return (
          <DraggableItem
            key={ nestedItem.id }
            item={ nestedItem }
            id={ nestedItem.id }
            index={ index }
            renderFunc={ this.props.renderItem }
          />
        );
      });
    }
  }

  render() {
    return (
      <DragDropContext onBeforeCapture={ this.props.onBeforeCapture } onDragEnd={ this.onDragEnd }>
        <Droppable droppableId={ this.props.idForDroppableRegion }>
          {provided => (
            <div
              className="oui-sortable"
              ref={ provided.innerRef }
              { ...provided.droppableProps }>
              <ul>
                {this.renderDraggableItems(this.props.items)}
              </ul>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

DragAndDrop.propTypes = {
  /**
   * ID used for this Droppable region
   */
  idForDroppableRegion: PropTypes.string.isRequired,
  /**
   * Array of items to render as DraggableItems
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  /**
   * Function to perform an action before item dimensions are captured
   */
  onBeforeCapture: PropTypes.func,
  /**
   * Function to perform an action after dragging has finished
   */
  onDragEnd: PropTypes.func,
  /**
   * Function used to render each draggable item
   */
  renderItem: PropTypes.func.isRequired,
};

DragAndDrop.defaultProps = {
  onBeforeCapture: () => {},
  onDragEnd: () => {},
};

export default DragAndDrop;
