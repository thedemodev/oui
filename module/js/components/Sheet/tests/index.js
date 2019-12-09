import React from 'react';
import { mount } from 'enzyme';
import Sheet from '../index';
import Button from '../../Button';
describe('Sheet Component ', function () {
  it('renders a default Sheet', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      onClose: onCloseSpy,
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, React.createElement("p", null, "Sheets can contain anything, typically forms, in the body.")));
    expect(component.find('.oui-close-button').length).toBe(1);
  });
  it('renders any children passed in', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var bodyString = 'Sheets can contain anything, typically forms, in the body.';
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      onClose: onCloseSpy,
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, React.createElement("p", null, bodyString)));
    expect(component.find('.oui-sheet__body').containsMatchingElement(React.createElement("p", null, bodyString))).toBe(true);
  });
  it('calls the onClose prop function when close button is clicked', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      onClose: onCloseSpy,
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, React.createElement("p", null, "Sheets can contain anything, typically forms, in the body.")));
    component.find('.oui-close-button').simulate('click');
    expect(onCloseSpy).toHaveBeenCalled();
  });
  it('renders a subtitle when passed in', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var subtitleString = 'This is a subtitle';
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      subtitle: subtitleString,
      onClose: onCloseSpy,
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, React.createElement("p", null, "Sheets can contain anything, typically forms, in the body.")));
    expect(component.find('.oui-sheet__header').containsMatchingElement(React.createElement("p", null, subtitleString))).toBe(true);
  });
  it('renders a subtitle node when passed in', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var subtitleNode = React.createElement("p", null, "This is a ", React.createElement("a", {
      href: "#"
    }, "subtitle"));
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      subtitle: subtitleNode,
      onClose: onCloseSpy,
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, React.createElement("p", null, "Sheets can contain anything, typically forms, in the body.")));
    expect(component.find('.oui-sheet__header').containsMatchingElement(React.createElement("div", null, subtitleNode))).toBe(true);
  });
  it('renders the footer buttons', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var button1Label = 'No Thanks';
    var button2Label = 'Continue';
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      onClose: onCloseSpy,
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, button1Label), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, button2Label)]
    }, React.createElement("p", null, "Sheets can contain anything, typically forms, in the body.")));
    expect(component.find('.oui-button-row').containsMatchingElement(React.createElement("button", null, button1Label))).toBe(true);
    expect(component.find('.oui-button-row').containsMatchingElement(React.createElement("button", null, button2Label))).toBe(true);
  });
  it('does not render a close button when hasCloseButton is false', function () {
    var onClickSpy = jest.fn();
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      hasCloseButton: false,
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, React.createElement("p", null, "Sheets can contain anything, typically forms, in the body.")));
    expect(component.find('.oui-close-button').length).toBe(0);
  });
  it('renders an Attention bar when warningContent is passed in', function () {
    var onClickSpy = jest.fn();
    var onCloseSpy = jest.fn();
    var subtitleNode = React.createElement("p", null, "This is a ", React.createElement("a", {
      href: "#"
    }, "subtitle"));
    var component = mount(React.createElement(Sheet, {
      title: "This is a Sheet",
      subtitle: subtitleNode,
      onClose: onCloseSpy,
      warningContent: "This is a warning",
      warningTestSection: "warning-test-section",
      footerButtonList: [React.createElement(Button, {
        style: "plain",
        key: 0,
        onClick: onClickSpy
      }, "No Thanks"), React.createElement(Button, {
        style: "highlight",
        key: 1,
        onClick: onClickSpy
      }, "Continue")]
    }, React.createElement("p", null, "Sheets can contain anything, typically forms, in the body.")));
    expect(component.find('.oui-attention--warning').length).toBe(1);
    expect(component.find('[data-test-section="warning-test-section"]').length).toBe(1);
  });
});