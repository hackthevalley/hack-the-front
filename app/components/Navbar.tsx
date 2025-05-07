"use client"

import GreenButton from "@/components/GreenButton"; 

interface NavbarProp {
    hide?: boolean
}

export default function Navbar(props : NavbarProp) {
    return(
        <div className="flex bg-linear-to-b from-darkblue to-black h-[10rem]">
            <div className="py-4 px-8 flex w-[70%] items-center">
                <a href="/">
                    <img src="/icons/htv-logo.svg" width="100px" />
                </a>
                {!props.hide ? (
                    <ul className="flex w-full justify-evenly items-center font-[family-name:var(--font-euclid-circular-b)] font-semibold text-white text-2xl">
                    <li>
                        <a href="#about"><p>ABOUT</p></a>
                    </li>
                    <li>
                        <a href="#schedule"><p>SCHEDULE</p></a>
                    </li>
                    <li>
                        <a href="#faq"><p>FAQ</p></a>
                    </li>
                    <li>
                        <a href="#themes"><p>THEMES</p></a>
                    </li>
                    <li>
                        <a href="#pastyears"><p>PAST YEARS</p></a>
                    </li>
                    <li>
                        <a href="#sponsors"><p>SPONSORS</p></a>
                    </li>
                </ul>
                ) : null}
            </div>

            {!props.hide ? (
            <div className="w-[30%] flex justify-end items-center pr-10 gap-x-10">
                <GreenButton text="Apply Now" route="/login" />
                <a id="mlh-trust-badge" className="block max-w-[100px] min-w-[60px] right-[50px] top-0 z-[10000]" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" target="_blank"><img className="w-[100px]" src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" alt="Major League Hacking 2025 Hackathon Season" /></a>
            </div>
            ) : null}
        </div>
    )
}