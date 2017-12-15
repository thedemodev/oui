import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components'

import CodeBlock from './CodeBlock'

const ExampleBlock = styled.div`
  margin-bottom: 50px;
`;

const Element = styled.div`
  background: #F6F8FA;
  padding: 20px 50px;
  margin-bottom: 10px;
  border-radius: 7px;
`;

const StyledCode = styled(CodeBlock)`
  background: #F6F8FA;
  border-radius: 7px;
  padding: 15px 25px;
`

const ReactExamples = ({
  examplesData
}) => {
  const exampleElements = examplesData.map((example, index) => {
    return (
      <ExampleBlock key={ `block-${index}` }>
        <Element key={ `element-${index}` }>
          { example.examples.map( (item, index) => <span key={`item-${index}`}>{ item }</span>)}
        </Element>
        <StyledCode ouiStyle={ false } key={ `code-${index}` } type="block" language='jsx' hasCopyButton >
          { `${example.examples.map( item => reactElementToJSXString(item))}` } 
        </StyledCode>
      </ExampleBlock>
    )
  })
  return (
    <div>
      { exampleElements }
    </div>
  )
}

export default ReactExamples