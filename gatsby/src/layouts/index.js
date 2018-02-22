import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { version } from '../../../package.json'

import SidebarSection from './components/SidebarSection'

require(`../../../dist/styles.css`);
import '../../../src/oui/oui.scss'
import logo from '../images/logo.svg'

import { components } from '../data/components-names.json'
import { designNames } from '../data/design-names.json'

import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 180px 1fr;
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
  &:hover {
    color: dodgerblue;
  }
`;

const Header = styled.div`
  grid-area: header;
`;

const TemplateWrapper = ({ children }) => {
  const existingItems = [];
  const componentsList = components.map( name => <StyledLink key={name} to={`/components/${name}`}>{name}</StyledLink>);
  const designList = designNames.map( name => <StyledLink key={name} to={`/design/${name}`}>{name}</StyledLink>);
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

          <SidebarSection title="Design">
            { designList }
          </SidebarSection>

          <SidebarSection title="Components">
            { componentsList }
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
