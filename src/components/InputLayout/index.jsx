import { forwardRef } from 'react';

import Text from '@htv/ui-kit/components/Text';

import { required, label, info, box } from './InputLayout.module.scss';

const ForwardInputLayout = forwardRef(function InputLayout(
  {
    required: requiredState,
    error: errorMessage,
    label: labelText,
    description,
    className,
    children,
    disabled,
    name,
  },
  ref,
) {
  return (
    <div ref={ref} className={className}>
      <div className={box}>
        <Text
          className={label}
          htmlFor={name}
          color='white'
          type='meta1'
          as='label'
        >
          {labelText}
          {requiredState && <span className={required}>*</span>}
        </Text>
        {children}
      </div>
      {description && (
        <Text className={info} color='white' type='meta1'>
          {description}
        </Text>
      )}
      {!disabled && errorMessage && (
        <Text className={info} color='red' type='meta1'>
          {errorMessage}
        </Text>
      )}
    </div>
  );
});

export default ForwardInputLayout;
