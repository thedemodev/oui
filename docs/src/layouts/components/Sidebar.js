import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  grid-area: sidebar;
  background-color: ${props => props.bgColor ? props.bgColor : 'gainsboro'};
  padding-bottom: 60px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: white;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: #ccc;
}
`
const ChildrenContainer = styled.div`
  margin: 0 auto;
  padding-left: 20px;
`

const Sidebar = ({ children, bgColor, left, zIndex }) => {  
    return (
      <Container bgColor={ bgColor } left={ left }>
        <ChildrenContainer>
          { children }
        </ChildrenContainer>
      </Container>
    );
};

export default Sidebar