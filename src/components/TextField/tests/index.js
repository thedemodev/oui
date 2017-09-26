import React from 'react';
import TextField from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/TextField', () => {
  it('should render a simple input with type text', () => {
    const output = shallow(
      <TextField
        type='text'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render with a simple label', () => {
    const output = shallow(
      <TextField
        label='simple label'
        type='text'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render with a simple label and a note', () => {
    const output = shallow(
      <TextField
        label='Simple label'
        note='simple note'
        type='text'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render error style', () => {
    const output = shallow(
      <TextField
        displayError={ true }
        label='Simple label'
        note='simple note'
        type='text'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render with a placeholder', () => {
    const output = shallow(
      <TextField
        placeholder='Simple placeholder'
        type='text'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render search icon', () => {
    const output = shallow(
      <TextField
        isFilter={ true }
        type='text'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render max and min limits', () => {
    const output = shallow(
      <TextField
        min={ 0 }
        max={ 100 }
        type='number'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
