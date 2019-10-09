import React from 'react';
import { mount } from 'enzyme';

import SelectDropdown from '../index';

describe('components/SelectDropdown', function() {
  let component;
  let onChange;
  const items = [
    {
      label: 'label 1',
      value: 'value 1',
      description: 'description 1',
    },
    {
      label: 'label 2',
      value: 'value 2',
      description: 'description 2',
    },
  ];

  beforeEach(function() {
    onChange = jest.fn();
  });

  it('should render all items in dropdown', function() {
    component = mount(<SelectDropdown items={ items } value={ 'value 2' } onChange={ onChange } />);
    const activator = component.find('Button');
    activator.simulate('click');
    const listItems = component.find('SelectOption');
    expect(listItems).toHaveLength(2);

    const item1 = listItems.at(0);
    expect(item1.text()).toContain('label 1');
    expect(item1.text()).toContain('description 1');
    expect(item1.props().isSelected).toEqual(false);

    const item2 = listItems.at(1);
    expect(item2.text()).toContain('label 2');
    expect(item2.text()).toContain('description 2');
    expect(item2.props().isSelected).toEqual(true);
  });

  it('should call onChange when another item is selected', function() {
    component = mount(<SelectDropdown items={ items } value={ 'value 2' } onChange={ onChange } />);
    const activator = component.find('Button');
    activator.simulate('click');
    const listItems = component.find('DropdownBlockLink');
    const item1 = listItems.at(0).find('[data-test-section="dropdown-block-link-value 1"]');
    item1.simulate('click');
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith('value 1');
  });

  it('should set the width of the activator', function() {
    component = mount(
      <SelectDropdown
        items={ items }
        value={ 'value 2' }
        onChange={ onChange }
        width="400px"
      />);
    expect(component.find('Dropdown').find('Activator').childAt(0).props().style).toEqual({
      width: '400px',
    });
  });

  it('should set the maxWidth of the activator', function() {
    component = mount(
      <SelectDropdown
        items={ items }
        value={ 'value 2' }
        onChange={ onChange }
        maxWidth="100px"
      />);
    expect(component.find('Dropdown').find('Activator').childAt(0).props().style).toEqual({maxWidth: '100px', width: '100%'});
  });

  it('should contain error class', function() {
    component = mount(
      <SelectDropdown
        items={ items }
        value={ 'value 2' }
        onChange={ onChange }
        displayError={ true }
      />);
    expect(component.find('.oui-form-bad-news').length).toBe(1);
  });

  it('should set the width of the content', function() {
    component = mount(
      <SelectDropdown
        items={ items }
        value={ 'value 2' }
        onChange={ onChange }
        minDropdownWidth="400px"
      />);
    const activator = component.find('Button');
    activator.simulate('click');
    expect(component.find('DropdownContents').prop('minWidth')).toEqual('400px');
  });

  it('should not render DropdownContents when isDisabled is true', function() {
    component = mount(
      <SelectDropdown
        items={ items }
        isDisabled={ true }
        value={ 'value 2' }
        onChange={ onChange }
      />);
    const activator = component.find('Button');
    activator.simulate('click');
    expect(component.find('Dropdown').prop('isDisabled')).toEqual(true);
    expect(component.find('DropdownContents').length).toEqual(0);
  });

  it('should display activatorLabel if provided', function() {
    const itemsWithActivatorLabel = [
      {
        activatorLabel: 'Production',
        label: 'Production (50%)',
        value: 'Production',
      },
      {
        activatorLabel: 'Staging',
        label: 'Staging (100%)',
        value: 'Staging',
      },
    ];
    component = mount(
      <SelectDropdown
        items={ itemsWithActivatorLabel }
        value='Production'
        onChange={ onChange }
      />);
    const activator = component.find('Button');
    expect(activator.text()).toBe('Production');
  });

  it('should display initialPlaceholder if provided', function() {
    component = mount(
      <SelectDropdown
        items={ items }
        initialPlaceholder="Select a value..."
        onChange={ onChange }
      />);
    const activator = component.find('Button');
    expect(activator.text()).toBe('Select a value...');
  });
});
