import React from 'react';
import Dropdown from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

const data = [
  {title: 'Manual', description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'},
  {title: 'Maximize Conventions', header: 'Automation',
    description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'},
  {title: 'Faster Results', description: 'Cauliflower cheese stilton paneer hard cheese fondue.'},
];

describe('components/Dropdown', () => {
  it('should not render children when isOpen is false', () => {
    const output = shallow(
      <Dropdown
        icon='chevron'
        text='Dropdown'
        isOpen={ false }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render children when isOpen is true', () => {
    const output = shallow(
      <Dropdown
        icon='chevron'
        text='Dropdown'
        isOpen={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should not render children when isDisabled is true', () => {
    const output = shallow(
      <Dropdown
        icon='chevron'
        text='Dropdown'
        idDisabled={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should not use .oui-arrow-inline--down when icon isEqual to triangle', () => {
    const output = shallow(
      <Dropdown
        icon='triangle'
        text='Dropdown'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should use oui-button--full class when fullWidth is true', () => {
    const output = shallow(
      <Dropdown
        icon='triangle'
        text='Dropdown'
        fullWidth={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should highlight button class when style equals highlight', () => {
    const output = shallow(
      <Dropdown
        icon='triangle'
        text='Dropdown'
        style='highlight'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
