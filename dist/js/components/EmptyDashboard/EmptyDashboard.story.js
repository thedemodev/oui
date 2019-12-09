"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = _interopRequireDefault(require("../Button/"));

var _Link = _interopRequireDefault(require("../Link/"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Empty Dashboard', module);
stories.addDecorator(_addonKnobs.withKnobs).addDecorator(function (story) {
  return _react["default"].createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default empty', function () {
  return _react["default"].createElement(_index["default"], {
    headline: (0, _addonKnobs.text)('headline', 'Get started with Optimizely X'),
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: (0, _addonKnobs.select)('imagePath', {
      'Campaigns': 'https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg',
      'Extensions': 'https://app.optimizely.com/static/img/x/empty-states/extensions-empty-state.svg',
      'SST': 'https://app.optimizely.com/static/img/x/empty-states/custom-project-experiments-empty-state.svg',
      'Rollouts': 'https://app.optimizely.com/static/img/x/empty-states/empty-rollouts.svg',
      'Feature Flags': 'https://app.optimizely.com/static/img/x/empty-states/empty-feature-flags.svg',
      'Audiences': 'https://app.optimizely.com/static/img/x/empty-states/audience-list-empty-state.svg',
      'Attribute': 'https://app.optimizely.com/static/img/x/empty-states/attribute-dashboard-empty-state.svg',
      'Page List': 'https://app.optimizely.com/static/img/x/empty-states/page-list-empty-state.svg'
    }, 'https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg')
  });
}).add('All images', function () {
  return _react["default"].createElement("div", null, _react["default"].createElement(_index["default"], {
    headline: 'Get started with Campaigns',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Extensions',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/extensions-empty-state.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Experiments',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/custom-project-experiments-empty-state.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Rollouts',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/empty-rollouts.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Feature Flags',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/empty-feature-flags.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Audiences',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/audience-list-empty-state.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Attributes',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/attribute-dashboard-empty-state.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Pages',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/page-list-empty-state.svg'
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Change History',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/change-history-empty-state.svg"
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Campaign Manager',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/campaign-manager-empty.svg"
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Custom Snippets',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/custom-snippets-empty-state.svg"
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Fullstack Variables',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/fullstack-variables-empty-state.svg"
  }), _react["default"].createElement("hr", null), _react["default"].createElement(_index["default"], {
    headline: 'Get started with Integrations',
    description: _react["default"].createElement("div", null, "This is a test description about ", _react["default"].createElement(_Link["default"], {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: _react["default"].createElement(_Button["default"], {
      style: "highlight"
    }, (0, _addonKnobs.text)('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/integrations-empty.svg"
  }));
});