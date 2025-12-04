"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import GreenButton from "@/components/GreenButton";
import Navbar from "@/components/Navbar";
import TextField from "@/components/TextField";
import fetchInstance from "@/utils/api";

export default function ResetPasswordPage() {
  const [newpassword, setNewPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  if (!token || Array.isArray(token)) {
    return <p>Missing or invalid token.</p>;
  }

  const matchPassword = () => {
    if (newpassword == confirmpassword) {
      return true;
    }
    return false;
  };

  const resetPassword = async (e: React.FormEvent) => {
    const loadingToast = toast.loading("Resetting password...");
    e.preventDefault();
    const data = {
      token: token,
      password: newpassword,
    };
    try {
      const response = await fetchInstance("password-resets", {
        method: "PUT",
        body: JSON.stringify(data),
      });
      if (response) {
        toast.dismiss(loadingToast);
        toast.success(`Password Successfully Resetted`);
        router.push("/login");
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
          {/* <Link className="cursor-pointer text-2xl font-semibold text-white transition-colors duration-400 hover:text-neutral-400 active:text-white/70" href="/">
            {"<"} Back
          </Link> */}
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="mt-4 mb-8 text-5xl font-bold text-white">{">"} Reset Password</p>

            <div className="my-8 w-full">
              <div className="flex items-center justify-between">
                <hr className="bg-indigo mr-4 h-[2px] w-full border-none" />
                <p className="w-fit text-2xl font-semibold whitespace-nowrap text-white">
                  Reset your password here
                </p>
                <hr className="bg-indigo ml-4 h-[2px] w-full border-none" />
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-y-8">
              <TextField
                title="New Password"
                placeholder="new password"
                type="password"
                fieldValue={newpassword}
                setFieldValue={setNewPassword}
              />
              <TextField
                title="Confirm Password"
                placeholder="confirm password"
                type="password"
                fieldValue={confirmpassword}
                setFieldValue={setConfirmPassword}
                hasError={!matchPassword()}
                errorMessage={"Passwords do not match"}
              />
            </div>
            <GreenButton
              text="Reset Password"
              onClick={resetPassword}
              formFilled={!!newpassword && !!confirmpassword && matchPassword()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
