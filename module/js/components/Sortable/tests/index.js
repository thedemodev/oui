import React from 'react';
import Immutable from 'immutable';
import TestBackend from 'react-dnd-test-backend';
import { mount } from 'enzyme';
import { DragDropContext } from 'react-dnd';
import { UnwrappedSortable } from '../index'; // Sortable component requires a test HTML5 backend to render in unit tests

var Sortable = DragDropContext(TestBackend)(UnwrappedSortable);
var normalSortableData = Immutable.fromJS([{
  id: 1,
  type: 'item',
  text: 'Item A'
}, {
  id: 2,
  type: 'item',
  text: 'Item B'
}, {
  id: 3,
  type: 'item',
  text: 'Item C'
}, {
  id: 4,
  type: 'item',
  text: 'Item D'
}, {
  id: 5,
  type: 'item',
  text: 'Item E'
}]);
var groupedSortableData = Immutable.fromJS([{
  id: 1,
  type: 'item',
  text: 'Item A'
}, {
  id: 2,
  type: 'item',
  text: 'Item B'
}, [{
  id: 4,
  type: 'item',
  text: 'Item C'
}, {
  id: 5,
  type: 'item',
  text: 'Item D'
}, {
  id: 6,
  type: 'item',
  text: 'Item E'
}]]);

var renderItem = function renderItem(_ref) {
  var item = _ref.item,
      connectDragSource = _ref.connectDragSource;
  return connectDragSource(React.createElement("div", null, item.get('text')));
};

describe('components/Sortable', function () {
  var spyObj;
  beforeEach(function () {
    spyObj = {
      changeHandler: function changeHandler() {}
    };
    spyOn(spyObj, 'changeHandler').and.stub();
  });
  describe('Normal Sorting', function () {
    var component; // eslint-disable-line

    beforeEach(function () {
      component = mount(React.createElement(Sortable, {
        defaultValue: normalSortableData,
        renderItem: renderItem,
        allowGrouping: false,
        onChange: spyObj.changeHandler
      }));
    });
    it('should render all draggable items in order', function () {
      var itemA = component.find('[data-test-section="sortable-item-0"]');
      expect(itemA.length).toBe(1);
      expect(itemA.text()).toContain(normalSortableData.getIn([0, 'text']));
      var itemB = component.find('[data-test-section="sortable-item-1"]');
      expect(itemB.length).toBe(1);
      expect(itemB.text()).toContain(normalSortableData.getIn([1, 'text']));
      var itemC = component.find('[data-test-section="sortable-item-2"]');
      expect(itemC.length).toBe(1);
      expect(itemC.text()).toContain(normalSortableData.getIn([2, 'text']));
      var itemD = component.find('[data-test-section="sortable-item-3"]');
      expect(itemD.length).toBe(1);
      expect(itemD.text()).toContain(normalSortableData.getIn([3, 'text']));
      var itemE = component.find('[data-test-section="sortable-item-4"]');
      expect(itemE.length).toBe(1);
      expect(itemE.text()).toContain(normalSortableData.getIn([4, 'text']));
    });
    it('should allow items to be dragged and reordered', function () {
      var backend = component.instance().getManager().getBackend();
      var sourceItem = component.find('[data-test-section="sortable-item-0"]').closest('DragSource(SortableItem)');
      expect(sourceItem.length).toBe(1);
      var destinationTarget = component.find('[data-test-section="sortable-target-3"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceItem.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that the callback received a reordered result

      var stateAfterDragging = spyObj.changeHandler.calls.first().args[0];
      expect(stateAfterDragging.size).toBe(normalSortableData.size);
      expect(stateAfterDragging.map(function (item) {
        return item.get('id');
      }).toJS()).toEqual([2, 3, 1, 4, 5]); // Expect that the list was rerendered with the new order

      var itemA = component.find('[data-test-section="sortable-item-2"]');
      expect(itemA.length).toBe(1);
      expect(itemA.text()).toContain(normalSortableData.getIn([0, 'text']));
    });
    it('should render preview of item in drag layer when dragging', function () {
      var backend = component.instance().getManager().getBackend();
      var sourceItem = component.find('[data-test-section="sortable-item-0"]').closest('DragSource(SortableItem)');
      expect(sourceItem.length).toBe(1);
      var destinationTarget = component.find('[data-test-section="sortable-target-3"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1); // Suspend react-dnd in a dragging state and provide fake coordinates

      backend.simulateBeginDrag([sourceItem.instance().getHandlerId()], {
        clientOffset: {
          x: 0,
          y: 0
        },
        getSourceClientOffset: function getSourceClientOffset() {
          return {
            x: 3,
            y: 4
          };
        }
      });
      component.update(); // Expect that the item preview was rerendered

      var previewA = component.find('[data-test-section="sortable-item-preview-0"]');
      expect(previewA.length).toBe(1);
      expect(previewA.text()).toContain(normalSortableData.getIn([0, 'text'])); // Expect that the preview was rendered in the correct location

      var previewContainer = previewA.closest('.oui-sortable__drag-preview__item');
      expect(previewContainer.length).toBe(1);
      expect(previewContainer.props().style).toHaveProperty('transform', 'translate(3px, 4px)'); // Release dragging state

      backend.simulateDrop();
      backend.simulateEndDrag();
    });
    it('should not reorder if dragging item over its leading target', function () {
      var backend = component.instance().getManager().getBackend(); // Select group containing three items

      var sourceItem = component.find('[data-test-section="sortable-item-1"]').closest('DragSource(SortableItem)');
      expect(sourceItem.length).toBe(1); // Select a target above group

      var destinationTarget = component.find('[data-test-section="sortable-target-1"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceItem.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that the value was not changed

      var editingState = spyObj.changeHandler.calls.first().args[0];
      expect(Immutable.is(editingState, groupedSortableData));
    });
    it('should not reorder if dragging item over its trailing target', function () {
      var backend = component.instance().getManager().getBackend(); // Select group containing three items

      var sourceItem = component.find('[data-test-section="sortable-item-1"]').closest('DragSource(SortableItem)');
      expect(sourceItem.length).toBe(1); // Select a target above group

      var destinationTarget = component.find('[data-test-section="sortable-target-2"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceItem.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that the value was not changed

      var editingState = spyObj.changeHandler.calls.first().args[0];
      expect(Immutable.is(editingState, groupedSortableData));
    });
    it('should convert ungrouped items to groups when enabling grouping', function () {
      // Expect ungrouped item to be rendered when grouping is disabled
      var itemA = component.find('[data-test-section="sortable-item-0"]');
      expect(itemA.length).toBe(1);
      expect(itemA.text()).toContain(normalSortableData.getIn([0, 'text'])); // Enable grouping

      component.setProps({
        allowGrouping: true
      });
      component.update(); // Expect that ungrouped items are automatically wrapped in groups

      var groupedItemA = component.find('[data-test-section="sortable-item-0-0"]');
      expect(groupedItemA.length).toBe(1);
      expect(groupedItemA.text()).toContain(normalSortableData.getIn([0, 'text']));
    });
  });
  describe('Grouped Sorting', function () {
    var component; // eslint-disable-line

    beforeEach(function () {
      component = mount(React.createElement(Sortable, {
        defaultValue: groupedSortableData,
        renderItem: renderItem,
        allowGrouping: true,
        onChange: spyObj.changeHandler
      }));
    });
    it('should render all items in groups and in order', function () {
      // Automatically created groups (ungrouped items automatically grouped)
      // Group 1: [ itemA ]
      var itemA = component.find('[data-test-section="sortable-item-0-0"]');
      expect(itemA.length).toBe(1);
      expect(itemA.text()).toContain(groupedSortableData.getIn([0, 'text'])); // Group 2: [ itemB ]

      var itemB = component.find('[data-test-section="sortable-item-1-0"]');
      expect(itemB.length).toBe(1);
      expect(itemB.text()).toContain(groupedSortableData.getIn([1, 'text'])); // Manually created groups (defined in groupedSortableData)
      // Group 3: [ itemC, itemD, itemE ]

      var itemC = component.find('[data-test-section="sortable-item-2-0"]');
      expect(itemC.length).toBe(1);
      expect(itemC.text()).toContain(groupedSortableData.getIn([2, 0, 'text']));
      var itemD = component.find('[data-test-section="sortable-item-2-1"]');
      expect(itemD.length).toBe(1);
      expect(itemD.text()).toContain(groupedSortableData.getIn([2, 1, 'text']));
      var itemE = component.find('[data-test-section="sortable-item-2-2"]');
      expect(itemE.length).toBe(1);
      expect(itemE.text()).toContain(groupedSortableData.getIn([2, 2, 'text']));
    });
    it('should allow items to be reordered within a group', function () {
      var backend = component.instance().getManager().getBackend(); // Select item and target within the same group

      var sourceItem = component.find('[data-test-section="sortable-item-2-0"]').closest('DragSource(SortableItem)');
      expect(sourceItem.length).toBe(1);
      var destinationTarget = component.find('[data-test-section="sortable-target-2-3"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceItem.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that the items in the group were reordered

      var itemC = component.find('[data-test-section="sortable-item-2-0"]');
      expect(itemC.length).toBe(1);
      expect(itemC.text()).toContain(groupedSortableData.getIn([2, 1, 'text']));
      var itemD = component.find('[data-test-section="sortable-item-2-1"]');
      expect(itemD.length).toBe(1);
      expect(itemD.text()).toContain(groupedSortableData.getIn([2, 2, 'text']));
      var itemE = component.find('[data-test-section="sortable-item-2-2"]');
      expect(itemE.length).toBe(1);
      expect(itemE.text()).toContain(groupedSortableData.getIn([2, 0, 'text']));
    });
    it('should allow items to be dragged outside of a group', function () {
      var backend = component.instance().getManager().getBackend(); // Select item in a group and a target outside of that group

      var sourceItem = component.find('[data-test-section="sortable-item-2-2"]').closest('DragSource(SortableItem)');
      expect(sourceItem.length).toBe(1);
      var destinationTarget = component.find('[data-test-section="sortable-target-3"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceItem.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that item was removed from original group

      var itemE = component.find('[data-test-section="sortable-item-2-2"]');
      expect(itemE.length).toBe(0); // Expect that item was moved to new position and within new group

      var movedItemE = component.find('[data-test-section="sortable-item-3-0"]');
      expect(movedItemE.length).toBe(1);
      expect(movedItemE.text()).toContain(groupedSortableData.getIn([2, 2, 'text']));
    });
    it('should allow groups to be reordered', function () {
      var backend = component.instance().getManager().getBackend(); // Select group containing three items

      var sourceGroup = component.find('[data-test-section="sortable-group-2"]').closest('DragSource(SortableGroup)');
      expect(sourceGroup.length).toBe(1); // Select a target above group

      var destinationTarget = component.find('[data-test-section="sortable-target-1"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceGroup.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that the groups were reordered and maintain item order

      var itemC = component.find('[data-test-section="sortable-item-1-0"]');
      expect(itemC.length).toBe(1);
      expect(itemC.text()).toContain(groupedSortableData.getIn([2, 0, 'text']));
      var itemD = component.find('[data-test-section="sortable-item-1-1"]');
      expect(itemD.length).toBe(1);
      expect(itemD.text()).toContain(groupedSortableData.getIn([2, 1, 'text']));
      var itemE = component.find('[data-test-section="sortable-item-1-2"]');
      expect(itemE.length).toBe(1);
      expect(itemE.text()).toContain(groupedSortableData.getIn([2, 2, 'text']));
    });
    it('should not reorder if dragging group over itself', function () {
      var backend = component.instance().getManager().getBackend(); // Select group containing three items

      var sourceGroup = component.find('[data-test-section="sortable-group-2"]').closest('DragSource(SortableGroup)');
      expect(sourceGroup.length).toBe(1); // Select a target above group

      var destinationTarget = component.find('[data-test-section="sortable-target-2"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceGroup.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that the value was not changed

      var editingState = spyObj.changeHandler.calls.first().args[0];
      expect(Immutable.is(editingState.get(2), groupedSortableData.get(2)));
    });
    it('should not reorder if dragging group over another group', function () {
      var backend = component.instance().getManager().getBackend(); // Select group containing three items

      var sourceGroup = component.find('[data-test-section="sortable-group-2"]').closest('DragSource(SortableGroup)');
      expect(sourceGroup.length).toBe(1); // Select a target within a different group

      var destinationTarget = component.find('[data-test-section="sortable-target-1-0"]').closest('DropTarget(SortTarget)');
      expect(destinationTarget.length).toBe(1);
      backend.simulateBeginDrag([sourceGroup.instance().getHandlerId()]);
      backend.simulateHover([destinationTarget.instance().getHandlerId()]);
      backend.simulateDrop();
      backend.simulateEndDrag();
      component.update(); // Expect that the change callback was invoked

      expect(spyObj.changeHandler.calls.count()).toBe(1); // Expect that the value was not changed

      var editingState = spyObj.changeHandler.calls.first().args[0];
      expect(Immutable.is(editingState.get(2), groupedSortableData.get(2)));
    });
    it('should extract all items from groups when grouping is disabled', function () {
      // Expect grouped item to be rendered when grouping is enabled
      var itemA = component.find('[data-test-section="sortable-item-0-0"]');
      expect(itemA.length).toBe(1);
      expect(itemA.text()).toContain(groupedSortableData.getIn([0, 'text'])); // Disable grouping

      component.setProps({
        allowGrouping: false
      });
      component.update(); // Expect that grouped items are automatically extracted from groups

      var ungroupedItemA = component.find('[data-test-section="sortable-item-0"]');
      expect(ungroupedItemA.length).toBe(1);
      expect(ungroupedItemA.text()).toContain(groupedSortableData.getIn([0, 'text']));
    });
  });
});