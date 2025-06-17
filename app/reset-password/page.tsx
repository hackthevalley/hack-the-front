"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useSearchParams, useRouter } from "next/navigation";
import GreenButton from "@/components/GreenButton";
import TextField from "@/components/TextField";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

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
      const response = await fetchInstance("account/reset_password", {
        method: "POST",
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
    <div className="bg-black h-screen overflow-y-auto font-[family-name:var(--font-euclid-circular-b)] relative">
      <Image
        width={0}
        height={0}
        alt="Background Gradient"
        className="absolute z-0 opacity-15 top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2"
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

      <div className="flex flex-col relative z-10">
        <div className="w-3/4 mx-auto items-start mb-4">
          {/* <Link className="text-white font-semibold text-2xl" href="/">
            {"<"} Back
          </Link> */}
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="text-white font-bold text-5xl mt-4 mb-8">
              {">"} Reset Password
            </p>

            <div className="w-full my-8">
              <div className="flex justify-between items-center">
                <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
                <p className="text-white w-fit whitespace-nowrap font-semibold text-2xl">
                  Reset your password here
                </p>
                <hr className="bg-indigo border-none ml-4 w-full h-[2px]" />
              </div>
            </div>
            <div className="flex flex-col gap-y-8 mb-4">
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
