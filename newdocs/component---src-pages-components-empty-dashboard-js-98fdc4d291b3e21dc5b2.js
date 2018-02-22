webpackJsonp([0x86193519b038],{250:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(1),d=i(o),r=a(5),p=i(r),u=a(306),m=i(u),h=a(637),c=i(h),f=null,g={description:"",methods:[],props:{button:{type:{name:"node"},required:!1,description:"A button, link, or other element that is actionable"},description:{type:{name:"element"},required:!1,description:"A string or `div` containing longer text that describes the empty state"},descriptionMaxWidth:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"Max width of description. Accepts any valid CSS width value.",defaultValue:{value:"'450px'",computed:!1}},headline:{type:{name:"string"},required:!0,description:"Short text about the empty state"},imagePath:{type:{name:"string"},required:!1,description:"Path to an image representing the empty state"},testSection:{type:{name:"string"},required:!1,description:"Identifier used to create data-test-section attributes for testing",defaultValue:{value:"'empty-hello'",computed:!1}}},private:!1},y={react:g,examples:m.default?m.default:null,readme:c.default?c.default:null,sass:f},x=function(e){function t(){return s(this,t),l(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(){return d.default.createElement(p.default,{data:y})},t}(d.default.Component);t.default=x,e.exports=t.default},637:function(e,t){e.exports='# EmptyDashboard Component\n\n## Empty states\nUsers encounter empty states the first time they use our products or a new feature. It’s our opportunity to educate and delight our customers, as well as alleviate their fears and anxieties.\n\nA good empty state will inform people what this page is, why they should care, and what their next step should be. Linking to educational content, such as Knowledge Base articles and blog posts, is a great way to make our customers successful. Finally, a good empty state should also have an illustrated graphic to visually explain what the feature does, and save the screen from being just text.\n\nA poor empty state, on the other hand, is one that is just blank, or simply tells the user there is no data.\n\n## Good Example\n\n![alt text](http://design.optimizely.com/assets/img/design-patterns/product/empty-states/example-good.png "empty state example")\n\nThe empty Campaigns screen welcomes people to Optimizely Personalization with an illustration, briefly explains what a campaign is, and provides a call-to-action to create a campaign.\n\n![alt text] (http://design.optimizely.com/assets/img/design-patterns/product/empty-states/example-sidebar.png "empty state example")\n\nSidebars should also have an empty state that explains what the feature does, what the user\'s next step is, and an illustration.\n\n## Bad Example \n\n![alt text] (http://design.optimizely.com/assets/img/design-patterns/product/empty-states/example-bad.png "bad example")\n\nThe empty state of the Uploaded Lists feature is poor for many reasons. First, it simply states that the user has 0 lists and is using 0 bytes of space. This is dry and not helpful. Second, it states, “No uploaded lists match your filters. Try clearing them to see all of your uploaded lists.” This statement is incorrect and confusing because the user isn’t filtering anything — there simply aren\'t any lists uploaded yet. The sidebar tells people to select a list, but there aren’t any lists to select. Finally, there’s a missed opportunity to educate users about what this feature is, how to use it, and why they should use it.\n\n## Oui React *EmptyDashboard* Component'},306:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(1),l=i(s),n=a(15),o=i(n),d=a(307),r=i(d);t.default=[{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg"})]},{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X Extensions",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/extensions-empty-state.svg"})]},{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/custom-project-experiments-empty-state.svg"})]},{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/empty-rollouts.svg"})]},{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/empty-feature-flags.svg"})]},{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/audience-list-empty-state.svg"})]},{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/attribute-dashboard-empty-state.svg"})]},{isPadded:!0,examples:[l.default.createElement(r.default,{headline:"Get started with Optimizely X",description:l.default.createElement("div",null,"This is a test description about with a Google."),button:l.default.createElement(o.default,{style:"highlight"},"Highlight"),imagePath:"https://app.optimizely.com/static/img/x/empty-states/page-list-empty-state.svg"})]}],e.exports=t.default},307:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var s=a(1),l=i(s),n=a(2),o=i(n),d=function(e){var t=e.button,a=e.imagePath,i=e.headline,s=e.description,n=e.descriptionMaxWidth,o=e.testSection;return l.default.createElement("div",{"data-oui-component":!0,className:"flex overflow-y--scroll flex--1","data-test-section":"layers-empty-state",style:{width:"750px",margin:"auto"}},l.default.createElement("div",{className:"anchor--middle height--1-1 flex flex--column"},l.default.createElement("div",{"data-ui-component":!0,className:"text--center soft-quad","data-test-section":o},a&&l.default.createElement("div",{className:"muted push-double--bottom",style:{width:"550px",margin:"auto"}},l.default.createElement("object",{data:a,className:"svg--non-scaling-stroke display--inline",style:{maxWidth:"450px",maxHeight:"290px"},"data-test-section":o&&o+"-image",alt:""})),i&&l.default.createElement("h1",{className:"alpha push--bottom","data-test-section":o&&o+"-headline"},i),s&&l.default.createElement("div",{className:"muted push--bottom anchor--middle",style:{maxWidth:n},"data-test-section":o&&o+"-description"},s),t&&l.default.createElement("div",{className:"push-double--top"},t))))};d.propTypes={button:o.default.node,description:o.default.element,descriptionMaxWidth:o.default.oneOfType([o.default.string,o.default.number]),headline:o.default.string.isRequired,imagePath:o.default.string,testSection:o.default.string},d.getDefaultProps={descriptionMaxWidth:"450px",testSection:"empty-hello"},e.exports=d}});
//# sourceMappingURL=component---src-pages-components-empty-dashboard-js-98fdc4d291b3e21dc5b2.js.map