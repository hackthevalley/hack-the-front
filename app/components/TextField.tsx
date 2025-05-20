import React from "react";
import "../globals.css";

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

  return (
    <div
      className={`rounded-[20px] border-2 px-5 py-2 flex flex-col justify-start ${widthClasses} ${heightClasses}`}
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
        <textarea placeholder={placeholder} className={baseClasses} value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} />
      ) : (
        <input type={type} placeholder={placeholder} className={baseClasses} value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} />
      )}
    </div>
  );
}
