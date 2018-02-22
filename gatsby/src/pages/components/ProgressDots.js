
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/ProgressDots/example'; import readme from 'raw-loader!../../../../src/components/ProgressDots/README.md';

  const sassData = {"name":"Progress Dots\n","description":"Creates a row of three animated progress dots.","start":{"line":1,"column":1},"end":{"line":10,"column":4},"example":[{"type":"html","description":null,"code":"<ul class=\"#{$namespace}progress-dots\">\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>"}]};
  const reactData = {"description":"Generates an `ProgressDots`","displayName":"ProgressDots","methods":[],"props":{"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class ProgressDotsComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ProgressDotsComponent
