
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const data = null; const examples = null; import readme from 'raw-loader!../../../../src/components/Help/README.md'; import sassExamples from '../../../../data/components/Help/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class HelpComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default HelpComponent
