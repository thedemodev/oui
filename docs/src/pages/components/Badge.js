
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/Badge/example'; import readme from 'raw-loader!../../../../src/components/Badge/README.md';

  const sassData = {"name":"Badge\n","description":"Useful for counts like the number of live or draft changes.","start":{"line":1,"column":1},"end":{"line":14,"column":4},"example":[{"type":"html","description":"Default","code":"<span class=\"oui-badge\">Default</span>"},{"type":"html","description":"Draft","code":"<span class=\"oui-badge oui-badge--draft\">Draft</span>"},{"type":"html","description":"Live","code":"<span class=\"oui-badge oui-badge--live\">Live</span>"},{"type":"html","description":"Primary","code":"<span class=\"oui-badge oui-badge--primary\">Primary</span>"},{"type":"html","description":"Plain","code":"<span class=\"oui-badge oui-badge--plain\">Plain</span>"}]};
  const reactData = {"description":"Tiny inline component used to draw attention to an item's state or status.","methods":[],"props":{"children":{"type":{"name":"node"},"required":true,"description":"Text that appears within the component"},"color":{"type":{"name":"enum","value":[{"value":"'default'","computed":false},{"value":"'draft'","computed":false},{"value":"'live'","computed":false},{"value":"'primary'","computed":false},{"value":"'plain'","computed":false}]},"required":false,"description":"Various color schemes","defaultValue":{"value":"'default'","computed":false}},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class BadgeComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default BadgeComponent
