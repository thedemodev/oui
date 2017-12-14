import React from 'react'
import ReadmeComponent from '../layouts/components/ReadmeComponent'
import markdown from 'raw-loader!./markdown-docs/oui.md'

const Oui = () => {
  return <ReadmeComponent markdownData={ markdown } />
}
export default Oui