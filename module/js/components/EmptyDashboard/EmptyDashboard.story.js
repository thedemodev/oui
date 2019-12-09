import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from '../Button/';
import Link from '../Link/';
import EmptyDashboard from './index.js';
var stories = storiesOf('Empty Dashboard', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default empty', function () {
  return React.createElement(EmptyDashboard, {
    headline: text('headline', 'Get started with Optimizely X'),
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: select('imagePath', {
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
  return React.createElement("div", null, React.createElement(EmptyDashboard, {
    headline: 'Get started with Campaigns',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Extensions',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/extensions-empty-state.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Experiments',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/custom-project-experiments-empty-state.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Rollouts',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/empty-rollouts.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Feature Flags',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/empty-feature-flags.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Audiences',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/audience-list-empty-state.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Attributes',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/attribute-dashboard-empty-state.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Pages',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: 'https://app.optimizely.com/static/img/x/empty-states/page-list-empty-state.svg'
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Change History',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/change-history-empty-state.svg"
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Campaign Manager',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/campaign-manager-empty.svg"
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Custom Snippets',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/custom-snippets-empty-state.svg"
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Fullstack Variables',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/fullstack-variables-empty-state.svg"
  }), React.createElement("hr", null), React.createElement(EmptyDashboard, {
    headline: 'Get started with Integrations',
    description: React.createElement("div", null, "This is a test description about ", React.createElement(Link, {
      href: "http://google.com"
    }, "X Feature"), " with a Google."),
    button: React.createElement(Button, {
      style: "highlight"
    }, text('buttonText', 'Highlight')),
    imagePath: "https://app.optimizely.com/static/img/x/empty-states/integrations-empty.svg"
  }));
});