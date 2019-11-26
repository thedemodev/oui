import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DraggableItem from './DraggableItem';

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      value: 20,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.items !== this.props.items) {
      this.setState({
        items: this.props.items,
      })
    }
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

    const currentItems = this.state.items;
    const newOrderOfItems = Array.from(currentItems);
    const removedItem = newOrderOfItems.splice(source.index, 1);
    newOrderOfItems.splice(destination.index, 0, removedItem[0]);

    this.setState({
      items: newOrderOfItems,
    });
  }

  renderGroupOfItems = ({ item }) => {
    return (
      <Droppable droppableId="56">
        {provided => (
          <div
            className="oui-sortable oui-sortable__group"
            ref={ provided.innerRef }
            { ...provided.droppableProps }>
            <ul>{this.renderDraggableItems(item)}</ul>

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

  renderDraggableItems(item, index) {
    if (Array.isArray(item)) {
      return item.map((nestedItem, index) => {
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
    return (
      <DraggableItem
        key={ item.id }
        item={ item }
        id={ item.id }
        index={ item.id }
        renderFunc={ this.props.renderItem }
      />
    );


  }

  renderGroups(items) {
    return items.map((item, index) => {
      return (
        <DraggableItem
          isGroup={ true }
          key={ 1234 }
          item={ item }
          id={ `${index}-group` }
          index={ index }
          renderFunc={ this.renderGroupOfItems }
        />
      );
    });
  }

  render() {
    const { id, hasGrouping } = this.props;
    return (
      <DragDropContext onDragEnd={ this.onDragEnd.bind(this) }>
        <Droppable droppableId={ id }>
          {provided => (
            <div
              className="oui-sortable"
              ref={ provided.innerRef }
              { ...provided.droppableProps }>
              <ul>{ hasGrouping ? this.renderGroups(this.state.items) : this.renderDraggableItems(this.state.items)}</ul>

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
   * Used to identify the main Draggable region
   */
  id: PropTypes.string.isRequired,
  /**
   * Whether or not this drag and drop supports grouping
   */
  hasGrouping: PropTypes.bool,
};

DragAndDrop.defaultProps = {
  hasGrouping: false,
};

export default DragAndDrop;
