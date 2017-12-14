
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/BlockList/react.json'; import examples from '../../../../src/components/BlockList/example'; import readme from 'raw-loader!../../../../src/components/BlockList/README.md'; import sassExamples from '../../../../data/components/BlockList/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class BlockListComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default BlockListComponent
