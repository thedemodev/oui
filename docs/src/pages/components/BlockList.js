
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/BlockList/example'; import readme from 'raw-loader!../../../../src/components/BlockList/README.md';

  const sassData = {"name":"Block List\n","description":"Create big blocky vertical lists with dividers.","start":{"line":1,"column":1},"end":{"line":25,"column":4},"example":[{"type":"html","description":"Default block list","code":"<ul class=\"#{$namespace}block-list\">\n  <li>Foo</li>\n  <li>Bar</li>\n  <li>Baz</li>\n  <li><a href=\"#\" class=\"#{$namespace}block-list__link\">Foo Bar Baz</a></li>\n</ul>"},{"type":"html","description":"Block list with bottom border","code":"<ul class=\"#{$namespace}block-list #{$namespace}block-list--all\">\n  <li>Foo</li>\n  <li>Bar</li>\n  <li>Baz</li>\n  <li><a href=\"#\" class=\"#{$namespace}block-list__link\">Foo Bar Baz</a></li>\n</ul>"},{"type":"html","description":"Block list with boundary","code":"<ul class=\"#{$namespace}block-list-group\">\n  <li>Foo</li>\n  <li>Bar</li>\n  <li>Baz</li>\n  <li><a href=\"#\" class=\"#{$namespace}block-list__link\">Foo Bar Baz</a></li>\n</ul>"}]};
  const reactData = {"description":"Building blocks to display a list of items that perform actions.","methods":[],"props":{"children":{"type":{"name":"node"},"required":true,"description":"Should be subcomponents of `BlockList`"},"hasBorder":{"type":{"name":"bool"},"required":false,"description":"Should the `BlockList` contain a border on all sides","defaultValue":{"value":"true","computed":false}},"maxHeight":{"type":{"name":"union","value":[{"name":"number"},{"name":"string"}]},"required":false,"description":"The max height of the `BlockList`. Pixels will be assumed if no unit is\nprovided."},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class BlockListComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default BlockListComponent
