exports.ComponentTemplate = function(
  name,
  imports
) {
  return `
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

  ${imports}

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null
  }
  
  class ${name}Component extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ${name}Component
`
};
