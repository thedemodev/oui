const fs = require('fs');
const writeFile = require('fs').writeFile;
const glob = require('glob');
const mkdirp = require('mkdirp');
const dirname = require('path').dirname;
const ComponentTemplate = require('../src/layouts/templates/Component').ComponentTemplate;

// Grab all of the components
const componentFolders = glob.sync(`../src/components/**/`, {
  ignore: [
    '../src/components/', 
    '../src/components/**/example', 
    '../src/overrides/', 
    '../src/components/**/tests/*', 
    '../src/components/**/tests/', 
    '**/example/', 
    '../src/components/**/Icon/*', 
    '../src/components/**/Icon/'],
});

const compArray = componentFolders.map( filePath => {
  const reactComponentPath = `${filePath}index.js`;
  const sassPath = `${filePath}index.scss`;
  const examplePath = `${filePath}example/index.js`;
  const readmePath = `${filePath}/README.md`;
  const fileName = filePath.split('/')[5];
  const categoryName = filePath.split('/')[4];
  const componentName = filePath.substring(0, filePath.length - 1).replace(`../src/components/`, '');
  let sassData = {};
  let reactData = {};

  const paths = {
    react: fs.existsSync(reactComponentPath) ? reactComponentPath : null,
    reactExample: fs.existsSync(examplePath) ? examplePath : null,
    readme: fs.existsSync(readmePath) ? readmePath : null, 
    sass: fs.existsSync(sassPath) ? sassPath : null,
  };
  
  let imports = '';

  if (fs.existsSync(reactComponentPath)) {
    reactData = JSON.stringify(require(`../../data/components/${componentName}/react.json`));
  } else {
    reactData = null;
  }
  
  if (fs.existsSync(sassPath)) { 
    sassData = JSON.stringify(require(`../../data/components/${componentName}/sass.json`));
  } else {
    sassData = null;
  }
  
  if (fs.existsSync(examplePath)) {
    const importString = `import examples from '../../../../src/components/${componentName}/example';`;
    imports = `${imports} ${importString}`;
  } else {
    imports = `${imports} const examples = null;`;
  }

  if (fs.existsSync(readmePath)) {
    const importString = `import readme from 'raw-loader!../../../../src/components/${componentName}/README.md';`;
    imports = `${imports} ${importString}`;
  } else {
    imports = `${imports} const readme = null;`;
  }


  const template = ComponentTemplate(componentName, imports, sassData, reactData);

  //Write a file from the componentTemplate with info about the React Component
  writeFile(`./src/pages/components/${componentName}.js`, template, (err) => {
    if (err) { console.log(`${componentName} component is propably nested`) }
  });
})
