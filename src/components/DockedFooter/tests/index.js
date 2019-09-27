import React from 'react';
import { mount } from 'enzyme';
import DockedFooter from '../index';
import Button from '../../Button';

describe('DockedFooter Component ', () => {
  it('renders a default DockedFooter with children', () => {
    const onClickSpy = jest.fn();

    const component = mount(
      <DockedFooter>
        <Button style="plain" key={ 0 } onClick={ onClickSpy }>
          No Thanks
        </Button>,
        <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
          Continue
        </Button>
      </DockedFooter>);
    expect(component.find('.oui-button').length).toBeGreaterThanOrEqual(1);
  });

});
