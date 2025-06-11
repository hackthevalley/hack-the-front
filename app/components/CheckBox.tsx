"use client";

import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  required?: boolean;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  required = false,
}: CheckboxProps) {
  return (
    <label className="flex items-start gap-7 text-white text-sm font-medium select-none cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <span
        className={`flex-shrink-0  relative flex items-center justify-center w-5 h-5 border-2 rounded-sm transition-colors duration-200 ${
          checked ? "bg-[#81C470] border-[#81C470]" : "border-white"
        }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-black pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      <span>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </span>
    </label>
  );
}
