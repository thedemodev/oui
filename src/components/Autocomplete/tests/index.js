import React from 'react';
import { mount } from 'enzyme';

import Autocomplete from '../index';

describe('components/Autocomplete', () => {
  let mockSuggestions;
  let onChangeSpy;
  let testSection;
  let component;
  beforeEach(() => {
    mockSuggestions = ['foo', 'bar', 'baz'];
    onChangeSpy = jest.fn();
    testSection = 'oui-autocomplete';

    component = mount(
      <Autocomplete
        onChange={ onChangeSpy }
        suggestions={ mockSuggestions }
        testSection={ testSection }
      />
    );
  });

  afterEach(() => {
    component.unmount();
  });

  describe('basic rendering', () => {
  });

  describe('editing', function() {
    
  });

});
