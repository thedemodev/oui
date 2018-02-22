
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/Card/example'; import readme from 'raw-loader!../../../../src/components/Card/README.md';

  const sassData = {"name":"Card styles\n","description":"","start":{"line":1,"column":1},"end":{"line":3,"column":4}};
  const reactData = {"description":"Provide a basic card display which has a title and inner content\nThe card can have an optional close icon","methods":[],"props":{"children":{"type":{"name":"string"},"required":true,"description":"Elements that appears within the component"},"onClose":{"type":{"name":"func"},"required":false,"description":"method to invoke when a close element is clicked"},"shadow":{"type":{"name":"custom","raw":"PropTypes.boolean"},"required":false,"description":"Display a subtle shadow around card.","defaultValue":{"value":"false","computed":false}},"testSection":{"type":{"name":"string"},"required":false,"description":"For automated testing only."},"title":{"type":{"name":"string"},"required":true,"description":"What is the card title"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class CardComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default CardComponent
