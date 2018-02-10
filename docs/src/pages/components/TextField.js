
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/TextField/example'; import readme from 'raw-loader!../../../../src/components/TextField/README.md';

  const sassData = null;
  const reactData = {"description":"Generates an `input` element (optionally wrapped in a label) and accepts\nmost of the common input types.","displayName":"Input","methods":[{"name":"renderInput","docblock":null,"modifiers":[],"params":[{"name":"{\n  note,\n  defaultValue,\n  displayError = false,\n  isDisabled = false,\n  isFilter = false,\n  isOptional,\n  isReadOnly,\n  onBlur,\n  isRequired,\n  label,\n  min,\n  max,\n  onChange,\n  onInput,\n  onKeyDown,\n  onFocus,\n  placeholder,\n  testSection,\n  type,\n  value,\n}","type":null}],"returns":null}],"props":{"defaultValue":{"type":{"name":"string"},"required":false,"description":"The default value of the input used on initial render"},"displayError":{"type":{"name":"bool"},"required":false,"description":"Toggle error state styles"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"Prevents input from being modified and appears disabled"},"isFilter":{"type":{"name":"bool"},"required":false,"description":"Includes error if true"},"isOptional":{"type":{"name":"bool"},"required":false,"description":"Adds an optional label if there is a label provided\n @param {Object} props Object of props\n @returns {Error} Error or null"},"isReadOnly":{"type":{"name":"bool"},"required":false,"description":"Prevents input from being modified but doesn't appear disabled"},"isRequired":{"type":{"name":"bool"},"required":false,"description":"Prevents input from being submitted without value"},"label":{"type":{"name":"string"},"required":false,"description":"Text that describes the input"},"max":{"type":{"name":"number"},"required":false,"description":"Max value for the `input`. Should be used only when `type` is `number`."},"min":{"type":{"name":"number"},"required":false,"description":"Min value for the `input`. Should be used only when `type` is `number`."},"note":{"type":{"name":"string"},"required":false,"description":"Append note near form input."},"onBlur":{"type":{"name":"func"},"required":false,"description":"Function that fires when the input loses focus. It fires regardless of\nwhether the value has changed."},"onChange":{"type":{"name":"func"},"required":false,"description":"Function that fires when the input loses focus after the value changes"},"onFocus":{"type":{"name":"func"},"required":false,"description":"Function that fires when the input gains focus"},"onInput":{"type":{"name":"func"},"required":false,"description":"Function that fires on keypress"},"onKeyDown":{"type":{"name":"func"},"required":false,"description":"Function that fires when a key is pressed down"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Input placeholder text"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'password'","computed":false},{"value":"'date'","computed":false},{"value":"'number'","computed":false},{"value":"'email'","computed":false},{"value":"'url'","computed":false},{"value":"'search'","computed":false},{"value":"'tel'","computed":false}]},"required":true,"description":"Supported input types"},"value":{"type":{"name":"string"},"required":false,"description":"Text within the input"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class TextFieldComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default TextFieldComponent