import React from 'react'
import styled from 'styled-components'
import jsxToString from 'jsx-to-string'

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

const ReactExamples = ({
  examplesData
}) => {
  const exampleElements = examplesData.map((example, index) => {
    return (
      <ExampleBlock key={ `block-${index}` }>
        <Element key={ `element-${index}` }>
          { example.examples.map( (item, index) => { 
            return <span 
              key={`item-${index}`} 
              style={ {marginRight: 5 } }>
                { item }
              </span>
            })
          }
        </Element>
        <CodeBlock ouiStyle={ false } key={ `code-${index}` } type="block" language='jsx' hasCopyButton >
          { example.examples.map( item => jsxToString(item) ) } 
        </CodeBlock>
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