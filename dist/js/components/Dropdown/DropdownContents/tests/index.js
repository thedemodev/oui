"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderHeader = function renderHeader() {
  return _react["default"].createElement("div", {
    className: "header"
  }, "a header");
};

describe('components/Dropdown/DropdownContents', function () {
  it('should render as a `div` with a single ul', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.type()).toBe('div');
    expect(component.childAt(0).type()).toBe('ul');
  });
  it('should render children', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null, _react["default"].createElement("li", null, "foo")));
    expect(component.text()).toBe('foo');
  });
  it('should render with test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose"
    }));
    expect(component.find('ul').is('[data-test-section="goose"]')).toBe(true);
  });
  it('should render with nowrap', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isNoWrap: true
    }));
    expect(component.prop('className')).toBe('nowrap oui-dropdown oui-dropdown--right');
  });
  it('should render a header if `props.renderHeader` is passed', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      renderHeader: renderHeader
    }));
    expect(component.find('div.header').exists()).toBe(true);
  });
  it('should render with default direction left', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
    expect(component.prop('className')).toBe('oui-dropdown oui-dropdown--right');
  });
  it('should render with direction right', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      direction: 'right'
    }));
    expect(component.prop('className')).toBe('oui-dropdown');
  });
  it('should render with direction up', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      direction: 'up'
    }));
    expect(component.prop('className')).toBe('oui-dropdown oui-dropdown--up');
  });
  it('should render with a minimum width', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      minWidth: '300px'
    }));
    expect(component.find('ul').prop('style')).toEqual({
      minWidth: '300px'
    });
  });
  it('should render with scroll styles if canScroll', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      canScroll: true
    }));
    expect(component.find('ul').prop('style')).toEqual({
      overflowY: 'visible',
      maxHeight: 'none'
    });
  });
});