import React from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div>
      <Navbar hide={true} />
      <div className="min-h-[calc(110vh-10rem)] bg-black relative overflow-hidden font-[family-name:var(--font-euclid-circular-b)] flex flex-col items-center justify-start pt-10">
        <Image
          width={0}
          height={0}
          src="/backgrounds/smaller-gradient.svg"
          alt="Background Gradient"
          className="absolute z-0 opacity-15 top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2"
        />
        {/* Mini Browser Border Start */}
        <div className="relative z-10 w-full max-w-5xl mx-auto mb-8 rounded-2xl bg-[#12213A] shadow-lg border border-blue-900">
          {/* Browser Top Bar */}
          <div className="flex items-center px-4 py-2 bg-[#192642] rounded-t-2xl border-b border-blue-900">
            {/* Circles */}
            <div className="flex items-center gap-2 mr-4">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            </div>
            {/* URL Bar */}
            <div className="flex-1 bg-[#22345a] rounded-md px-4 py-1 text-sm text-gray-300 font-mono truncate">
              hackthevalley - bash - 80x24
            </div>
          </div>
          {/* Main Content Inside Browser */}
          <div className="p-0 md:p-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-grey text-xl font-[family-name:var(--font-source-code-pro)]">
                $ npm start challenge
              </span>
              <Link
                href="/login"
                className="text-red-400 text-lg font-semibold"
              >
                {"< Log Out"}
              </Link>
            </div>
            <h1 className="text-white font-bold text-5xl mb-6 mt-2">
              Welcome Back, John
            </h1>
            {/* Application Status Card */}x
            <div className="bg-[#0B1627] border border-blue-900 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center md:items-center gap-6">
              <div className="flex-1">
                <p className="text-white text-lg mb-2">
                  Current Application Status
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    width={0}
                    height={0}
                    src="/dashboard/square-xmark-solid 1.svg"
                    alt="Declined"
                    className="w-10 h-10"
                  />
                  <span className="text-red-400 text-3xl font-bold">
                    Declined
                  </span>
                </div>
                <p className="text-grey text-base">
                  Application due on{" "}
                  <span className="font-semibold text-white">
                    September 20, 2025
                  </span>
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="bg-gray-400 text-white px-6 py-3 rounded-lg text-lg font-semibold">
                  Closed
                </span>
              </div>
            </div>
            {/* Explore Section */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">Explore</h2>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Discover Themes Card */}
                <Link
                  href="#themes"
                  className="flex-1 bg-[#0B1627] rounded-xl p-6 flex items-center gap-6 hover:bg-[#1a2c4d] transition-colors"
                >
                  <div className="flex gap-2 min-w-[64px]">
                    <Image
                      width={0}
                      height={0}
                      src="/dashboard/Themes.svg"
                      alt="Themes"
                      className="w-full h-auto max-h-24 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-white text-2xl font-semibold">
                      Discover Themes
                    </div>
                    <div className="text-grey text-lg">Factions of HTVX</div>
                  </div>
                </Link>
                {/* FAQ Card */}
                <Link
                  href="#faq"
                  className="flex-1 bg-[#0B1627] rounded-xl p-6 flex items-center gap-6 hover:bg-[#1a2c4d] transition-colors"
                >
                  <div className="min-w-[64px]">
                    <Image
                      width={0}
                      height={0}
                      src="/dashboard/FAQ Icon.svg"
                      alt="FAQ"
                      className="w-14 h-14"
                    />
                  </div>
                  <div>
                    <div className="text-white text-2xl font-semibold">
                      How Can we Help?
                    </div>
                    <div className="text-grey text-lg">
                      Frequently Asked Questions
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mini Browser Border End */}
      </div>
    </div>
  );
}
