import React from "react";

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
    title,
    required = false,
    placeholder = "",
    multiline = false,
    widthClasses = " w-full",
    heightClasses = "min-h-[103px] sm:min-h-[103px]",
  } = props;

  const baseClasses = `font-[Euclid Circular B] font-normal text-[20px] placeholder-grey text-grey ${
    multiline ? "h-full resize-none" : ""
  }`;

  return (
    <div
      className={`rounded-[20px] border-2 bg-[#0B1C34] border-[#1A427D] px-8 py-2 flex flex-col justify-center ${widthClasses} ${heightClasses}`}>
      <label className="flex items-center font-[Euclid Circular B] text-white font-semibold text-[20px] mb-1">
        {title}
        {required && <span className="text-red ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea placeholder={placeholder} className={baseClasses} />
      ) : (
        <input type="text" placeholder={placeholder} className={baseClasses} />
      )}
    </div>
  );
}
