import { forwardRef } from 'react';

import Text from '@htv/ui-kit/components/Text';

import { required, error, label, box } from './InputLayout.module.scss';

const ForwardInputLayout = forwardRef(function InputLayout(
  {
    required: requiredState,
    error: errorMessage,
    label: labelText,
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
      {!disabled && errorMessage && (
        <Text className={error} color='red' type='meta1'>
          {errorMessage}
        </Text>
      )}
    </div>
  );
});

export default ForwardInputLayout;
