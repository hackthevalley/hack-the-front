"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import GreenButton from "@/components/GreenButton";
import Button from "@/components/Button";
import TextField from "@/components/TextField";

import { useRouter } from "next/navigation";

export default function SignuPage() {
  const router = useRouter();
  return (
    <div className="bg-black h-[100vh] overflow-y-auto font-[family-name:var(--font-euclid-circular-b)] relative">
      <img
        className="absolute z-0 opacity-15 top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]"
        src="/backgrounds/smaller-gradient.svg"
      />
      <Navbar hide={true} />

      <div className="flex flex-col relative z-[10]">
        <div className="w-3/4 mx-auto items-start mb-[1rem]">
          <Link className="text-white font-semibold text-2xl" href="/">
            {"<"} Back
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="text-white font-bold text-5xl mt-[1rem] mb-[2rem]">
              {">"} Welcome Back Hacker,
            </p>

            <div className="w-full my-[2rem]">
              <div className="flex justify-between items-center">
                <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
                <p className="text-white w-fit whitespace-nowrap font-semibold text-2xl">
                  Sign in to view dashboard
                </p>
                <hr className="bg-indigo border-none ml-4 w-full h-[2px]" />
              </div>
            </div>

            <form className="flex flex-col gap-6 items-stretch">
              <div className="flex flex-col lg:flex-row gap-4">
                <TextField
                  title="First Name"
                  placeholder="first name"
                  required
                  widthClasses="w-full"
                />
                <TextField title="Last Name" placeholder="last name" required />
              </div>
              <TextField
                title="Email Address"
                placeholder="email address"
                required
                widthClasses="w-full"
              />
              <div className="flex flex-col lg:flex-row gap-4">
                <TextField title="Password" placeholder="password" required />
                <TextField
                  title="Confirm Password"
                  placeholder="confirm password"
                  required
                />
              </div>

              <GreenButton text="Sign In" onClick={() => {}} />

              <div className="flex my-[1rem]">
                <p className="text-grey text-lg mr-2">
                  Already have an account?
                </p>
                <button
                  className="text-lightgreen text-lg font-semibold"
                  onClick={() => router.push("/login")}
                >
                  Sign in.
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
