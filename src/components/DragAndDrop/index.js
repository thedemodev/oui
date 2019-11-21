import PropTypes from 'prop-types';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DraggableItem from './DraggableItem';
import Token from '../Token';
import RangeSlider from '../RangeSlider';

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      value: 20,
    };
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
    console.log(item, '*****');
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
    console.log('here', item);
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
    console.log('group', items);
    return items.map((item, index) => {
      console.log('individal', item);
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
    return (
      <DragDropContext onDragEnd={ this.onDragEnd.bind(this) }>
        <Droppable droppableId="123456">
          {provided => (
            <div
              className="oui-sortable"
              ref={ provided.innerRef }
              { ...provided.droppableProps }>
              <ul>{ this.props.hasGrouping ? this.renderGroups(this.state.items) : this.renderDraggableItems(this.state.items)}</ul>

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
   * The body of the dialog to request minimal information from the user.
   */
  children: PropTypes.node.isRequired,
};

DragAndDrop.defaultProps = {
  hasCloseButton: true,
  hasOverlay: true,
  onClose: () => {},
  subtitle: '',
  testSection: '',
};

export default DragAndDrop;
