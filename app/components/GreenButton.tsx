"use client"

import Link from "next/link";

interface ButtonProp {
    text: string;
    onClick?: (...args: any[]) => any; // any input or output datatype
    route?: string;
    formFilled?: boolean;
}

export default function Button(props: ButtonProp) {
    const {
        formFilled = true,
    } = props;

    if(props.route != null) {
        return(
            <Link href={props.route} className="rounded-xl shadow-md text-cream w-fit h-fit px-8 py-2 bg-lightgreen">
                <p className="font-bold text-lg">{props.text}</p>
            </Link>
        );
    } else {
        // Make button unclickable and grey if form is not filled in (For sign up and login page)
        return(
            <button onClick={props.onClick} className={`rounded-xl shadow-md text-cream w-fit h-fit px-8 py-2 ${ formFilled ? "bg-lightgreen" : "bg-darkgrey"}`} disabled={!formFilled} >
                <p className="font-bold text-lg">{props.text}</p>
            </button>
        );
    }
}