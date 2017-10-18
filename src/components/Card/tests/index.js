import React from 'react';
import Card from '../index';
import { shallow, mount } from 'enzyme';

describe('components/Card', () => {
  const title = 'Hello world card';
  const body = '<span>Basic content inside this card</span>';
  const test = 'foo';

  it('should render the title passed in', () => {
    const component = shallow(
      <Card title={ title } testSection={ test }>
        { body }
      </Card>
    );

    expect(component.find('[data-test-section="foo-title"]').text()).toBe(title);
  });

  it('should render element passed in as children', () => {
    const component = shallow(
      <Card title={ title } testSection={ test }>
        { body }
      </Card>
    );

    expect(component.find('[data-test-section="foo-body"]').text()).toBe(body);
  });

  it('should not render dismiss button by default', () => {
    const component = mount(
      <Card title={ title } testSection={ test }>
        { body }
      </Card>
    );

    expect(component.find('[data-test-section="foo-close"]').length).toBe(0);
  });

  it('should render dismiss button when prop is provided', () => {
    const component = mount(
      <Card title={ title } testSection={ test } onClose={ function() { return true; } }>
        { body }
      </Card>
    );

    expect(component.find('[data-test-section="foo-close"]').length).toBe(1);
  });

});
