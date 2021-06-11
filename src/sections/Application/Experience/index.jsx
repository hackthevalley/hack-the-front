import Text from '@htv/ui-kit/components/Text';
import { useReducer, useState } from 'react';
import FileDropzone from '../../../components/FileDropzone';
import Input from '../../../components/Input';
import { container, fieldset, legend } from '../Application.module.scss';
import {
  fileDropper,
  inputs,
  required,
  span_1,
} from './Experience.module.scss';

const initState = {
  number_of_hackathons: '',
  github: '',
  linkedin: '',
};

function reducer(state, { target }) {
  return {
    ...state,
    [target.name]: target.value,
  };
}

export default function Experience() {
  const [store, dispatch] = useReducer(reducer, initState);
  const [file, setFile] = useState(null);

  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Experience
      </Text>
      <div className={container}>
        <div className={inputs}>
          <Input
            type='number'
            min='0'
            onChange={dispatch}
            value={store.number_of_hackathons}
            label='Number of Hackathons attended'
            placeholder='Number of Hackathons attended'
            name='number_of_hackathons'
          />
          <Input
            onChange={dispatch}
            value={store.github}
            label='GitHub'
            placeholder='Your GitHub Account'
            name='github'
            className={span_1}
          />
          <Input
            onChange={dispatch}
            value={store.linkedin}
            label='LinkedIn'
            placeholder='Your LinkedIn Profile'
            name='linkedin'
          />
        </div>
        <Text type='body1' font='secondary' as='span' lineHeight='relaxed'>
          Attach your resume <span className={required}>*</span>
        </Text>
        <FileDropzone
          onUpload={setFile}
          fileInputNameAttribute='resume'
          supportedFileExtensions={['pdf']}
          className={fileDropper}
        />
      </div>
    </fieldset>
  );
}
