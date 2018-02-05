const fs = require('fs');
const path = require('path');
const writeFile = require('fs').writeFile;

const filenames = [
  './docs/src/pages/design/',
  './docs/src/pages/components/'
];

const read = (dir) =>
  fs.readdirSync(dir)
    .reduce((files, file) =>
      fs.statSync(path.join(dir, file)).isDirectory() 
        ? files.concat(read(path.join(dir, file))) 
        : files.concat(path.join(dir, file)),
      []);

const designNames = read(filenames[0])
                  .map( file => file.split('/')[4].split('.')[0])
                  .filter( name => name !== 'index');

const componentNames = read(filenames[1])
                  .map( file => file.split('/')[4].split('.')[0])
                  .filter( name => name !== 'index');


//Write components names for sidebar
fs.writeFile('./docs/src/data/components-names.json', JSON.stringify({ components: componentNames }), (err) => {
  if (err) throw err;
  console.log('components names have been saved in ./src/data/components-names.json!');
});

//Write names of design section pages for sidebar
fs.writeFile('./docs/src/data/design-names.json', JSON.stringify({ designNames: [...new Set(designNames)] }), (err) => {
  if (err) throw err;
  console.log('design dir folder names have been save in ./src/data/design-names.json!');
});
