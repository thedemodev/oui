
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Accordion/README.md';

  const sassData = {"name":"Accordion\n","description":"A vertical accordion with any number of panels.\nThere are two dependencies:\n- The parent div must be `display:flex`;\n- The parent div must have height, usually accomplished with a `flex: 1`;","start":{"line":1,"column":1},"end":{"line":39,"column":4},"example":[{"type":"html","description":"HTML for an accordion","code":"<div class=\"flex height--300 border--all\">\n  <ul class=\"#{$namespace}accordion\">\n    <li class=\"#{$namespace}accordion__item is-active\">\n      <a class=\"#{$namespace}accordion__link\" href=\"#\">Item One</a>\n      <div class=\"#{$namespace}accordion__content-wrap\">\n        <div class=\"#{$namespace}accordion__content\">\n          <p>Dimensions can be used to track extra data about visitors. You can use dimensions to filter your results or de  fine new audiences for targeting. Learn more.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"#{$namespace}accordion__item\">\n      <a class=\"#{$namespace}accordion__link\" href=\"#\">Item Two</a>\n      <div class=\"#{$namespace}accordion__content-wrap\">\n        <div class=\"#{$namespace}accordion__content\">\n          <p>Dimensions can be used to track extra data about visitors. You can use dimensions to filter your results or de  fine new audiences for targeting. Learn more.</p>\n        </div>\n      </div>\n    </li>\n    <li class=\"#{$namespace}accordion__item\">\n      <a class=\"#{$namespace}accordion__link\" href=\"#\">Item Three</a>\n      <div class=\"#{$namespace}accordion__content-wrap\">\n        <div class=\"#{$namespace}accordion__content\">\n          <p>Dimensions can be used to track extra data about visitors. You can use dimensions to filter your results or de  fine new audiences for targeting. Learn more.</p>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class AccordionComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default AccordionComponent
