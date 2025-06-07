import "../globals.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

interface TextFieldProps {
  title: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  widthClasses?: string;
  heightClasses?: string;
  textClasses?: string;
  type?: "text" | "textarea" | "dropdown" | "password" | "email" | "file";
  options?: string[] | { label: string; value: string }[];
  fieldValue: string;
  fileValue?: File | null;
  setFieldValue: (value: string) => void;
  setFile?: (value: string | File | null) => void;
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
    multiline = false,
    type = "text",
    textClasses = "text-[20px]",
    options = [],
    fieldValue,
    setFieldValue,
    fileValue,
    setFile,
    hasError = false,
    errorMessage = "Invalid value",
  } = props;

  const borderColor = hasError ? "var(--color-red)" : "var(--color-indigo)";
  const baseClasses = `font-[Euclid Circular B] font-normal placeholder-grey text-grey outline-none focus:outline-none focus:placeholder-transparent w-full bg-transparent ${
    multiline ? "h-full resize-none" : ""
  }`;
  const [localType, setLocalType] = useState<string>(type);

  const allowedFormats = [".pdf"];
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadingFile = toast.loading("Uploading file...");
    const file = e.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (allowedFormats.includes(`.${fileExtension}`)) {
        if (setFile) {
          setFile(file);
          toast.dismiss(uploadingFile);
          toast.success("File uploaded successfully!");
        }
      } else {
        toast.dismiss(uploadingFile);
        toast.error(`Invalid file format.`);
        ;
      }
    }
  };

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
        return (
          <textarea
            placeholder={placeholder}
            className={`${baseClasses} ${textClasses} h-full resize-none`}
          />
        );
      case "dropdown":
        return (
          <div className="relative w-full">
            <select
              className={`${baseClasses} ${textClasses} pr-10 appearance-none bg-transparent`}
              value={fieldValue}
              onChange={(e) => setFieldValue(e.target.value)}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        );
      case "password":
        return (
          <>
            <input
              type={type === "password" ? localType : type}
              placeholder={placeholder}
              className={`${baseClasses} ${textClasses}`}
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
        );
        case "file":
          return (
            <div className="w-full relative">
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col justify-center items-center w-full h-16 text-center"
              >
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
        
                {fileValue && fileValue?.name ? (
                  <>
                    <p className="font-bold text-white text-lg">{fileValue?.name}</p>
                    <p className="text-grey text-sm mt-1">
                      Your file has been uploaded. Click or drop another file to re-upload.
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full space-y-1">
                    <p className="text-white">{title}</p>
                    <p className="text-grey text-sm text-center">
                      {"Accepted file format: pdf"}
                    </p>
                  </div>
                )}
              </label>
              {fileValue && (
                <button
                  type="button"
                  onClick={() => {
                    setFile?.(null);
                    const input = document.getElementById("file-upload") as HTMLInputElement;
                    if (input) input.value = "";
                    toast.success("File removed successfully!");
                  }}
                  className="absolute top-2 right-4 text-white hover:text-red-500 text-sm"
                >
                  &#10005;
                </button>
              )}
            </div>
          );
      default:
        return (
          <input
            type={type === "email" ? "email" : "text"}
            placeholder={placeholder}
            className={`${baseClasses} ${textClasses}`}
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
          />
        );
    }
  };
  return (
    <div
      className={`rounded-[20px] border-2 px-5 py-2 flex flex-col justify-start relative overflow-hidden ${widthClasses} ${heightClasses}`}
      style={{
        borderColor: borderColor,
        backgroundColor: "var(--color-bgblue)",
      }}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 6000,
          removeDelay: 1000,
          style: {
            background: "#0B1C34",
            color: "white",
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "#0B1C34",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "#0B1C34",
            },
          },
        }}
      />
      <label
        className={`flex items-center font-[var(--font-ecb)] text-[color:var(--color-white)] mb-1`}
      >
        {type !== "file" && title}
        {required && title !== "" && type !== "file" && <span className="text-red ml-1">*</span>}
      </label>
      {renderInput()}
      {hasError && (
        <span className="text-red text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
}
