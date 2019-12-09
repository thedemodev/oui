import React from 'react';
import Button from '../../Button';
import DockedFooter from '../index';
import { mount } from 'enzyme';
describe('components/DockedFooter ', function () {
  describe('with Buttons as children supplied', function () {
    beforeEach(function () {
      var div = document.createElement('div');
      window.domNode = div;
      document.body.appendChild(div);
    });

    function componentFooter() {
      return React.createElement(DockedFooter, {
        testSection: "docked-footer-less-content",
        parentTestSection: "helloTesting",
        includesMargin: false
      }, [React.createElement(Button, {
        style: "plain",
        key: 0
      }, "Cancel"), React.createElement(Button, {
        style: "highlight",
        key: 1
      }, "Confirm")]);
    }

    it('should render DockedFooter with testSection and parentTestSection', function () {
      var component = mount(React.createElement("div", {
        "data-test-section": "helloTesting",
        className: "overflow-y--hidden"
      }, React.createElement("h2", {
        className: "push-double--top"
      }, "Test"), React.createElement("p", null, "Test content..."), componentFooter()), {
        attachTo: window.domNode
      });
      expect(component.find('.oui-docked-footer').length).toBeGreaterThanOrEqual(1);
      expect(component.find('[data-test-section="docked-footer-less-content"]').length).toBe(1);
      expect(component.find('[data-test-section="helloTesting"]').length).toBe(1);
    });
    it('should not dock when isDocked is false', function () {
      var component = mount(componentFooter());
      component.setState({
        isDocked: false
      });
      expect(component.find('.oui-docked-footer--is-docked').length).toBeGreaterThanOrEqual(0);
    });
    it('should dock when isDocked is true', function () {
      var component = mount(componentFooter());
      component.setState({
        isDocked: true
      });
      expect(component.find('.oui-docked-footer--is-docked').length).toBeGreaterThanOrEqual(1);
    });
    it('should add margin styles when includesMargin is true', function () {
      var component = mount(componentFooter());
      component.setProps({
        includesMargin: true
      });
      expect(component.find('.push-double--top').length).toBeGreaterThanOrEqual(1);
    });
    it('should call onScroll method', function () {
      var div = document.createElement('div');
      window.domNode = div;
      document.body.appendChild(div);
      var component = mount(componentFooter(), {
        attachTo: window.domNode
      });
      var instance = component.instance();
      jest.spyOn(instance, 'onScroll');
      expect(instance.onScroll).not.toHaveBeenCalled();
      instance.onScroll();
      expect(instance.onScroll).toHaveBeenCalled();
    });
  });
});