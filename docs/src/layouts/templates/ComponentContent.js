import React from 'react';
import styled from 'styled-components'

import ReadmeComponent from '../../layouts/components/ReadmeComponent';
import ReactExamples from '../../layouts/components/ReactExamples';
import SassExamples from '../../layouts/components/SassExamples';
import PropsGrid from '../../layouts/components/PropsGrid';
import TabNav from '../../../../src/components/TabNav'

const Container = styled.div`
  padding: 20px 100px;
`;

class ComponentContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'react'
    }
    this.handelTabClick = this.handelTabClick.bind(this);
  }

  handelTabClick(event) {
    this.setState({ currentTab: event.target.textContent });
  }

  render() {
    const {
      react,
      examples,
      readme, 
      sass
    } = this.props.data;

    if (react && sass) {
      const languages = ['react', 'sass']
      return (
        <Container>
          { readme && <ReadmeComponent markdownData={ readme }/> }
          <TabNav activeTab={ this.state.currentTab} style={ ['small', 'sub'] }>
            { languages.map((language) => {
                return (
                  <TabNav.Tab
                    key={ language }
                    onClick={ this.handelTabClick }
                    tabId={ language }>
                    <h2>{ language }</h2>
                  </TabNav.Tab>
                );
              })
            }
          </TabNav>
          <br/>
          { this.state.currentTab === 'sass' && 
            <SassExamples examplesData={ sass } /> 
          }
          { this.state.currentTab === 'react' && 
              <span>
                <ReactExamples examplesData={ examples } />
                <PropsGrid componentProps={ react.props } /> 
              </span>
          }
        ]
        </Container>
      )
    }

    return <Container>  
      { readme && <ReadmeComponent markdownData={ readme }/> }
      { examples && <ReactExamples examplesData={ examples } /> }
      { sass && <SassExamples examplesData={ sass } /> }
      { react && <PropsGrid componentProps={ react.props } /> }
    </Container>;
  }
}

export default ComponentContent;