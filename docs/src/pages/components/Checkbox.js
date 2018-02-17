
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/Checkbox/example'; import readme from 'raw-loader!../../../../src/components/Checkbox/README.md';

  const sassData = {"name":"Checkbox\n","description":"","start":{"line":1,"column":1},"end":{"line":14,"column":4},"example":[{"type":"html","description":null,"code":"<ul class=\"oui-input-list\">\n  <li>\n    <input name=\"checkbox-set-1\" id=\"bar-1\" type=\"checkbox\" checked>\n    <label class=\"oui-label\" for=\"bar-1\">Checkbox Option #1\n  </li>\n  <li>\n    <input name=\"checkbox-set-1\" id=\"bar-2\" type=\"checkbox\">\n    <label class=\"oui-label\" for=\"bar-2\">Checkbox Option #2\n  </li>\n</ul>"}]};
  const reactData = {"description":"Generates a `checkbox` element wrapped in a Label","methods":[],"props":{"checked":{"type":{"name":"bool"},"required":false,"description":"Boolean to set checkbox, for controlled component"},"defaultChecked":{"type":{"name":"bool"},"required":false,"description":"Boolean for how checkbox renders initially"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"Prevents checkbox from being modified and appears disabled"},"label":{"type":{"name":"string"},"required":false,"description":"Text that describes the checkbox"},"onChange":{"type":{"name":"func"},"required":false,"description":"Function that fires when the checkbox is clicked"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class CheckboxComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default CheckboxComponent
