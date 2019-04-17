import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Col from './Col';
import Row from './Row';
import Container from './Container';

const stories = storiesOf('Grid', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('Default', withInfo()(() => {
  return (
    <Container fluid={ boolean('fluid', false) }>
      <Row noGutters={ boolean('noGutters', false) }>
        <Col xs={ true }>First, but unordered</Col>
        <Col xs={{ order: 12 }}>Second, but last</Col>
        <Col xs={{ order: 1 }}>Third, but second</Col>
      </Row>
    </Container>
  );
}))
  .add('Fluid', withInfo()(() => {
    return (
      <Container fluid={ boolean('fluid', true) }>
        <Row noGutters={ boolean('noGutters', false) }>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row noGutters={ boolean('noGutters', false) }>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Auto width', withInfo()(() => {
    return (
      <Container fluid={ boolean('fluid', false) }>
        <Row noGutters={ boolean('noGutters', false) }>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row noGutters={ boolean('noGutters', false) }>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Order', withInfo()(() => {
    return (
      <Container fluid={ boolean('fluid', false) }>
        <Row noGutters={ boolean('noGutters', false) }>
          <Col xs={ true }>First, but unordered</Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>
    );
  }))
  .add('Defined width', withInfo()(() => {
    return (
      <Container fluid={ boolean('fluid', false) }>
        <Row noGutters={ boolean('noGutters', false) }>
          <Col>1 of 3</Col>
          <Col xs={ 6 }>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row noGutters={ boolean('noGutters', false) }>
          <Col>1 of 3</Col>
          <Col xs={ 5 }>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Responsive', withInfo()(() => {
    return (
      <div>
        <h1>Simple</h1>
        <Container fluid={ boolean('fluid', false) }>
          <Row noGutters={ boolean('noGutters', false) }>
            <Col sm={ 8 }>sm=8</Col>
            <Col sm={ 4 }>sm=4</Col>
          </Row>
          <Row noGutters={ boolean('noGutters', false) }>
            <Col sm={ true }>sm=true</Col>
            <Col sm={ true }>sm=true</Col>
            <Col sm={ true }>sm=true</Col>
          </Row>
        </Container>

        <h1 className="push-quad--top">Complex</h1>
        <Container fluid={ boolean('fluid', false) }>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row noGutters={ boolean('noGutters', false) }>
            <Col xs={ 12 } md={ 8 }>xs=12 md=8</Col>
            <Col xs={ 6 } md={ 4 }>xs=6 md=4</Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row noGutters={ boolean('noGutters', false) }>
            <Col xs={ 6 } md={ 3 }>xs=6 md=3</Col>
            <Col xs={ 6 } md={ 3 }>xs=6 md=3</Col>
            <Col xs={ 6 } md={ 3 }>xs=6 md=3</Col>
            <Col xs={ 6 } md={ 3 }>xs=6 md=3</Col>
          </Row>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row noGutters={ boolean('noGutters', false) }>
            <Col xs={ 6 }>xs=6</Col>
            <Col xs={ 6 }>xs=6</Col>
          </Row>
        </Container>
      </div>
    );
  }))
  ;
