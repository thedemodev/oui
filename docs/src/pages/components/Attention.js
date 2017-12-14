
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Attention/react.json'; import examples from '../../../../src/components/Attention/example'; import readme from 'raw-loader!../../../../src/components/Attention/README.md'; import sassExamples from '../../../../data/components/Attention/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class AttentionComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default AttentionComponent
