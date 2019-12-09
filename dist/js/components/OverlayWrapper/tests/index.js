"use strict";

var _enzyme = require("enzyme");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _enzymeToJson = require("enzyme-to-json");

var _index = _interopRequireDefault(require("../index"));

var _Popover = _interopRequireDefault(require("../../Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TestButton = function TestButton(props) {
  return _react["default"].createElement("button", null, props.text);
};

var TestPopover = function TestPopover(props) {
  return _react["default"].createElement(_Popover["default"], {
    title: "Lorem ipsum dolor sit amet"
  }, _react["default"].createElement("p", null, "Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!"));
};

TestButton.propTypes = {
  text: _propTypes["default"].string
};
describe('components/OverlayWrapper when componentDidMount', function () {
  it('should not instantiate tether until it is triggered for the first time', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      attachmentConstraint: "none",
      overlay: _react["default"].createElement(TestPopover, null),
      horizontalAttachment: "center",
      verticalAttachment: "top",
      verticalTargetAttachment: "top",
      horizontalTargetAttachment: "center",
      isConstrainedToScreen: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    expect(component.instance()._tether).toBe(undefined);
  });
});
describe('components/OverlayWrapper when componentWillUnmount', function () {
  var component;
  var instance;
  beforeEach(function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null),
      horizontalAttachment: "center",
      verticalAttachment: "top",
      verticalTargetAttachment: "top",
      horizontalTargetAttachment: "center",
      isConstrainedToScreen: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    instance = component.instance();
    instance.enableTether();
  });
  afterEach(function () {
    component = null;
    instance = null;
  });
  it('should destroy Tether', function () {
    spyOn(instance._tether, 'destroy');

    var initialCallCount = instance._tether.destroy.calls.count();

    component.unmount();
    expect(instance._tether.destroy.calls.count()).toBe(initialCallCount + 1);
  });
  it('should call `removeBodyEventListener` function', function () {
    spyOn(instance, 'removeBodyEventListener');
    var initialCallCount = instance.removeBodyEventListener.calls.count();
    component.unmount();
    expect(instance.removeBodyEventListener.calls.count()).toBe(initialCallCount + 1);
  });
});
describe('#disableTether', function () {
  it('should call function to remove event listener from document body', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    spyOn(instance, 'removeBodyEventListener');
    var initialCallCount = instance.removeBodyEventListener.calls.count();
    instance._tether = {
      disable: function disable() {}
    };
    instance.disableTether();
    expect(instance.removeBodyEventListener.calls.count()).toBe(initialCallCount + 1);
  });
  it('should call `onHide` prop if a function is provided', function () {
    var obj = {
      func: function func() {}
    };
    spyOn(obj, 'func').and.stub();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null),
      onHide: obj.func
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    component.instance().enableTether();
    var initialCallCount = obj.func.calls.count();
    component.instance().disableTether();
    expect(obj.func.calls.count()).toBe(initialCallCount + 1);
  });
  it('should set visible state of `overlay` to false', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    component.setState({
      isOverlayOpen: true
    });
    var instance = component.instance();
    instance._tether = {
      disable: function disable() {}
    };
    instance.disableTether();
    expect(component.state('isOverlayOpen')).toBe(false);
  });
});
describe('#enableTether', function () {
  it('should only initialize tether if its not yet defined', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null),
      shouldHideOnClick: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    spyOn(component.instance(), 'initTether').and.callThrough();
    expect(component.instance().initTether.calls.count()).toBe(0);
    component.instance().enableTether();
    expect(component.instance().initTether.calls.count()).toBe(1);
    component.instance().enableTether();
    expect(component.instance().initTether.calls.count()).toBe(1);
  });
  it('should pass the correct options when all the layout props are provided', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      attachmentConstraint: "none",
      overlay: _react["default"].createElement(TestPopover, null),
      horizontalAttachment: "center",
      verticalAttachment: "top",
      verticalTargetAttachment: "top",
      horizontalTargetAttachment: "center",
      isConstrainedToScreen: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    instance.enableTether();
    var tetherOptions = instance._tether.options;
    expect(tetherOptions.attachment).toBe('top center');
    expect(tetherOptions.constraints.length).toBe(1);
    expect(tetherOptions.constraints[0]).toEqual({
      attachment: 'none',
      to: 'window',
      pin: true
    });
    expect(tetherOptions.targetAttachment).toBe('top center');
    expect(tetherOptions.target.tagName.toLowerCase()).toBe(component.find(TestButton).render().first()[0].name);
    expect(tetherOptions.element.tagName.toLowerCase()).toBe(component.find(TestPopover).render().first()[0].name);
  });
  it('should add click event listener to document if `shouldHideOnClick` is true', function () {
    spyOn(document, 'addEventListener');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null),
      shouldHideOnClick: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    instance._tether = {
      enable: function enable() {}
    };
    instance.enableTether();
    expect(document.addEventListener.calls.any()).toBe(true);
    expect(instance._bodyClickListener).toBeTruthy();
    expect(document.addEventListener.calls.argsFor(0)[0]).toBe('click');
    expect(document.addEventListener.calls.argsFor(0)[1]).toBe(instance._bodyClickListener);
  });
  it('should not add click event listener to document if `shouldHideOnClick` is false', function () {
    spyOn(document, 'addEventListener');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null),
      shouldHideOnClick: false
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    instance._tether = {
      enable: function enable() {}
    };
    instance.enableTether();
    expect(instance._bodyClickListener).toBe(false);
    expect(document.addEventListener.calls.argsFor(0)[0]).not.toBe('click');
    expect(document.addEventListener.calls.argsFor(0)[1]).not.toBe(instance._bodyClickListener);
  });
  it('should add keyup event listener to document', function () {
    spyOn(document, 'addEventListener');
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    instance._tether = {
      enable: function enable() {}
    };
    instance.enableTether();
    expect(document.addEventListener.calls.any()).toBe(true);
    expect(document.addEventListener.calls.argsFor(1)[0]).toBe('keyup');
    expect(document.addEventListener.calls.argsFor(1)[1]).toBe(instance._documentEscapeListener);
  });
  it('should call `onShow` prop if a function is provided', function () {
    var obj = {
      func: function func() {}
    };
    spyOn(obj, 'func').and.stub();
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null),
      onShow: obj.func
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    var initialCallCount = obj.func.calls.count();
    instance.enableTether();
    expect(obj.func.calls.count()).toBe(initialCallCount + 1);
  });
  it('should set visible state of `overlay` to true', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    component.setState({
      isOverlayOpen: false
    });
    var instance = component.instance();
    instance._tether = {
      enable: function enable() {}
    };
    instance.enableTether();
    expect(component.state('isOverlayOpen')).toBe(true);
  });
});
describe('#isClickWithinOverlayOrChildren', function () {
  it('should call function to disable Tether if click is not within overlay or button', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    spyOn(instance, 'disableTether');
    var initialCallCount = instance.disableTether.calls.count();
    instance.isClickWithinOverlayOrChildren({
      target: document.body
    });
    expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
  });
});
describe('#onChildClick', function () {
  var component;
  beforeEach(function () {
    component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
  });
  afterEach(function () {
    component.unmount();
    component = null;
  });
  it('should still call `children`\'s existing `onClick` if it exists', function () {
    var instance = component.instance();
    var fakeEvent = {};
    var fakeChild = {
      props: {
        onClick: function onClick() {}
      }
    };
    spyOn(fakeChild.props, 'onClick');
    instance.onChildClick(fakeEvent, fakeChild); // Expect that `fakeChild`'s `onClick` was called and `fakeEvent` was
    // passed in

    expect(fakeChild.props.onClick.calls.count()).toBe(1);
    expect(fakeChild.props.onClick.calls.mostRecent().args[0]).toBe(fakeEvent);
  });
  it('should call functions to enable Tether when clicking on the children and overlay is closed', function () {
    var instance = component.instance();
    spyOn(instance, 'enableTether');
    var initialCallCount = instance.enableTether.calls.count();
    component.setState({
      'isOverlayOpen': false
    });
    instance.onChildClick(null, {
      props: {}
    }); // Should call function to enable Tether

    expect(instance.enableTether.calls.count()).toBe(initialCallCount + 1);
  });
  it('should call functions to disable Tether when clicking on the children and overlay is open', function () {
    var instance = component.instance();
    spyOn(instance, 'disableTether');
    var initialCallCount = instance.disableTether.calls.count();
    component.setState({
      'isOverlayOpen': true
    });
    instance.onChildClick(null, {
      props: {}
    }); // Should call function to disable Tether

    expect(instance.disableTether.calls.count()).toBe(initialCallCount + 1);
  });
});
describe('#onEscapeKey', function () {
  it('should call function to disable Tether when escape key is pressed', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    var instance = component.instance();
    spyOn(instance, 'disableTether');
    var fakeEvent = {
      keyCode: 27
    };
    instance.onEscapeKey(fakeEvent);
    expect(instance.disableTether.calls.count()).toBe(1);
  });
});
describe('components/OverlayWrapper snapshots & others', function () {
  it('should render a Popover component inside', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      behavior: "click",
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    expect((0, _enzymeToJson.shallowToJson)(component)).toMatchSnapshot();
  });
  it('should render component with `state.isOverlayOpen=true` when click if click bahavior', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      behavior: "click",
      overlay: _react["default"].createElement(TestPopover, null)
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    component.find('.click-area').simulate('click');
    expect(component.state().isOverlayOpen).toBe(true);
  });
  it('should render component with `state.isOverlayOpen=true` when hover if hover behavior', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      behavior: "hover",
      overlay: _react["default"].createElement(TestPopover, null),
      shouldHideOnClick: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    component.find('.click-area').simulate('mouseover');
    expect(component.state().isOverlayOpen).toBe(true);
  });
  it('should render component with `state.isOverlayOpen=false` when clicking escape key', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      behavior: "hover",
      overlay: _react["default"].createElement(TestPopover, null),
      shouldHideOnClick: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    component.find('.click-area').simulate('click');
    component.simulate('keyDown', {
      keyCode: 40
    });
    expect(component.state().isOverlayOpen).toBe(false);
  });
  it('should call prop function on click', function () {
    var component = (0, _enzyme.mount)(_react["default"].createElement(_index["default"], {
      behavior: "hover",
      overlay: _react["default"].createElement(TestPopover, null),
      shouldHideOnClick: true
    }, _react["default"].createElement(TestButton, {
      text: "button"
    })));
    component.find('.click-area').simulate('click');
    component.simulate('keyDown', {
      keyCode: 40
    });
    expect(component.state().isOverlayOpen).toBe(false);
  });
});