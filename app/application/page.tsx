"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Button from "@/components/Button";

const sideBarItems: { name: string; link: string; icon: string }[] = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: "/icons/dashboard-icon.svg",
  },
  {
    name: "Application",
    link: "/application",
    icon: "/icons/file-icon.svg",
  },
];

export default function Application() {
  const router = useRouter();
  const current_path = usePathname();

  return (
    <>
      <Navbar hide={true} />
      <div className="relative flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <div className="flex flex-col w-1/6 bg-[#0C203F] justify-between rounded-tr-4xl">
          <div className="p-5 mb-4 text-3xl">
            <h1>
              Hello, <span className="text-[#81C470]">USER!</span>
            </h1>
          </div>

          <div className="flex flex-col justify-center flex-grow">
            {sideBarItems.map((item, idx) => (
              <div
                key={idx}
                className={`group flex items-center gap-4 hover:bg-[#183766] hover:text-[#F5F3E7] text-[#A6A6A6] text-xl h-14 cursor-pointer ${
                  current_path === item.link && "bg-[#183766] text-[#F5F3E7]"
                }`}
                onClick={() => router.push(item.link)}
              >
                <div
                  className={`bg-white w-1 h-full scale-y-0 group-hover:scale-y-100 transition-transform origin-top ${
                    current_path === item.link && "scale-y-100"
                  }`}
                ></div>
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className={`w-5 h-5 group-hover:filter group-hover:brightness-150 scale-125 transition ${
                    current_path === item.link && "filter brightness-150"
                  }`}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-grow justify-center items-center relative overflow-hidden">
          <Card className="w-9/12">
            <div className="flex flex-row space-between">
              <h1 className="text-6xl font-extrabold text-[#81C470] mb-10 pr-4 tracking-wide">
                APPLICATION
              </h1>
              <div className={`bg-[#81C470] w-[0.7rem] scale-y-100`}></div>
            </div>
            <p className="text-white text-xl mb-10">
              Hey hacker, welcome aboard 👋🏼 <br />
              Your co-pilot <strong>(name)</strong> will track your journey
              through this application. Buckle up!
            </p>
            <div className="flex flex-col items-center">
              <Button text="Apply Now" onClick={() => console.log("Button clicked")} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
