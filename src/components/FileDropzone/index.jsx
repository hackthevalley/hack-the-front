import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createRef, useState } from 'react';

import Text from '@htv/ui-kit/components/Text';

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

export default function FileDropzone({
  // Callback function that is called when a file is chosen
  onUpload,
  // List of supported file extensions
  supportedFileExtensions,
  // File input element's name attribute
  fileInputNameAttribute,
  // Can be set to true to visibly show the user that there is an error (e.g. in the form)
  hasError = false,
}) {
  const [isFileHovering, setFileHovering] = useState(false);
  const [file, setFile] = useState(null);
  // Used for when the user drops in a file that is invalid, in which case we show the user
  const [isWrongFileExtension, setIsWrongFileExtension] = useState(false);
  const fileInputRef = createRef();

  const containsFiles = (e) => {
    if (e.dataTransfer.types) {
      for (let i = 0; i < e.dataTransfer.types.length; i++) {
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
    setFileHovering(() => false);
    if (e.dataTransfer.files.length && e.dataTransfer.files[0].name) {
      // Check if the file extension is supported
      if (
        supportedFileExtensions.includes(
          e.dataTransfer.files[0].name.split('.').pop(),
        )
      ) {
        fileInputRef.current.files = e.dataTransfer.files;
        setIsWrongFileExtension(() => false);
        setFile(() => e.dataTransfer.files[0]);
        onUpload(e.dataTransfer.files[0]);
      } else {
        setIsWrongFileExtension(() => true);
      }
    }
  };

  const onFileChange = (e) => {
    if (e.target.files.length) {
      setIsWrongFileExtension(() => false);
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
        (hasError || isWrongFileExtension) && dropzoneError,
      )}
      onDragOver={onDragover}
      onDragLeave={onDragleave}
      onDragEnd={onDragleave}
      onDrop={onDrop}
    >
      <div className={text}>
        {file && (
          <Text color='white' type='meta1' className={fileInputButton}>
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
          Supports:{' '}
          {supportedFileExtensions
            .map((fileExtension) => fileExtension.toUpperCase())
            .join(', ')}
        </Text>
      </div>

      <input
        ref={fileInputRef}
        type='file'
        required
        name={fileInputNameAttribute}
        accept={supportedFileExtensions
          .map((fileExtension) => `.${fileExtension}`)
          .join()}
        className={fileInput}
        onChange={onFileChange}
      />
    </div>
  );
}

FileDropzone.propTypes = {
  onUpload: PropTypes.func.isRequired,
  supportedFileExtensions: PropTypes.arrayOf(
    (propValue, key, componentName, location, propFullName) => {
      if (
        propValue.filter((fileExtension) => fileExtension.includes('.'))
          .length > 0
      ) {
        return new Error(
          `Invalid prop '${propFullName}' supplied to '${componentName}'. '${propFullName}' is an array of file extension strings (e.g. ["pdf", "docx"])`,
        );
      }
    },
  ),
  fileInputNameAttribute: PropTypes.string,
  hasError: PropTypes.bool,
};
