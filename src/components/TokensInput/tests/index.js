import React from 'react';
import { cloneDeep } from 'lodash';
import { mount } from 'enzyme';

import TokensInput from '../index';

const SAMPLE_DATA = [
  { name: 'error', style: 'error' },
  { name: 'no-style' },
  { name: 'primary', style: 'primary' },
  { name: 'secondary', style: 'secondary' },
  { name: 'tertiary', style: 'tertiary' },
];

describe('components/TokensInput', () => {
  let component;
  let mockOnChange;

  describe('rendering tokens', function() {
    beforeEach(function() {
      mockOnChange = jest.fn();
      component = mount(
        <TokensInput onChange={ mockOnChange } tokens={ SAMPLE_DATA } />
      );
    });
    function assertTokenRender(comp, style, font, text) {
      expect(comp.find('[data-test-section="token"]').hasClass('oui-token-wrap')).toBe(true);
      expect(comp.find(`[data-test-section="token"] div.oui-token--${style}`).length).toBe(1);
      expect(comp.find(`[data-test-section="token"] div.oui-token--${font}`).length).toBe(1);
      expect(comp.find(`[data-test-section="token"] div.oui-token--${font}`).text()).toBe(text);
    }

    it('should render with 5 tokens', () => {
      expect(component.find('Token').length).toBe(5);
    });

    it('should render tokens with errors correctly', () => {
      const errorToken = component.find('Token').at(0);
      assertTokenRender(errorToken, 'error', 'font-light', 'error');
    });

    it('should render tokens with primary style correctly', () => {
      const primaryToken = component.find('Token').at(2);
      assertTokenRender(primaryToken, 'primary', 'font-light', 'primary');
    });

    it('should render tokens with secondary style correctly', () => {
      const secondaryToken = component.find('Token').at(3);
      assertTokenRender(secondaryToken, 'secondary', 'font-light', 'secondary');
    });

    it('should render tokens with tertiary style correctly', () => {
      const tertiaryToken = component.find('Token').at(4);
      assertTokenRender(tertiaryToken, 'tertiary', 'font-dark', 'tertiary');
    });
  });

  describe('entering tokens', function() {
    describe('with spaces disallowed', function() {
      beforeEach(function() {
        mockOnChange = jest.fn();
        component = mount(
          <TokensInput onChange={ mockOnChange } tokens={ SAMPLE_DATA } />
        );
      });

      it('should invoke onChange with the updated token list', () => {
        const input = component.find('input');
        input.simulate('change', { target: { value: 'newtokenval' }});
        input.simulate('keyDown', { keyCode: 32 });
        component.update();

        const expectedTokens = cloneDeep(SAMPLE_DATA).concat({ name: 'newtokenval' });
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(expectedTokens);
      });

      it('should not allow duplicates', () => {
        const input = component.find('input');
        input.simulate('change', { target: { value: 'primary' }});
        input.simulate('keyDown', { keyCode: 32 });
        component.update();

        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(SAMPLE_DATA);
      });

      it('should not allow empty strings', () => {
        const input = component.find('input');
        input.simulate('change', { target: { value: '' }});
        input.simulate('keyDown', { keyCode: 32 });
        component.update();

        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(SAMPLE_DATA);
      });
    });

    describe('with spaces allowed', function() {
      beforeEach(function() {
        mockOnChange = jest.fn();
        component = mount(
          <TokensInput onChange={ mockOnChange } tokens={ SAMPLE_DATA } spacesAllowedInToken={ true } />
        );
      });

      it('should allow tokens with spaces', () => {
        const input = component.find('input');
        input.simulate('change', { target: { value: 'new token val' }});
        input.simulate('keyDown', { keyCode: 32 });
        component.update();

        expect(mockOnChange).not.toBeCalled();

        input.simulate('keyDown', { keyCode: 13 });
        component.update();

        const expectedTokens = cloneDeep(SAMPLE_DATA).concat({ name: 'new token val' });
        expect(mockOnChange).toBeCalled();
        expect(mockOnChange).toHaveBeenCalledWith(expectedTokens);
      });
    });
  });
});
