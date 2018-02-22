
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Search/README.md';

  const sassData = {"name":"Search\n","description":"A clearable search box.","start":{"line":1,"column":1},"end":{"line":12,"column":4},"example":[{"type":"html","description":null,"code":"<div class=\"#{$namespace}search\" clearevent=\"clearSearch\">\n  <input type=\"text\"\n         class=\"#{$namespace}text-input #{$namespace}text-input--search width-200\"\n         placeholder=\"Filter by Name\"\n         v-on=\"keyup: setStringFilter($event)\"\n         v-model=\"filters.string\">\n</div>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class SearchComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default SearchComponent
