
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; const readme = null;

  const sassData = {"name":"Input Icons\n","description":"Add SVG icons, like search or calendar, to the left and/or\nright of inputs.\nUse padding classes on input as needed to provide space, e.g.\n`soft-triple--left`.","start":{"line":1,"column":1},"end":{"line":18,"column":4},"example":[{"type":"html","description":"Calendar and arrow icons surrounding text input","code":"<div class=\"#{$namespace}input-icon display--inline-block\">\n  <input type=\"text\" class=\"oui-text-input soft-triple--sides width--150\">\n  <svg class=\"#{$namespace}icon #{$namespace}input-icon__left #{$namespace}input-icon__muted\">\n    <use xlink:href=\"#calendar-16\"></use>\n  </svg>\n  <svg class=\"#{$namespace}icon #{$namespace}input-icon__right #{$namespace}input-icon__muted\">\n    <use xlink:href=\"#undo-16\"></use>\n  </svg>\n</div>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class InputIconComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default InputIconComponent
