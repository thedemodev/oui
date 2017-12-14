
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Select/react.json'; import examples from '../../../../src/components/Select/example'; import readme from 'raw-loader!../../../../src/components/Select/README.md'; import sassExamples from '../../../../data/components/Select/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class SelectComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default SelectComponent
