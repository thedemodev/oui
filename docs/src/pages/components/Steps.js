
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const data = null; const examples = null; import readme from 'raw-loader!../../../../src/components/Steps/README.md'; import sassExamples from '../../../../data/components/Steps/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class StepsComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default StepsComponent
