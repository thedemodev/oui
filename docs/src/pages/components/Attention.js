
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/Attention/example'; import readme from 'raw-loader!../../../../src/components/Attention/README.md';

  const sassData = {"name":"Attention\n","description":"Boxes for highlighting important information or warnings.","start":{"line":1,"column":1},"end":{"line":36,"column":4},"example":[{"type":"html","description":"Default colored attention bar with little content","code":"<div class=\"oui-attention oui-text--center\">\n   This is a note.\n</div>"},{"type":"html","description":"Default colored attention bar with long content","code":"<div class=\"oui-attention\">\n   This is a longer note adipisicing elit. Recusandae ipsum tenetur est quisquam beatae aliquam facere molestiae re endis aperiam molestias consequuntur voluptatum corporis voluptas laudantium dolor, nam quam laboriosam harum.\n</div>"},{"type":"html","description":"Default colored attention bar with close button","code":"<div class=\"oui-attention oui-text--center\">\n  <svg class=\"oui-icon oui-attention__close\">\n    <use xlink:href=\"#close-16\"></use>\n  </svg>\n  This is a note.\n</div>"},{"type":"html","description":"Brand colored attention bar","code":"<div class=\"oui-attention oui-attention--brand oui-text--center\">\n  This is a note.\n</div>"},{"type":"html","description":"Warning colored attention bar","code":"<div class=\"oui-attention oui-attention--warning oui-text--center\">\n  This is a note.\n</div>"},{"type":"html","description":"Success colored attention bar","code":"<div class=\"oui-attention oui-attention--good-news oui-text--center\">\n  This is a note.\n</div>"},{"type":"html","description":"Error colored attention bar","code":"<div class=\"oui-attention oui-attention--bad-news oui-text--center\">\n  This is a note.\n</div>"}]};
  const reactData = {"description":"Provide contextual feedback with a wide range of styles that can be used to\nconvey the message's importance.","methods":[],"props":{"alignment":{"type":{"name":"enum","value":[{"value":"'left'","computed":false},{"value":"'center'","computed":false}]},"required":false,"description":"How the text is aligned","defaultValue":{"value":"'left'","computed":false}},"children":{"type":{"name":"union","value":[{"name":"string"},{"name":"node"}]},"required":true,"description":"Text that appears within the component"},"isDismissible":{"type":{"name":"bool"},"required":false,"description":"Button allowing users to dismiss the component"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"},"type":{"type":{"name":"enum","value":[{"value":"'bad-news'","computed":false},{"value":"'brand'","computed":false},{"value":"'good-news'","computed":false},{"value":"'warning'","computed":false}]},"required":false,"description":"Various color schemes","defaultValue":{"value":"'brand'","computed":false}}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class AttentionComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default AttentionComponent
