
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/Textarea/example'; import readme from 'raw-loader!../../../../src/components/Textarea/README.md';

  const sassData = {"name":"Textarea\n","description":"","start":{"line":1,"column":1},"end":{"line":30,"column":4},"example":[{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label\">Experiment Hypothesis</span>\n  <textarea class=\"oui-textarea\" placeholder=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"></textarea>\n</label>"},{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label oui-label--disabled\">\n    Experiment Hypothesis\n  </span>\n  <textarea class=\"oui-textarea\" disabled placeholder=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"></textarea>\n</label>"},{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label\">\n    Tall Experiment Hypothesis\n  </span>\n  <textarea class=\"oui-textarea oui-textarea--tall\" placeholder=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"></textarea>\n</label>"},{"type":"html","description":null,"code":"<label class=\"#{$namespace}form-bad-news\">\n  <span class=\"oui-label oui-label--required\">\n    Experiment Hypothesis\n  </span>\n  <textarea class=\"oui-textarea\" placeholder=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"></textarea>\n  <div class=\"#{$namespace}form-note #{$namespace}form-note--bad-news\">This field is required.</div>\n</label>"}]};
  const reactData = {"description":"Generates a `textarea` element.","displayName":"Textarea","methods":[{"name":"blur","docblock":null,"modifiers":[],"params":[],"returns":null}],"props":{"defaultValue":{"type":{"name":"string"},"required":false,"description":"The default value of the textarea used on initial render"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"Prevents textarea from being modified and appears disabled"},"isReadOnly":{"type":{"name":"bool"},"required":false,"description":"Prevents textarea from being modified but doesn't appear disabled"},"isRequired":{"type":{"name":"bool"},"required":false,"description":"Prevents textarea from being submitted without value"},"onBlur":{"type":{"name":"func"},"required":false,"description":"Function that fires when the textarea loses focus. It fires regardless of\n    whether the value has changed."},"onChange":{"type":{"name":"func"},"required":false,"description":"Function that fires when the textarea loses focus after the value\n    changes"},"onFocus":{"type":{"name":"func"},"required":false,"description":"Function that fires when the textarea gains focus"},"onInput":{"type":{"name":"func"},"required":false,"description":"Function that fires the the textarea value changes"},"onKeyDown":{"type":{"name":"func"},"required":false,"description":"Function that fires when a key is pressed down"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Textarea placeholder text"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"},"value":{"type":{"name":"string"},"required":false,"description":"Text within the textarea"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class TextareaComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default TextareaComponent
