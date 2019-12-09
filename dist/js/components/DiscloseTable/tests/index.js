"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _Table = _interopRequireDefault(require("../../Table"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/DiscloseTable', function () {
  it('should render as a `table`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_Table["default"].THead, null)));
    expect(component.type()).toBe('table');
  });
  it('should render children', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_Table["default"].THead, null, _react["default"].createElement(_Table["default"].TR, null, _react["default"].createElement(_Table["default"].TH, null, "Table Header Name")))));
    expect(component.find('THead').exists()).toBe(true);
    expect(component.find('TR').exists()).toBe(true);
    expect(component.find('TH').exists()).toBe(true);
    expect(component.find('TH').text()).toBe('Table Header Name');
  });
  it('should render with correct style and classNames', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, _react["default"].createElement(_Table["default"].THead, null)));
    expect(component.hasClass('oui-disclose-table')).toBe(true);
    expect(component.prop('style')).toEqual({
      tableLayout: 'auto'
    });
  });
  describe('with a test section', function () {
    it('should render with a test section', function () {
      var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
        testSection: "foo"
      }, _react["default"].createElement(_Table["default"].THead, null)));
      expect(component.is('[data-test-section="foo"]')).toBe(true);
    });
  });
});