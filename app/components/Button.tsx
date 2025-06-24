"use client";

import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface ButtonProp {
  text: string;
  onClick?: (...args: any[]) => any; // any input or output datatype
  extraClass?: string;
  route?: string;
}

export default function Button(props: ButtonProp) {
  if (props.route != null) {
    return (
      <Link
        href={props.route}
        className={`text-cream from-darkgreen to-aquamarine h-fit w-fit rounded-xl bg-linear-to-b px-8 shadow-md ${props.extraClass}`}
      >
        <p className="text-lg font-bold">{props.text}</p>
      </Link>
    );
  } else {
    return (
      <button
        onClick={props.onClick}
        className={`text-cream from-darkgreen to-aquamarine h-fit w-fit rounded-xl bg-linear-to-b px-8 shadow-md ${props.extraClass}`}
      >
        <p className="text-lg font-bold">{props.text}</p>
      </button>
    );
  }
}
