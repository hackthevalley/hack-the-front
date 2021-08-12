import classNames from 'classnames';
import { useState } from 'react';

import Text from '@htv/ui-kit/components/Text';

import { ReactComponent as Check } from '../../images/checkmark.svg';
import {
  container,
  checkbox,
  checkbox__checked,
  checkbox__focused,
  field,
  check,
  required,
} from './Checkbox.module.scss';

export default function Checkbox({
  label: labelText,
  onChange,
  className,
  error,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={classNames(className, container)}>
      <div
        className={classNames(
          props.disabled && checkbox__disabled,
          props.value && checkbox__checked,
          focused && checkbox__focused,
          checkbox,
        )}
      >
        <input
          onChange={(event) => {
            event.target = {
              ...event.target,
              value: !props.value,
            };
            onChange(event);
          }}
          className={field}
          type='checkbox'
          {...props}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
        />
        <Check className={check} />
      </div>
      <Text
        htmlFor={props.name}
        lineHeight='relaxed'
        color='white'
        type='meta1'
        as='label'
      >
        {labelText}
        {props.required && <span className={required}>*</span>}
      </Text>
    </div>
  );
}
