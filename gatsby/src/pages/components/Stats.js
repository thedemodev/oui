
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Stats/README.md';

  const sassData = {"name":"Stats\n","description":"Simple object to display key-value statistic-like information,\nfor example issue counts.","start":{"line":1,"column":1},"end":{"line":20,"column":4},"example":[{"type":"html","description":null,"code":"<div class=\"#{$namespace}stat-group\">\n  <div class=\"#{$namespace}stat\">\n    <div class=\"stat__value\">200</div>\n    <div class=\"stat__title\">Visitors</div>\n  </div>\n  <div class=\"#{$namespace}stat\">\n    <div class=\"stat__value\">7000</div>\n    <div class=\"stat__title\">View</div>\n  </div>\n  <div class=\"#{$namespace}stat\">\n    <div class=\"stat__value\">9,600</div>\n    <div class=\"stat__title\">Followers</div>\n  </div>\n</div>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class StatsComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default StatsComponent
