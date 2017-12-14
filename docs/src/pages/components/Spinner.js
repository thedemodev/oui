
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Spinner/react.json'; import examples from '../../../../src/components/Spinner/example'; import readme from 'raw-loader!../../../../src/components/Spinner/README.md'; import sassExamples from '../../../../data/components/Spinner/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class SpinnerComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default SpinnerComponent
