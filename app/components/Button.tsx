"use client"

interface ButtonProp {
    text: string;
    onClick: (...args: any[]) => any; // any input or output datatype
}

export default function Button(props: ButtonProp) {
    return(
        <button onClick={props.onClick} className="rounded-xl p-4 text-[#F5F3E7] w-[16rem] bg-linear-to-b from-[#6EAC5E] to-[#6B8F9F]">
            <p className="font-bold text-lg">{props.text}</p>
        </button>
    );

}