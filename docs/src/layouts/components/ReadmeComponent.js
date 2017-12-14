import React from 'react';
import styled from 'styled-components';
import { markdown } from 'markdown';

const Container = styled.div`
  padding: 20px 100px;
  h1 {
    font-size: 38px;
    line-height: 1.1;
    margin-bottom: 40px;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 26px;
  }
  h3 {
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  p {
    margin-bottom: 10px;
  }
  a {
    color: #0081BA;
  }
  ul {
    padding-left: 15px;
    list-style-type: disc;
  }
  ol {
    padding-left: 15px;
    list-style-type: decimal;
  }
  pre {
    color: #666;
    background-color: #f6f6f6;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    line-height: 1.4;
    padding: 15px;
  }
`;

const ReadmeComponent = ({
  markdownData
}) => {
  return (<div>
    <Container dangerouslySetInnerHTML={{ __html: markdown.toHTML( markdownData ) }} />
    </div>
  )
}

export default ReadmeComponent