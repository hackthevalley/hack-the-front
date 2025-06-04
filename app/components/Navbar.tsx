"use client";

import GreenButton from "@/components/GreenButton";
import Link from "next/link";

interface NavbarProp {
  hide?: boolean;
}

export default function Navbar(props: NavbarProp) {
  return (
    <div className="sticky top-0  z-50 flex bg-linear-to-b from-darkblue to-black h-[10rem]">
      <div className="py-4 px-8 flex w-[70%] items-center">
        <Link href="/" className="shrink-0">
          <img
            src="/icons/htv-logo.svg"
            className="w-[100px] h-auto shrink-0"
          />
        </Link>
        {!props.hide ? (
          <ul className="flex w-full justify-evenly items-center font-[family-name:var(--font-euclid-circular-b)] font-semibold text-white text-2xl">
            <li>
              <Link href="#about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="#schedule">
                <p>Schedule</p>
              </Link>
            </li>
            <li>
              <Link href="#faq">
                <p>FAQ</p>
              </Link>
            </li>
            <li>
              <Link href="#themes">
                <p>Themes</p>
              </Link>
            </li>
            <li>
              <Link href="#pastyears">
                <p>Past Years</p>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("sponsors")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Sponsors
              </button>
            </li>
          </ul>
        ) : null}
      </div>

      {!props.hide ? (
        <div className="w-[30%] flex justify-end items-center pr-10 gap-x-10">
          <GreenButton text="Apply Now" route="/login" />
          <Link
            id="mlh-trust-badge"
            className="block max-w-[100px] min-w-[60px] right-[50px] top-0 z-[10000]"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
            target="_blank"
          >
            <img
              className="w-[100px]"
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
              alt="Major League Hacking 2025 Hackathon Season"
            />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
