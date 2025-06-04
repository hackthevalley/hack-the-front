import "../globals.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface TextFieldProps {
  title: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  widthClasses?: string;
  heightClasses?: string;
  textClasses?: string;
  type?: "text" | "textarea" | "dropdown" | "password";
  options?: string[] | { label: string; value: string }[];
  type?: string;
  fieldValue: string;
  setFieldValue: (value: string) => void;
  hasError?: boolean;
  errorMessage?: string;
}

export default function TextField(props: TextFieldProps) {
  const {
    title = "",
    required = false,
    placeholder = "",
    widthClasses = "mx-[auto] sm:w-full",
    heightClasses = "min-h-15 sm:min-h-10",
    type = "text",
    textClasses = "text-[20px]",
    options = [],
    fieldValue,
    setFieldValue,
    hasError = false,
    errorMessage = "Invalid value",
  } = props;

  const borderColor = hasError ? "var(--color-red)" : "var(--color-indigo)";
  const baseClasses = `font-[Euclid Circular B] font-normal placeholder-grey text-grey outline-none focus:outline-none focus:placeholder-transparent w-full bg-transparent ${
    multiline ? "h-full resize-none" : ""
  }`;
  const [localType, setLocalType] = useState<string>(type);

  const togglePassword = () => {
    if (type === "password" && localType === "password") {
      setLocalType("text");
    } else if (type === "password" && localType === "text") {
      setLocalType("password");
    }
  };
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <textarea placeholder={placeholder} className={`${baseClasses} ${
                                                             } h-full resize-none`} />;
      case "dropdown":
        return (
          <div className="relative w-full">
            <select
              className={`${baseClasses} ${textClasses} pr-10 appearance-none bg-transparent`}
              defaultValue=""
              style={{
                border: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            >
              <option value="" disabled hidden>
                {placeholder}
              </option>
              {(options as any[]).map((opt, idx) => {
                if (typeof opt === "string") {
                  return (
                    <option key={idx} value={opt} className="text-black">
                      {opt}
                    </option>
                  );
                }
                return (
                  <option key={idx} value={opt.value} className="text-black">
                    {opt.label}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-grey">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        );
      case "password":
        <>
            <input
              type={type === "password" ? localType : type}
              placeholder={placeholder}
              className={baseClasses}
              value={fieldValue}
              onChange={(e) => setFieldValue(e.target.value)}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <FontAwesomeIcon
                  icon={localType === "password" ? faEye : faEyeSlash}
                  fixedWidth
                  className="text-[1.4rem] text-white"
                />
              </button>
            )}
          </>
      default:
        return <input type="text" placeholder={placeholder} className={`${baseClasses} ${textClasses}`} />;
    }
  };