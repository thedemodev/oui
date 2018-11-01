import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import Icon from 'react-oui-icons';

const MEGABYTE = 1000000;
const ICON_TYPE = {
  tif: 'image',
  tiff: 'image',
  gif: 'image',
  jpeg: 'image',
  jpg: 'image',
  png: 'image',
  doc: 'document',
  docx: 'document',
  txt: 'document',
  pdf: 'pdf',
  xls: 'spreadsheet',
  xlsx: 'spreadsheet',
  csv: 'spreadsheet',
};

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

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      fileName: '',
      fileSize: 0,
      iconType: '',
    };
  }

  handleDrop = (files) => {
    const {
      onDrop,
    } = this.props;

    const file = files[0];
    const fileName = file.name || '';
    const extension = fileName.split('.').pop().toLowerCase();

    this.setState({
      fileName,
      fileSize: (file.size || 0) / MEGABYTE,
      iconType: ICON_TYPE[extension] || 'file',
      preview: URL.createObjectURL(file),
    }, () => {
      onDrop(files);
    });
  }

  renderPreview() {
    const { testSection } = this.props;
    const {
      fileSize,
      iconType,
      preview,
    } = this.state;

    if (iconType === 'image') {
      return (<img src={ preview } data-test-section={ `${ testSection }-preview-image` } />);
    }

    return (
      <div>
        <Icon name={ iconType } size='medium' testSection={ `${ testSection }-preview-icon` } />
        <div data-test-section={ `${ testSection }-preview-size` }>{ fileSize } MB</div>
      </div>
    );
  }

  render() {
    const {
      maxSize,
      onReject,
      testSection,
    } = this.props;

    const {
      fileName,
      preview,
    } = this.state;

    return (
      <div>
        {
          preview && (
            <p data-test-section={ `${ testSection }-preview-file-name` }>File: { fileName }</p>
          )
        }
        <Dropzone
          className='file-upload border--all'
          activeClassName='file-upload--active'
          onDropAccepted={ this.handleDrop }
          onDropRejected={ onReject }
          maxSize={ maxSize * MEGABYTE }
          multiple={ false }>
          <div className='flex flex-align--center flex--column flex-justified--center'>
            {
              preview ?
                this.renderPreview() :
                <React.Fragment>
                  <h1 className='push-half--top' data-test-section={ `${ testSection }-title` }>Drag and drop a file here</h1>
                  <p data-test-section={ `${ testSection }-subtitle` }>
                    Or click to select a file. Max file size: { maxSize }MB
                  </p>
                </React.Fragment>
            }
          </div>
        </Dropzone>
        {
          preview && (
            <p data-test-section={ `${ testSection }-preview-info` }>
              Drag and drop a new file onto the file preview or click on the preview to select a new file.
            </p>
          )
        }
      </div>
    );
  }
}

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
