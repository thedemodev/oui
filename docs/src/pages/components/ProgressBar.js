
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/ProgressBar/react.json'; import examples from '../../../../src/components/ProgressBar/example'; import readme from 'raw-loader!../../../../src/components/ProgressBar/README.md'; import sassExamples from '../../../../data/components/ProgressBar/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class ProgressBarComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ProgressBarComponent
