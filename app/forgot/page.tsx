"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import GreenButton from "@/components/GreenButton";
import Navbar from "@/components/Navbar";
import TextField from "@/components/TextField";
import fetchInstance from "@/utils/api";
import { UserContext } from "@/utils/auth";

export default function ForgotPage() {
  const [email, setEmail] = useState<string>("");
  const [formFilled, setFormFilled] = useState<boolean>(false);
  const userContext = useContext(UserContext);
  const isAuthenticated = userContext?.isAuthenticated ?? false;
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // change to /dashboard after merge
    }
  }, [isAuthenticated, router]);

  // Controls formFilled flag which enables/disables the login button
  useEffect(() => {
    if (email !== "") {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [email]);

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

  const resetPassword = async (e: React.FormEvent) => {
    const loadingToast = toast.loading("Sending email...");
    e.preventDefault();
    const data = {
      email: email,
    };
    try {
      const response = await fetchInstance("account/send_reset_password", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response) {
        toast.dismiss(loadingToast);
        toast.success(`Email Sent`);
      }
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
    <div className="relative h-screen overflow-y-auto bg-black font-[family-name:var(--font-euclid-circular-b)]">
      <Image
        width={0}
        height={0}
        alt="Background Gradient"
        className="pointer-events-none absolute top-6/10 left-1/2 z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-15"
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

      <div className="relative z-10 flex flex-col">
        <div className="mx-auto mb-4 w-3/4 items-start">
          <Link className="text-2xl font-semibold text-white" href="/">
            {"<"} Back
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="mt-4 mb-8 text-5xl font-bold text-white">{">"} Forgot Password?</p>

            <div className="my-8 w-full">
              <div className="flex items-center justify-between">
                <hr className="bg-indigo mr-4 h-[2px] w-full border-none" />
                <p className="w-fit text-2xl font-semibold whitespace-nowrap text-white">
                  Reset your password here
                </p>
                <hr className="bg-indigo ml-4 h-[2px] w-full border-none" />
              </div>
            </div>

            <div className="mb-8 flex flex-col gap-y-8">
              <TextField
                title="Email"
                placeholder="email"
                type="email"
                fieldValue={email}
                setFieldValue={setEmail}
                hasError={!validEmail()}
                errorMessage={"Invalid email format"}
              />
            </div>

            {/* Need to add logic so Sign in turns grey */}
            <GreenButton
              text="Send Email"
              onClick={resetPassword}
              formFilled={formFilled && validInput()}
            />

            <div className="my-4 flex">
              <p className="text-grey mr-2 text-lg">Remember your password?</p>
              <Link className="text-lightgreen text-lg font-semibold" href="/login">
                Sign in.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
