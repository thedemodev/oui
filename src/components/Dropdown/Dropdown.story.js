import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './index.js';
import Button from '../Button';
import Icon from 'react-oui-icons';

const data = [
  {title: 'Manual', description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'},
  {title: 'Maximize Conventions', header: 'Automation',
    description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'},
  {title: 'Faster Results', description: 'Cauliflower cheese stilton paneer hard cheese fondue.'},
];

const stories = storiesOf('Dropdown', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('Default', withInfo()(() => {
  return (
    <Container>
      <Dropdown
        buttonContent='Default Dropdown'
        width={ number('width', 300) }
        arrowIcon={ true }>
        <Dropdown.Contents>
          {
            data.map((item, index) => {
              return (
                <Dropdown.ListItem key={ index }>
                  <Dropdown.BlockLink onClick={ action('click on complex item') }>
                    <Dropdown.BlockLinkText text={ item.title } />
                    <Dropdown.BlockLinkSecondaryText secondaryText={ item.description } />
                  </Dropdown.BlockLink>
                </Dropdown.ListItem>
              );
            })
          }
        </Dropdown.Contents>
      </Dropdown>
    </Container>
  );
}));

stories.add('Error', withInfo()(() => {
  return (
    <Container>
      <Dropdown
        buttonContent='Error State'
        width={ number('width', 300) }
        displayError={ true }
        arrowIcon={ true }>
        <Dropdown.Contents>
          {
            data.map((item, index) => {
              return (
                <Dropdown.ListItem key={ index }>
                  <Dropdown.BlockLink onClick={ action('click on complex item') }>
                    <Dropdown.BlockLinkText text={ item.title } />
                    <Dropdown.BlockLinkSecondaryText secondaryText={ item.description } />
                  </Dropdown.BlockLink>
                </Dropdown.ListItem>
              );
            })
          }
        </Dropdown.Contents>
      </Dropdown>
    </Container>
  );
}));

stories.add('Icon', withInfo()(() => {
  return (
    <Container>
      <Dropdown
        isDisabled={ boolean('isDisabled', false) }
        fullWidth={ boolean('fullWidth', false) }
        buttonContent={ <div>Hamburgers <span className="push-half--left"><Icon name='hamburger' /></span></div> }
        width={ number('width', 350) }>
        <Dropdown.Contents>
          {
            data.map((item, index) => {
              return (
                <Dropdown.ListItem key={ index }>
                  <Dropdown.BlockLink onClick={ action('click on complex item') }>
                    <Dropdown.BlockLinkText text={ item.title } />
                    <Dropdown.BlockLinkSecondaryText secondaryText={ item.description } />
                  </Dropdown.BlockLink>
                </Dropdown.ListItem>
              );
            })
          }
        </Dropdown.Contents>
      </Dropdown>
    </Container>
  );
}));

stories.add('Z-index', withInfo()(() => {
  return (
    <Container className="background--faint">
      <SubContainer>
        <ScrollContainer>
          <Dropdown
            isDisabled={ boolean('isDisabled', false) }
            buttonContent='Dropdown'
            width={ number('width', 300) }>
            <Dropdown.Contents
              minWidth={ 300 }
              direction={ 'up' }>
              {
                data.map((item, index) => {
                  return (
                    <Dropdown.ListItem key={ index }>
                      <Dropdown.BlockLink onClick={ action('click on complex item') }>
                        <Dropdown.BlockLinkText text={ item.title } />
                        <Dropdown.BlockLinkSecondaryText secondaryText={ item.description } />
                      </Dropdown.BlockLink>
                    </Dropdown.ListItem>
                  );
                })
              }
            </Dropdown.Contents>
          </Dropdown>
          <h1>This text should be behind the open dropdown</h1>
        </ScrollContainer>
      </SubContainer>
    </Container>
  );
}));

stories.add('List', withInfo()(() => {
  return (
    <Container className="background--faint">
      <SubContainer>
        <Dropdown
          isDisabled={ boolean('isDisabled', false) }
          activator={
            <Button>Click to activate</Button>
          }
          placement={ 'top-start' }
          width={ number('width', 300) }>
          <Dropdown.Contents
            minWidth={ 300 }
            direction={ 'up' }>
            <Dropdown.ListItem>
              <Dropdown.BlockLink onClick={ action('click dropdown block link') }>
                <Dropdown.BlockLinkText text={ 'This is a label' } />
                <Dropdown.BlockLinkSecondaryText secondaryText={ 'This is a smaller description' } />
              </Dropdown.BlockLink>
            </Dropdown.ListItem>
            <Dropdown.ListItem>
              <Dropdown.BlockLink onClick={ action('click dropdown block link 2') }>
                <Dropdown.BlockLinkText text={ 'This is a second label' } />
                <Dropdown.BlockLinkSecondaryText secondaryText={ 'This is a second smaller description' } />
              </Dropdown.BlockLink>
            </Dropdown.ListItem>
          </Dropdown.Contents>
        </Dropdown>
        <h1>This text should be behind the open dropdown</h1>
      </SubContainer>
    </Container>
  );
}));

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
`;

const SubContainer = styled.div`
  width: 700px;
  height: 400px;
  background: lightgrey;
  margin: 100px auto;
  overflow: scroll;
  padding: 20px;
  padding-top: 300px;
`;

const ScrollContainer = styled.div`
  width: 1000px;
  height: 1000px;
`;
