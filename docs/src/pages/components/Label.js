
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/Label/example'; import readme from 'raw-loader!../../../../src/components/Label/README.md';

  const sassData = {"name":"Label\n","description":"","start":{"line":1,"column":1},"end":{"line":42,"column":4},"example":[{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label\">Name</span>\n  <input class=\"oui-text-input\" placeholder=\"Jane Doe\">\n</label>"},{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label oui-label--required\">Name</span>\n  <input class=\"oui-text-input\" placeholder=\"Jane Doe\" required>\n</label>"},{"type":"html","description":null,"code":"<label>\n  <div class=\"oui-label\">\n    Name\n    <span class=\"oui-label__optional\">\n      (Optional)\n    </span>\n  </div>\n  <input class=\"oui-text-input\" placeholder=\"Jane Doe\">\n</label>"},{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label oui-label--disabled\">Name</span>\n  <input class=\"oui-text-input\" disabled placeholder=\"Jane Doe\">\n</label>"},{"type":"html","description":null,"code":"<ul class=\"oui-input-list\">\n  <li>\n    <input name=\"radio-set-1\" id=\"bar-1\" type=\"radio\" checked>\n    <label class=\"oui-label\" for=\"bar-1\">Radio Option #1\n  </li>\n</ul>"},{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label\">\n    Experiment Hypothesis\n  </span>\n  <textarea class=\"oui-textarea\" placeholder=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"></textarea>\n</label>"}]};
  const reactData = {"description":"Wraps text or HTML in a `label` element. Often used to label inputs.","methods":[],"props":{"children":{"type":{"name":"union","value":[{"name":"string"},{"name":"node"}]},"required":false,"description":"What the label describes"},"isOptional":{"type":{"name":"bool"},"required":false,"description":"Includes optional label if true"},"isRequired":{"type":{"name":"bool"},"required":false,"description":"Includes required asterisk label if true"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class LabelComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default LabelComponent
