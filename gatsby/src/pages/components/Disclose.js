
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/Disclose/example'; import readme from 'raw-loader!../../../../src/components/Disclose/README.md';

  const sassData = {"name":"Disclose\n","description":"Similar to an accordion but any number of items can be opened\nclosed independently.","start":{"line":1,"column":1},"end":{"line":18,"column":4},"example":[{"type":"html","description":null,"code":"<div class=\"#{$namespace}disclose is-active\">\n  <a href=\"#\" class=\"#{$namespace}disclose__link link--dark\">\n    <div class=\"#{$namespace}disclose__arrow is-active\">\n      <span class=\"#{$namespace}disclose__symbol\"></span>\n      Title of Disclosure\n    </div>\n  </a>\n  <div class=\"#{$namespace}disclose__content\">\n    <h3>Some Title</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.</p>\n  </div>\n</div>"}]};
  const reactData = {"description":"","displayName":"Disclose","methods":[{"name":"handleToggle","docblock":null,"modifiers":[],"params":[{"name":"event","type":null}],"returns":null}],"props":{"children":{"type":{"name":"node"},"required":true,"description":""},"childrenStyle":{"type":{"name":"string"},"required":false,"description":""},"headerStyle":{"type":{"name":"string"},"required":false,"description":""},"noBorder":{"type":{"name":"bool"},"required":false,"description":""},"title":{"type":{"name":"string"},"required":true,"description":""}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class DiscloseComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default DiscloseComponent
