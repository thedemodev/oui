import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import data from '../data/components-data.json'
import SidebarSection from './components/SidebarSection'

// import '../../../dist/docs/oui/28.5.0/js/styles.js'
import '../../../src/oui/oui.scss'
import logo from '../images/logo.svg'

import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 75px 1fr;
  grid-template-areas:
    "brand header"
    "sidebar content";
  font-family: 'Open Sans', sans-serif;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  grid-area: content;
  overflow: auto;
`;

const ContentChildren = styled.div``;

const Brand = styled.div`
  grid-area: brand;
  padding: 20px 10px;
  img {
    width: 200px;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  display: block;
  text-decoration: none;
  padding: 10px 0px;
  &:hover {
    color: dodgerblue;
  }
`;

const Header = styled.div`
  grid-area: header;
`;

const TemplateWrapper = ({ children }) => {
  const existingItems = [];
  const listItems = Object.keys(data.components).map( (item, index) => {
    const newItem = item.split('/')[0]
    if(existingItems.indexOf(newItem) > -1 ) {
      return;
    } else {
      existingItems.push(newItem)
    }
    
    return <StyledLink key={item} to={`/components/${item}`}>{item}</StyledLink>
  });
  return (
    <div>
      <Helmet
        title="OUI Docs"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
        link={[
          { href: `https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,600,600italic|Source+Code+Pro`, rel: 'stylesheet'}
        ]}
      />
      <Container>
        <Brand>
          <img src={logo} />
        </Brand>
        <Header>
          <Navbar />
        </Header>
        <Sidebar bgColor='white'>
          <StyledLink to="/">Overview</StyledLink>
          <StyledLink to="/oui">OUI</StyledLink>
          <SidebarSection title="Components">
            { listItems }
          </SidebarSection>  
        </Sidebar>
        <Content>
          <ContentChildren>
            { children() }
          </ContentChildren>
        </Content>
      </Container>
    </div>);
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
