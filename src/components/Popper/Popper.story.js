import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Manager, Popper, Target, Arrow } from 'react-popper';

const stories = storiesOf('Popper', module);

// this add some decorators for making addons available
stories
  .addDecorator(withKnobs);

const options = {
  left: 'left', right: 'right', top: 'top', bottom: 'bottom',
  'left-start': 'left-start', 'right-start': 'right-start',
  'top-start': 'top-start', 'bottom-start': 'bottom-start',
  'left-end': 'left-end', 'right-end': 'right-end', 'top-end': 'top-end',
  'bottom-end': 'bottom-end',
};

stories.add('default', withInfo('react <Popper /> component')(() => {
  return (
    <Container>
      <SubContainer>
        <ScrollContainer>
          <StyledManager>
            <StyledTarget >
              StyledTarget Box
            </StyledTarget>
            <StyledPopper placement={ `${select('placement', options, 'left')}` } className="popper">
              Left Content
              <Arrow className="popper__arrow"/>
            </StyledPopper>
          </StyledManager>
        </ScrollContainer>
      </SubContainer>
    </Container>
  );
}
));

stories.add('dropdown', withInfo('react <Popper /> component')(() => {
  return (
    <Container>
      <SubContainer>
        <ScrollContainer>
          <StyledManager>
            <StyledTarget >
              StyledTarget Box
            </StyledTarget>
            <StyledPopper placement='bottom-start' className="popper">
              Left Content
              <Arrow className="popper__arrow"/>
            </StyledPopper>
          </StyledManager>
        </ScrollContainer>
      </SubContainer>
    </Container>
  );
}
));


const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background: #f6f6f6;
`;

const SubContainer = styled.div`
  width: 400px;
  height: 400px;
  background: #666;
  margin: 100px auto;
  overflow: scroll;
`;

const ScrollContainer = styled.div`
  width: 1000px;
  height: 1000px;
`;

const StyledManager = styled(Manager)`
  width: 150px;
  height: 120px;
  margin-top: 225px;
  margin-left: 225px;
  border: 1px dashed white;
`;

const StyledTarget = styled(Target)`
  height: 100%;
  background: pink;
`;

const StyledPopper = styled(Popper)`
  background: paleturquoise;
  height: 40px;
  padding: 10px;
`;

