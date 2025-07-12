"use client";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import GreenButton from "@/components/GreenButton";

interface NavbarProp {
  hide?: boolean;
}

const navBarItems = [
  { label: "About", id: "about" },
  // { label: "Schedule", id: "schedule" },
  { label: "FAQ", id: "faq" },
  { label: "Themes", id: "themes" },
  // { label: "Past Years", id: "past-years" },
  { label: "Sponsors", id: "sponsors" },
  { label: "Apply", id: "login" },
];

export default function Navbar(props: NavbarProp) {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  const handleLogoClick = () => {
    if (pathname === "/") {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on other pages, navigate to home
      router.push("/");
    }
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
    // from-darkblue to-black bg-linear-to-b
    <div className="from-darkblue sticky top-0 z-50 flex h-[7rem] bg-linear-to-b to-black sm:h-[7rem]">
      <div className="flex w-full items-center justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <button onClick={handleLogoClick} className="flex items-center">
            <Image
              width={0}
              height={0}
              alt="HTV Logo"
              src="/icons/htv-logo.svg"
              className="h-auto w-[100px] shrink-0"
            />
          </button>
        </div>

        {!props.hide && (
          <>
            {/* Desktop */}
            {showDesktopNavbar && (
              // justify-evenly flex-1
              <ul className="text-md mx-10 flex w-4/5 items-center gap-x-10 font-[family-name:var(--font-euclid-circular-b)] font-semibold text-white sm:flex sm:text-xl lg:text-2xl">
                {navBarItems.map(({ label, id }) => (
                  <li key={id}>
                    {id !== "login" ? (
                      <button
                        className="text-white transition-colors duration-400 hover:text-neutral-400 active:text-white/70"
                        onClick={() => scrollToSection(id)}
                      >
                        {label}
                      </button>
                    ) : (
                      <></>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* MLH Badge & Apply now */}
            <div className="flex items-center justify-end gap-x-10">
              {showDesktopNavbar && <GreenButton text="Apply Now" route="/login" />}

              {/* Mobile menu */}
              {!props.hide && !showDesktopNavbar && (
                <button
                  className="mr-[1rem] text-3xl text-white"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle Menu"
                >
                  <FontAwesomeIcon icon={menuVisible ? faTimes : faBars} />
                </button>
              )}

              {/* max-w-[100px] min-w-[60px] */}
              <Link
                id="mlh-trust-badge"
                className="z-[10000] mt-[1rem] mr-[1.5rem] w-[80px] sm:mt-[3rem] sm:w-[100px]"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
                target="_blank"
              >
                <Image
                  className="relative"
                  width={120}
                  height={105}
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
        <div className="justimd:hidden bg-midnight absolute top-[6rem] left-0 z-40 w-full py-6 shadow-lg">
          <ul className="flex flex-col items-center gap-6 font-[family-name:var(--font-euclid-circular-b)] text-xl font-semibold text-white">
            {navBarItems.map(({ label, id }) => (
              <li key={id}>
                {id === "login" ? (
                  <Link
                    className="hover:text-lightgreen active:text-lightgreenactive text-white transition-colors duration-400"
                    href={"/login"}
                  >
                    {label}
                  </Link>
                ) : (
                  <button
                    className="text-white transition-colors duration-400 hover:text-neutral-400 active:text-white/70"
                    onClick={() => scrollToSection(id)}
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
