import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Col from './Col';
import Row from './Row';
import Container from './Container';
import Card from '../Card';
import Button from '../Button';
import Code from '../Code';

const stories = storiesOf('Layout', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('Default', withInfo()(() => {
  return (
    <div>
      <h1>Default (Equal Widths)</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', true) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col>Col</Col>
          <Col>Col</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col>Col</Col>
          <Col>Col</Col>
          <Col>Col</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col>Col</Col>
          <Col>Col</Col>
          <Col>Col</Col>
          <Col>Col</Col>
        </Row>
      </Container>
      <h1 className="push-triple--top">Widths</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', true) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 12 }>12</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 11 }>11</Col>
          <Col small={ 1 }>1</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 10 }>10</Col>
          <Col small={ 2 }>2</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 9 }>9</Col>
          <Col small={ 3 }>3</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 8 }>8</Col>
          <Col small={ 4 }>4</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 7 }>7</Col>
          <Col small={ 5 }>5</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 6 }>6</Col>
          <Col small={ 6 }>6</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 5 }>5</Col>
          <Col small={ 7 }>7</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 4 }>4</Col>
          <Col small={ 8 }>8</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 3 }>3</Col>
          <Col small={ 9 }>9</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 2 }>2</Col>
          <Col small={ 10 }>10</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 1 }>1</Col>
          <Col small={ 11 }>11</Col>
        </Row>
      </Container>
      <h1 className="push-triple--top">Equal Widths</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', true) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 6 }>6</Col>
          <Col small={ 6 }>6</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 4 }>4</Col>
          <Col small={ 4 }>4</Col>
          <Col small={ 4 }>4</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 3 }>3</Col>
          <Col small={ 3 }>3</Col>
          <Col small={ 3 }>3</Col>
          <Col small={ 3 }>3</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
        </Row>
      </Container>
      <h1 className="push-triple--top">"Auto"</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', true) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ true }>true</Col>
          <Col small={ true }>true</Col>
          <Col small={ true }>true</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 'auto' }>auto</Col>
          <Col small={ 'auto' }>auto</Col>
          <Col small={ 'auto' }>auto</Col>
        </Row>
      </Container>
    </div>
  );
}))
  .add('Cards test', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <p>Row 1: fillSpace</p>
        <Row gutters={ boolean('gutters', false) }>
          <Col large={ 'fillSpace' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
          <Col large={ 'fillSpace' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
        </Row>
        <p className="push-triple--top">Row 2: fitContent</p>
        <Row gutters={ boolean('gutters', false) }>
          <Col large={ 'fitContent' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
          <Col large={ 'fitContent' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
        </Row>
        <p className="push-triple--top">Row 2: 8/4</p>
        <Row gutters={ boolean('gutters', false) }>
          <Col large={ 4 }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
          <Col large={ 8 }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }))
  .add('Col paddedContent', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ 'none' }
        gutters={ true }
        fluid={ boolean('fluid', false) }>
        <p>Note the Container has gutters=true</p>
        <Row
          gutters={ boolean('gutters', false) }
          border={ 'top' }>
          <Col
            large={ 'fillSpace' }
            paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'around') }
            border={ select('border', { top: 'top', bottom: 'bottom', left: 'left', right: 'right', sides: 'sides', ends: 'ends', all: 'all', none: 'none' }, 'right') }>
            Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together.
          </Col>
          <Col
            large={ 'fillSpace' }
            paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'around') }
            border={ select('border', { top: 'top', bottom: 'bottom', left: 'left', right: 'right', sides: 'sides', ends: 'ends', all: 'all', none: 'none' }, 'right') }>
            Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together.
          </Col>
        </Row>
      </Container>
    );
  }))
  .add('Fluid', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Vertical', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row
          gutters={ boolean('gutters', false) }
          displayVertical={ true }>
          <Col>1 of 6</Col>
          <Col>2 of 6</Col>
          <Col>3 of 6</Col>
          <Col>4 of 6</Col>
          <Col>5 of 6</Col>
          <Col>6 of 6</Col>
        </Row>
        <Row
          gutters={ boolean('gutters', false) }
          displayVertical={ true }>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('2-Column', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ true }>1 of 2</Col>
          <Col small={ true }>2 of 2</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ 8 }>8</Col>
          <Col small={ 4 }>4</Col>
        </Row>
      </Container>
    );
  }))
  .add('Auto width', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Order', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col small={ true }>First, but unordered</Col>
          <Col small={{ order: 12 }}>Second, but last</Col>
          <Col small={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>
    );
  }))
  .add('Feature Flag Welcome', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col medium={{ span: 8, offset: 2 }}>
            <h2>Features</h2>
            <p className="lead">Manage your app’s feature flags</p>
            <Row>
              <Col small={ 6 }>
                <img src="https://s3-us-west-1.amazonaws.com/zach-designs/flagly/thing.svg" />
              </Col>
              <Col small={ 6 }>
                <h6>What’s a Feature Flag?</h6>
                <p>Feature flags, also known as feature toggles, are a software development technique that lets you turn certain functionality on and off without deploying new code. This allows for better control and more experimentation over the full lifecycle of features. You can toggle a feature off to release code quickly without exposing it to users.</p>
                <h6>Try it for yourself</h6>
                <Code>
  var enabled = optimizely.isFeatureEnabled(”chat_window”, userId);
  if(enabled) {
      // Feature is enabled
  } else {
      // Feature is disabled
  }
                  </Code>
                <Row>
                  <Col large={ 6 }>
                    <Button width={ 'full' }>View Docs</Button>
                  </Col>
                  <Col large={ 6 }>
                    <Button width={ 'full' }>Create Feature</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }))
  .add('Defined width', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row gutters={ boolean('gutters', false) }>
          <Col>1 of 3</Col>
          <Col small={ 6 }>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row gutters={ boolean('gutters', false) }>
          <Col>1 of 3</Col>
          <Col small={ 5 }>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Responsive', withInfo()(() => {
    return (
      <div>
        <h1>Simple</h1>
        <Container
          outlineDebug={ boolean('outlineDebug', true) }
          pushRowsTop={ boolean('pushRowsTop', false) }
          paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
          fluid={ boolean('fluid', false) }>
          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 8 }>small=8</Col>
            <Col small={ 4 }>small=4</Col>
          </Row>
          <Row gutters={ boolean('gutters', false) }>
            <Col small={ true }>small=true</Col>
            <Col small={ true }>small=true</Col>
            <Col small={ true }>small=true</Col>
          </Row>
        </Container>

        <h1 className="push-quad--top">Complex</h1>
        <Container
          fluid={ boolean('fluid', false) }
          outlineDebug={ boolean('outlineDebug', true) }
          pushRowsTop={ boolean('pushRowsTop', false) }
          paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }>

          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 12 } medium={ 8 }>small=12 medium=8</Col>
            <Col small={ 6 } medium={ 4 }>small=6 medium=4</Col>
          </Row>

          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
          </Row>

          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 6 }>small=6</Col>
            <Col small={ 6 }>small=6</Col>
          </Row>
        </Container>
      </div>
    );
  }))
  .add('Responsive All Sizes', withInfo()(() => {
    return (
      <div>
        <h1>Simple</h1>
        <Container
          outlineDebug={ boolean('outlineDebug', true) }
          pushRowsTop={ boolean('pushRowsTop', false) }
          paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }
          fluid={ boolean('fluid', false) }>
          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 8 }>small=8</Col>
            <Col small={ 4 }>small=4</Col>
          </Row>
          <Row gutters={ boolean('gutters', false) }>
            <Col small={ true }>small=true</Col>
            <Col small={ true }>small=true</Col>
            <Col small={ true }>small=true</Col>
          </Row>
        </Container>

        <h1 className="push-quad--top">Complex</h1>
        <Container
          fluid={ boolean('fluid', false) }
          outlineDebug={ boolean('outlineDebug', true) }
          pushRowsTop={ boolean('pushRowsTop', false) }
          paddedContent={ select('paddedContent', { around: 'around', sides: 'sides', ends: 'ends', none: 'none' }, 'none') }>

          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 12 } medium={ 8 }>small=12 medium=8</Col>
            <Col small={ 6 } medium={ 4 }>small=6 medium=4</Col>
          </Row>

          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
          </Row>

          <Row gutters={ boolean('gutters', false) }>
            <Col small={ 6 }>small=6</Col>
            <Col small={ 6 }>small=6</Col>
          </Row>
        </Container>
      </div>
    );
  }))
  ;
