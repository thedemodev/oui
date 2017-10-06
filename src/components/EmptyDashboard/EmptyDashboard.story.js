import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Button from '../Button/';
import Link from '../Link/';
import EmptyDashboard from './index.js';

const stories = storiesOf('Empty Dashboard', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .addWithInfo('Default empty', () => {
    return (
      <EmptyDashboard
        headline={ text('headline', 'Get started with Optimizely X') }
        description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
        imagePath={ select('imagePath', {
          'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
          'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
          'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
          'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
          'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
          'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
          'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
          'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
        }, 'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg') }
      />
    );
  })
  .addWithInfo('All images', () => {
    return (
      <div>
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ select('imagePath', {
            'https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg': 'Campaigns',
            'https://app.optimizely.com/static/img/p13n/extensions-empty-state.svg': 'Extensions',
            'https://app.optimizely.com/static/img/p13n/custom-project-experiments-empty-state.svg': 'SST',
            'https://app.optimizely.com/static/img/p13n/empty-rollouts.svg': 'Rollouts',
            'https://app.optimizely.com/static/img/p13n/empty-feature-flags.svg': 'Feature Flags',
            'https://app.optimizely.com/static/img/p13n/audience-list-empty-state.svg': 'Audiences',
            'https://app.optimizely.com/static/img/p13n/attribute-dashboard-empty-state.svg': 'Attribute',
            'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg': 'Page List',
          }, 'https://app.optimizely.com/static/img/p13n/page-list-empty-state.svg') }
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/p13n/change-history-empty-state.svg'
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/p13n/campaign-manager-empty.svg'
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/p13n/custom-snippets-empty-state.svg'
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/p13n/fullstack-variables-empty-state.svg'
        />
        <EmptyDashboard
          headline={ text('headline', 'Get started with Optimizely X') }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/p13n/integrations-empty.svg'
        />
      </div>
    );
  });
