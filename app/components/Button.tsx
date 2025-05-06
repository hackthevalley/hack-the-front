"use client"

import Link from "next/link";

interface ButtonProp {
    text: string;
    onClick?: (...args: any[]) => any; // any input or output datatype
    route?: string;
}

export default function Button(props: ButtonProp) {
    if(props.route != null) {
        return(
            <Link href={props.route} className="rounded-xl shadow-md text-cream w-fit h-fit px-8 py-2 bg-linear-to-b from-darkgreen to-aquamarine">
                <p className="font-bold text-lg">{props.text}</p>
            </Link>
        );
    } else {
        return(
            <button onClick={props.onClick} className="rounded-xl shadow-md text-cream w-fit h-fit px-8 py-2 bg-linear-to-b from-darkgreen to-aquamarine">
                <p className="font-bold text-lg">{props.text}</p>
            </button>
        );
    }



}