/* eslint-disable react/jsx-key */
import React from 'react';
import Button from '../../Button/';
import EmptyDashboard from '../index';

export default [
  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg'
      />,
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X Extensions'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg'
      />,
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg'
      />,
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/empty-rollouts.svg'
      />,
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg'
      />,
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg'
      />,
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg'
      />,
    ],
  },

  {
    isPadded: true,
    examples: [
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description='This is a test description about some feature you should use.'
        button={ (<Button style="highlight">Highlight</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg'
      />,
    ],
  },

];
