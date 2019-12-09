"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _BlockList = _interopRequireDefault(require("../../BlockList"));

var _Input = _interopRequireDefault(require("../../Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ALL_ENTITIES_POJO_ARRAY = [{
  name: 'QA Group',
  description: 'An audience used by QA to verify tests are working.',
  id: 123,
  status: 'inactive'
}, {
  name: 'Lifetime Revenue Over 5k',
  description: 'Authenticated users who have purchased over 5k.',
  id: 456,
  status: 'active'
}, {
  name: 'Lifetime Revenue Under 1k',
  description: 'Authenticated users who have purchased under 1k.',
  id: 789,
  status: 'active'
}, {
  name: 'Men over 25',
  description: 'Authenticated users over 25 who identify as male.',
  id: 135,
  status: 'active'
}, {
  name: 'Women over 25',
  description: 'Authenticated users over 25 who identify as female.',
  id: 246,
  status: 'active'
}]; // Immutable Mocks

var ALL_ENTITIES_IMMUTABLE_LIST_MOCK = {
  value: ALL_ENTITIES_POJO_ARRAY.map(function (value) {
    return {
      value: value,
      get: function get(keyValue) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        return this.value[keyValue] || defaultValue;
      },
      size: Object.keys(value).length
    };
  }),
  filter: function filter() {
    var _this$value;

    return (_this$value = this.value).filter.apply(_this$value, arguments);
  },
  map: function map() {
    var _this$value2;

    return (_this$value2 = this.value).map.apply(_this$value2, arguments);
  }
};
var SELECTED_ENTITY_IDS = [123, 456];
describe('components/FilterPicker', function () {
  var component;
  var mockFn = jest.fn(function (info) {
    return info;
  });

  var actionSpy = function actionSpy(info) {
    return function () {
      return mockFn(info);
    };
  };

  var renderPojoChildren = function renderPojoChildren(_ref) {
    var availableEntities = _ref.availableEntities,
        filterQuery = _ref.filterQuery,
        handleFilterInput = _ref.handleFilterInput,
        selectedEntities = _ref.selectedEntities;
    return (// eslint-disable-line react/prop-types
      _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "Selected"), _react["default"].createElement("ul", {
        "data-test-section": "selected-entities"
      }, selectedEntities.map(function (_ref2) {
        var description = _ref2.description,
            id = _ref2.id,
            name = _ref2.name;
        return _react["default"].createElement("ul", {
          "data-test-section": "selected-entity-".concat(String(id)),
          key: id
        }, _react["default"].createElement("li", null, "Name: ", name), _react["default"].createElement("li", null, "Description: ", description), _react["default"].createElement("li", null, "ID: ", id));
      })), _react["default"].createElement(_Input["default"], {
        isFilter: true,
        onInput: handleFilterInput,
        placeholder: "Browse for Audiences",
        testSection: "filter-query-input",
        type: "search"
      }), _react["default"].createElement("div", null, "Available"), _react["default"].createElement(_BlockList["default"], {
        hasBorder: true
      }, _react["default"].createElement(_BlockList["default"].Category, null, _react["default"].createElement(_index["default"].ListItem, {
        name: !!filterQuery ? "Create New Audience named ".concat(filterQuery) : 'Create New Audience',
        onClick: actionSpy('Create Entity')
      })), _react["default"].createElement(_BlockList["default"].Category, {
        header: "Recently Created Audiences"
      }, availableEntities.map(function (_ref3, index) {
        var id = _ref3.id,
            name = _ref3.name,
            description = _ref3.description;
        return _react["default"].createElement(_index["default"].ListItem, {
          key: id,
          id: id,
          name: name,
          description: description,
          onClick: actionSpy("Entity Add: ".concat(id)),
          buttonText: 'View',
          onButtonClick: actionSpy("Entity Picker View: ".concat(id)),
          testSection: "filter-picker-list-item-".concat(String(id))
        });
      }))))
    );
  };

  var renderImmutableChildren = function renderImmutableChildren(_ref4) {
    var availableEntities = _ref4.availableEntities,
        filterQuery = _ref4.filterQuery,
        handleFilterInput = _ref4.handleFilterInput,
        selectedEntities = _ref4.selectedEntities;
    return (// eslint-disable-line react/prop-types
      _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "Selected"), _react["default"].createElement("ul", {
        "data-test-section": "selected-entities"
      }, selectedEntities.map(function (item) {
        return _react["default"].createElement("ul", {
          key: item.get('id'),
          "data-test-section": "selected-entity-".concat(String(item.get('id')))
        }, _react["default"].createElement("li", null, "Name: ", item.get('name')), _react["default"].createElement("li", null, "Description: ", item.get('description')), _react["default"].createElement("li", null, "ID: ", item.get('id')));
      })), _react["default"].createElement(_Input["default"], {
        isFilter: true,
        onInput: handleFilterInput,
        placeholder: "Browse for Audiences",
        testSection: "filter-query-input",
        type: "search"
      }), _react["default"].createElement("div", null, "Available"), _react["default"].createElement(_BlockList["default"], {
        hasBorder: true
      }, _react["default"].createElement(_BlockList["default"].Category, null, _react["default"].createElement(_index["default"].ListItem, {
        name: !!filterQuery ? "Create New Audience named ".concat(filterQuery) : 'Create New Audience',
        onClick: actionSpy('Create Entity'),
        testSection: "filter-picker-create-item"
      })), _react["default"].createElement(_BlockList["default"].Category, {
        header: "Recently Created Audiences"
      }, availableEntities.map(function (item) {
        return _react["default"].createElement(_index["default"].ListItem, {
          key: item.get('id'),
          id: item.get('id'),
          name: item.get('name'),
          description: item.get('description'),
          onClick: actionSpy("Entity Add: ".concat(item.get('id'))),
          buttonText: 'View',
          onButtonClick: actionSpy("Entity Picker View: ".concat(item.get('id'))),
          testSection: "filter-picker-list-item-".concat(String(item.get('id')))
        });
      }))))
    );
  };

  var standardFilterPickerAssertions = function standardFilterPickerAssertions() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        withCustomFilterAndKeys = _ref5.withCustomFilterAndKeys;

    it('properly computes selectedEntities and availableEntities from allEntities', function () {
      var selectedEntities = component.find('[data-test-section="selected-entities"] > ul');
      var filterPickerListItems = component.find(_BlockList["default"].Item);
      expect(selectedEntities).toHaveLength(2); // There should be one BlockList.Item "Create New Audience" ListItem,
      // plus the available entity/entities

      expect(filterPickerListItems).toHaveLength(4);
    });
    it('renders correct availableEntities when one word, matching filterQuery is present', function () {
      if (withCustomFilterAndKeys) {
        component.find('[data-test-section="filter-query-input"]').simulate('input', {
          target: {
            value: 'Women'
          }
        });

        var _selectedEntities = component.find('[data-test-section="selected-entities"] > ul');

        var _filterPickerListItems = component.find(_BlockList["default"].Item);

        expect(_selectedEntities).toHaveLength(2); // There should be one BlockList.Item "Create New Audience" ListItem,
        // plus the available entity/entities

        expect(_filterPickerListItems).toHaveLength(2);
        return;
      }

      component.find('[data-test-section="filter-query-input"]').simulate('input', {
        target: {
          value: 'identify'
        }
      });
      var selectedEntities = component.find('[data-test-section="selected-entities"] > ul');
      var filterPickerListItems = component.find(_BlockList["default"].Item);
      expect(selectedEntities).toHaveLength(2); // There should be one BlockList.Item "Create New Audience" ListItem,
      // plus the available entity/entities

      expect(filterPickerListItems).toHaveLength(3);
    });
    it('renders correct availableEntities when a two word, matching filterQuery is present', function () {
      if (withCustomFilterAndKeys) {
        component.find('[data-test-section="filter-query-input"]').simulate('input', {
          target: {
            value: 'Women over'
          }
        });

        var _selectedEntities2 = component.find('[data-test-section="selected-entities"] > ul');

        var _filterPickerListItems2 = component.find(_BlockList["default"].Item);

        expect(_selectedEntities2).toHaveLength(2); // There should be one BlockList.Item "Create New Audience" ListItem,
        // plus the available entity/entities

        expect(_filterPickerListItems2).toHaveLength(2);
        return;
      }

      component.find('[data-test-section="filter-query-input"]').simulate('input', {
        target: {
          value: 'identify male'
        }
      });
      var selectedEntities = component.find('[data-test-section="selected-entities"] > ul');
      var filterPickerListItems = component.find(_BlockList["default"].Item);
      expect(selectedEntities).toHaveLength(2); // There should be one BlockList.Item "Create New Audience" ListItem,
      // plus the available entity/entities

      expect(filterPickerListItems).toHaveLength(3);
    });
    it('renders correct availableEntities when one matching word & one non-matching word filterQuery is present', function () {
      if (withCustomFilterAndKeys) {
        component.find('[data-test-section="filter-query-input"]').simulate('input', {
          target: {
            value: 'Women identify'
          }
        });

        var _selectedEntities3 = component.find('[data-test-section="selected-entities"] > ul');

        var _filterPickerListItems3 = component.find(_BlockList["default"].Item);

        expect(_selectedEntities3).toHaveLength(2); // There should be one BlockList.Item "Create New Audience" ListItem,
        // plus the available entity/entities

        expect(_filterPickerListItems3).toHaveLength(1);
        return;
      }

      component.find('[data-test-section="filter-query-input"]').simulate('input', {
        target: {
          value: 'identify female'
        }
      });
      var selectedEntities = component.find('[data-test-section="selected-entities"] > ul');
      var filterPickerListItems = component.find(_BlockList["default"].Item);
      expect(selectedEntities).toHaveLength(2); // There should be one BlockList.Item "Create New Audience" ListItem,
      // plus the available entity/entities

      expect(filterPickerListItems).toHaveLength(2);
    });
    it('renders correct selectedEntities when selectedEntityIds prop is updated', function () {
      component.setProps({
        selectedEntityIds: SELECTED_ENTITY_IDS.concat(789)
      });
      var selectedEntities = component.find('[data-test-section="selected-entities"] > ul');
      var filterPickerListItems = component.find(_BlockList["default"].Item);
      expect(selectedEntities).toHaveLength(3); // There should be one BlockList.Item "Create New Audience" ListItem,
      // plus the available entity/entities

      expect(filterPickerListItems).toHaveLength(3);
    });
    it('FilterPicker.ListItem onClick works correctly', function () {
      component.find('[data-test-section="filter-picker-list-item-246"] .oui-block-list__item').simulate('click');
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith('Entity Add: 246');
      expect(mockFn).not.toBeCalledWith('Entity Picker View: 246');
    });
    it('FilterPicker.ListItem onButtonClick works correctly when provided and onClick is not called', function () {
      component.find('[data-test-section="filter-picker-list-item-246"] .oui-button').simulate('click');
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toBeCalledWith('Entity Picker View: 246');
      expect(mockFn).not.toBeCalledWith('Entity Add: 246');
    });
    it('should match the Jest Snapshot', function () {
      expect((0, _enzymeToJson.mountToJson)(component)).toMatchSnapshot();
    });
  };

  afterEach(function () {
    mockFn.mockClear();
  });
  describe('with POJO data', function () {
    describe('with DEFAULT keysToSearch and customFilterFn', function () {
      beforeEach(function () {
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          allEntities: ALL_ENTITIES_POJO_ARRAY,
          selectedEntityIds: SELECTED_ENTITY_IDS,
          testSection: "audiences-filter-picker"
        }, function (_ref6) {
          var availableEntities = _ref6.availableEntities,
              filterQuery = _ref6.filterQuery,
              handleFilterInput = _ref6.handleFilterInput,
              selectedEntities = _ref6.selectedEntities;
          return renderPojoChildren({
            availableEntities: availableEntities,
            filterQuery: filterQuery,
            handleFilterInput: handleFilterInput,
            selectedEntities: selectedEntities
          });
        }));
      });
      standardFilterPickerAssertions();
    });
    describe('with CUSTOM keysToSearch and customFilterFn', function () {
      beforeEach(function () {
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          allEntities: ALL_ENTITIES_POJO_ARRAY,
          customFilterFn: function customFilterFn(item) {
            var filterQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var contentToSearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            return contentToSearch.includes(filterQuery);
          } // eslint-disable-line react/jsx-no-bind
          ,
          keysToSearch: ['name'],
          selectedEntityIds: SELECTED_ENTITY_IDS,
          testSection: "audiences-filter-picker"
        }, function (_ref7) {
          var availableEntities = _ref7.availableEntities,
              filterQuery = _ref7.filterQuery,
              handleFilterInput = _ref7.handleFilterInput,
              selectedEntities = _ref7.selectedEntities;
          return renderPojoChildren({
            availableEntities: availableEntities,
            filterQuery: filterQuery,
            handleFilterInput: handleFilterInput,
            selectedEntities: selectedEntities
          });
        }));
      });
      standardFilterPickerAssertions({
        withCustomFilterAndKeys: true
      });
    });
  });
  describe('with Immutable data (mocked)', function () {
    describe('with DEFAULT keysToSearch and customFilterFn', function () {
      beforeEach(function () {
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          allEntities: ALL_ENTITIES_IMMUTABLE_LIST_MOCK,
          selectedEntityIds: SELECTED_ENTITY_IDS,
          testSection: "audiences-filter-picker"
        }, function (_ref8) {
          var availableEntities = _ref8.availableEntities,
              filterQuery = _ref8.filterQuery,
              handleFilterInput = _ref8.handleFilterInput,
              selectedEntities = _ref8.selectedEntities;
          return renderImmutableChildren({
            availableEntities: availableEntities,
            filterQuery: filterQuery,
            handleFilterInput: handleFilterInput,
            selectedEntities: selectedEntities
          });
        }));
      });
      standardFilterPickerAssertions();
    });
    describe('with CUSTOM keysToSearch and customFilterFn', function () {
      beforeEach(function () {
        component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
          allEntities: ALL_ENTITIES_IMMUTABLE_LIST_MOCK,
          customFilterFn: function customFilterFn(item) {
            var filterQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var contentToSearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            return contentToSearch.includes(filterQuery);
          } // eslint-disable-line react/jsx-no-bind
          ,
          keysToSearch: ['name'],
          selectedEntityIds: SELECTED_ENTITY_IDS,
          testSection: "audiences-filter-picker"
        }, function (_ref9) {
          var availableEntities = _ref9.availableEntities,
              filterQuery = _ref9.filterQuery,
              handleFilterInput = _ref9.handleFilterInput,
              selectedEntities = _ref9.selectedEntities;
          return renderImmutableChildren({
            availableEntities: availableEntities,
            filterQuery: filterQuery,
            handleFilterInput: handleFilterInput,
            selectedEntities: selectedEntities
          });
        }));
      });
      standardFilterPickerAssertions({
        withCustomFilterAndKeys: true
      });
    });
  });
  describe('FilterPicker.ListItem', function () {
    it('FilterPicker.ListItem button is not present when onButtonClick is not provided but buttonText is', function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        allEntities: ALL_ENTITIES_POJO_ARRAY,
        selectedEntityIds: SELECTED_ENTITY_IDS,
        testSection: "audiences-filter-picker"
      }, function (_ref10) {
        var availableEntities = _ref10.availableEntities;
        return _react["default"].createElement(_BlockList["default"], {
          hasBorder: true
        }, _react["default"].createElement(_BlockList["default"].Category, {
          header: "Recently Created Audiences"
        }, availableEntities.map(function (_ref11, index) {
          var id = _ref11.id,
              name = _ref11.name,
              description = _ref11.description;
          return _react["default"].createElement(_index["default"].ListItem, {
            key: id,
            id: id,
            name: name,
            description: description,
            onClick: actionSpy("Entity Add: ".concat(id)),
            buttonText: 'View',
            testSection: "filter-picker-list-item-".concat(String(id))
          });
        })));
      }));
      expect(component.find('[data-test-section="filter-picker-list-item-246"] .oui-button')).toHaveLength(0);
    });
    it('FilterPicker.ListItem button is not present when onButtonClick is provided but buttonText is not', function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        allEntities: ALL_ENTITIES_POJO_ARRAY,
        selectedEntityIds: SELECTED_ENTITY_IDS,
        testSection: "audiences-filter-picker"
      }, function (_ref12) {
        var availableEntities = _ref12.availableEntities;
        return _react["default"].createElement(_BlockList["default"], {
          hasBorder: true
        }, _react["default"].createElement(_BlockList["default"].Category, {
          header: "Recently Created Audiences"
        }, availableEntities.map(function (_ref13, index) {
          var id = _ref13.id,
              name = _ref13.name,
              description = _ref13.description;
          return _react["default"].createElement(_index["default"].ListItem, {
            key: id,
            id: id,
            name: name,
            description: description,
            onClick: actionSpy("Entity Add: ".concat(id)),
            onButtonClick: actionSpy("Entity Picker View: ".concat(id)),
            testSection: "filter-picker-list-item-".concat(String(id))
          });
        })));
      }));
      expect(component.find('[data-test-section="filter-picker-list-item-246"] .oui-button')).toHaveLength(0);
    });
  });
});