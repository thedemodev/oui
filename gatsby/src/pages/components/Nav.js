
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Nav/README.md';

  const sassData = {"name":"Nav\n","description":"Creates simple nav pattens to extend.","start":{"line":1,"column":1},"end":{"line":32,"column":4},"example":[{"type":"html","description":"Default","code":"<ul class=\"#{$namespace}nav\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">About</a></li>\n  <li><a href=\"#\">Portfolio</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>"},{"type":"html","description":"Stacked","code":"<ul class=\"#{$namespace}nav #{$namespace}nav--stacked\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">About</a></li>\n  <li><a href=\"#\">Portfolio</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>"},{"type":"html","description":"Banner (centered)","code":"<ul class=\"#{$namespace}nav #{$namespace}nav--center\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">About</a></li>\n  <li><a href=\"#\">Portfolio</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>"},{"type":"html","description":"Fit","code":"<ul class=\"#{$namespace}nav #{$namespace}nav--fit\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">About</a></li>\n  <li><a href=\"#\">Portfolio</a></li>\n  <li><a href=\"#\">Contact</a></li>\n</ul>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class NavComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default NavComponent
