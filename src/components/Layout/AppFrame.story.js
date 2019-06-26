import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Col from './Col';
import Row from './Row';
import Container from './Container';

const stories = storiesOf('Layout', module);
stories.addDecorator(withKnobs);
stories.add('Special: App Frame', withInfo()(() => {
  return (
    <Container
      outlineDebug={ boolean('outlineDebug', true) }
      pushRowsTop={ boolean('pushRowsTop', true) }
      paddedContent={ boolean('paddedContent', false) }
      pushColsSides={ boolean('pushColsSides', false) }
      fluid={ boolean('fluid', true) }>
      <Row gutters={ boolean('gutters', false) }>
        <Col small={ 2 }>Rootnav
        </Col>
        <Col small={ 10 }>
          <div className="flex flex--column">
            <Row gutters={ boolean('gutters', false) }>
              <Col small={ 2 }>Tabs/Header
              </Col>
              <Col small={ 10 }>Stage
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}));
