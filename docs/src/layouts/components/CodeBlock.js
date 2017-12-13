import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Highlight from 'highlight.js/lib/highlight.js';
import 'highlight.js/styles/monokai.css';

Highlight.registerLanguage('css', require('highlight.js/lib/languages/css'));
Highlight.registerLanguage('html', require('highlight.js/lib/languages/xml'));
Highlight.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
Highlight.registerLanguage('js', require('highlight.js/lib/languages/javascript'));
Highlight.registerLanguage('jsx', require('highlight.js/lib/languages/javascript'));
Highlight.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
Highlight.registerLanguage('scss', require('highlight.js/lib/languages/scss'));


class CodeBlock extends React.Component {
  state = {
    isOpen: false
  }
  
  renderCode = () => {
    let dangerouslySetInnerHTML = null;
    const {
      isHighlighted = true,
      language,
      type,
    } = this.props;
    let code = this.props.children;

    if (isHighlighted) {
      // Code that uses syntax highlighting needs to have
      // `dangerouslySetInnerHTML` set so that the HTML returned is displayed.
      dangerouslySetInnerHTML = {
        __html: language ? Highlight.highlight(language, code).value :
          Highlight.highlightAuto(code).value,
      };
      code = null;
    }

    return (
      /* eslint-disable react/no-danger */
      <code
        dangerouslySetInnerHTML={ dangerouslySetInnerHTML }>
        { code }
      </code>
      /* eslint-enable react/no-danger */
    );
  }

  render() {
    const {
      children,
      type,
    } = this.props;

    const {
      renderCode,
    } = this;

    if (!children) {
      return null;
    }

    if (type === 'block') {
      return this.renderCode();
    }

    return (
      <div>
        <pre>
          { this.renderCode() }
        </pre>
      </div>
    );
  }
}

CodeBlock.propTypes = {
  /** The code within the component */
  children: PropTypes.string,
  /** Adds a copy button to code examples */
  hasCopyButton: PropTypes.bool,
  /** Apply syntax highlighting to the code */
  isHighlighted: PropTypes.bool,
  /** Specify a language for the syntax highlighter */
  language: PropTypes.oneOf(['css', 'html', 'javascript',
    'js', 'jsx', 'markdown', 'md', 'scss']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** How the code should be displayed */
  type: PropTypes.oneOf(['inline', 'block']).isRequired,
};

export default CodeBlock;
