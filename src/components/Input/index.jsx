import classNames from 'classnames';
import { useState } from 'react';

import Text from '@htv/ui-kit/components/Text';

import {
  input,
  input__active,
  input__error,
  label,
  label__required,
  field,
} from './Input.module.scss';

export default function Input({ className, hasError, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={classNames(
        hasError && input__error,
        focused && input__active,
        className,
        input,
      )}
    >
      <Text
        htmlFor={props.name}
        className={label}
        color='white'
        type='meta1'
        as='label'
      >
        {props.label}
        {props.required && <span className={label__required}>*</span>}
      </Text>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={field}
        {...props}
      />
    </div>
  );
}
