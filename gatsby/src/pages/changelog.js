import React from 'react';
import ReadmeComponent from '../layouts/components/ReadmeComponent';
import markdown from 'raw-loader!../../../CHANGELOG.md';

const Changelog = () => {
  return <ReadmeComponent markdownData={ markdown } />;
};

export default Changelog;
