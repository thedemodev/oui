exports.BridgeComponent = function(
  componentName,
  data
) {
  return `
  import React from 'react'
  
  const ${componentName} = () => <div data={data}> { children } </div>
  
  export default ${componentName}Component
`
};
