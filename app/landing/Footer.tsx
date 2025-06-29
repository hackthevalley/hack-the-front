import Image from "next/image";

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
    <footer className="flex flex-col items-center gap-y-7 bg-black px-4 py-8">
      <div className="z-10 mb-2 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-14">
        {socialLinks.map((item, index) => (
          <a key={index} href={item.href} className="font-ecb flex items-center gap-2 text-white">
            <Image src={item.icon} alt={`${item.label}icon`} width={24} height={24} />
            <span className="font-ecb text-xl font-bold text-white">hackthevalley</span>
          </a>
        ))}
      </div>
      <a
        className="text-gray text-[16px] underline"
        href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
      >
        MLH Code of Conduct
      </a>
    </footer>
  );
}
