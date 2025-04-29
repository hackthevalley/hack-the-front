"use client"

import Link from "next/link"
import GreenButton from "@/components/GreenButton"; 

export default function Navbar() {
    return(
        <div className="flex bg-linear-to-b from-[#1C4582] to-[#06101E]">
            <div className="h-fit py-6 px-6 flex w-[70%]">
                <img src="/icons/htv-logo.svg" width="100px" />
                <ul className="flex w-full justify-evenly items-center font-[family-name:var(--font-euclid-circular-b)] font-semibold text-white text-2xl">
                    <li>
                        <Link href="/about"><p>ABOUT</p></Link>
                    </li>
                    <li>
                        <Link href="/schedule"><p>SCHEDULE</p></Link>
                    </li>
                    <li>
                        <Link href="/faq"><p>FAQ</p></Link>
                    </li>
                    <li>
                        <Link href="/themes"><p>THEMES</p></Link>
                    </li>
                    <li>
                        <Link href="/pastyears"><p>PAST YEARS</p></Link>
                    </li>
                    <li>
                        <Link href="/sponsors"><p>SPONSORS</p></Link>
                    </li>
                </ul>
            </div>


            <div className="w-[30%] flex justify-end items-center pr-10 gap-x-10">
                <GreenButton text="Apply Now" onClick={() => {console.log("Move to Apply Page");}} />
                <img src="/icons/mlh-logo.svg" width="100px" />
                {/* Get official MLH banner */}
            </div>


        </div>
    )
}