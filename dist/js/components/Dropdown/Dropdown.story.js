"use strict";

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index.js"));

var _Button = _interopRequireDefault(require("../Button"));

var _ButtonRow = _interopRequireDefault(require("../ButtonRow"));

var _reactOuiIcons = _interopRequireDefault(require("react-oui-icons"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 1000px;\n  height: 1000px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 700px;\n  height: 400px;\n  background: lightgrey;\n  margin: 100px auto;\n  overflow: scroll;\n  padding: 20px;\n  padding-top: 300px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
var dataLarge = [{
  title: 'Manual',
  description: 'Dolcelatte cheeseburger'
}, {
  title: 'Maximize Conventions',
  header: 'Automation',
  description: 'Everyone loves cut the cheese cow '
}, {
  title: 'Faster Results',
  description: 'Cauliflower cheese stilton paneer hard cheese fondue.'
}, {
  title: 'Manual',
  description: 'Dolcelatte cheeseburger'
}, {
  title: 'Maximize Conventions',
  header: 'Automation',
  description: 'Everyone loves cut the cheese cow '
}, {
  title: 'Faster Results',
  description: 'Cauliflower cheese stilton paneer hard cheese fondue.'
}, {
  title: 'Manual',
  description: 'Dolcelatte cheeseburger'
}, {
  title: 'Maximize Conventions',
  header: 'Automation',
  description: 'Everyone loves cut the cheese cow '
}, {
  title: 'Faster Results',
  description: 'Cauliflower cheese stilton paneer hard cheese fondue.'
}, {
  title: 'Manual',
  description: 'Dolcelatte cheeseburger'
}, {
  title: 'Maximize Conventions',
  header: 'Automation',
  description: 'Everyone loves cut the cheese cow '
}, {
  title: 'Faster Results',
  description: 'Cauliflower cheese stilton paneer hard cheese fondue.'
}];
var stories = (0, _react2.storiesOf)('Dropdown', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    buttonContent: (0, _addonKnobs.text)('buttonContent', 'Default Dropdown'),
    width: (0, _addonKnobs.number)('width', 300),
    arrowIcon: (0, _addonKnobs.select)('arrowIcon', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      none: 'none'
    }, 'down')
  }, _react["default"].createElement(_index["default"].Contents, null, data.map(function (item, index) {
    return _react["default"].createElement(_index["default"].ListItem, {
      key: index
    }, _react["default"].createElement(_index["default"].BlockLink, {
      onClick: (0, _addonActions.action)('click on complex item')
    }, _react["default"].createElement(_index["default"].BlockLinkText, {
      text: item.title
    }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Error', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    buttonContent: (0, _addonKnobs.text)('buttonContent', 'Error State'),
    width: (0, _addonKnobs.number)('width', 300),
    displayError: true,
    arrowIcon: (0, _addonKnobs.select)('arrowIcon', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      none: 'none'
    }, 'down')
  }, _react["default"].createElement(_index["default"].Contents, null, data.map(function (item, index) {
    return _react["default"].createElement(_index["default"].ListItem, {
      key: index
    }, _react["default"].createElement(_index["default"].BlockLink, {
      onClick: (0, _addonActions.action)('click on complex item')
    }, _react["default"].createElement(_index["default"].BlockLinkText, {
      text: item.title
    }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Icon', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    fullWidth: (0, _addonKnobs["boolean"])('fullWidth', false),
    buttonContent: _react["default"].createElement("div", null, "Hamburgers", ' ', _react["default"].createElement("span", {
      className: "push-half--left"
    }, _react["default"].createElement(_reactOuiIcons["default"], {
      name: "hamburger"
    }))),
    width: (0, _addonKnobs.number)('width', 350)
  }, _react["default"].createElement(_index["default"].Contents, null, data.map(function (item, index) {
    return _react["default"].createElement(_index["default"].ListItem, {
      key: index
    }, _react["default"].createElement(_index["default"].BlockLink, {
      onClick: (0, _addonActions.action)('click on complex item')
    }, _react["default"].createElement(_index["default"].BlockLinkText, {
      text: item.title
    }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Z-index', function () {
  return _react["default"].createElement(Container, {
    className: "background--faint"
  }, _react["default"].createElement(SubContainer, null, _react["default"].createElement(ScrollContainer, null, _react["default"].createElement(_index["default"], {
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    buttonContent: (0, _addonKnobs.text)('buttonContent', 'Dropdown'),
    width: (0, _addonKnobs.number)('width', 300),
    zIndex: (0, _addonKnobs.number)('zIndex', 9999)
  }, _react["default"].createElement(_index["default"].Contents, null, data.map(function (item, index) {
    return _react["default"].createElement(_index["default"].ListItem, {
      key: index
    }, _react["default"].createElement(_index["default"].BlockLink, {
      onClick: (0, _addonActions.action)('click on complex item')
    }, _react["default"].createElement(_index["default"].BlockLinkText, {
      text: item.title
    }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))), _react["default"].createElement("h1", null, "This text should be behind the open dropdown"))));
});

var renderActivator = function renderActivator(_ref // eslint-disable-line
) {
  var onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      buttonRef = _ref.buttonRef;
  return _react["default"].createElement(_Button["default"], {
    buttonRef: buttonRef,
    onClick: onClick,
    onBlur: onBlur
  }, "Click to activate");
};

stories.add('List', function () {
  return _react["default"].createElement(Container, {
    className: "background--faint"
  }, _react["default"].createElement(SubContainer, null, _react["default"].createElement(_index["default"], {
    isDisabled: (0, _addonKnobs["boolean"])('isDisabled', false),
    renderActivator: renderActivator,
    placement: 'top-start',
    width: (0, _addonKnobs.number)('width', 300)
  }, _react["default"].createElement(_index["default"].Contents, {
    minWidth: 300,
    direction: 'up'
  }, _react["default"].createElement(_index["default"].ListItem, null, _react["default"].createElement(_index["default"].BlockLink, {
    onClick: (0, _addonActions.action)('click dropdown block link')
  }, _react["default"].createElement(_index["default"].BlockLinkText, {
    text: 'This is a label'
  }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
    secondaryText: 'This is a smaller description'
  }))), _react["default"].createElement(_index["default"].ListItem, null, _react["default"].createElement(_index["default"].BlockLink, {
    onClick: (0, _addonActions.action)('click dropdown block link 2')
  }, _react["default"].createElement(_index["default"].BlockLinkText, {
    text: 'This is a second label'
  }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
    secondaryText: 'This is a second smaller description'
  }))))), _react["default"].createElement("h1", null, "This text should be behind the open dropdown")));
});
stories.add('With faux highlighting', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    buttonContent: (0, _addonKnobs.text)('buttonContent', 'Activate'),
    width: (0, _addonKnobs.number)('width', 300)
  }, _react["default"].createElement(_index["default"].Contents, {
    minWidth: 300
  }, dataLarge.map(function (item, idx) {
    return _react["default"].createElement(_index["default"].ListItem, {
      key: idx
    }, _react["default"].createElement(_index["default"].BlockLink, {
      onClick: (0, _addonActions.action)("click dropdown block link ".concat(idx + 1)),
      hasFauxFocus: idx === dataLarge.length - 2
    }, _react["default"].createElement(_index["default"].BlockLinkText, {
      text: item.title
    }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});

var renderHeader = function renderHeader() {
  return _react["default"].createElement("div", {
    className: "flex soft"
  }, _react["default"].createElement("div", {
    className: "flex--1 milli"
  }, "Attic and Button"), _react["default"].createElement("div", null, _react["default"].createElement("a", {
    href: "https://www.example.com/",
    className: "milli"
  }, "https://www.atticandbutton.com/")));
};

stories.add('With a header and separators', function () {
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    buttonContent: (0, _addonKnobs.text)('buttonContent', 'Activate'),
    width: (0, _addonKnobs.number)('width', 600)
  }, _react["default"].createElement(_index["default"].Contents, {
    renderHeader: renderHeader
  }, _react["default"].createElement(_index["default"].ListItem, {
    role: "separator",
    ignoreToggle: true
  }, "Large Things"), dataLarge.map(function (item, idx) {
    return _react["default"].createElement(_index["default"].ListItem, {
      role: "menuitem",
      key: idx
    }, _react["default"].createElement(_index["default"].BlockLink, {
      onClick: (0, _addonActions.action)("click dropdown block link ".concat(idx + 1)),
      hasFauxFocus: idx === 1
    }, _react["default"].createElement(_index["default"].BlockLinkText, {
      text: item.title
    }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }), _react["default"].createElement(_index["default"].ListItem, {
    role: "separator",
    ignoreToggle: true
  }, "Small Things"), data.map(function (item, idx) {
    return _react["default"].createElement(_index["default"].ListItem, {
      role: "menuitem",
      key: idx
    }, _react["default"].createElement(_index["default"].BlockLink, {
      onClick: (0, _addonActions.action)("click dropdown block link ".concat(idx + 1))
    }, _react["default"].createElement(_index["default"].BlockLinkText, {
      text: item.title
    }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Warnings', function () {
  var longSecondaryText = 'exclamation! '.repeat(10);
  return _react["default"].createElement(Container, null, _react["default"].createElement(_index["default"], {
    buttonContent: (0, _addonKnobs.text)('buttonContent', 'Activate'),
    width: (0, _addonKnobs.number)('width', 300)
  }, _react["default"].createElement(_index["default"].Contents, {
    minWidth: 300
  }, _react["default"].createElement(_index["default"].ListItem, {
    hasFauxFocus: true
  }, _react["default"].createElement(_index["default"].BlockLink, {
    onClick: (0, _addonActions.action)('click dropdown block link 1'),
    isLink: false
  }, _react["default"].createElement(_index["default"].BlockLinkText, {
    text: "This is a warning"
  }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
    isWarning: true,
    secondaryText: "Warning: There is an exclamation mark"
  }))), _react["default"].createElement(_index["default"].ListItem, null, _react["default"].createElement(_index["default"].BlockLink, {
    onClick: (0, _addonActions.action)('click dropdown block link 2'),
    isLink: false
  }, _react["default"].createElement(_index["default"].BlockLinkText, {
    text: "Another Warning"
  }), _react["default"].createElement(_index["default"].BlockLinkSecondaryText, {
    isWarning: true,
    secondaryText: longSecondaryText
  }))))));
});
stories.add('Custom hide function', function () {
  return [_react["default"].createElement("p", {
    key: "sourceLink",
    className: "push--bottom"
  }, "This story's children use the optional", ' ', _react["default"].createElement(_Link["default"], {
    href: "https://reactjs.org/docs/render-props.html",
    newWindow: true
  }, "render props pattern"), ".", ' ', _react["default"].createElement(_Link["default"], {
    href: "https://github.com/optimizely/oui/blob/devel/src/components/Dropdown/Dropdown.story.js",
    newWindow: true
  }, "Click here"), ' ', "to see this story's source code."), _react["default"].createElement(Container, {
    key: "story"
  }, _react["default"].createElement(_index["default"], {
    arrowIcon: (0, _addonKnobs.select)('arrowIcon', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      none: 'none'
    }, 'down'),
    buttonContent: _react["default"].createElement("div", {
      className: "line--tight text--left micro push--right"
    }, _react["default"].createElement("div", {
      className: "muted"
    }, "Date"), _react["default"].createElement("div", null, "Anytime")),
    placement: (0, _addonKnobs.select)('placement', {
      top: 'top',
      'top-start': 'top-start',
      'top-end': 'top-end',
      bottom: 'bottom',
      'bottom-start': 'bottom-start',
      'bottom-end': 'bottom-end',
      right: 'right',
      'right-start': 'right-start',
      'right-end': 'right-end',
      left: 'left',
      'left-start': 'left-start',
      'left-end': 'left-end'
    }, 'bottom-start'),
    shouldHideChildrenOnClick: (0, _addonKnobs["boolean"])('shouldHideChildrenOnClick', false),
    style: "outline",
    width: (0, _addonKnobs.number)('width', 300)
  }, function (_ref2) {
    var handleHideChildren = _ref2.handleHideChildren;
    return _react["default"].createElement("div", {
      className: "soft background--white"
    }, _react["default"].createElement("div", {
      className: "soft--bottom"
    }, "This is some initial text! Click me, nothing happens."), _react["default"].createElement(_ButtonRow["default"], {
      leftGroup: [_react["default"].createElement(_Button["default"], {
        key: "nothing",
        onClick: (0, _addonActions.action)('some other action')
      }, "Doesn't Hide"), _react["default"].createElement(_Button["default"], {
        key: "something",
        onClick: handleHideChildren
      }, "Hide Dropdown")]
    }));
  }))];
});

var Container = _styledComponents["default"].div(_templateObject());

var SubContainer = _styledComponents["default"].div(_templateObject2());

var ScrollContainer = _styledComponents["default"].div(_templateObject3());