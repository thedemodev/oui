import classNames from 'classnames';
import { cloneDeep } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'react-oui-icons';
import ReactDiffViewer from 'react-diff-viewer';

import {
  brandBlueDark,
} from '../../tokens/forimport/index.es';

export const CodeDiff = (props) => {
  let before = cloneDeep(props.oldValue);
  let after = cloneDeep(props.newValue);

  // Attempt to stringify, since non-strings will
  // throw an error in ReactDiffViewer anyways
  if ([before, after].some(val => typeof val !== 'string')) {
    before = JSON.stringify(before, null, 2);
    after = JSON.stringify(after, null, 2);
  }

  return (
    <div
      className={ classNames(
        'oui-codediff',
        {
          'border--top': props.borderLocation.includes('top'),
          'border--right': props.borderLocation.includes('right'),
          'border--bottom': props.borderLocation.includes('bottom'),
          'border--left': props.borderLocation.includes('left'),
        }
      ) }
      data-test-section={ props.testSection }>
      {
        props.header && (
          <div className="background--grey-25 border--bottom color--base soft--sides soft-half--ends">
            {props.header}
          </div>
        )
      }
      <ReactDiffViewer
        { ...props }
        codeFoldMessageRenderer={ () => ( // eslint-disable-line react/jsx-no-bind
          <div className="flex" style={{ marginTop: 3 }}>
            {/* TODO(AXIOM-139) Use "Arrow Ns" icon when available */}
            <Icon name='ellipsis' fill={ brandBlueDark } />
          </div>
        ) }
        oldValue={ before }
        newValue={ after }
        /**
         * BEGIN: TODO(AXIOM-138) Ensure styling is correct and remove
         * remaining default declarations mentioned below
         */
        // See https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#overriding-styles
        // for more info on styling options
        styles={{
          line: {
            wordBreak: 'break-word',
          },
          codeFoldGutter: {
            backgroundColor: '#f1f8ff', // Sames as variables.light.codeFoldBackground
          },
        }}
        /**
         * END: TODO(AXIOM-138) Ensure styling is correct and
         * remove remaining default declarations above
         */
      />
    </div>
  );
};

CodeDiff.propTypes = {
  /** Where borders should be added. Defaults to borders on every side (OUI) */
  borderLocation: PropTypes.arrayOf(PropTypes.oneOf(['top', 'right', 'bottom', 'left'])),
  /**
   * New value. If of type "object", will be
   * formatted with JSON.stringify (ReactDiffViewer)
   */
  header: PropTypes.node,
  /**
   * Differential title that spans all columns.
   * If not provided, no header will be shown (OUI)
   */
  newValue: PropTypes.any.isRequired,
  /** Show and hide line numbers (ReactDiffViewer) */
  oldValue: PropTypes.any.isRequired,
  /** Value used for testing via data-test-section attribute (OUI) */
  testSection: PropTypes.string,
  /**
   * Get info on the core component (ReactDiffViewer)
   * props at https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props
   */
};

CodeDiff.defaultProps = {
  borderLocation: ['top', 'right', 'bottom', 'left'],
  compareMethod: 'diffWords',
  header: '',
  testSection: '',
};

export default CodeDiff;
