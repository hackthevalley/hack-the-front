import classNames from 'classnames';
import { useRef, useState, useEffect } from 'react';

import Text from '@htv/ui-kit/components/Text';

import { ReactComponent as Caret } from '../../images/caret.svg';
import InputLayout from '../InputLayout';
import { input } from '../InputLayout/InputLayout.module.scss';
import {
  input__placeholder,
  input__text,
  container,
  select,
  selectInput,
  caret,
  menu,
  menuItem,
  menuItem__selected,
} from './Select.module.scss';

export default function Select({
  options = [],
  placeholder,
  className,
  error,
  label,
  ...props
}) {
  const [showMenu, setShowMenu] = useState(false);
  const selectRef = useRef();
  const rootRef = useRef();

  useEffect(() => {
    if (showMenu) {
      const handler = (event) => {
        if (!rootRef.current.contains(event.target)) {
          setShowMenu(false);
        }
      };

      window.addEventListener('click', handler);
      return () => {
        window.removeEventListener('click', handler);
      };
    }
  }, [showMenu]);

  return (
    <InputLayout
      className={classNames(container, className)}
      required={props.required}
      disabled={props.disabled}
      name={props.name}
      label={label}
      error={error}
      ref={rootRef}
    >
      <select className={select} {...props} ref={selectRef}>
        {placeholder && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onFocus={() => setShowMenu(true)}
        tabIndex='-1'
        type='button'
        className={classNames(selectInput, input)}
      >
        <Text
          className={classNames(
            !props.value && input__placeholder,
            input__text,
          )}
          font='secondary'
          type='body1'
          as='span'
        >
          {options.find((option) => option.value === props.value)?.label ??
            placeholder}
        </Text>
        <Caret className={caret} />
      </button>
      {showMenu && (
        <ul className={menu}>
          {options.map((option, index, { length }) => (
            <li key={option.value}>
              <button
                onBlur={() => {
                  if (index + 1 === length) {
                    setShowMenu(false);
                  }
                }}
                onClick={() => {
                  selectRef.current.value = option.value;
                  selectRef.current.dispatchEvent(
                    new Event('change', { bubbles: true }),
                  );
                  setShowMenu(false);
                }}
                className={classNames(
                  option.value === props.value && menuItem__selected,
                  menuItem,
                )}
                type='button'
              >
                <Text
                  font='secondary'
                  color={option.value === props.value ? 'lime' : 'white'}
                  lineHeight='spaced'
                  align='start'
                  type='meta1'
                  as='span'
                >
                  {option.label}
                </Text>
              </button>
            </li>
          ))}
        </ul>
      )}
    </InputLayout>
  );
}
