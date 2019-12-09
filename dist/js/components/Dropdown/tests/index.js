"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = [{
  title: 'Manual',
  description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'
}, {
  title: 'Maximize Conventions',
  header: 'Automation',
  description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'
}, {
  title: 'Faster Results',
  description: 'Cauliflower cheese stilton paneer hard cheese fondue.'
}];
describe('components/Dropdown', function () {
  it('should render children when isOpen is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      icon: true,
      isOpen: true,
      buttonContent: "Dropdown"
    }, _react["default"].createElement("ul", null, data.map(function (item, index) {
      return _react["default"].createElement("li", {
        key: index
      }, item.title);
    }))));
    expect(component.find('Dropdown').props().isOpen).toBe(true);
    expect(component.find('ul').exists()).toBe(true);
    expect(component.find('Popper').exists()).toBe(true);
  });
  it('should not render children or Popper when isDisabled is true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      icon: true,
      buttonContent: "Dropdown",
      idDisabled: true
    }, _react["default"].createElement("ul", null, data.map(function (item, index) {
      return _react["default"].createElement("li", {
        key: index
      }, item.title);
    }))));
    expect((0, _enzymeToJson.mountToJson)(component)).toMatchSnapshot();
    expect(component.find('Popper').exists()).toBe(false);
  });
  it('should call the child onClick handler when clicked', function () {
    var onClickMock = jest.fn();
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      icon: true,
      buttonContent: "Dropdown",
      idDisabled: true
    }, _react["default"].createElement("ul", null, data.map(function (item, index) {
      return _react["default"].createElement("li", {
        key: index,
        onClick: onClickMock,
        "data-test-section": "dropdown-item-".concat(index)
      }, item.title);
    }))));
    component.find('[data-test-section="dropdown-item-1"]').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });
  it('should not use .oui-arrow-inline--down when icon isEqual to triangle', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      icon: true,
      buttonContent: "Dropdown"
    }, _react["default"].createElement("ul", null, data.map(function (item, index) {
      return _react["default"].createElement("li", {
        key: index
      }, item.title);
    }))));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should use oui-button--full class when fullWidth is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      icon: true,
      buttonContent: "Dropdown",
      fullWidth: true
    }, _react["default"].createElement("ul", null, data.map(function (item, index) {
      return _react["default"].createElement("li", {
        key: index
      }, item.title);
    }))));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should highlight button class when style equals highlight', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      icon: true,
      buttonContent: "Dropdown",
      style: "highlight"
    }, _react["default"].createElement("ul", null, data.map(function (item, index) {
      return _react["default"].createElement("li", {
        key: index
      }, item.title);
    }))));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should include oui-form-bad-news class when display error is true', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      buttonContent: "Dropdown",
      displayError: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render an activator node when passed as a prop via `activator`', function () {
    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      activator: _react["default"].createElement("button", null, "Click me"),
      displayError: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render an activator node when passed as a render prop via `renderActivator`', function () {
    function renderActivator() {
      return _react["default"].createElement("button", null, "Click me");
    }

    var component = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      renderActivator: renderActivator,
      displayError: true
    }));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should hide children when shouldHideChildrenOnClick is not passed and children are clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      style: "outline"
    }, _react["default"].createElement("div", {
      "data-test-section": "dropdown-children"
    }, _react["default"].createElement("p", {
      "data-test-section": "dropdown-text"
    }, "This is some initial text! Click me, nothing happens."), _react["default"].createElement("button", {
      "data-test-section": "dropdown-button-1"
    }, "Doesn't Hide"), ",", _react["default"].createElement("button", {
      "data-test-section": "dropdown-button-2"
    }, "Hide Dropdown"), ",")));
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-text"]').simulate('mouseover');
    component.find('[data-test-section="dropdown-text"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
  });
  it('should hide children when ignoreToggle is false on a DropdownItem child', function () {
    var onClickMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      style: "outline"
    }, _react["default"].createElement(_index["default"].ListItem, null, _react["default"].createElement(_index["default"].BlockLink, {
      value: 'item',
      onClick: onClickMock,
      isLink: true,
      testSection: 'dropdown-block-link-item'
    }, "Button"))));
    expect(component.find(_index["default"].ListItem).length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find(_index["default"].ListItem).length).toBe(1);
    component.find(_index["default"].BlockLink).simulate('mouseover');
    component.find(_index["default"].BlockLink).simulate('click');
    expect(component.find(_index["default"].ListItem).length).toBe(0);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
  it('should not hide children when ignoreToggle is true on a DropdownItem child', function () {
    var onClickMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      style: "outline"
    }, _react["default"].createElement(_index["default"].ListItem, {
      ignoreToggle: true
    }, _react["default"].createElement(_index["default"].BlockLink, {
      value: 'item',
      onClick: onClickMock,
      isLink: true,
      testSection: 'dropdown-block-link-item'
    }, "Button"))));
    expect(component.find(_index["default"].ListItem).length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find(_index["default"].ListItem).length).toBe(1);
    component.find(_index["default"].BlockLink).simulate('mouseover');
    component.find(_index["default"].BlockLink).simulate('click');
    expect(component.find(_index["default"].ListItem).length).toBe(1);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
  it('should not show children at all when isDisabled is true', function () {
    var onClickMock = jest.fn();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      isDisabled: true,
      placement: "bottom-start",
      style: "outline"
    }, _react["default"].createElement(_index["default"].ListItem, null, _react["default"].createElement(_index["default"].BlockLink, {
      value: 'item',
      onClick: onClickMock,
      isLink: true,
      testSection: 'dropdown-block-link-item'
    }, "Button"))));
    expect(component.find(_index["default"].ListItem).length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find(_index["default"].ListItem).length).toBe(0);
  });
  it('should hide children when shouldHideChildrenOnClick is passed with true and children are clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      shouldHideChildrenOnClick: true,
      style: "outline"
    }, _react["default"].createElement("div", {
      "data-test-section": "dropdown-children"
    }, _react["default"].createElement("p", {
      "data-test-section": "dropdown-text"
    }, "This is some initial text! Click me, nothing happens."), _react["default"].createElement("button", {
      "data-test-section": "dropdown-button-1"
    }, "Doesn't Hide"), ",", _react["default"].createElement("button", {
      "data-test-section": "dropdown-button-2"
    }, "Hide Dropdown"), ",")));
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-text"]').simulate('mouseover');
    component.find('[data-test-section="dropdown-text"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
  });
  it('should NOT hide children when shouldHideChildrenOnClick is passed with false and children are clicked', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      shouldHideChildrenOnClick: false,
      style: "outline"
    }, _react["default"].createElement("div", {
      "data-test-section": "dropdown-children"
    }, _react["default"].createElement("p", {
      "data-test-section": "dropdown-text"
    }, "This is some initial text! Click me, nothing happens."), _react["default"].createElement("button", {
      "data-test-section": "dropdown-button-1"
    }, "Doesn't Hide"), ",", _react["default"].createElement("button", {
      "data-test-section": "dropdown-button-2"
    }, "Hide Dropdown"), ",")));
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-text"]').simulate('mouseover');
    component.find('[data-test-section="dropdown-text"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-button-1"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-button-2"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
  });
  it('should only hide children after handleHideChildren is invoked when shouldHideChildrenOnClick is passed with false ' + 'and render props function child is provided', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      shouldHideChildrenOnClick: false,
      style: "outline"
    }, function (_ref) {
      var handleHideChildren = _ref.handleHideChildren;
      return _react["default"].createElement("div", {
        "data-test-section": "dropdown-children"
      }, _react["default"].createElement("p", {
        "data-test-section": "dropdown-text"
      }, "This is some initial text! Click me, nothing happens."), _react["default"].createElement("button", {
        "data-test-section": "dropdown-button-1"
      }, "Doesn't Hide"), ",", _react["default"].createElement("button", {
        "data-test-section": "dropdown-button-2",
        onClick: handleHideChildren
      }, "Hide Dropdown"), ",");
    }));
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-text"]').simulate('mouseover');
    component.find('[data-test-section="dropdown-text"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-button-1"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-button-2"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
  });
  it('should hide children when clicked when shouldHideChildrenOnClick is passed with true ' + 'and render props function child is provided', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      shouldHideChildrenOnClick: true,
      style: "outline"
    }, function (_ref2) {
      var handleHideChildren = _ref2.handleHideChildren;
      return _react["default"].createElement("div", {
        "data-test-section": "dropdown-children"
      }, _react["default"].createElement("p", {
        "data-test-section": "dropdown-text"
      }, "This is some initial text! Click me, nothing happens."), _react["default"].createElement("button", {
        "data-test-section": "dropdown-button-1"
      }, "Doesn't Hide"), ",", _react["default"].createElement("button", {
        "data-test-section": "dropdown-button-2",
        onClick: handleHideChildren
      }, "Hide Dropdown"), ",");
    }));
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-text"]').simulate('mouseover');
    component.find('[data-test-section="dropdown-text"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
  });
  it('should hide children after handleHideChildren is invoked when shouldHideChildrenOnClick is passed with true ' + 'and render props function child is provided', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      arrowIcon: "down",
      buttonContent: _react["default"].createElement("div", {
        "data-test-section": "dropdown-button"
      }, "Press me!"),
      placement: "bottom-start",
      shouldHideChildrenOnClick: true,
      style: "outline"
    }, function (_ref3) {
      var handleHideChildren = _ref3.handleHideChildren;
      return _react["default"].createElement("div", {
        "data-test-section": "dropdown-children"
      }, _react["default"].createElement("p", {
        "data-test-section": "dropdown-text"
      }, "This is some initial text! Click me, nothing happens."), _react["default"].createElement("button", {
        "data-test-section": "dropdown-button-1"
      }, "Doesn't Hide"), ",", _react["default"].createElement("button", {
        "data-test-section": "dropdown-button-2",
        onClick: handleHideChildren
      }, "Hide Dropdown"), ",");
    }));
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
    component.find('[data-test-section="dropdown-button"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(1);
    component.find('[data-test-section="dropdown-button-2"]').simulate('mouseover');
    component.find('[data-test-section="dropdown-button-2"]').simulate('click');
    expect(component.find('[data-test-section="dropdown-children"]').length).toBe(0);
  });
});