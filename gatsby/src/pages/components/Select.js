
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/Select/example'; import readme from 'raw-loader!../../../../src/components/Select/README.md';

  const sassData = {"name":"Select\n","description":"","start":{"line":1,"column":1},"end":{"line":13,"column":4},"example":[{"type":"html","description":null,"code":"<select name=\"zoo\" id=\"zoo\" class=\"#{$namespace}select\">\n  <option value=\"one\">This is option one</option>\n  <option value=\"two\">And this is option two</option>\n</select>"},{"type":"html","description":null,"code":"<select name=\"zoo\" disabled id=\"zoo\" class=\"#{$namespace}select\">\n  <option value=\"one\">This is option one</option>\n  <option value=\"two\">And this is option two</option>\n</select>"}]};
  const reactData = {"description":"Generates an <select> element","displayName":"Select","methods":[],"props":{"children":{"type":{"name":"node"},"required":false,"description":"options elements"},"id":{"type":{"name":"string"},"required":false,"description":"select id"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"boolean for when select is disabled"},"name":{"type":{"name":"string"},"required":false,"description":"select name"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class SelectComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default SelectComponent
