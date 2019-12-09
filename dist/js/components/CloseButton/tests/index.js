"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('CloseButton Component ', function () {
  it('renders a default close button', function () {
    var onClickSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onClick: onClickSpy
    }));
    expect(component.find('.oui-close-button').length).toBe(1);
    expect(component.find('.oui-icon--16').length).toBe(1);
  });
  it('renders a close button with a large icon', function () {
    var onClickSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onClick: onClickSpy,
      size: "large"
    }));
    expect(component.find('.oui-close-button').length).toBe(1);
    expect(component.find('.oui-icon--24').length).toBe(1);
  });
  it('calls the function passed in to onClick', function () {
    var onClickSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      onClick: onClickSpy,
      size: "large"
    }));
    component.find('.oui-close-button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});