
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Disclose/react.json'; import examples from '../../../../src/components/Disclose/example'; import readme from 'raw-loader!../../../../src/components/Disclose/README.md'; import sassExamples from '../../../../data/components/Disclose/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class DiscloseComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default DiscloseComponent
