import React from 'react';
import RangeSlider from '../index';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { redBase } from '../../../tokens/forimport/index.es';
describe('components/RangeSlider', function () {
  var component;
  var handlerObj;
  describe('default fill color', function () {
    beforeEach(function () {
      handlerObj = {
        onChange: function onChange() {}
      };
      spyOn(handlerObj, 'onChange');
      component = shallow(React.createElement(RangeSlider, {
        value: 50,
        onChange: handlerObj.onChange,
        testSection: "myTestSection"
      }));
    });
    it('should render component same as snapshot', function () {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
    it('should render component with correct props', function () {
      expect(component.length).toBe(1);
    });
    it('should set the input value from the value prop', function () {
      var input = component.find('input');
      expect(input.prop('value')).toBe(50);
    });
    it('should set the position of the overlay from the value prop', function () {
      var overlay = component.find('.range-display-overlay');
      expect(overlay.prop('style').left).toBe('50%');
    });
    it('should call the onChange prop when the input onChange is called', function () {
      component.find('input').prop('onChange')();
      expect(handlerObj.onChange).toHaveBeenCalled();
    });
    it('should set a data-test-section attribute from the testSection prop', function () {
      var testSection = component.find('[data-test-section="myTestSection"]');
      expect(testSection.length).toBe(1);
    });
  });
  describe('custom fill color', function () {
    beforeEach(function () {
      handlerObj = {
        onChange: function onChange() {}
      };
      spyOn(handlerObj, 'onChange');
      component = shallow(React.createElement(RangeSlider, {
        fillColorName: "red",
        value: 50,
        onChange: handlerObj.onChange,
        testSection: "myTestSection",
        useOffForLabel: true
      }));
    });
    it('should render the SVG with the fill color that corresponds to the provided fill color name', function () {
      var svgPath = component.find('path');
      expect(svgPath.prop('fill')).toBe(redBase);
    });
    it('should use Off for the label when useOffForLabel is true', function () {
      expect(component.find('.oui-grid').containsMatchingElement(React.createElement("label", null, "Off"))).toBe(true);
    });
  });
});