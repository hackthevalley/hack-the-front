import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

import "../globals.css";

interface DropdownProps {
  title: string;
  required?: boolean;
  placeholder: string;
  widthClasses?: string;
  heightClasses?: string;
  backgroundClasses?: string;
  textClasses?: string;
  options?: string[] | { label: string; value: string }[];
  fieldValue: string;
  setFieldValue: (value: string) => void;
  hasError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

type OptionType = {
  label: string;
  value: string;
};

export default function Dropdown(props: DropdownProps) {
  const {
    title = "",
    required = false,
    placeholder = "",
    widthClasses = "w-full",
    heightClasses = "min-h-15 sm:min-h-10",
    backgroundClasses = "bg-gradient-to-b from-[#183766] to-[#0B1C34]",
    textClasses = "text-[20px]",
    options = [],
    fieldValue,
    setFieldValue,
    hasError = false,
    errorMessage = "Invalid value",
    disabled = false,
  } = props;

  const [otherSelected, setOtherSelected] = useState<boolean>(false);
  const [localFieldValue, setLocalFieldValue] = useState<string>(fieldValue);
  const [otherFieldValue, setOtherFieldValue] = useState<string>("");

  useEffect(() => {
    if (localFieldValue === "Other") {
      setOtherSelected(true);
      setFieldValue(otherFieldValue);
    } else {
      setOtherSelected(false);
      setFieldValue(localFieldValue);
      setOtherFieldValue("");
    }
  }, [localFieldValue, otherFieldValue]);

  const formattedOptions = useMemo(() => {
    if (Array.isArray(options) && typeof options[0] === "string") {
      return (options as string[]).map((opt) => ({
        label: opt,
        value: opt,
      }));
    }

    return options as { label: string; value: string }[];
  }, [options]);

  const baseClasses = `font-[Euclid Circular B] font-normal placeholder-grey text-grey outline-none focus:outline-none focus:placeholder-transparent w-full bg-bgblue`;
  const [touched, setTouched] = useState<boolean>(false);

  const borderColor = useMemo(() => {
    return touched
      ? hasError
        ? "var(--color-red)"
        : "var(--color-white)"
      : hasError
        ? "var(--color-red)"
        : "var(--color-indigo)";
  }, [touched, hasError]);

  const renderInput = () => {
    return (
      <div className="relative w-full">
        <Select<OptionType, false>
          className={`${baseClasses} ${textClasses} ${heightClasses} ${widthClasses} bg-transparent`}
          placeholder={placeholder}
          menuPortalTarget={document.body}
          menuPosition="fixed"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              padding: 0,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "var(--color-lightgrey)",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: "var(--color-lightgrey)",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              color: "var(--color-lightgrey)", // Text typed into the input
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: "var(--color-white)",
              backgroundColor: state.isFocused ? "rgba(34, 80, 150)" : "var(--color-darkblue)",
              cursor: "pointer",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "transparent",
              borderRadius: "12px",
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              borderRadius: "12px",
              scrollbarWidth: "thin",
              scrollbarColor: "var(--color-white) rgba(28, 69, 130, 0.95)",
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "white",
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              padding: 0,
              margin: 0,
            }),
          }}
          onFocus={() => {
            setTouched(true);
          }}
          onBlur={() => {
            setTouched(false);
          }}
          options={formattedOptions}
          value={formattedOptions.find((opt) => opt.value === localFieldValue) || null}
          onChange={(selectedOption) => {
            setLocalFieldValue(selectedOption?.value || "");
          }}
          isDisabled={disabled}
        ></Select>
        {otherSelected && (
          <div>
            <label>Please specify below:</label>
            <input
              type="text"
              className={` ${baseClasses} ${textClasses} ${heightClasses} ${widthClasses} mt-2 bg-transparent`}
              placeholder="Please specify other"
              value={otherFieldValue}
              onChange={(e) => setOtherFieldValue(e.target.value)}
              onFocus={() => setTouched(true)}
              onBlur={() => setTouched(false)}
            />
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      className={`relative flex flex-col justify-start rounded-[20px] border-2 px-5 py-2 transition-colors duration-400 ${backgroundClasses} ${widthClasses} ${heightClasses}`}
      style={{
        borderColor: borderColor,
      }}
    >
      <label
        className={`mb-1 flex items-center font-[var(--font-ecb)] text-[color:var(--color-white)]`}
      >
        {title}
        {required && <span className="text-red ml-1">*</span>}
      </label>
      {renderInput()}
      {hasError && <span className="text-red mt-1 text-sm">{errorMessage}</span>}
    </div>
  );
}
