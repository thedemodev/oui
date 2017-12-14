import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Navlist = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
  margin: 10px 0px;
  padding: 10px 0px;
`;

const Navlink = styled.div`
  padding: 10px 20px;
  a {
    font-size: 1.5em;
    color: grey;
  }
`;

class Navbar extends React.Component {
  render() {
    console.log(this.props.activeStyle)
    return (
      <Navlist>
        <Navlink> 
          <Link to='/design'>design</Link> 
        </Navlink>
        <Navlink> 
          <Link to='/components'>components</Link> 
        </Navlink>
        <Navlink> 
        <Link to='/resources'>resources</Link> 
      </Navlink>
      </Navlist>
    )
  }
}

export default Navbar