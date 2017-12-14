
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Code/react.json'; import examples from '../../../../src/components/Code/example'; import readme from 'raw-loader!../../../../src/components/Code/README.md'; import sassExamples from '../../../../data/components/Code/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class CodeComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default CodeComponent
