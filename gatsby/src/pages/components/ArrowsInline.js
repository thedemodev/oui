
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/ArrowsInline/example'; import readme from 'raw-loader!../../../../src/components/ArrowsInline/README.md';

  const sassData = {"name":"Arrow Inline\n","description":"Small arrows as needed next to navigational elements. The\narrows will inherit the color of the parent `color` value.","start":{"line":1,"column":1},"end":{"line":10,"column":4},"example":[{"type":"html","description":null,"code":"<div><span class=\"oui-arrow-inline--up\"></span> Up</div>\n<div><span class=\"oui-arrow-inline--down\"></span> Down</div>\n<div><span class=\"oui-arrow-inline--right\"></span> Right</div>\n<div><span class=\"oui-arrow-inline--left\"></span> Left</div>"}]};
  const reactData = {"description":"","methods":[],"props":{"direction":{"type":{"name":"enum","value":[{"value":"'up'","computed":false},{"value":"'down'","computed":false},{"value":"'left'","computed":false},{"value":"'right'","computed":false}]},"required":false,"description":"Direction the arrow points"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class ArrowsInlineComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ArrowsInlineComponent
