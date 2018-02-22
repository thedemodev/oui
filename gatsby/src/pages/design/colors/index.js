import React from 'react';
import styled from 'styled-components';

const colors = [
  { name: 'BRAND BLUE', var: '$brand-blue', hex: '#0081BA', color: 'white'},
  { name: 'CHARCOAL', var: '$charcoal', hex: '#808080', color: 'white'},
  { name: 'KARL GRAY', var: '$karl-gray', hex: '#f7f7f7', color: '#666'},
  { name: 'WHITE', var: '$white', hex: '#FFFFFF', color: '#666'},
];

const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
`;

const TyleContainer = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid #f6f6f6;
`;

const Tyle = styled.div`
  background-color: ${({hex}) => hex ? hex : '#ccc'};
  width: 100%;
  height: 70%;
  margin: 0px auto;
  padding-top: 55px;
  box-shadow: 0.5px 0.5px 1px #ccc;
`;

const TyleText = styled.div`
  color: ${ ({color}) => color ? color : 'white'};
  text-align: center;
`;

const Colors = () => {
  return (
    <div>
      <h1>Colors</h1>
      <ColorsContainer>
        { colors.map(color => (
          <TyleContainer key={ color.hex }>
            <Tyle hex={ color.hex }>
              <TyleText color={ color.color }>
                <span>{ color.name }</span><br />
                <span style={{ fontSize: '0.8rem' }}>{ color.hex }</span>
              </TyleText>
            </Tyle>
          </TyleContainer>
        ))}
      </ColorsContainer>
      
      <p>The Optimizely color palette is meant to be light and unobtrusive, with thoughtful accents of color. Proper application of these colors will ensure the visual identity is maintained across all branded elements. Color usage should roughly map to the proportions below.</p>

      <h2>Primary palette</h2>
      <p><strong>Our primary palette</strong> consists of our brand blue, charcoal gray, background gray, and white. Our brand blue should be used thoughtfully to reinforce our identity, as overuse can dilute its visual impact. Brand blue on a neutral background is often more successful at establishing brand equity than full washes of the color.</p>

      <p><strong>Tints and shades</strong> of the primary palette should be used to directly supplement the original swatch, and they should never be used in place of the original swatch. They are primarily intended for button states, borders, illustration shadings, and data visualization.</p>
    </div>
  );
};

export default Colors;
