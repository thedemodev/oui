import React from 'react';
import ReadmeComponent from '../../layouts/components/ReadmeComponent';
import Examples from '../../layouts/components/Examples';
import PropsGrid from '../../layouts/components/PropsGrid'

class ComponentContent extends React.Component {
  render() {
    const {
      react,
      examples,
      readme
    } = this.props.data;

    console.log(this.props.data);

    return <div>  
      <ReadmeComponent markdownData={ readme }/>
      <Examples examplesData={ examples } />
      <PropsGrid componentProps={ react.props } />
    </div>;
  }
}

export default ComponentContent;