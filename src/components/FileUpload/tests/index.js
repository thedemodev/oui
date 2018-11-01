import React from 'react';
import { mount } from 'enzyme';
import Dropzone from 'react-dropzone';

import FileUpload from '../index';

describe('components/FileUpload', function() {
  let component;
  let mockMaxSize;
  let testSection;
  beforeEach(function() {
    mockMaxSize = 200; // mb
    testSection = 'file-upload';
    component = mount(
      <FileUpload
        maxSize={ mockMaxSize }
        testSection={ testSection }
      />
    );
  });

  afterEach(function() {
    component.unmount();
  });

  describe('basic rendering', function() {
    it('should render Dropzone', function() {
      const dropzoneComponent = component.find(Dropzone);
      expect(dropzoneComponent.exists()).toBe(true);
    });

    it('should render title text', function() {
      const titleText = 'Drag and drop a file here';
      const titleComponent = component.find(`[data-test-section="${ testSection }-title"]`);
      expect(titleComponent.exists()).toBe(true);
      expect(titleComponent.text()).toEqual(titleText);
    });

    it('should render subtitle text', function() {
      const subtitleText = `Or click to select a file. Max file size: ${ mockMaxSize }MB`;
      const subtitleComponent = component.find(`[data-test-section="${ testSection }-subtitle"]`);
      expect(subtitleComponent.exists()).toBe(true);
      expect(subtitleComponent.text()).toEqual(subtitleText);
    });

  });
});
