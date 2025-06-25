import Image from "next/image";
import { label } from "motion/react-client";

const socialLinks = [
  {
    label: "facebook",
    icon: "/icons/facebook.png",
    href: "https://www.facebook.com/hackthevalley",
  },
  {
    label: "github",
    icon: "/icons/github.png",
    href: "https://github.com/hackthevalley",
  },
  {
    label: "instagram",
    icon: "/icons/instagram.png",
    href: "https://www.instagram.com/hackthevalley/",
  },
  {
    label: "linkedin",
    icon: "/icons/linkedin.png",
    href: "https://www.linkedin.com/company/hack-the-valley",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4 flex flex-col gap-y-7 items-center">
      <div className="flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-14 mb-2 z-10">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-2 text-white font-ecb"
          >
            <Image
              src={item.icon}
              alt={`${item.label}icon`}
              width={24}
              height={24}
            />
            <span className="text-white font-ecb font-bold text-xl">
              hackthevalley
            </span>
          </a>
        ))}
      </div>
      <a
        className="underline text-gray text-[16px]"
        href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
      >
        MLH Code of Conduct
      </a>
    </footer>
  );
}
