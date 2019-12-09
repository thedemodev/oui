"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ButtonIcon component', function () {
  it('should render a medium size icon by default', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      iconName: "add"
    }));
    expect(component.find('.oui-button-icon__medium').length).toBe(1);
    expect(component.find('.oui-icon').length).toBe(1);
  });
  it('should change size when prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      iconName: "add",
      size: "large"
    }));
    expect(component.find('.oui-button-icon__large').length).toBe(1);
  });
  it('should set the title on the button when title is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      iconName: "add",
      title: "add row"
    }));
    expect(component.getDOMNode().attributes.getNamedItem('title').value).toBe('add row');
  });
  it('should disable the button if isDisabled is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      iconName: "add",
      isDisabled: true
    }));
    expect(component.getDOMNode().attributes.getNamedItem('disabled').value).not.toBe(null);
  });
  it('should add a style when style prop is passed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      iconName: "add",
      style: "danger"
    }));
    expect(component.find('.oui-button--danger').length).toBe(1);
  });
  it('should call function that is passed in as `onClick` after click', function () {
    var onClickSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onClick: onClickSpy,
      iconName: "add"
    }));
    component.simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('should not call the onClick function if button isDisabled', function () {
    var onClickSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      iconName: "add",
      isDisabled: true,
      onClick: onClickSpy
    }));
    component.simulate('click');
    expect(onClickSpy).not.toHaveBeenCalled();
  });
});