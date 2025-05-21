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
  type?: string;
  fieldValue: string;
  setFieldValue: (value: string) => void;
}

export default function TextField(props: TextFieldProps) {
  const {
    title = "",
    required = false,
    placeholder = "",
    multiline = false,
    widthClasses = "mx-[auto] sm:w-full",
    heightClasses = "min-h-15 sm:min-h-10",
    type = "text",
    fieldValue,
    setFieldValue,
  } = props;

  const baseClasses = `font-[Euclid Circular B] font-normal text-[20px] placeholder-grey text-grey outline-none focus:outline-none focus:placeholder-transparent ${
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

  return (
    <div
      className={`rounded-[20px] border-2 px-5 py-2 flex flex-col justify-start relative ${widthClasses} ${heightClasses}`}
      style={{
        borderColor: "var(--color-indigo)",
        backgroundColor: "var(--color-bgblue)",
      }}
    >
      <label className="flex items-center font-[var(--font-ecb)] text-[color:var(--color-white)] text-[20px] mb-1">
        {title}
        {required && <span className="text-red ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          className={baseClasses}
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        />
      ) : (
        <>
          <input
            type={type === "password" ? localType : type}
            placeholder={placeholder}
            className={baseClasses}
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
          />
          {type === "password" ? (
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
          ) : null}
        </>
      )}
    </div>
  );
}
