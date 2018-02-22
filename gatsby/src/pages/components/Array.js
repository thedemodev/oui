
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Array/README.md';

  const sassData = {"name":"Array\n","description":"Create a row of any number of items at equal height and width.","start":{"line":1,"column":1},"end":{"line":16,"column":4},"example":[{"type":"html","description":"Background classes are added to show the equal dimensions.","code":"<div class=\"#{$namespace}array\">\n  <div class=\"#{$namespace}array__item background--faint\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n  </div>\n  <div class=\"#{$namespace}array__item background--faint\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae excepturi eum suscipit necessitatibus iure nam architecto.\n  </div>\n  <div class=\"#{$namespace}array__item background--faint\">\n    Lorem ipsum dolor sit amet.\n  </div>\n</div>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class ArrayComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ArrayComponent
