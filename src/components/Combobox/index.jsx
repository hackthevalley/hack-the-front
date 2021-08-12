import classNames from 'classnames';
import { useEffect, useState, useRef, useMemo } from 'react';
import stringSimilarity from 'string-similarity';

import Text from '@htv/ui-kit/components/Text';

import { ReactComponent as Caret } from '../../images/caret.svg';
import InputLayout from '../InputLayout';
import { input } from '../InputLayout/InputLayout.module.scss';
import {
  menu,
  menuItem,
  menuItem__selected,
  caret,
} from '../Select/Select.module.scss';
import { display, field, icon } from './Combobox.module.scss';

export default function Combobox({
  historySize = 10, // Size of history for searches (More RAM vs snappiness)
  threshold = 0.2, // Sensativity of search
  limit = 10, // Size of displayed options
  options = [],
  className,
  onChange,
  onBlur,
  value,
  error,
  label,
  ...props
}) {
  const [showMenu, setShowMenu] = useState();
  const [_value, setValue] = useState(value);
  const history = useRef([]);
  const fieldEl = useRef();
  const root = useRef();

  useEffect(() => {
    if (showMenu) {
      const handler = (event) => {
        if (document.body.contains(event.target)) {
          if (!root.current.contains(event.target)) {
            setValue(value);
            setShowMenu(false);
          }
        }
      };

      window.addEventListener('click', handler);
      return () => {
        window.removeEventListener('click', handler);
      };
    }
  }, [showMenu]);

  // Synthetic blur
  useEffect(() => {
    if (!(showMenu ?? true)) {
      onBlur({ target: fieldEl.current });
    }
  }, [_value, showMenu]);

  // Sync proxy with commited value (Only one way)
  useEffect(() => {
    if (_value !== value) {
      setValue(value);
      onBlur({ target: fieldEl.current });
    }
  }, [value]);

  const filteredOptions = useMemo(() => {
    const search = _value.toLowerCase();
    const cacheIdx = history.current.findIndex(
      (_result) => _result.search === search,
    );
    let result;

    // Get from history if possible
    if (cacheIdx !== -1) {
      result = history.current[cacheIdx].result;
      history.current.splice(cacheIdx, 1);

      // Compute result otherwise
    } else {
      result = options
        // Grade options
        .map((option) => ({
          ...option,
          score: stringSimilarity.compareTwoStrings(
            option.label.toLowerCase(),
            search,
          ),
        }))
        // Order by grade
        .sort((a, b) => b.score - a.score);
    }

    // Cache result
    history.current.unshift({ search, result });
    if (history.current.length > historySize) {
      history.current.pop();
    }

    // Get amount needed
    return result.slice(0, limit);
  }, [options, limit, threshold, _value]);

  const selectOption = (value) => async (event) => {
    setValue(value);
    onChange({
      ...event,
      target: {
        ...event.target,
        value,
      },
    });
    setShowMenu(false);
  };

  return (
    <InputLayout
      disabled={props.disabled}
      required={props.required}
      className={className}
      name={props.name}
      label={label}
      error={error}
      ref={root}
    >
      <div className={display}>
        <input
          {...props}
          onChange={(e) => setValue(e.target.value)}
          onFocus={(event) => {
            if (props.disabled) return;
            setShowMenu(true);
            props.onFocus?.(event);
          }}
          className={classNames(field, input)}
          value={_value}
          ref={fieldEl}
        />
        <Caret className={classNames(icon, caret)} />
      </div>
      {showMenu && (
        <ul className={menu}>
          {filteredOptions.map((option) => (
            <li key={option.value}>
              <button
                onClick={selectOption(option.value)}
                className={classNames(
                  option.value === value && menuItem__selected,
                  menuItem,
                )}
                type='button'
              >
                <Text
                  font='secondary'
                  color={option.value === value ? 'lime' : 'white'}
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
          {_value && (
            <li>
              <button
                onClick={selectOption(_value)}
                className={menuItem}
                type='button'
              >
                <Text
                  font='secondary'
                  color='white'
                  lineHeight='spaced'
                  align='start'
                  type='meta1'
                  as='span'
                >
                  Add custom: {_value}
                </Text>
              </button>
            </li>
          )}
        </ul>
      )}
    </InputLayout>
  );
}
