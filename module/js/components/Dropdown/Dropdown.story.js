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

import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean as _boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Dropdown from './index.js';
import Button from '../Button';
import ButtonRow from '../ButtonRow';
import Icon from 'react-oui-icons';
import Link from '../Link';
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
var stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement(Container, null, React.createElement(Dropdown, {
    buttonContent: text('buttonContent', 'Default Dropdown'),
    width: number('width', 300),
    arrowIcon: select('arrowIcon', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      none: 'none'
    }, 'down')
  }, React.createElement(Dropdown.Contents, null, data.map(function (item, index) {
    return React.createElement(Dropdown.ListItem, {
      key: index
    }, React.createElement(Dropdown.BlockLink, {
      onClick: action('click on complex item')
    }, React.createElement(Dropdown.BlockLinkText, {
      text: item.title
    }), React.createElement(Dropdown.BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Error', function () {
  return React.createElement(Container, null, React.createElement(Dropdown, {
    buttonContent: text('buttonContent', 'Error State'),
    width: number('width', 300),
    displayError: true,
    arrowIcon: select('arrowIcon', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      none: 'none'
    }, 'down')
  }, React.createElement(Dropdown.Contents, null, data.map(function (item, index) {
    return React.createElement(Dropdown.ListItem, {
      key: index
    }, React.createElement(Dropdown.BlockLink, {
      onClick: action('click on complex item')
    }, React.createElement(Dropdown.BlockLinkText, {
      text: item.title
    }), React.createElement(Dropdown.BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Icon', function () {
  return React.createElement(Container, null, React.createElement(Dropdown, {
    isDisabled: _boolean('isDisabled', false),
    fullWidth: _boolean('fullWidth', false),
    buttonContent: React.createElement("div", null, "Hamburgers", ' ', React.createElement("span", {
      className: "push-half--left"
    }, React.createElement(Icon, {
      name: "hamburger"
    }))),
    width: number('width', 350)
  }, React.createElement(Dropdown.Contents, null, data.map(function (item, index) {
    return React.createElement(Dropdown.ListItem, {
      key: index
    }, React.createElement(Dropdown.BlockLink, {
      onClick: action('click on complex item')
    }, React.createElement(Dropdown.BlockLinkText, {
      text: item.title
    }), React.createElement(Dropdown.BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Z-index', function () {
  return React.createElement(Container, {
    className: "background--faint"
  }, React.createElement(SubContainer, null, React.createElement(ScrollContainer, null, React.createElement(Dropdown, {
    isDisabled: _boolean('isDisabled', false),
    buttonContent: text('buttonContent', 'Dropdown'),
    width: number('width', 300),
    zIndex: number('zIndex', 9999)
  }, React.createElement(Dropdown.Contents, null, data.map(function (item, index) {
    return React.createElement(Dropdown.ListItem, {
      key: index
    }, React.createElement(Dropdown.BlockLink, {
      onClick: action('click on complex item')
    }, React.createElement(Dropdown.BlockLinkText, {
      text: item.title
    }), React.createElement(Dropdown.BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))), React.createElement("h1", null, "This text should be behind the open dropdown"))));
});

var renderActivator = function renderActivator(_ref // eslint-disable-line
) {
  var onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      buttonRef = _ref.buttonRef;
  return React.createElement(Button, {
    buttonRef: buttonRef,
    onClick: onClick,
    onBlur: onBlur
  }, "Click to activate");
};

stories.add('List', function () {
  return React.createElement(Container, {
    className: "background--faint"
  }, React.createElement(SubContainer, null, React.createElement(Dropdown, {
    isDisabled: _boolean('isDisabled', false),
    renderActivator: renderActivator,
    placement: 'top-start',
    width: number('width', 300)
  }, React.createElement(Dropdown.Contents, {
    minWidth: 300,
    direction: 'up'
  }, React.createElement(Dropdown.ListItem, null, React.createElement(Dropdown.BlockLink, {
    onClick: action('click dropdown block link')
  }, React.createElement(Dropdown.BlockLinkText, {
    text: 'This is a label'
  }), React.createElement(Dropdown.BlockLinkSecondaryText, {
    secondaryText: 'This is a smaller description'
  }))), React.createElement(Dropdown.ListItem, null, React.createElement(Dropdown.BlockLink, {
    onClick: action('click dropdown block link 2')
  }, React.createElement(Dropdown.BlockLinkText, {
    text: 'This is a second label'
  }), React.createElement(Dropdown.BlockLinkSecondaryText, {
    secondaryText: 'This is a second smaller description'
  }))))), React.createElement("h1", null, "This text should be behind the open dropdown")));
});
stories.add('With faux highlighting', function () {
  return React.createElement(Container, null, React.createElement(Dropdown, {
    buttonContent: text('buttonContent', 'Activate'),
    width: number('width', 300)
  }, React.createElement(Dropdown.Contents, {
    minWidth: 300
  }, dataLarge.map(function (item, idx) {
    return React.createElement(Dropdown.ListItem, {
      key: idx
    }, React.createElement(Dropdown.BlockLink, {
      onClick: action("click dropdown block link ".concat(idx + 1)),
      hasFauxFocus: idx === dataLarge.length - 2
    }, React.createElement(Dropdown.BlockLinkText, {
      text: item.title
    }), React.createElement(Dropdown.BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});

var renderHeader = function renderHeader() {
  return React.createElement("div", {
    className: "flex soft"
  }, React.createElement("div", {
    className: "flex--1 milli"
  }, "Attic and Button"), React.createElement("div", null, React.createElement("a", {
    href: "https://www.example.com/",
    className: "milli"
  }, "https://www.atticandbutton.com/")));
};

stories.add('With a header and separators', function () {
  return React.createElement(Container, null, React.createElement(Dropdown, {
    buttonContent: text('buttonContent', 'Activate'),
    width: number('width', 600)
  }, React.createElement(Dropdown.Contents, {
    renderHeader: renderHeader
  }, React.createElement(Dropdown.ListItem, {
    role: "separator",
    ignoreToggle: true
  }, "Large Things"), dataLarge.map(function (item, idx) {
    return React.createElement(Dropdown.ListItem, {
      role: "menuitem",
      key: idx
    }, React.createElement(Dropdown.BlockLink, {
      onClick: action("click dropdown block link ".concat(idx + 1)),
      hasFauxFocus: idx === 1
    }, React.createElement(Dropdown.BlockLinkText, {
      text: item.title
    }), React.createElement(Dropdown.BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }), React.createElement(Dropdown.ListItem, {
    role: "separator",
    ignoreToggle: true
  }, "Small Things"), data.map(function (item, idx) {
    return React.createElement(Dropdown.ListItem, {
      role: "menuitem",
      key: idx
    }, React.createElement(Dropdown.BlockLink, {
      onClick: action("click dropdown block link ".concat(idx + 1))
    }, React.createElement(Dropdown.BlockLinkText, {
      text: item.title
    }), React.createElement(Dropdown.BlockLinkSecondaryText, {
      secondaryText: item.description
    })));
  }))));
});
stories.add('Warnings', function () {
  var longSecondaryText = 'exclamation! '.repeat(10);
  return React.createElement(Container, null, React.createElement(Dropdown, {
    buttonContent: text('buttonContent', 'Activate'),
    width: number('width', 300)
  }, React.createElement(Dropdown.Contents, {
    minWidth: 300
  }, React.createElement(Dropdown.ListItem, {
    hasFauxFocus: true
  }, React.createElement(Dropdown.BlockLink, {
    onClick: action('click dropdown block link 1'),
    isLink: false
  }, React.createElement(Dropdown.BlockLinkText, {
    text: "This is a warning"
  }), React.createElement(Dropdown.BlockLinkSecondaryText, {
    isWarning: true,
    secondaryText: "Warning: There is an exclamation mark"
  }))), React.createElement(Dropdown.ListItem, null, React.createElement(Dropdown.BlockLink, {
    onClick: action('click dropdown block link 2'),
    isLink: false
  }, React.createElement(Dropdown.BlockLinkText, {
    text: "Another Warning"
  }), React.createElement(Dropdown.BlockLinkSecondaryText, {
    isWarning: true,
    secondaryText: longSecondaryText
  }))))));
});
stories.add('Custom hide function', function () {
  return [React.createElement("p", {
    key: "sourceLink",
    className: "push--bottom"
  }, "This story's children use the optional", ' ', React.createElement(Link, {
    href: "https://reactjs.org/docs/render-props.html",
    newWindow: true
  }, "render props pattern"), ".", ' ', React.createElement(Link, {
    href: "https://github.com/optimizely/oui/blob/devel/src/components/Dropdown/Dropdown.story.js",
    newWindow: true
  }, "Click here"), ' ', "to see this story's source code."), React.createElement(Container, {
    key: "story"
  }, React.createElement(Dropdown, {
    arrowIcon: select('arrowIcon', {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right',
      none: 'none'
    }, 'down'),
    buttonContent: React.createElement("div", {
      className: "line--tight text--left micro push--right"
    }, React.createElement("div", {
      className: "muted"
    }, "Date"), React.createElement("div", null, "Anytime")),
    placement: select('placement', {
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
    shouldHideChildrenOnClick: _boolean('shouldHideChildrenOnClick', false),
    style: "outline",
    width: number('width', 300)
  }, function (_ref2) {
    var handleHideChildren = _ref2.handleHideChildren;
    return React.createElement("div", {
      className: "soft background--white"
    }, React.createElement("div", {
      className: "soft--bottom"
    }, "This is some initial text! Click me, nothing happens."), React.createElement(ButtonRow, {
      leftGroup: [React.createElement(Button, {
        key: "nothing",
        onClick: action('some other action')
      }, "Doesn't Hide"), React.createElement(Button, {
        key: "something",
        onClick: handleHideChildren
      }, "Hide Dropdown")]
    }));
  }))];
});
var Container = styled.div(_templateObject());
var SubContainer = styled.div(_templateObject2());
var ScrollContainer = styled.div(_templateObject3());