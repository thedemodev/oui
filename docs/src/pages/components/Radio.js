
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Radio/react.json'; import examples from '../../../../src/components/Radio/example'; import readme from 'raw-loader!../../../../src/components/Radio/README.md'; import sassExamples from '../../../../data/components/Radio/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class RadioComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default RadioComponent
