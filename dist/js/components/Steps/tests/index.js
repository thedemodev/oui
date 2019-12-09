"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Steps', function () {
  var component;
  var onClick;
  var items = [{
    label: 'Cat',
    value: 'cat'
  }, {
    label: 'Dog',
    value: 'dog'
  }, {
    label: 'Bear',
    value: 'bear'
  }, {
    label: 'Squirrel',
    value: 'squirrel'
  }];
  beforeEach(function () {
    onClick = jest.fn();
  });
  describe('user can edit steps', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        items: items,
        currentStep: 'bear',
        onClick: onClick,
        testSection: "foo"
      }));
    });
    it('should render all steps', function () {
      var list = component.find('ul');
      expect(list).toHaveLength(1);
      expect(list.hasClass('oui-steps')).toBe(true);
      var steps = component.find('li');
      expect(steps).toHaveLength(4);
      steps.forEach(function (step) {
        expect(step.hasClass('oui-steps__item')).toBe(true);
      });
      expect(steps.at(0).text()).toContain('Cat');
      expect(steps.at(1).text()).toContain('Dog');
      expect(steps.at(2).text()).toContain('Bear');
      expect(steps.at(3).text()).toContain('Squirrel');
    });
    it('should have editable styling on all steps', function () {
      var steps = component.find('li');
      steps.forEach(function (step) {
        expect(step.hasClass('oui-steps__item--editable')).toBe(true);
      });
    });
    it('should have active styling on currentStep step', function () {
      var steps = component.find('li');
      var currentStep = steps.at(2);
      expect(currentStep.hasClass('oui-steps__item--active')).toBe(true);
      expect(currentStep.hasClass('oui-steps__item--complete')).toBe(false);
    });
    it('should have completed styling on all steps prior to currentStep', function () {
      var steps = component.find('li');
      expect(steps.at(0).hasClass('oui-steps__item--complete')).toBe(true);
      expect(steps.at(1).hasClass('oui-steps__item--complete')).toBe(true);
    });
    it('should not have completed styling on all steps after currentStep', function () {
      var steps = component.find('li');
      expect(steps.at(3).hasClass('oui-steps__item--complete')).toBe(false);
    });
    it('should call onClick with step value when step clicked', function () {
      var steps = component.find('li');
      steps.at(1).simulate('click');
      expect(onClick).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalledWith('dog');
    });
    it('should add test sections if passed as prop', function () {
      var list = component.find('ul');
      expect(list.prop('data-test-section')).toEqual('foo');
      var steps = component.find('li');
      expect(steps.at(0).prop('data-test-section')).toEqual('foo-cat');
      expect(steps.at(1).prop('data-test-section')).toEqual('foo-dog');
      expect(steps.at(2).prop('data-test-section')).toEqual('foo-bear');
      expect(steps.at(3).prop('data-test-section')).toEqual('foo-squirrel');
    });
  });
  describe('user cannot edit steps', function () {
    it('should call not call onClick when step clicked', function () {
      var steps = component.find('li');
      steps.at(1).simulate('click');
      expect(onClick).not.toHaveBeenCalled();
    });
    it('should not have editable styling on all steps', function () {
      var steps = component.find('li');
      steps.forEach(function (step) {
        expect(step.hasClass('oui-steps__item--editable')).toBe(true);
      });
    });
  });
});