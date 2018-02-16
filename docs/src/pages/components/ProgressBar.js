
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/ProgressBar/example'; import readme from 'raw-loader!../../../../src/components/ProgressBar/README.md';

  const sassData = {"name":"Progress Bar\n","description":"Creates a progress bar.","start":{"line":1,"column":1},"end":{"line":20,"column":4},"example":[{"type":"html","description":null,"code":"<div class=\"#{$namespace}progress\">\n  <div class=\"#{$namespace}progress__bar\" style=\"width: 60%;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\">60%</div>\n</div>"},{"type":"html","description":null,"code":"<div class=\"#{$namespace}progress\">\n  <div class=\"#{$namespace}progress__bar\" style=\"width: 1%;\" aria-valuenow=\"1\" aria-valuemin=\"0\" aria-valuemax=\"100\">1%</div>\n</div>"},{"type":"html","description":null,"code":"<div class=\"#{$namespace}progress\">\n  <div class=\"#{$namespace}progress__bar\" style=\"width: 0%;\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\n</div>"},{"type":"html","description":null,"code":"<div class=\"#{$namespace}progress #{$namespace}progress--bad-news\">\n  <div class=\"#{$namespace}progress__bar\" style=\"width: 80%;\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">80%</div>\n</div>"}]};
  const reactData = {"description":"Generates an `ProgressBar` element\nmost of the common input types.","methods":[],"props":{"displayError":{"type":{"name":"bool"},"required":false,"description":"badNews will change the progress bar color to red","defaultValue":{"value":"false","computed":false}},"leftLabel":{"type":{"name":"string"},"required":false,"description":"left label"},"max":{"type":{"name":"union","value":[{"name":"number"},{"name":"string"}]},"required":false,"description":"max","defaultValue":{"value":"100","computed":false}},"min":{"type":{"name":"union","value":[{"name":"number"},{"name":"string"}]},"required":false,"description":"min","defaultValue":{"value":"0","computed":false}},"progress":{"type":{"name":"union","value":[{"name":"number"},{"name":"string"}]},"required":false,"description":"string data for progress"},"rightLabel":{"type":{"name":"string"},"required":false,"description":"right label"},"topLabel":{"type":{"name":"string"},"required":false,"description":"top label"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class ProgressBarComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ProgressBarComponent
