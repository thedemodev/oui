import React from 'react'
import Showdown from 'showdown'
import ReadmeComponent from '../layouts/components/ReadmeComponent'
import markdown from 'raw-loader!./markdown-docs/oui.md'

const Oui = () => {
  const converter = new Showdown.Converter();
  const htmlFromMarkdown = converter.makeHtml(markdown);

  return <ReadmeComponent markdownData={ htmlFromMarkdown } />
}
export default Oui