
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/Radio/example'; import readme from 'raw-loader!../../../../src/components/Radio/README.md';

  const sassData = {"name":"Radio\n","description":"","start":{"line":1,"column":1},"end":{"line":14,"column":4},"example":[{"type":"html","description":null,"code":"<ul class=\"oui-input-list\">\n  <li>\n    <input name=\"radio-set-1\" id=\"bar-1\" type=\"radio\" checked>\n    <label class=\"oui-label\" for=\"bar-1\">Radio Option #1\n  </li>\n  <li>\n    <input name=\"radio-set-1\" id=\"bar-2\" type=\"radio\">\n    <label class=\"oui-label\" for=\"bar-2\">Radio Option #2\n  </li>\n</ul>"}]};
  const reactData = {"description":"Generates a `input` element of type `radio` that is wrapped in a `Label`.","methods":[],"props":{"checked":{"type":{"name":"bool"},"required":false,"description":"Boolean to set radio input, for controlled component"},"defaultChecked":{"type":{"name":"bool"},"required":false,"description":"Boolean for how radio input renders initially"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"Prevents radio input from being modified and appears disabled"},"label":{"type":{"name":"string"},"required":false,"description":"Text that describes the radio input"},"name":{"type":{"name":"string"},"required":true,"description":"String that can be used to identify a set of radio inputs so that only one\n    in the set is checked at any given time."},"onChange":{"type":{"name":"func"},"required":false,"description":"Function that fires when the radio input is clicked"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests","defaultValue":{"value":"null","computed":false}}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class RadioComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default RadioComponent
