import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactGhLikeDiff } from 'react-gh-like-diff';

// TODO(APPX-1337): Remove after new CodeDiff is determined to be stable
export const CodeDiffLegacy = ({
  oldText,
  newText,
  hideInfo,
  hideTitle,
  fileName,
  updatedFileName,
  outputStyle,
}) => {
  return (
    <div
      className={ classNames(
        'oui-codediff',
        'background--white',
        { 'oui-codediff__hide-info': hideInfo },
        { 'oui-codediff__hide-title': hideTitle }
      ) }>
      <ReactGhLikeDiff
        options={{
          originalFileName: fileName,
          updatedFileName: updatedFileName || fileName,
          renderNothingWhenEmpty: true,
          outputFormat: outputStyle,
          hideTitle: false,
        }}
        past={ oldText }
        current={ newText }
      />
    </div>
  );
};

CodeDiffLegacy.propTypes = {
  /** Original filename */
  fileName: PropTypes.string,
  /** Hide line change summary info */
  hideInfo: PropTypes.bool,
  /** Hide top title */
  hideTitle: PropTypes.bool,
  /** New content to compare against the old */
  newText: PropTypes.string.isRequired,
  /** Original content to compare against new version */
  oldText: PropTypes.string.isRequired,
  /** Stacked vs vertical display of code */
  outputStyle: PropTypes.oneOf(['side-by-side', 'line-by-line']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** New filename */
  updatedFileName: PropTypes.string,
};

CodeDiffLegacy.defaultProps = {
  fileName: '',
  hideInfo: false,
  hideTitle: false,
  newText: '',
  oldText: '',
  testSection: '',
  outputStyle: 'side-by-side',
};

export default CodeDiffLegacy;
