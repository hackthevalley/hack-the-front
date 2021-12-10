import InputLayout from '../InputLayout';
import { input } from '../InputLayout/InputLayout.module.scss';

export default function Input({ className, error, description, label, ...props }) {
  return (
    <InputLayout
      description={description}
      required={props.required}
      disabled={props.disabled}
      className={className}
      name={props.name}
      label={label}
      error={error}
    >
      <input {...props} className={input} />
    </InputLayout>
  );
}
