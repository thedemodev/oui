import React from 'react';
import { mount } from 'enzyme';
import DockedFooter from '../index';
import Button from '../../Button';

describe('DockedFooter Component ', () => {
  it('renders a default DockedFooter with children', () => {
    const onClickSpy = jest.fn();

    const component = mount(
      <div data-test-section="helloTest">
        <p>Test content...</p>
        <DockedFooter
          parentTestSection={ 'helloTest' }
          isInsideSheet={ false }
          isDocked={ true }>
          { [
            <Button style="plain" key={ 0 } onClick={ onClickSpy }>
                Cancel
            </Button>,
            <Button style="highlight" key={ 1 } onClick={ onClickSpy }>
                Confirm
            </Button>,
          ] }
        </DockedFooter>
      </div>
    );
    expect(component.find('.oui-button').length).toBeGreaterThanOrEqual(1);
  });

});
