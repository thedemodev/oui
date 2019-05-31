import React from 'react';
import icons from './icons.json';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Icon from 'react-oui-icons';
import Button from '../components/Button';
import Table from '../components/Table';

const stories = storiesOf('Icons', module);

// this add some decorators for making addons available
stories
  .addDecorator(withKnobs)
  .addDecorator(withInfo('react <Icon /> component'))
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('All icons', () => {
  const iconsElements = icons.map((icon, index) => {
    const Box = styled.div`
    border: 1px dashed #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    height: 100px;
    justify-content: center;
    margin: 5px;
    padding: 20px 10px
    text-align: center;
    width: 100px;
    &:after {
      color: white;
      transition: all 0.4s ease;
      content: '${icon.title}';
      font-family: Helvetica;
      font-size: 0.5rem;
      max-width: 90px;
      position: absolute;
      margin-top: 70px;
    }
    &:hover:after {
      color: #666;
    }
  `;
    return (
      <Box key={ index } style={ styles.iconBox }>
        <Icon
          style={ styles.icon }
          description={ icon.title }
          name={ icon.title.split(' ').join('-') }
          fill={ text('color', 'black') }
          size={ select('size', {small: 'small', medium: 'medium', large: 'large'}, 'medium') }
        />
      </Box>
    );
  });
  return (
    <div className="App">
      <h1>All Icons (via react-oui-icons)</h1>
      <Container>
        { iconsElements }
      </Container>
    </div>
  );
});

stories.add('Icon docs', (() => {
  return (
    <Icon
      name={ select('name', {bell: 'bell', medium: 'medium', large: 'large'}, 'bell') }
      fill={ text('color', 'black') }
      size={ select('size', {small: 'small', medium: 'medium', large: 'large'}, 'medium') }
    />
  );
}
));

stories.add('Animated icon', () => {
  return (
    <Icon className='rotating' name='settings' size='large' />
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const styles = {
  icon: {
    alignSelf: 'center',
  },
};
