
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Help/README.md';

  const sassData = {"name":"Help\n","description":"","start":{"line":1,"column":1},"end":{"line":5,"column":4},"example":[{"type":"html","description":null,"code":"Text with a help icon. <span class=\"#{$namespace}help-dot\"></span>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class HelpComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default HelpComponent
