"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../index");

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Dialog Component ', function () {
  it('renders a default dialog', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      onClose: onCloseSpy,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, "Dialogs can contain simple text in the body.")));
    expect(component.find('.oui-close-button').length).toBe(1);
  });
  it('renders any children passed in', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var bodyString = 'Dialogs can contain simple text in the body.';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      onClose: onCloseSpy,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, bodyString)));
    expect(component.find('.oui-dialog__body').containsMatchingElement(_react["default"].createElement("p", null, bodyString))).toBe(true);
  });
  it('calls the onClose prop function when close button is clicked', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      onClose: onCloseSpy,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, "Dialogs can contain simple text in the body.")));
    component.find('.oui-close-button').simulate('click');
    expect(onCloseSpy).toHaveBeenCalled();
  });
  it('renders a subtitle when passed in', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var subtitleString = 'This is a subtitle';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      subtitle: subtitleString,
      onClose: onCloseSpy,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, "Dialogs can contain simple text in the body.")));
    expect(component.find('.oui-dialog__header').containsMatchingElement(_react["default"].createElement("p", null, subtitleString))).toBe(true);
  });
  it('renders a subtitle node when passed in', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();

    var subtitleNode = _react["default"].createElement("p", null, "This is a subtitle");

    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      subtitle: subtitleNode,
      onClose: onCloseSpy,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, "Dialogs can contain simple text in the body.")));
    expect(component.find('.oui-dialog__header').containsMatchingElement(_react["default"].createElement("div", null, subtitleNode))).toBe(true);
  });
  it('renders the footer buttons', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var button1Label = 'No Thanks';
    var button2Label = 'Continue';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      onClose: onCloseSpy,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, button1Label), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, button2Label)]
    }, _react["default"].createElement("p", null, "Dialogs can contain simple text in the body.")));
    expect(component.find('.oui-button-row').containsMatchingElement(_react["default"].createElement("button", null, button1Label))).toBe(true);
    expect(component.find('.oui-button-row').containsMatchingElement(_react["default"].createElement("button", null, button2Label))).toBe(true);
  });
  it('does not render a close button when hasCloseButton is false', function () {
    var onClickSpy = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      hasCloseButton: false,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, "Dialogs can contain simple text in the body.")));
    expect(component.find('.oui-close-button').length).toBe(0);
  });
  it('renders the overlay behind the dialog', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var bodyString = 'Dialogs can contain simple text in the body.';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      onClose: onCloseSpy,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, bodyString)));
    expect(component.find('.oui-dialog__overlay').length).toBe(1);
  });
  it('does not render the overlay behind the dialog if hasOverlay is false', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var bodyString = 'Dialogs can contain simple text in the body.';
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DialogNew, {
      title: "This is a Dialog",
      onClose: onCloseSpy,
      hasOverlay: false,
      footerButtonList: [_react["default"].createElement(_Button["default"], {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), _react["default"].createElement(_Button["default"], {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, _react["default"].createElement("p", null, bodyString)));
    expect(component.find('.oui-dialog__overlay').length).toBe(0);
  });
});