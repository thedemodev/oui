// this file will run everytime you run `yarn develop`
// the server must be restarted anytime a file is added to the pages folders

const fs = require('fs');
const path = require('path');

const filenames = [
  path.resolve('src/pages/design/'),
  path.resolve('src/pages/components/'),
  path.resolve('src/data/')
];

const read = (dir) =>
  fs.readdirSync(dir)
    .reduce((files, file) =>
      fs.statSync(path.join(dir, file)).isDirectory() 
        ? files.concat(read(path.join(dir, file))) 
        : files.concat(path.join(dir, file)),
      []);

const designNames = read(filenames[0])
                  .map( file => file.split('/')[9].split('.')[0])
                  .filter( name => name !== 'index');

const componentNames = read(filenames[1])
                  .map( file => file.split('/')[9].split('.')[0])
                  .filter( name => name !== 'index');

//Write components names for sidebar
fs.writeFile(`${filenames[2]}/components-names.json`, JSON.stringify({ components: componentNames }), (err) => {
  if (err) throw err;
  console.log('components names have been saved in ./src/data/components-names.json!');
});

// //Write names of design section pages for sidebar
fs.writeFile(`${filenames[2]}/design-names.json`, JSON.stringify({ designNames: [...new Set(designNames)] }), (err) => {
  if (err) throw err;
  console.log('design dir folder names have been save in ./src/data/design-names.json!');
});
