
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Poptip/react.json'; import examples from '../../../../src/components/Poptip/example'; import readme from 'raw-loader!../../../../src/components/Poptip/README.md'; import sassExamples from '../../../../data/components/Poptip/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class PoptipComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default PoptipComponent
