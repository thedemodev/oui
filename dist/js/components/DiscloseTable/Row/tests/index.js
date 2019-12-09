"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _Table = _interopRequireDefault(require("../../../Table"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/DiscloseTable/DiscloseRow', function () {
  var component;
  it('should render rowContents prop correctly', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      rowContents: [_react["default"].createElement(_Table["default"].TD, {
        key: 'foo'
      }, "Experiment Name")]
    }, _react["default"].createElement("p", null, "Content")));
    expect(component.find('tr').find('TD').exists()).toBe(true);
  });
  it('should render the arrow inside first `Table.TD `', function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      rowContents: [_react["default"].createElement(_Table["default"].TD, {
        key: 'foo'
      }, "Experiment Name")]
    }, _react["default"].createElement("p", null, "Content")));
    expect(component.find('tr').find('td').containsMatchingElement(_react["default"].createElement("span", {
      className: "oui-disclose__symbol push-half--right"
    }))).toBe(true);
  });
  describe('when in collapsed state', function () {
    beforeEach(function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        rowContents: [_react["default"].createElement(_Table["default"].TD, {
          key: 'foo'
        }, "Experiment Name")]
      }, _react["default"].createElement("p", null, "Content")));
    });
    it('should render a single "tr" row', function () {
      expect(component.children()).toHaveLength(1);
    });
    it('should have valid CSS classes applied', function () {
      expect(component.find('tr').hasClass('oui-disclose-table--row__toggle')).toBe(true);
      expect(component.find('tr').hasClass('is-active')).toBe(false);
    });
    it('should not render childrenn', function () {
      expect(component.find('tr').find('p').exists()).toBe(false);
    });
  });
  describe('when in expanded state', function () {
    var rowComponents = [_react["default"].createElement(_Table["default"].TD, {
      key: 'foo'
    }, "Experiment Name")];
    beforeEach(function () {
      component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
        rowContents: rowComponents
      }, _react["default"].createElement("p", null, "Content")));
      component.find('tr').simulate('click');
    });
    it('should render two "tr" rows', function () {
      expect(component.find('tr').length).toBe(2);
    });
    it('should have valid CSS classes applied', function () {
      expect(component.find('tr').first().hasClass('oui-disclose-table--row__toggle')).toBe(true);
      expect(component.find('tr').first().hasClass('is-active')).toBe(true);
      expect(component.find('tr').last().hasClass('oui-disclose-table--row__content')).toBe(true);
    });
    it('should render children', function () {
      expect(component.find('tr').find('p').exists()).toBe(true);
      expect(component.find('tr').last().find('td').prop('colSpan')).toBe(rowComponents.length + 1);
    });
  });
});