"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Dropdown = _interopRequireDefault(require("../../Dropdown"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/SelectDropdown', function () {
  var component;
  var onChange;
  var items = [{
    label: 'label 1',
    value: 'value 1',
    description: 'description 1'
  }, {
    label: 'label 2',
    value: 'value 2',
    description: 'description 2'
  }];
  beforeEach(function () {
    onChange = jest.fn();
  });
  it('should render all items in dropdown', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      value: 'value 2',
      onChange: onChange
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    var listItems = component.find(_Dropdown["default"].ListItem);
    expect(listItems).toHaveLength(2);
    var item1 = listItems.at(0);
    expect(item1.text()).toContain('label 1');
    expect(item1.text()).toContain('description 1');
    expect(item1.find(_Dropdown["default"].BlockLink).props().isLink).toEqual(true);
    var item2 = listItems.at(1);
    expect(item2.text()).toContain('label 2');
    expect(item2.text()).toContain('description 2');
    expect(item2.find(_Dropdown["default"].BlockLink).props().isLink).toEqual(false);
  });
  it('should call onChange when another item is selected', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      value: 'value 2',
      onChange: onChange
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    var listItems = component.find('DropdownBlockLink');
    var item1 = listItems.at(0).find('[data-test-section="dropdown-block-link-value 1"]');
    item1.simulate('click');
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith('value 1');
  });
  it('should set the width of the activator', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      value: 'value 2',
      onChange: onChange,
      width: "400px"
    }));
    expect(component.find('Dropdown').find('div.oui-dropdown-group__activator').props().style).toEqual({
      width: '400px'
    });
  });
  it('should pass fullWidth prop to Dropdown', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      value: 'value 2',
      onChange: onChange,
      fullWidth: true
    }));
    expect(component.find('Dropdown').prop('fullWidth')).toEqual(true);
  });
  it('should set the maxWidth of the activator', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      value: 'value 2',
      onChange: onChange,
      maxWidth: "100px"
    }));
    expect(component.find('Dropdown').find('div.oui-dropdown-group__activator').props().style).toEqual({
      maxWidth: '100px',
      width: '100%'
    });
  });
  it('should contain error class', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      value: 'value 2',
      onChange: onChange,
      displayError: true
    }));
    expect(component.find('.oui-form-bad-news').length).toBe(1);
  });
  it('should set the width of the content', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      value: 'value 2',
      onChange: onChange,
      minDropdownWidth: "400px"
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    expect(component.find('DropdownContents').prop('minWidth')).toEqual('400px');
  });
  it('should not render DropdownContents when isDisabled is true', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      isDisabled: true,
      value: 'value 2',
      onChange: onChange
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    expect(component.find('Dropdown').prop('isDisabled')).toEqual(true);
    expect(component.find('DropdownContents').length).toEqual(0);
  });
  it('should display activatorLabel if provided', function () {
    var itemsWithActivatorLabel = [{
      activatorLabel: 'Production',
      label: 'Production (50%)',
      value: 'Production'
    }, {
      activatorLabel: 'Staging',
      label: 'Staging (100%)',
      value: 'Staging'
    }];
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: itemsWithActivatorLabel,
      value: "Production",
      onChange: onChange
    }));
    var activator = component.find('Button');
    expect(activator.text()).toBe('Production');
  });
  it('should display initialPlaceholder if provided', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      items: items,
      initialPlaceholder: "Select a value...",
      onChange: onChange
    }));
    var activator = component.find('Button');
    expect(activator.text()).toBe('Select a value...');
  });
});