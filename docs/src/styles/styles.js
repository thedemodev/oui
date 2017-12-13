import React from 'react'
import styled, { keyframes } from 'styled-components'

import { verticalOpening } from './animations'

export const MainContent = styled.div`
  
`;

export const Editor = styled.div`
  background: #f6f6f6;
  border-radius: 4px;
  width: 100%;
  padding: 7px;
`;

export const EditorTitle = styled.div`
  color: indigo;
  font-size: 22px;
  font-weight: bolder;
`;

export const CodeBlockStyled = styled.div`
  background: mistyrose;
  height: 0px;
  animation: ${verticalOpening} 2s 0s both;
`;