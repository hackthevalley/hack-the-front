"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import GreenButton from "@/components/GreenButton";
import TextField from "@/components/TextField";
import toast, { Toaster } from "react-hot-toast";

import fetchInstance from "@/utils/api";
import { UserContext } from "@/utils/auth";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isAuthenticated, login } = useContext(UserContext) ?? {};

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // change to /dashboard after merge
    }
  }, [isAuthenticated, router]);

  // Valid email checks if it matches the format of an email while in validInput, it checks if the email field is empty. This avoids having the error message appear for empty fields
  const validEmail = () => {
    return (
      email === "" ||
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    );
  };

  const validInput = () => {
    if (!validEmail() && email !== "") {
      return false;
    }
    return true;
  };

  const signIn = async (e: React.FormEvent) => {
    const loadingToast = toast.loading("Logging in...");
    e.preventDefault();
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append("username", email);
    urlEncodedData.append("password", password);
    try {
      const response = await fetchInstance("account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      });
      if (response.access_token && login) {
        await login(response.access_token);
        router.push("/"); // change to /dashboard after merge
      }
      toast.dismiss(loadingToast);
      toast.success(`Sign in successful`);
    } catch (err) {
      toast.dismiss(loadingToast);
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="bg-black h-[100vh] overflow-y-auto font-[family-name:var(--font-euclid-circular-b)] relative">
      <Image
        width={0}
        height={0}
        alt="Background Gradient"
        className="absolute z-0 opacity-15 top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]"
        src="/backgrounds/smaller-gradient.svg"
      />
      <Navbar hide={true} />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          removeDelay: 1000,
          style: {
            background: "#0B1C34",
            color: "white",
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "#0B1C34",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "#0B1C34",
            },
          },
        }}
      />

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

            <div className="flex flex-col gap-y-[2rem] mb-[1rem]">
              <TextField
                title="Email"
                placeholder="email"
                type="email"
                fieldValue={email}
                setFieldValue={setEmail}
                hasError={!validEmail()}
                errorMessage={"Invalid email format"}
              />
              <TextField
                title="Password"
                placeholder="password"
                type="password"
                fieldValue={password}
                setFieldValue={setPassword}
              />
            </div>

            <div className="flex justify-end mb-[1rem]">
              <Link className="text-white text-lg font-semibold" href="/forgot">
                Forgot Password?
              </Link>
            </div>

            {/* Need to add logic so Sign in turns grey */}
            <GreenButton
              text="Sign In"
              onClick={signIn}
              formFilled={!!email && !!password && validInput()}
            />

            <div className="flex my-[1rem]">
              <p className="text-grey text-lg mr-2">
                Don&apos;t have an account?
              </p>
              <Link
                className="text-lightgreen text-lg font-semibold"
                href="/sign-up"
              >
                Sign up.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
