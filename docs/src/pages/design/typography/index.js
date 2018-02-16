import React from 'react'
import styled from 'styled-components'

const TwoTypes = styled.div`
  display: grid;
  grid-gap: 25px;
  width: 450px;
  grid-template-columns: 200px 200px;
`

const FontExamples = styled.div`
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; 
`;

const Typography = () => {
  return (
    <div>
      <h1>Typography</h1>
      <p>The typography rules on this page focus on marketing-specific styles. For in-product typography, see the typography section of the product design patterns.</p>
      <h2>Typefaces</h2>
      <TwoTypes>
        <h3>Open Sans</h3>
        <h3>Proxima Nova</h3>
        <p>abcdefghijklmnopqrstuvwxyz 1234567890!@#$%^&* Open Sans is our display text typeface. It is used for hero headlines, major headings and pull quotes.</p>
        <p>abcdefghijklmnopqrstuvwxyz 1234567890!@#$%^&* Proxima Nova is our workhorse typeface. It is used for body copy, navigation, attributions and any other type styles.</p>
      </TwoTypes>

      <h2>Web Styles</h2>
      <p>Type styles should be set in a color from the primary palette unless otherwise specified.</p>
      <FontExamples>
        <p>Style</p>
        <p>Usage</p>	
        <p>Specs</p>

        <h1>Hero headline</h1>	
        <p>The H1 headline in the hero area.</p>	
        <p>Open Sans Light 56px/64px</p>
      </FontExamples>
    </div>
  )
}
export default Typography