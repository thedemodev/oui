import React from 'react';
import Link from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/Link', () => {
  it('should render disabled', () => {
    const output = shallow(
      <Link
        href='http://google.com'
        isDisabled={ true }>
        Test Link
      </Link>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render style classes', () => {
    const output = shallow(
      <Link
        style='muted'>
        Test Link
      </Link>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render onclick', () => {
    const output = shallow(
      <Link
        onClick={ function() {} }>
        Test Link
      </Link>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
