import React from 'react';
import { Accordion, AccordionSection } from '../index';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
describe('components/Accordion', function () {
  describe('AccordionSection', function () {
    it('should render a `li` HTML element', function () {
      var component = shallow(React.createElement(AccordionSection, {
        title: "Hello"
      }, "World!"));
      expect(component.is('li')).toBe(true);
    });
    it('renders the title and text', function () {
      var title = 'Awesome Title';
      var text = 'Hello, World!';
      var component = mount(React.createElement(AccordionSection, {
        title: title
      }, text));
      expect(component.props().title).toBe(title);
      expect(component.find('.accordion__content-wrap').text()).toBe(text);
    });
  });
  it('should render a `ul` HTML element with the right classes', function () {
    var component = shallow(React.createElement(Accordion, null, React.createElement(AccordionSection, {
      title: "Hello"
    }, "World!")));
    expect(component.is('ul')).toBe(true);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('should only render React Components', function () {
    var component = shallow(React.createElement(Accordion, null, React.createElement(AccordionSection, {
      title: "Section 1"
    }, "Section 1 Text"), "Hello"));
    expect(component.children().length).toBe(1);
  });
  it('should update the internal state when different AccordionSections are clicked', function () {
    var component = mount(React.createElement(Accordion, null, React.createElement(AccordionSection, {
      title: "Section 1"
    }, "Section 1 Text"), React.createElement(AccordionSection, {
      title: "Section 2"
    }, "Section 2 Text")));
    expect(component.find(AccordionSection).at(0).props()._isSelected).toBe(true);
    component.find(AccordionSection).at(1).find('.accordion__link').simulate('click');
    expect(component.find(AccordionSection).at(0).props()._isSelected).toBe(false);
    expect(component.find(AccordionSection).at(1).props()._isSelected).toBe(true);
  });
});