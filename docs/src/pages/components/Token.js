
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/Token/example'; import readme from 'raw-loader!../../../../src/components/Token/README.md';

  const sassData = {"name":"Token\n","description":"Tokens are used to denote which items you’ve selected from a multi-select list.","start":{"line":1,"column":1},"end":{"line":19,"column":4},"example":[{"type":"html","description":"secondary","code":"<div class=\"oui-token-wrap\">\n  <div class=\"oui-token oui-token--secondary\">Experiment Page Title</div>\n</div>"},{"type":"html","description":"primary","code":"<div class=\"oui-token-wrap\">\n  <div class=\"oui-token oui-token--primary\">\n    <span class=\"push--right\">Experiment Page Title</span>\n    <a class=\"flex\">\n      <svg class=\"oui-icon oui-token__close\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#close-16\"></use>\n      </svg>\n    </a>\n  </div>\n</div>"}]};
  const reactData = {"description":"Token to be used to make token lists.","methods":[],"props":{"description":{"type":{"name":"string"},"required":false,"description":"Description explaining the token"},"isDismissible":{"type":{"name":"bool"},"required":false,"description":"Determines if token has dismissible feature or not. If true, `onDismiss`\nis required.","defaultValue":{"value":"false","computed":false}},"isDraggable":{"type":{"name":"bool"},"required":false,"description":"Shows an icon indicating that the token is draggable"},"name":{"type":{"name":"string"},"required":true,"description":"Name label on token"},"onDismiss":{"type":{"name":"func"},"required":false,"description":"Function to call that dismisses the token. Required if the token is\ndismissible."},"order":{"type":{"name":"number"},"required":false,"description":"Show a number indicating the token's order"},"style":{"type":{"name":"enum","value":[{"value":"'primary'","computed":false},{"value":"'secondary'","computed":false}]},"required":false,"description":"Determines style of token depending on priority level","defaultValue":{"value":"'secondary'","computed":false}},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class TokenComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default TokenComponent
