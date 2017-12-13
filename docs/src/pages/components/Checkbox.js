
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Checkbox/react.json'; import examples from '../../../../src/components/Checkbox/example'; import readme from 'raw-loader!../../../../src/components/Checkbox/README.md';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null
  }
  
  class CheckboxComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default CheckboxComponent
