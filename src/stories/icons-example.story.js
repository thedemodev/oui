import React from 'react';
import icons from './icons.json';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Icon from 'react-oui-icons';

const stories = storiesOf('Icons', module);

// this add some decorators for making addons available
stories
  .addDecorator(withKnobs);

stories.add('all icons', () => {
  const iconsElements = icons.map((icon, index) => {
    const Box = styled.div`
    border: 1px solid #eee;
    box-sizing: border-box;
    display: flex;
    width: 20%;
    height: 150px;
    justify-content: center;
    margin: 0;
    padding: 40px 20px
    text-align: center;
    position: relative;
    &:after {
      text-align: center;
      color: #333;
      transition: all 0.4s ease;
      content: '${icon.title}';
      font-family: Helvetica;
      font-size: 10px;
      position: absolute;
      bottom: 30px;
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
      <Container>
        { iconsElements }
      </Container>
    </div>
  );
});

stories.add('icon docs', withInfo('react <Icon /> component')(() => {
  return (
    <Icon name='bell' size='large' />
  );
}
));

stories.add('animated icon', () => {
  return (
    <Icon className='rotating' name='settings' size='large' />
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const styles = {
  icon: {
    alignSelf: 'center',
  },
};
