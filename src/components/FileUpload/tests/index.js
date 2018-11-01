import React from 'react';
import { mount } from 'enzyme';
import Dropzone from 'react-dropzone';

import FileUpload from '../index';

describe('components/FileUpload', () => {
  let component;
  let mockMaxSize;
  let testSection;
  beforeEach(() => {
    mockMaxSize = 200; // mb
    testSection = 'file-upload';
    component = mount(
      <FileUpload
        maxSize={ mockMaxSize }
        testSection={ testSection }
      />
    );
  });

  afterEach(() => {
    component.unmount();
  });

  describe('basic rendering', () => {
    it('should render Dropzone', () => {
      const dropzoneComponent = component.find(Dropzone);
      expect(dropzoneComponent.exists()).toBe(true);
    });

    it('should render title text', () => {
      const titleText = 'Drag and drop a file here';
      const titleComponent = component.find(`[data-test-section="${ testSection }-title"]`);
      expect(titleComponent.exists()).toBe(true);
      expect(titleComponent.text()).toEqual(titleText);
    });

    it('should render subtitle text', () => {
      const subtitleText = `Or click to select a file. Max file size: ${ mockMaxSize }MB`;
      const subtitleComponent = component.find(`[data-test-section="${ testSection }-subtitle"]`);
      expect(subtitleComponent.exists()).toBe(true);
      expect(subtitleComponent.text()).toEqual(subtitleText);
    });

  });

  describe('preview rendering', () => {
    global.URL = {
      createObjectURL: (x) => x,
    };
    let mockFile;
    let mockFileContent;
    let mockFileName;
    beforeEach(() => {
      mockFileContent = '00000000000000';
      mockFileName = 'foo.png';
      mockFile = new File([mockFileContent], mockFileName, {
        type: 'text/plain',
      });
      component.instance().handleDrop([ mockFile ]);
      component.update();
    });

    it('should render preview info', () => {
      const infoComponent = component.find(`${ testSection }-preview-info`);
      const expectedText = 'Drag and drop a new file onto the file preview or click on the preview to select a new file.';
      expect(infoComponent.exists()).toBe(true);
      expect(infoComponent.text()).toEqual(expectedText);
    });

    it('should render file name', () => {
      const fileNameComponent = component.find(`${ testSection }-preview-file-name`);
      expect(fileNameComponent.exists()).toBe(true);
      expect(fileNameComponent.text()).toEqual(`File: ${ mockFileName }`);
    });

    describe('image preview', () => {
      it('should render preview image', () => {
        const imageComponent = component.find(`${ testSection }-preview-image`);
        expect(imageComponent.exists()).toBe(true);
      });
    });

    describe('document preview', () => {
      beforeEach(() => {
        component.setState({
          iconType: 'document',
        });
        component.update();
      });

      it('should render Icon', () => {
        const iconComponent = component.find(`${ testSection}-preview-icon`);
        expect(iconComponent.exists()).toBe(true);
      });

      it('should render file size', () => {
        const fileSizeComponent = component.find(`${ testSection }-preview-size`);
        expect(fileSizeComponent.exists()).toBe(true);
        expect(fileSizeComponent.text()).toEqual(`${ component.state('fileSize')} MB`);
      });
    });
  });

});
