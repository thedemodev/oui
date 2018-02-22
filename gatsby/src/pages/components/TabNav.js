
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import examples from '../../../../src/components/TabNav/example'; import readme from 'raw-loader!../../../../src/components/TabNav/README.md';

  const sassData = {"name":"Tabs\n","description":"Creates a set of tabs.","start":{"line":1,"column":1},"end":{"line":56,"column":4},"example":[{"type":"html","description":"Default sized tabs","code":"<div class=\"#{$namespace}tabs\" data-oui-tabs>\n  <ul class=\"#{$namespace}tabs-nav\">\n    <li class=\"#{$namespace}tabs-nav__item is-active\" data-oui-tabs-nav-item>Tab One</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Two</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Three</li>\n  </ul>\n  <div class=\"#{$namespace}tabs-pane\" data-oui-tabs-pane>\n    <div class=\"#{$namespace}tabs-pane__item is-active\" data-oui-tabs-panes-item>Tab Content One</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Two</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Three</div>\n  </div>\n</div>"},{"type":"html","description":"Small tabs","code":"<div class=\"#{$namespace}tabs #{$namespace}tabs--small\" data-oui-tabs>\n  <ul class=\"#{$namespace}tabs-nav\">\n    <li class=\"#{$namespace}tabs-nav__item is-active\" data-oui-tabs-nav-item>Tab One</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Two</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Three</li>\n  </ul>\n  <div class=\"#{$namespace}tabs-pane\" data-oui-tabs-pane>\n    <div class=\"#{$namespace}tabs-pane__item is-active\" data-oui-tabs-panes-item>Tab Content One</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Two</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Three</div>\n  </div>\n</div>"},{"type":"html","description":"Center aligned small tabs","code":"<div class=\"#{$namespace}tabs #{$namespace}tabs--small #{$namespace}tabs--center\" data-oui-tabs>\n  <ul class=\"#{$namespace}tabs-nav\">\n    <li class=\"#{$namespace}tabs-nav__item is-active\" data-oui-tabs-nav-item>Tab One</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Two</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Three</li>\n  </ul>\n  <div class=\"#{$namespace}tabs-pane\" data-oui-tabs-pane>\n    <div class=\"#{$namespace}tabs-pane__item is-active\" data-oui-tabs-panes-item>Tab Content One</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Two</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Three</div>\n  </div>\n</div>"},{"type":"html","description":"Alternate small tab style with bottom border","code":"<div class=\"#{$namespace}tabs #{$namespace}tabs--small #{$namespace}tabs--sub\" data-oui-tabs>\n  <ul class=\"#{$namespace}tabs-nav\">\n    <li class=\"#{$namespace}tabs-nav__item is-active\" data-oui-tabs-nav-item>Tab One</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Two</li>\n    <li class=\"#{$namespace}tabs-nav__item\" data-oui-tabs-nav-item>Tab Three</li>\n  </ul>\n  <div class=\"#{$namespace}tabs-pane\" data-oui-tabs-pane>\n    <div class=\"#{$namespace}tabs-pane__item is-active\" data-oui-tabs-panes-item>Tab Content One</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Two</div>\n    <div class=\"#{$namespace}tabs-pane__item\" data-oui-tabs-panes-item>Tab Content Three</div>\n  </div>\n</div>"}]};
  const reactData = {"description":"Wrapper component for a set of tabs","methods":[],"props":{"activeTab":{"type":{"name":"string"},"required":true,"description":"Id corresponding to which tab should be given the active class"},"children":{"type":{"name":"node"},"required":true,"description":"Set of Tab components"},"style":{"type":{"name":"arrayOf","value":{"name":"enum","value":[{"value":"'small'","computed":false},{"value":"'center'","computed":false},{"value":"'sub'","computed":false}]}},"required":false,"description":"Various styles that can be given to the navigation"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class TabNavComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default TabNavComponent
