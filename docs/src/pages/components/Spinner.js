
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/Spinner/example'; import readme from 'raw-loader!../../../../src/components/Spinner/README.md';

  const sassData = {"name":"Spinner\n","description":"Loading spinner. Target `.#{$namespace}overlay` to position\nas needed.","start":{"line":1,"column":1},"end":{"line":36,"column":4},"example":[{"type":"html","description":"Default spinner","code":"<div class=\"position--relative height--100\">\n  <div class=\"#{$namespace}overlay\">\n    <div class=\"#{$namespace}spinner\"></div>\n  </div>\n </div>"},{"type":"html","description":"Small spinner","code":"<div class=\"position--relative height--100\">\n  <div class=\"#{$namespace}overlay\">\n    <div class=\"#{$namespace}spinner #{$namespace}spinner--small\"></div>\n  </div>\n </div>"},{"type":"html","description":"Tiny spinner","code":"<div class=\"position--relative height--100\">\n  <div class=\"#{$namespace}overlay\">\n    <div class=\"#{$namespace}spinner #{$namespace}spinner--tiny\"></div>\n  </div>\n </div>"},{"type":"html","description":"Spinner with overlay\nThis gets inserted into an element and blocks user interaction. Requires a\nparent `div` with positioning (`absolute` or `relative`).","code":"<div class=\"position--relative\">\n   <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum iusto repudiandae earum porro reprehenderit perspiciatis iste delectus ipsam, accusantium ad sunt, rem mollitia, omnis illum explicabo facere quibusdam qui.</div>\n   <div class=\"#{$namespace}overlay\">\n     <div class=\"#{$namespace}spinner #{$namespace}spinner--small\"></div>\n   </div>\n</div>"}]};
  const reactData = {"description":"Generates an `spinner` element with/without overlay and optinaly\nusing props for sizes small or tiny for smaller sizes.","displayName":"Spinner","methods":[],"props":{"hasOverlay":{"type":{"name":"bool"},"required":false,"description":"boolean class for establish overlay"},"size":{"type":{"name":"enum","value":[{"value":"'small'","computed":false},{"value":"'tiny'","computed":false}]},"required":false,"description":"various sizes"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class SpinnerComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default SpinnerComponent
