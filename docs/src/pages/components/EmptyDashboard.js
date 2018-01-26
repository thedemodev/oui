
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/EmptyDashboard/example'; import readme from 'raw-loader!../../../../src/components/EmptyDashboard/README.md';

  const sassData = null;
  const reactData = {"description":"","methods":[],"props":{"button":{"type":{"name":"node"},"required":false,"description":"A button, link, or other element that is actionable"},"description":{"type":{"name":"element"},"required":false,"description":"A string or `div` containing longer text that describes the empty state"},"descriptionMaxWidth":{"type":{"name":"union","value":[{"name":"string"},{"name":"number"}]},"required":false,"description":"Max width of description. Accepts any valid CSS width value.","defaultValue":{"value":"'450px'","computed":false}},"headline":{"type":{"name":"string"},"required":true,"description":"Short text about the empty state"},"imagePath":{"type":{"name":"string"},"required":false,"description":"Path to an image representing the empty state"},"testSection":{"type":{"name":"string"},"required":false,"description":"Identifier used to create data-test-section attributes for testing","defaultValue":{"value":"'empty-hello'","computed":false}}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class EmptyDashboardComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default EmptyDashboardComponent
