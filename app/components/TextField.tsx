import React from "react";
import "../globals.css";

interface TextFieldProps {
  title: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  widthClasses?: string;
  heightClasses?: string;
}

export default function TextField(props: TextFieldProps) {
  const {
    title = "",
    required = true,
    placeholder = "",
    multiline = false,
    widthClasses = "mx-[auto] sm:w-full",
    heightClasses = "min-h-15 sm:min-h-10",
  } = props;

  const baseClasses = `font-[Euclid Circular B] font-normal text-[20px] placeholder-grey text-grey ${
    multiline ? "h-full resize-none" : ""
  }`;

  return (
    <div
      className={`rounded-[20px] border-2 px-4 py-2 flex flex-col justify-start ${widthClasses} ${heightClasses}`}
      style={{
        borderColor: "var(--color-indigo)",
        backgroundColor: "var(--color-bgblue)",
      }}
    >
      <label className="flex items-center font-[var(--font-ecb)] text-[color:var(--color-white)] text-[20px] mb-1">
        {title}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea placeholder={placeholder} className={baseClasses} />
      ) : (
        <input type="text" placeholder={placeholder} className={baseClasses} />
      )}
    </div>
  );
}
