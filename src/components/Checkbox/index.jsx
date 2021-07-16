import Text from '@htv/ui-kit/components/Text';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Required from '../Required';
import { ReactComponent as CheckmarkIcon } from '../../images/checkmark.svg';
import {
  checkbox,
  checkbox__control,
  checkbox__error,
  checkbox__input,
  checkmarkContainer,
} from './Checkbox.module.scss';

export default function Checkbox({
  checked,
  disabled = false,
  required = false,
  onChange,
  hasError = false,
  name,
  form,
  className,
  children,
}) {
  const CheckboxLabel = (
    <Text htmlFor={name} color='white' type='meta1' as='label'>
      {children}
    </Text>
  );

  return (
    <div
      className={classNames(hasError && checkbox__error, checkbox, className)}
    >
      <span className={checkbox__input}>
        <input
          type='checkbox'
          checked={checked}
          disabled={disabled}
          name={name}
          form={form}
          required={required}
          onChange={onChange}
        />
        <div className={checkbox__control}>
          <div className={checkmarkContainer}>
            <CheckmarkIcon width={12} height={10} viewBox='0 0 12 10' />
          </div>
        </div>
      </span>
      {children &&
        (required ? <Required>{CheckboxLabel}</Required> : CheckboxLabel)}
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  form: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  className: PropTypes.string,
};
