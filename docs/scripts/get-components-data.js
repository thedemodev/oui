const fs = require('fs');
const jsonfile = require('jsonfile');
const glob = require('glob');
const mkdirp = require('mkdirp');
const dirname = require('path').dirname;

const componentData = {
  components: {}
};

// Grab all of the components
const componentFolders = glob.sync(`node_modules/optimizely-oui/src/components/**/`, {
  ignore: [
    'node_modules/optimizely-oui/src/components/', 
    'node_modules/optimizely-oui/src/overrides/', 
    'node_modules/optimizely-oui/src/components/**/tests/*', 
    'node_modules/optimizely-oui/src/components/**/tests/', 
    '**/example/', 
    'node_modules/optimizely-oui/src/components/**/Icon/*', 
    'node_modules/optimizely-oui/src/components/**/Icon/'],
});

const componentsArray = componentFolders.map( filePath => {
  const reactComponentPath = `${filePath}index.js`;
  const fileName = filePath.split('/')[5];

  const categoryName = filePath.split('/')[4];
  
//  Parse folder name to get the component name
  const componentName = filePath.substring(0, filePath.length - 1).replace(`node_modules/optimizely-oui/src/components/`, '');  
  componentData.components[componentName] = {
    name: componentName,
  };
  // Write a file from the componentTemplate with info about the React Component
  jsonfile.writeFile(`./src/data/components-data.json`, componentData, (err) => {
    if(err) { console.log(err) }
  });
});

console.log(componentData)