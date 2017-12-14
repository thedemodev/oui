
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Badge/react.json'; import examples from '../../../../src/components/Badge/example'; import readme from 'raw-loader!../../../../src/components/Badge/README.md'; import sassExamples from '../../../../data/components/Badge/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class BadgeComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default BadgeComponent
