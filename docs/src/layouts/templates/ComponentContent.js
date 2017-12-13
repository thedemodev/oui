import React from 'react';


class ComponentContent extends React.Component {
  render() {
    console.log(this.props.data)
    return <div> hola a todos </div>;
  }
}

export default ComponentContent;