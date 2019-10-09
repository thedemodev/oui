import React from 'react';
import Button from '../../Button/';
import EmptyDashboard from '../index.js';
import Link from '../../Link/';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/EmptyDashboard', () => {
  it('should render', () => {
    const output = mount(
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
        button={ (<Button style="highlight">Highlight Button</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render with button below image when showButtonBelow property is set to TRUE', () => {
    const output = mount(
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
        button={ (<Button style="highlight">Highlight Button</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg'
        showButtonBelow={ true }
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render with specified height and width when passed using the imageHeight and imageWidth properties', () => {
    const output = mount(
      <EmptyDashboard
        headline='Get started with Optimizely X'
        description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
        button={ (<Button style="highlight">Highlight Button</Button>) }
        imagePath='https://app.optimizely.com/static/img/p13n/campaign-list-empty-state.svg'
        imageHeight='300px'
        imageWidth='200px'
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
