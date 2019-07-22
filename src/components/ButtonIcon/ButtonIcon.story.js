import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ButtonIcon from './index.js';
import Container from '../Layout/Container';
import Row from '../Layout/Row';
import Col from '../Layout/Col';

import { magentaDark, smokeLight } from '../../tokens/forimport/index.es';

const stories = storiesOf('ButtonIcon', module);
stories.addDecorator(withKnobs).addDecorator(story => (
  <div id="root-preview">
    <Container paddedContent="around">{story()}</Container>
  </div>
));

stories
  .add('Default', () => {
    return (
      <Row style={{background: `${smokeLight}`}} displayVertical={ true }>
        <Col small="auto">
          <ButtonIcon
            iconName="arrow-left"
            isDisabled={ boolean('isDisabled', false) }
            onClick={ action('I have been clicked') }
            title="Previous"
            size={ select(
              'size',
              {
                'small': 'small',
                'medium': 'medium',
                'large': 'large',
              },
              'small'
            ) }
          />
          <span className="push--left">Default (no style prop applied)</span>
        </Col>
        <Col small="auto">
          <ButtonIcon
            iconName="arrow-right"
            isDisabled={ boolean('isDisabled', false) }
            onClick={ action('I have been clicked') }
            size={ select(
              'size',
              {
                'small': 'small',
                'medium': 'medium',
                'large': 'large',
              },
              'small'
            ) }
            style='highlight'
            title="Next"
          />
          <span className="push--left">Highlight</span>
        </Col>
        <Col small="auto">
          <ButtonIcon
            iconName="close"
            isDisabled={ boolean('isDisabled', false) }
            onClick={ action('I have been clicked') }
            size={ select(
              'size',
              {
                'small': 'small',
                'medium': 'medium',
                'large': 'large',
              },
              'small'
            ) }
            style="outline"
            title="Close Dialog"
          />
          <span className="push--left">Outline</span>
        </Col>
        <Col small="auto">
          <ButtonIcon
            iconName="add"
            isDisabled={ boolean('isDisabled', false) }
            onClick={ action('I have been clicked') }
            size={ select(
              'size',
              {
                'small': 'small',
                'medium': 'medium',
                'large': 'large',
              },
              'small'
            ) }
            style="danger"
            title="Add row"
          />
          <span className="push--left">Danger</span>
        </Col>
        <Col small="auto">
          <ButtonIcon
            iconName="minus"
            isDisabled={ boolean('isDisabled', false) }
            onClick={ action('I have been clicked') }
            size={ select(
              'size',
              {
                'small': 'small',
                'medium': 'medium',
                'large': 'large',
              },
              'small'
            ) }
            style="danger-outline"
            title="delete row"
          />
          <span className="push--left">Danger-outline</span>
        </Col>
        <Col small="auto">
          <ButtonIcon
            iconName="ellipsis"
            isDisabled={ boolean('isDisabled', false) }
            onClick={ action('I have been clicked') }
            size={ select(
              'size',
              {
                'small': 'small',
                'medium': 'medium',
                'large': 'large',
              },
              'small'
            ) }
            style="plain"
            title="More options"
          />
          <span className="push--left">Plain</span>
        </Col>
        <Col small="auto">
          <ButtonIcon
            iconFill={ magentaDark }
            iconName="ellipsis"
            isDisabled={ boolean('isDisabled', false) }
            onClick={ action('I have been clicked') }
            size={ select(
              'size',
              {
                'small': 'small',
                'medium': 'medium',
                'large': 'large',
              },
              'small'
            ) }
            style="plain"
            title="More options"
          />
          <span className="push--left">Plain with iconFill</span>
        </Col>
      </Row>
    );
  });
