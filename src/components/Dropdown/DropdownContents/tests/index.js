import React from 'react';
import DropdownContents from '../index';
import { shallow } from 'enzyme';

describe('components/Dropdown/DropdownContents', () => {
  it('should render as a `ul`', () => {
    const component = shallow(<DropdownContents><div>foo</div></DropdownContents>);
    expect(component.type()).toBe('ul');
  });

  it('should render children', () => {
    const component = shallow(<DropdownContents><div>foo</div></DropdownContents>);
    expect(component.text()).toBe('foo');
  });

  it('should render with test section', () => {
    const component = shallow(<DropdownContents testSection="goose"><div>foo</div></DropdownContents>);
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });

  it('should render with nowrap', () => {
    const component = shallow(<DropdownContents isNoWrap={ true }><div>foo</div></DropdownContents>);
    expect(component.find('ul').prop('className')).toBe('nowrap oui-dropdown oui-dropdown--right');
  });

  it('should render with default direction left', () => {
    const component = shallow(<DropdownContents><div>foo</div></DropdownContents>);
    expect(component.find('ul').prop('className')).toBe('oui-dropdown oui-dropdown--right');
  });

  it('should render with direction right', () => {
    const component = shallow(<DropdownContents direction={ 'right' }><div>foo</div></DropdownContents>);
    expect(component.find('ul').prop('className')).toBe('oui-dropdown');
  });

  it('should render with direction up', () => {
    const component = shallow(<DropdownContents direction={ 'up' }><div>foo</div></DropdownContents>);
    expect(component.find('ul').prop('className')).toBe('oui-dropdown oui-dropdown--up');
  });

  it('should render with a minimum width', () => {
    const component = shallow(<DropdownContents minWidth={ '300px' }><div>foo</div></DropdownContents>);
    expect(component.find('ul').prop('style')).toEqual({ minWidth: '300px' });
  });

  it('should render with scroll styles if canScroll', () => {
    const component = shallow(<DropdownContents canScroll={ true }><div>foo</div></DropdownContents>);
    expect(component.find('ul').prop('style')).toEqual({ overflowY: 'visible', maxHeight: 'auto' });
  });
});
