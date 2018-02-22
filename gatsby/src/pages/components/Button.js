
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/Button/example'; import readme from 'raw-loader!../../../../src/components/Button/README.md';

  const sassData = {"name":"Buttons\n","description":"","start":{"line":1,"column":1},"end":{"line":19,"column":4},"example":[{"type":"html","description":"Button colors","code":"<button class=\"oui-button\">Button</button>\n<button class=\"oui-button oui-button--highlight\">Button</button>\n<button class=\"oui-button oui-button--danger\">Button</button>\n<button class=\"oui-button oui-button--danger-outline\">Button</button>\n<button class=\"oui-button oui-button--outline\">Button</button>\n<button class=\"oui-button oui-button--underline\">Button <span class=\"oui-arrow-inline--down\"></span></button>\n<button class=\"oui-button oui-button--plain\">Button</button>"},{"type":"html","description":"Tiny buttons","code":"<button class=\"oui-button oui-button--tiny\">Button</button>\n<button class=\"oui-button oui-button--small\">Button</button>"},{"type":"html","description":"Full width buttons","code":"<button class=\"oui-button oui-button--full\">Button</button>"},{"type":"html","description":"Disabled buttons","code":"<button class=\"oui-button oui-button--disabled\">Disabled with Class</button>\n<button class=\"oui-button\" disabled>Disabled with Attribute</button>"}]};
  const reactData = {"description":"","displayName":"Button","methods":[],"props":{"ariaLabel":{"type":{"name":"string"},"required":false,"description":"Describes buttons that have an icon but no text"},"children":{"type":{"name":"node"},"required":true,"description":"Text within the button"},"isActive":{"type":{"name":"bool"},"required":false,"description":"Render button with active state"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"Prevent users from interacting with the button","defaultValue":{"value":"false","computed":false}},"isSubmit":{"type":{"name":"bool"},"required":false,"description":"Make the button act as a submit button","defaultValue":{"value":"false","computed":false}},"onClick":{"type":{"name":"func"},"required":false,"description":"Function that fires when the button is clicked on"},"size":{"type":{"name":"enum","value":[{"value":"'tiny'","computed":false},{"value":"'small'","computed":false},{"value":"'large'","computed":false},{"value":"'narrow'","computed":false},{"value":"'tight'","computed":false}]},"required":false,"description":"Various height and width options"},"style":{"type":{"name":"enum","value":[{"value":"'highlight'","computed":false},{"value":"'danger'","computed":false},{"value":"'danger-outline'","computed":false},{"value":"'outline'","computed":false},{"value":"'outline-reverse'","computed":false},{"value":"'plain'","computed":false},{"value":"'toggle'","computed":false},{"value":"'underline'","computed":false},{"value":"'unstyled'","computed":false}]},"required":false,"description":"Various color options"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"},"width":{"type":{"name":"enum","value":[{"value":"'default'","computed":false},{"value":"'full'","computed":false}]},"required":false,"description":"Various height and width options","defaultValue":{"value":"'default'","computed":false}}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class ButtonComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ButtonComponent
