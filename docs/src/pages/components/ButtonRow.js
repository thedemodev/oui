
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/ButtonRow/example'; import readme from 'raw-loader!../../../../src/components/ButtonRow/README.md';

  const sassData = {"name":"Button Row\n","description":"For buttons that align left or right with space between them.","start":{"line":1,"column":1},"end":{"line":19,"column":4},"example":[{"type":"html","description":"Left aligned button row.","code":"<div class=\"oui-button-row--left\">\n  <button class=\"oui-button\">Button</button>\n  <button class=\"oui-button\">Button</button>\n</div>"},{"type":"html","description":"Center aligned button row.","code":"<div class=\"oui-button-row--center\">\n  <button class=\"oui-button\">Button</button>\n  <button class=\"oui-button\">Button</button>\n</div>"},{"type":"html","description":"Right aligned button row.","code":"<div class=\"oui-button-row--right\">\n  <button class=\"oui-button\">Button</button>\n  <button class=\"oui-button\">Button</button>\n</div>"}]};
  const reactData = {"description":"A horizontal list of buttons with space between them.","methods":[],"props":{"centerGroup":{"type":{"name":"arrayOf","value":{"name":"element"}},"required":false,"description":"Array of buttons for the center"},"leftGroup":{"type":{"name":"arrayOf","value":{"name":"element"}},"required":false,"description":"Array of buttons for left side"},"rightGroup":{"type":{"name":"arrayOf","value":{"name":"element"}},"required":false,"description":"Array of buttons for right side"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class ButtonRowComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ButtonRowComponent
