"use client";

import Navbar from "@/components/Navbar";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

export default function SignupPage() {
  return (
    <div className="bg-black h-[100vh] overflow-y-auto font-[family-name:var(--font-euclid-circular-b)] relative">
      <img
        className="absolute opacity-15 top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]"
        src="/backgrounds/smaller-gradient.svg"
      />
      <Navbar hide={true} />

      <div className="flex flex-col justify-start">
        <div className="w-3/4 mx-auto items-start mb-[1rem]">
          <button className="text-white font-semibold text-xl">
            {"<"} Back
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="text-white font-bold text-5xl mt-[1rem] mb-[2rem]">
              {">"} Hello Hacker,
            </p>

            <div className="w-full my-[2rem]">
              <div className="flex justify-between items-center">
                <hr className="bg-indigo mr-4 w-full h-[2px]" />
                <p className="text-white w-fit whitespace-nowrap font-semibold font-2xl">
                  Sign in to view dashboard
                </p>
                <hr className="bg-indigo ml-4 w-full h-[2px]" />
              </div>
              <form className="flex flex-col gap-6 items-start">
                <div className="flex flex-col lg:flex-row gap-4">
                  <TextField
                    title="First Name"
                    placeholder="first name"
                    required
                  />
                  <TextField
                    title="Last Name"
                    placeholder="last name"
                    required
                  />
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

                <div className="mt-4">
                  <Button text="Sign Up" onClick={() => {}} />
                </div>
                <p className="text-sm mt-2">
                  Already have an account?{" "}
                  <a href="/login" className="text-green-400 font-semibold">
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
