exports.ComponentTemplate = function(
  name,
  imports,
  sassData,
  reactData
) {
  return `
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

  ${imports}

  const sassData = ${sassData};
  const reactData = ${reactData};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
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
