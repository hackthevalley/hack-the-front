/* eslint-disable @typescript-eslint/no-explicit-any */
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AsYouType, isValidPhoneNumber } from "libphonenumber-js";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";

import fetchInstance from "@/utils/api";

import "../globals.css";

interface TextFieldProps {
  title: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  widthClasses?: string;
  heightClasses?: string;
  backgroundClasses?: string;
  textClasses?: string;
  type?: "text" | "textarea" | "dropdown" | "password" | "email" | "file" | "phone";
  options?: string[] | { label: string; value: string }[];
  fieldValue: string;
  fileValue?: File | null;
  setFieldValue: (value: string) => void;
  setFile?: (value: string | File | null) => void;
  hasError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

export default function TextField(props: TextFieldProps) {
  const {
    title = "",
    required = false,
    placeholder = "",
    widthClasses = "mx-[auto] sm:w-full",
    heightClasses = "min-h-10 md:min-h-12",
    backgroundClasses = "bg-bgblue",
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
    disabled = false,
  } = props;

  const baseClasses = `font-[Euclid Circular B] font-normal placeholder-grey text-grey outline-none focus:outline-none focus:placeholder-transparent w-full bg-transparent ${
    multiline ? "h-full resize-none" : ""
  }`;
  const [localType, setLocalType] = useState<string>(type);
  const [touched, setTouched] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const allowedFormats = [".pdf"];
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadingFile = toast.loading("Uploading file...");
    const file = e.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (allowedFormats.includes(`.${fileExtension}`)) {
        setFile?.(file);
        const uploadFile = async () => {
          try {
            await fetchInstance("forms/resume", {
              method: "POST",
              body: (() => {
                const formData = new FormData();
                formData.append("file", file);
                return formData;
              })(),
            });

            toast.dismiss(uploadingFile);
            toast.success("File uploaded successfully!");
          } catch (error) {
            console.error("File upload failed:", error);
            toast.dismiss(uploadingFile);
            setFieldValue("");
            setFile?.(null);
            toast.error("File upload failed.");
          }
        };
        uploadFile();
      } else {
        toast.dismiss(uploadingFile);
        toast.error(`Invalid file format.`);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const uploadingFile = toast.loading("Uploading file...");
    const file = e.dataTransfer.files[0];
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (allowedFormats.includes(`.${fileExtension}`)) {
        setFile?.(file);
        const uploadFile = async () => {
          try {
            await fetchInstance("forms/resume", {
              method: "POST",
              body: (() => {
                const formData = new FormData();
                formData.append("file", file);
                return formData;
              })(),
            });
            toast.dismiss(uploadingFile);
            toast.success("File uploaded successfully!");
          } catch (error) {
            console.error("File upload failed:", error);
            toast.dismiss(uploadingFile);
            setFieldValue("");
            setFile?.(null);
            toast.error("File upload failed.");
          }
        };
        uploadFile();
      } else {
        toast.dismiss(uploadingFile);
        toast.error(`Invalid file format.`);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const togglePassword = () => {
    if (type === "password" && localType === "password") {
      setLocalType("text");
    } else if (type === "password" && localType === "text") {
      setLocalType("password");
    }
  };

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
    switch (type) {
      case "textarea":
        return (
          <textarea
            placeholder={placeholder}
            onFocus={() => setTouched(true)}
            onBlur={() => setTouched(false)}
            disabled={disabled}
            className={`${baseClasses} ${textClasses} h-full resize-none`}
          />
        );
      case "dropdown":
        return (
          <div className="relative w-full">
            <select
              className={`${baseClasses} ${textClasses} appearance-none bg-transparent pr-10`}
              value={fieldValue}
              onFocus={() => setTouched(true)}
              onBlur={() => setTouched(false)}
              onChange={(e) => setFieldValue(e.target.value)}
              disabled={disabled}
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

            <div
              className={`text-grey pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 transform ${touched ? "text-white" : "text-grey"}`}
            >
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
              onFocus={() => setTouched(true)}
              onBlur={() => setTouched(false)}
              disabled={disabled}
              value={fieldValue}
              onChange={(e) => setFieldValue(e.target.value)}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-1/2 right-4 -translate-x-1/2 -translate-y-1/2"
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
      case "phone":
        return (
          <>
            <input
              type="tel"
              placeholder={placeholder}
              className={`${baseClasses} ${textClasses}`}
              onFocus={() => setTouched(true)}
              onBlur={() => {
                setTouched(false);
                if (fieldValue.trim() === "") {
                  setPhoneError(required ? "Phone number is required" : null);
                  return;
                }

                const valid = isValidPhoneNumber(fieldValue, "CA");
                if (!valid) {
                  setPhoneError("Invalid phone number format");
                } else {
                  setPhoneError(null);
                }
              }}
              disabled={disabled}
              value={fieldValue}
              onChange={(e) => {
                const raw = e.target.value;
                const formatter = new AsYouType("CA");
                const formatted = formatter.input(raw);
                setFieldValue(formatted);
                setPhoneError(null);
              }}
            />
            {phoneError && <span className="text-red mt-1 text-sm">{phoneError}</span>}
          </>
        );
      case "file":
        return (
          <div className="relative w-full" onDrop={handleDrop} onDragOver={handleDragOver}>
            <label
              htmlFor="file-upload"
              className="flex h-16 w-full cursor-pointer flex-col items-center justify-center text-center"
            >
              <input
                id="file-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />

              {fileValue ? (
                <>
                  <p className="text-lg font-bold text-white">
                    {fileValue instanceof File ? fileValue.name : fileValue}
                  </p>
                  <p className="text-grey mt-1 text-sm">
                    Your file has been uploaded. Click or drop another file to re-upload.
                  </p>
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                  <p className="text-white">{title}</p>
                  <p className="text-grey text-center text-sm">{"Accepted file format: pdf"}</p>
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
                className="absolute top-2 right-4 text-sm text-white hover:text-red-500"
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
            onFocus={() => setTouched(true)}
            onBlur={() => setTouched(false)}
            disabled={disabled}
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
          />
        );
    }
  };
  return (
    <div
      className={`relative flex flex-col justify-center overflow-hidden rounded-[20px] border-2 px-5 py-2 transition-colors duration-400 ${backgroundClasses} ${widthClasses} ${heightClasses}`}
      style={{
        borderColor: borderColor,
      }}
    >
      <label
        className={`mb-1 flex items-center font-[var(--font-ecb)] text-[color:var(--color-white)]`}
      >
        {type !== "file" && title}
        {required && title !== "" && type !== "file" && <span className="text-red ml-1">*</span>}
      </label>
      {renderInput()}
      {hasError && <span className="text-red mt-1 text-sm">{errorMessage}</span>}
    </div>
  );
}
