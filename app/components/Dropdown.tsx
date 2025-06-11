import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import Select, { SingleValue } from "react-select";

import "../globals.css";

interface DropdownProps {
  title: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  widthClasses?: string;
  heightClasses?: string;
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
    multiline = false,
    textClasses = "text-[20px]",
    options = [],
    fieldValue,
    setFieldValue,
    hasError = false,
    errorMessage = "Invalid value",
    disabled = false,
  } = props;

  const formattedOptions = useMemo(() => {
    if (Array.isArray(options) && typeof options[0] === "string") {
      return (options as string[]).map((opt) => ({
        label: opt,
        value: opt,
      }));
    }

    return options as { label: string; value: string }[];
  }, [options]);

  const baseClasses = `font-[Euclid Circular B] font-normal placeholder-grey text-grey outline-none focus:outline-none focus:placeholder-transparent w-full bg-bgblue ${
    multiline ? "h-full resize-none" : ""
  }`;
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
          className={`${baseClasses} ${textClasses} ${heightClasses} ${widthClasses} bg-transparent ${borderColor}`}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "var(--color-bgblue)",
              borderColor: "transparent",
              borderWidth: "0px",
              boxShadow: "none",
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "var(--color-grey)",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              color: "var(--color-grey)", // Text typed into the input
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: "var(--color-black)",
              backgroundColor: "var(--color-white)",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              borderRadius: "12px",
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "white",
            }),
          }}
          value={{ label: fieldValue, value: fieldValue }}
          onFocus={() => setTouched(true)}
          onBlur={() => setTouched(false)}
          options={formattedOptions}
          onChange={(selectedOption) => setFieldValue(selectedOption ? selectedOption.value : "")}
          isDisabled={disabled}
        ></Select>
      </div>
    );
  };
  return (
    <div
      className={`relative flex flex-col justify-start rounded-[20px] px-5 py-2 transition-colors duration-400 ${widthClasses} ${heightClasses}`}
      style={{
        borderColor: borderColor,
        backgroundColor: "var(--color-bgblue)",
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
