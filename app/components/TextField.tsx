import React from "react";
import "../globals.css";

interface TextFieldProps {
  title: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  widthClasses?: string;
  heightClasses?: string;
  textClasses?: string;
  type?: "text" | "textarea" | "dropdown";
  options?: string[] | { label: string; value: string }[];
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
  } = props;

  const baseClasses = `font-[Euclid Circular B] font-normal placeholder-grey text-grey outline-none focus:outline-none focus:placeholder-transparent w-full bg-transparent`;

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <textarea placeholder={placeholder} className={`${baseClasses} ${textClasses} h-full resize-none`} />;
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
      default:
        return <input type="text" placeholder={placeholder} className={`${baseClasses} ${textClasses}`} />;
    }
  };

  return (
    <div
      className={`rounded-[20px] border-2 px-5 py-2 flex flex-col justify-start overflow-hidden ${widthClasses} ${heightClasses}`}
      style={{
        borderColor: "var(--color-indigo)",
        backgroundColor: "var(--color-bgblue)",
      }}
    >
      <label className={`flex items-center font-[var(--font-ecb)] text-[color:var(--color-white)] mb-1`}>
        {title}
        {required && <span className="text-red ml-1">*</span>}
      </label>
      {renderInput()}
    </div>
  );
}

