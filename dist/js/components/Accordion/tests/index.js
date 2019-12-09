"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = require("../index");

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Accordion', function () {
  describe('AccordionSection', function () {
    it('should render a `li` HTML element', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.AccordionSection, {
        title: "Hello"
      }, "World!"));
      expect(component.is('li')).toBe(true);
    });
    it('renders the title and text', function () {
      var title = 'Awesome Title';
      var text = 'Hello, World!';
      var component = (0, _enzyme.mount)(_react["default"].createElement(_index.AccordionSection, {
        title: title
      }, text));
      expect(component.props().title).toBe(title);
      expect(component.find('.accordion__content-wrap').text()).toBe(text);
    });
  });
  it('should render a `ul` HTML element with the right classes', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Accordion, null, _react["default"].createElement(_index.AccordionSection, {
      title: "Hello"
    }, "World!")));
    expect(component.is('ul')).toBe(true);
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should only render React Components', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.Accordion, null, _react["default"].createElement(_index.AccordionSection, {
      title: "Section 1"
    }, "Section 1 Text"), "Hello"));
    expect(component.children().length).toBe(1);
  });
  it('should update the internal state when different AccordionSections are clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Accordion, null, _react["default"].createElement(_index.AccordionSection, {
      title: "Section 1"
    }, "Section 1 Text"), _react["default"].createElement(_index.AccordionSection, {
      title: "Section 2"
    }, "Section 2 Text")));
    expect(component.find(_index.AccordionSection).at(0).props()._isSelected).toBe(true);
    component.find(_index.AccordionSection).at(1).find('.accordion__link').simulate('click');
    expect(component.find(_index.AccordionSection).at(0).props()._isSelected).toBe(false);
    expect(component.find(_index.AccordionSection).at(1).props()._isSelected).toBe(true);
  });
});