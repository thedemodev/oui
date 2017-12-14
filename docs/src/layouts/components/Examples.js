import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components'

import Code from '../../../../src/components/Code'

const Container = styled.div`
  padding: 20px 100px;
`;

const ExampleBlock = styled.div`
  margin-bottom: 50px;
`;

const Element = styled.div`
  padding: 20px 50px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const Examples = ({
  examplesData
}) => {
  const exampleElements = examplesData.map((example, index) => {
    return (
      <ExampleBlock key={ `block-${index}` }>
        <Element>
          { example.examples}
        </Element>
        <Code display='block' language='jsx' hasCopyButton >
          { example.examples.map( item => reactElementToJSXString(item)) } 
        </Code>
      </ExampleBlock>
    )
  })
  return (
    <Container>
      { exampleElements }
    </Container>
  )
}

export default Examples