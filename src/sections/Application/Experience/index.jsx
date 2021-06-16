import Text from '@htv/ui-kit/components/Text';
import { useContext, useEffect } from 'react';
import FileDropzone from '../../../components/FileDropzone';
import Input from '../../../components/Input';
import Required from '../../../components/Required';
import { container, fieldset, legend } from '../Application.module.scss';
import { ActionsContext, FormContext } from '../Form';
import { fileDropper, inputs, span_1 } from './Experience.module.scss';

export default function Experience() {
  const store = useContext(FormContext);
  const { setForm, setValidity } = useContext(ActionsContext);

  useEffect(() => {
    const isValid = [
      store.number_of_hackathons !== '',
      store.github !== '',
      store.linkedin !== '',
      store.resume !== null,
    ].every(Boolean);
    setValidity({ experience: isValid });
  }, [setValidity, store]);

  return (
    <fieldset className={fieldset}>
      <Text className={legend} type='body1' font='secondary' as='legend'>
        Experience
      </Text>
      <div className={container}>
        <div className={inputs}>
          <Input
            type='number'
            min={0}
            onChange={(e) => setForm({ number_of_hackathons: e.target.value })}
            value={store.number_of_hackathons}
            label='Number of Hackathons attended'
            placeholder='Number of Hackathons attended'
            name='number_of_hackathons'
          />
          <Input
            onChange={(e) => setForm({ github: e.target.value })}
            value={store.github}
            label='GitHub'
            placeholder='Your GitHub Account'
            name='github'
            className={span_1}
          />
          <Input
            onChange={(e) => setForm({ linkedin: e.target.value })}
            value={store.linkedin}
            label='LinkedIn'
            placeholder='Your LinkedIn Profile'
            name='linkedin'
          />
        </div>
        <Required>
          <Text type='body1' font='secondary' as='span' lineHeight='relaxed'>
            Attach your resume
          </Text>
        </Required>
        <FileDropzone
          onUpload={(file) => setForm({ resume: file })}
          fileInputNameAttribute='resume'
          supportedFileExtensions={['pdf']}
          className={fileDropper}
        />
      </div>
    </fieldset>
  );
}
