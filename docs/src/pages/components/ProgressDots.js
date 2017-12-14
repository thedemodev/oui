
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/ProgressDots/react.json'; import examples from '../../../../src/components/ProgressDots/example'; import readme from 'raw-loader!../../../../src/components/ProgressDots/README.md'; import sassExamples from '../../../../data/components/ProgressDots/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class ProgressDotsComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ProgressDotsComponent
