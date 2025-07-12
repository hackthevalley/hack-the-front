"use client";

import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface ButtonProp {
  text: string;
  onClick?: (...args: any[]) => any; // any input or output datatype
  route?: string;
  externalLink?: string;
  formFilled?: boolean;
}

export default function Button(props: ButtonProp) {
  const { formFilled = true } = props;

  if (props.route != null) {
    return (
      <Link
        href={props.route}
        className="text-cream bg-lightgreen hover:bg-lightgreenhover hover:text-charcoal active:bg-lightgreenactive h-fit w-fit rounded-xl px-8 py-2 text-center shadow-md transition-colors duration-400"
      >
        <p className="text-lg font-bold text-nowrap">{props.text}</p>
      </Link>
    );
  } else if (props.externalLink != null) {
    return (
      <a
        className="text-cream bg-lightgreen hover:bg-lightgreenhover hover:text-charcoal active:bg-lightgreenactive h-fit w-fit rounded-xl px-8 py-2 text-center shadow-md transition-colors duration-400"
        href={props.externalLink}
      >
        <p className="text-lg font-bold">{props.text}</p>
      </a>
    );
  } else {
    // Make button unclickable and grey if form is not filled in (For sign up and login page)
    return (
      <button
        onClick={props.onClick}
        className={`text-cream h-fit w-fit rounded-xl px-8 py-2 text-center shadow-md transition-colors duration-400 ${
          formFilled
            ? "bg-lightgreen hover:bg-lightgreenhover hover:text-mayo active:bg-lightgreenactive cursor-pointer"
            : "bg-darkgrey cursor-not-allowed"
        }`}
        disabled={!formFilled}
      >
        <p className="text-lg font-bold">{props.text}</p>
      </button>
    );
  }
}
