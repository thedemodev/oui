
import React from 'react';
import { mount } from 'enzyme';

import ConfirmButton from '../index';

describe('components/ConfirmButton', function() {
  let component;
  let onCancelSpy;
  let onConfirmSpy;
  beforeEach(function() {
    onCancelSpy = jest.fn();
    onConfirmSpy = jest.fn();
    component = mount(
      <ConfirmButton
        onCancel={ onCancelSpy }
        onConfirm={ onConfirmSpy }
      />
    );
  });

  afterEach(function() {
    component.unmount();
  });

  describe('basic rendering', function() {
    it('should render ButtonRow', function() {
      const buttonRowComponent = component.find('ButtonRow');
      expect(buttonRowComponent.exists()).toBe(true);
      expect(buttonRowComponent.prop('rightGroup').length).toEqual(2);
    });

    it('should render cancel button', function() {
      const cancelButton = component.find('[data-test-section="confirm-button-cancel-button"]');
      expect(cancelButton.exists()).toBe(true);
    });

    it('should render confirm button', function() {
      const confirmButton = component.find('[data-test-section="confirm-button-cancel-button"]');
      expect(confirmButton.exists()).toBe(true);
    });
  });

  describe('editing', function() {
    it('should call onCancel when cancel button is clicked', function() {
      const cancelButton = component.find('[data-test-section="confirm-button-cancel-button"]');
      cancelButton.simulate('mousedown');
      expect(onCancelSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onCofirm when confirm button is clicked', function() {
      const confirmButton = component.find('[data-test-section="confirm-button-confirm-button"]');
      confirmButton.simulate('mousedown');
      expect(onConfirmSpy).toHaveBeenCalledTimes(1);
    });

    it('should not call onCancel when cancel button is disabled and clicked', function() {
      component.setProps({ disableCancel: true });
      const cancelButton = component.find('[data-test-section="confirm-button-cancel-button"]');
      cancelButton.simulate('mousedown');
      expect(onCancelSpy).toHaveBeenCalledTimes(0);
    });

    it('should not call onConfirm when confirm button is disabled and clicked', function() {
      component.setProps({ disableConfirm: true });
      const confirmButton = component.find('[data-test-section="confirm-button-confirm-button"]');
      confirmButton.simulate('mousedown');
      expect(onConfirmSpy).toHaveBeenCalledTimes(0);
    });
  });

});
