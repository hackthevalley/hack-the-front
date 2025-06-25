"use client";

import GreenButton from "@/components/GreenButton";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

interface NavbarProp {
  hide?: boolean;
}

export default function Navbar(props: NavbarProp) {
  const [menuVisible, setMenuVisible] = useState(false);
  // Responsiveness
  const isMobile = useMediaQuery({ maxWidth: 1080 });

  const showDesktopNavbar = isMobile ? false : true;

  const toggleMobileMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMobileMenu = () => {
    setMenuVisible(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMobileMenu();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-0 z-50 flex bg-linear-to-b from-darkblue to-black sm:h-[10rem]">
      <div className="py-4 p-2 sm:px-8 flex items-center w-full justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => scrollToSection("home")}>
            <img
              src="/icons/htv-logo.svg"
              className="w-[100px] h-auto shrink-0"
            />
          </button>
        </div>

        {!props.hide && (
          <>
            {/* Desktop */}
            {showDesktopNavbar && (
              <ul className="sm:flex flex-1 justify-evenly items-center font-[family-name:var(--font-euclid-circular-b)] font-semibold text-white tex-md sm:text-xl lg:text-2xl">
                {[
                  { label: "About", id: "about" },
                  // { label: "Schedule", id: "schedule" },
                  { label: "FAQ", id: "faq" },
                  { label: "Themes", id: "themes" },
                  // { label: "Past Years", id: "past-years" },
                  { label: "Sponsors", id: "sponsors" },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button onClick={() => scrollToSection(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            )}

            {/* MLH Badge & Apply now */}
            <div className="flex justify-end items-center gap-x-10">
              {showDesktopNavbar && (
                <GreenButton text="Apply Now" route="/login" />
              )}

              {/* Mobile menu */}
              {!props.hide && !showDesktopNavbar && (
                <button
                  className="text-white text-3xl"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle Menu"
                >
                  <FontAwesomeIcon icon={menuVisible ? faXmark : faBars} />
                </button>
              )}

              <Link
                id="mlh-trust-badge"
                className="block max-w-[100px] min-w-[60px] z-[10000]"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
                target="_blank"
              >
                <Image
                  width="100"
                  height="175"
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
                  alt="Major League Hacking 2025 Hackathon Season"
                />
              </Link>
            </div>
          </>
        )}
      </div>
      {/* Mobile menu*/}
      {!props.hide && menuVisible && (
        <div className="justimd:hidden bg-midnight py-6 shadow-lg z-40 absolute w-full left-0 top-[10rem]">
          <ul className="flex flex-col items-center gap-6 font-[family-name:var(--font-euclid-circular-b)] font-semibold text-white text-xl">
            {[
              { label: "About", id: "about" },
              // { label: "Schedule", id: "schedule" },
              { label: "FAQ", id: "faq" },
              { label: "Themes", id: "themes" },
              // { label: "Past Years", id: "past-years" },
              { label: "Sponsors", id: "sponsors" },
              { label: "Apply", id: "login" },
            ].map(({ label, id }) => (
              <li key={id}>
                {id === "login" ? (
                  <Link href={"/login"}>{label}</Link>
                ) : (
                  <button onClick={() => scrollToSection(id)}>{label}</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
