
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/TabNav/react.json'; import examples from '../../../../src/components/TabNav/example'; import readme from 'raw-loader!../../../../src/components/TabNav/README.md'; import sassExamples from '../../../../data/components/TabNav/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class TabNavComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default TabNavComponent
