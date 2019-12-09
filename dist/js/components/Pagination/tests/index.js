"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Pagination', function () {
  var component;
  var mockCurrentPage;
  var mockTotalPages;
  var onChangeSpy;
  var testSection;
  beforeEach(function () {
    mockCurrentPage = 3;
    mockTotalPages = 10;
    onChangeSpy = jest.fn();
    testSection = 'oui-pagination';
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      currentPage: mockCurrentPage,
      testSection: testSection,
      totalPages: mockTotalPages,
      onChange: onChangeSpy
    }));
  });
  describe('basic rendering', function () {
    it('should render ButtonRow with 4 Buttons and 1 span', function () {
      var buttonRow = component.find('ButtonRow');
      expect(buttonRow.exists()).toBe(true);
      expect(buttonRow.prop('centerGroup').length).toEqual(5);
      var centerButtons = component.find("[data-test-section=\"".concat(testSection + '-center', "\"]"));
      expect(centerButtons.childAt(0).type()).toBe(_Button["default"]);
      expect(centerButtons.childAt(1).type()).toBe(_Button["default"]);
      expect(centerButtons.childAt(2).type()).toBe('span');
      expect(centerButtons.childAt(3).type()).toBe(_Button["default"]);
      expect(centerButtons.childAt(4).type()).toBe(_Button["default"]);
    });
    it('should render disable First and Back Buttons when page is equal to 1', function () {
      component.setProps({
        currentPage: 1
      });
      var centerButtons = component.find("[data-test-section=\"".concat(testSection + '-center', "\"]"));
      expect(centerButtons.childAt(0).prop('isDisabled')).toBe(true);
      expect(centerButtons.childAt(1).prop('isDisabled')).toBe(true);
    });
    it('should render disable Last and Next Buttons when current page is equal to totalPages', function () {
      component.setProps({
        currentPage: mockTotalPages
      });
      var centerButtons = component.find("[data-test-section=\"".concat(testSection + '-center', "\"]"));
      expect(centerButtons.childAt(3).prop('isDisabled')).toBe(true);
      expect(centerButtons.childAt(4).prop('isDisabled')).toBe(true);
    });
  });
  describe('editing', function () {
    it('should call onChange with page equal to 1 when First Button is clicked', function () {
      var centerButtons = component.find("[data-test-section=\"".concat(testSection + '-center', "\"]"));
      centerButtons.childAt(0).simulate('click');
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(1);
    });
    it('should call onChange with page equal to n - 1 when Back Button is clicked', function () {
      var centerButtons = component.find("[data-test-section=\"".concat(testSection + '-center', "\"]"));
      centerButtons.childAt(1).simulate('click');
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(mockCurrentPage - 1);
    });
    it('should call onChange with page equal to n + 1 when Next Button is clicked', function () {
      var centerButtons = component.find("[data-test-section=\"".concat(testSection + '-center', "\"]"));
      centerButtons.childAt(3).simulate('click');
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(mockCurrentPage + 1);
    });
    it('should call onChange with page equal to totalPages when Last Button is clicked', function () {
      var centerButtons = component.find("[data-test-section=\"".concat(testSection + '-center', "\"]"));
      centerButtons.childAt(4).simulate('click');
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
      expect(onChangeSpy).toHaveBeenCalledWith(mockTotalPages);
    });
  });
});