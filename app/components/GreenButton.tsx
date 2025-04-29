"use client"

interface ButtonProp {
    text: string;
    onClick: (...args: any[]) => any; // any input or output datatype
}

export default function Button(props: ButtonProp) {
    return(
        <button onClick={props.onClick} className="rounded-xl shadow-md text-[#F5F3E7] w-fit h-fit px-8 py-2 bg-[#6EAC5E]">
            <p className="font-bold text-lg">{props.text}</p>
        </button>
    );

}