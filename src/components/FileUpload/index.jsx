import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

import Text from '@htv/ui-kit/components/Text';

import { ReactComponent as AttachFileIcon } from '../../images/attach-file.svg';
import { fetchApi } from '../../utils/ApiProvider';
import {
  required,
  frame,
  box,
  field,
  icon,
  browse,
  header,
} from './FileUpload.module.scss';

const supportedFiles = {
  PDF: 'PDF',
};

const fileInfo = {
  [supportedFiles.PDF]: {
    mime: 'application/pdf',
    label: 'PDF',
  },
};

export default function FileUpload({
  questionId,
  uploadUrl,
  className,
  onChange,
  accept,
  error,
  label,
  value,
  ...props
}) {
  const [isUploading, setIsUploading] = useState(false);

  const upload = async (event) => {
    if (!event.target.files[0]) return;

    setIsUploading(true);
    const payload = new FormData();
    payload.append('file', event.target.files[0]);
    payload.append('question', questionId);

    try {
      const file = await fetchApi(
        '/forms/hacker_application/response/files/upload',
        {
          headers: null,
          method: 'POST',
          body: payload,
        },
      );

      await onChange({
        ...event,
        target: {
          ...event.target,
          value: file,
        },
      });
    } catch (err) {
      toast.error('Failed to upload file. Please try again later');
    }

    setIsUploading(false);
  };

  let title = (
    <>
      <AttachFileIcon className={icon} />
      <span>
        <span className={browse}>Browse files</span> or drop file here
      </span>
    </>
  );
  let description = `Supports: ${accept
    .map((file) => fileInfo[file].label)
    .join(', ')}`;

  if (value) {
    title = value.originalFilename;
    description =
      'Your file has been uploaded. Click or drop another file to re-upload';
  }

  if (isUploading) {
    title = 'Uploading file...';
    description = "You're file would be ready shortly :3";
  }

  return (
    <div className={className}>
      <Text type='meta1' color='white' as='label'>
        {label}
        {props.required && <span className={required}>*</span>}
      </Text>
      <div className={frame}>
        <input
          {...props}
          accept={accept.map((file) => fileInfo[file].mime).join(',')}
          className={field}
          onChange={upload}
          type='file'
        />
        <div className={box}>
          <Text
            className={header}
            type='meta1'
            color='white'
            align='center'
            as='p'
          >
            {title}
          </Text>
          <Text type='meta1' align='center' as='p'>
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}

FileUpload.supportedFiles = supportedFiles;
