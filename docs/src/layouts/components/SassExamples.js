import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from 'styled-components'

import Code from '../../../../src/components/Code'

const ExampleBlock = styled.div`
  margin-bottom: 50px;
`;

const Element = styled.div`
background: #F6F8FA;
padding: 20px 50px;
margin-bottom: 10px;
border-radius: 7px;
`;

const StyledCode = styled(Code)`
background: #F6F8FA;
border-radius: 7px;
padding: 15px 25px;
`

const SassExamples = ({
  examplesData
}) => {
  const exampleElements = examplesData.map((example, index) => {
    return (
      <ExampleBlock key={ `block-${index}` }>
        <Element key={ `element-${index}` }>
          { <div key={`item-${index}`} dangerouslySetInnerHTML={{ __html: example.code }} /> }
        </Element>
        <StyledCode ouiStyle={ false } key={ `code-${index}` } type="block" language='jsx' hasCopyButton >
          { `${reactElementToJSXString(example.code)}` } 
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

export default SassExamples