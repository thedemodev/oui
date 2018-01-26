import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import PrismCode from './PrismCode'

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { dark } from 'react-syntax-highlighter/styles/prism';

class Code extends React.Component {

  constructor() {
    super();
    this.renderCode = this.renderCode.bind(this);
  }

  renderCode() {
    const {
      language,
      type,
      testSection,
      children,
    } = this.props;

    return (
      /* eslint-disable react/no-danger */
      <SyntaxHighlighter language={language} style={ dark }>
        { children }
      </SyntaxHighlighter>
      /* eslint-enable react/no-danger */
    );
  }

  render() {
    const {
      children,
      type,
      hasCopyButton,
      testSection,
      className,
      ouiStyle = true,
    } = this.props;


    if (!children) {
      return null;
    }

    if (type === 'inline') {
      return this.renderCode();
    }

    return (
      <div data-oui-component={ true } className="position--relative">
        <pre
          data-test-section={ testSection }>
          { this.renderCode() }
        </pre>
      </div>
    );
  }
}

Code.propTypes = {
  /** The code within the component */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /** Adds a copy button to code examples */
  hasCopyButton: PropTypes.bool,
  /** Apply syntax highlighting to the code */
  isHighlighted: PropTypes.bool,
  /** Specify a language for the syntax highlighter */
  language: PropTypes.oneOf(['cs', 'css', 'diff', 'html', 'java', 'javascript',
    'js', 'jsx', 'markdown', 'md', 'objectivec', 'php', 'python', 'ruby', 'scss',
    'swift']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** How the code should be displayed */
  type: PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default Code;
