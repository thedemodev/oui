
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Steps/README.md';

  const sassData = {"name":"Steps\n","description":"A type of progress bar showing steps through a flow. Use with\na width helper class if needed so that it fits cleanly.","start":{"line":1,"column":1},"end":{"line":24,"column":4},"example":[{"type":"html","description":null,"code":"<ul class=\"#{$namespace}steps width-9-10\">\n  <li class=\"#{$namespace}steps__item #{$namespace}steps__item--complete\">\n    <div class=\"#{$namespace}steps__dot\"></div>\n    <div class=\"#{$namespace}steps__label\">Step One Label</div>\n  </li>\n  <li class=\"#{$namespace}steps__item #{$namespace}steps__item--complete\">\n    <div class=\"#{$namespace}steps__dot\"></div>\n    <div class=\"#{$namespace}steps__label\">Step Two Label</div>\n  </li>\n  <li class=\"#{$namespace}steps__item #{$namespace}steps__item--active\">\n    <div class=\"#{$namespace}steps__dot\"></div>\n    <div class=\"#{$namespace}steps__label\">Step Three Label</div>\n  </li>\n  <li class=\"#{$namespace}steps__item\">\n    <div class=\"#{$namespace}steps__dot\"></div>\n    <div class=\"#{$namespace}steps__label\">Step Four Label</div>\n  </li>\n</ul>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class StepsComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default StepsComponent
