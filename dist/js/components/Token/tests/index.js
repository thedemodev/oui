"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('components/Token', function () {
  var mockFunction = jest.fn();
  it('should render `DismissButton` when `isDismissible` is true and `onDismiss is provided`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      isDismissible: true,
      onDismiss: mockFunction,
      name: "Goose"
    }));
    expect(component.find('DismissButton').length).toBe(1);
  });
  it('should not render `DismissButton` when `isDismissible` is not provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "Goose"
    }));
    expect(component.find('DismissButton').length).toBe(0);
  });
  it('should not render `DismissButton` if `isDismissible` is true but `onDismiss` is falsy', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "Goose",
      isDismissible: true
    }));
    expect(component.find('DismissButton').length).toBe(0);
  });
  it('should not render `DismissButton` if `onDismiss` is provided but `isDismissible` is false', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "Goose",
      isDismissible: false,
      onDismiss: mockFunction
    }));
    expect(component.find('DismissButton').length).toBe(0);
  });
  it('should render correct prop for `style` when not specified', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "Goose"
    }));
    expect(component.find('.oui-token--secondary').length).toBe(1);
    expect(component.find('.oui-token--primary').length).toBe(0);
  });
  it('should render correct prop for `style` when specified', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      style: "primary",
      name: "Goose"
    }));
    expect(component.find('.oui-token--primary').length).toBe(1);
    expect(component.find('.oui-token--secondary').length).toBe(0);
  });
  it('should properly display name on token passed down by props', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose"
    }));
    expect(component.text()).toBe('goose');
  });
  it('should display description on token when provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      description: "testdescription"
    }));
    expect(component.text()).toContain('testdescription');
  });
  it('should apply `oui-token-tool` class if token is draggable', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDraggable: true
    }));
    expect(component.find('.oui-token-tool').length).toBe(1);
  });
  it('should not apply `oui-token-tool` class if token is not draggable', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDraggable: false
    }));
    expect(component.find('.oui-token-tool').length).toBe(0);
  });
  it('should show number indicating order if provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      order: 12345
    }));
    expect(component.text()).toContain(12345);
  });
  it('should not show number indicating order if not provided', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose"
    }));
    expect(component.text()).not.toContain(12345);
  });
  it('should show ellipsis icon if the token is draggable', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDraggable: true
    }));
    expect(component.find(_reactOuiIcons["default"]).length).toBe(1);
  });
  it('should not show ellipsis icon if the token is not draggable', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isDraggable: false
    }));
    expect(component.find(_reactOuiIcons["default"]).length).toBe(0);
  });
  it('should have a properly set test section', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      testSection: "goose",
      name: "Goose"
    }));
    expect(component.is('[data-test-section="goose"]')).toBe(true);
  });
  it('should apply `oui-token-wrap--snug` class if token has a snug wrap', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      hasSnugWrap: true
    }));
    expect(component.find('.oui-token-wrap--snug').length).toBe(1);
  });
  it('should apply `oui-token-wrap` class if token wrap is not specified', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose"
    }));
    expect(component.find('.oui-token-wrap').length).toBe(1);
  });
  it('should not apply `oui-token-wrap` class if token does not have a wrap', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      hasWrap: false
    }));
    expect(component.find('.oui-token-wrap').length).toBe(0);
  });
  it('should apply `oui-token--full-width` class if isFullWidth is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      name: "goose",
      isFullWidth: true
    }));
    expect(component.find('.oui-token--full-width').length).toBe(1);
  });
});