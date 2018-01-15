import React from 'react'
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

const SassExamples = ({
  examplesData,
}) => {
  const exampleElements = examplesData.example.map((example, index) => {
    return (
      <ExampleBlock key={ `block-${index}` }>
        <Element key={ `element-${index}` }>
          { <div key={`item-${index}`} dangerouslySetInnerHTML={{ __html: example.code }} /> }
        </Element>
        <CodeBlock ouiStyle={ false } key={ `code-${index}` } type="block" language='jsx' hasCopyButton >
          { example.code } 
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

export default SassExamples