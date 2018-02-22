
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; const readme = null;

  const sassData = null;
  const reactData = {"description":"","methods":[],"props":{"children":{"type":{"name":"node"},"required":true,"description":"Text/node that is linked"},"href":{"type":{"name":"string"},"required":false,"description":"Href for the anchor element"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"Disable link and interactivity","defaultValue":{"value":"false","computed":false}},"onClick":{"type":{"name":"func"},"required":false,"description":"Click handler function"},"style":{"type":{"name":"enum","value":[{"value":"'default'","computed":false},{"value":"'dark'","computed":false},{"value":"'muted'","computed":false},{"value":"'bad-news'","computed":false},{"value":"'reverse'","computed":false}]},"required":false,"description":"Link style options"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class LinkComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default LinkComponent
