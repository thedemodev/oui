
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/OverlayWrapper/react.json'; import examples from '../../../../src/components/OverlayWrapper/example'; import readme from 'raw-loader!../../../../src/components/OverlayWrapper/README.md';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null
  }
  
  class OverlayWrapperComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default OverlayWrapperComponent
