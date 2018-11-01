import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

const MEGABYTE = 1000000;

/**
 * FileUpload
 * This component render a drag-and-drop file uploader
 *
 * Example:
 *  <FileUpload
 *    maxSize={ 200 }
 *    onDrop={ uploadFileHandler }
 *    onReject={ warnUserHandler }
 *  />
 */

const FileUpload = (props) => {
  const {
    maxSize,
    onDrop,
    onReject,
    testSection,
  } = props;

  return (
    <Dropzone
      className='file-upload border--all'
      activeClassName='file-upload--active'
      onDropAccepted={ onDrop }
      onDropRejected={ onReject }
      maxSize={ maxSize * MEGABYTE }>
      <div className='flex flex-align--center flex--column flex-justified--center push-half--top'>

        <h1 data-test-section={ `${ testSection }-title` }>Drag and drop a file here</h1>
        <p data-test-section={ `${ testSection }-subtitle` }>
          Or click to select a file. Max file size: { maxSize }MB
        </p>
      </div>
    </Dropzone>
  );
};

FileUpload.defaultProps = {
  maxSize: 200,
  onDrop: () => {},
  onReject: () => {},
  testSection: '',
};

FileUpload.propTypes = {
  /** Set the max file size in megabytes */
  maxSize: PropTypes.number,
  /** Function that is called when a file is dropped */
  onDrop: PropTypes.func,
  /** Function that is called when a file is drop is rejected */
  onReject: PropTypes.func,
  /** Hook for testing */
  testSection: PropTypes.string,
};

export default FileUpload;
