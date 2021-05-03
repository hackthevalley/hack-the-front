import Text from '@htv/ui-kit/components/Text';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createRef, useState } from 'react';
import { ReactComponent as AttachFileIcon } from '../../images/attach-file.svg';
import {
  dropzone,
  dropzoneError,
  dropzoneHover,
  fileInput,
  fileInputButton,
  icon,
  prompt,
  text,
} from './FileDropzone.module.scss';

export default function FileDropzone({ onUpload, hasError = false }) {
  const [isFileHovering, setFileHovering] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = createRef();

  const containsFiles = (e) => {
    if (e.dataTransfer.types) {
      for (var i = 0; i < e.dataTransfer.types.length; i++) {
        if (e.dataTransfer.types[i] == 'Files') {
          return true;
        }
      }
    }
    return false;
  };

  const onDragover = (e) => {
    e.preventDefault();
    if (containsFiles(e)) {
      setFileHovering(() => true);
    }
  };

  const onDragleave = () => {
    setFileHovering(() => false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      if (e.dataTransfer.files[0].name)
        fileInputRef.current.files = e.dataTransfer.files;
      setFile(() => e.dataTransfer.files[0]);
      onUpload(e.dataTransfer.files[0]);
    }
    setFileHovering(() => false);
  };

  const onFileChange = (e) => {
    if (e.target.files.length) {
      setFile(() => e.target.files[0]);
      onUpload(e.target.files[0]);
    }
  };

  const openFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={classNames(
        dropzone,
        isFileHovering && dropzoneHover,
        hasError && dropzoneError,
      )}
      onDragOver={onDragover}
      onDragLeave={onDragleave}
      onDragEnd={onDragleave}
      onDrop={onDrop}
    >
      <div className={text}>
        {file && (
          <Text color='white' type='meta1'>
            {file.name}
          </Text>
        )}
        <div className={prompt}>
          <Text
            color='lime'
            type='meta1'
            as='button'
            className={fileInputButton}
            onClick={openFileInput}
          >
            <AttachFileIcon className={icon} />
            Browse files
          </Text>
          <Text color='white' type='meta1'>
            or drop resume here
          </Text>
        </div>
        <Text color='gray' type='meta1'>
          Supports: PDF
        </Text>
      </div>

      <input
        ref={fileInputRef}
        type='file'
        required
        name='resume'
        accept='.pdf'
        className={fileInput}
        onChange={onFileChange}
      />
    </div>
  );
}

FileDropzone.propTypes = {
  onUpload: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
};
