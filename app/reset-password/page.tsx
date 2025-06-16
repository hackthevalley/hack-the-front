"use client";
import { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";
import GreenButton from "@/components/GreenButton";
import TextField from "@/components/TextField";

import fetchInstance from "@/utils/api";

export default function ResetPasswordPage() {
  const [newpassword, setNewPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token || Array.isArray(token)) {
    return <p>Missing or invalid token.</p>;
  }

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
    // <div className="p-6">
    //   <h1 className="text-2xl font-bold">Reset Your Password</h1>
    //   <p>Token: {token}</p>
    //   {/* Password reset form goes here */}
    // </div>
    <div className="bg-black h-[100vh] overflow-y-auto font-[family-name:var(--font-euclid-circular-b)] relative">
      <img
        className="absolute z-0 opacity-15 top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]"
        src="/backgrounds/smaller-gradient.svg"
      />
      <Navbar hide={true} />

      <div className="flex flex-col relative z-[10]">
        <div className="w-3/4 mx-auto items-start mb-[1rem]">
          {/* <Link className="text-white font-semibold text-2xl" href="/">
            {"<"} Back
          </Link> */}
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="text-white font-bold text-5xl mt-[1rem] mb-[2rem]">
              {">"} Reset Password
            </p>

            <div className="w-full my-[2rem]">
              <div className="flex justify-between items-center">
                <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
                <p className="text-white w-fit whitespace-nowrap font-semibold text-2xl">
                  Reset your password here
                </p>
                <hr className="bg-indigo border-none ml-4 w-full h-[2px]" />
              </div>
            </div>
            <div className="flex flex-col gap-y-[2rem] mb-[1rem]">
              <TextField
                title="New Password"
                placeholder="new password"
                type="password"
                fieldValue={newpassword}
                setFieldValue={setNewPassword}
                errorMessage={"Invalid email format"}
              />
            </div>
            <div className="flex flex-col gap-y-[2rem] mb-[1rem]">
              <TextField
                title="Confirm Password"
                placeholder="confirm password"
                type="password"
                fieldValue={confirmpassword}
                setFieldValue={setConfirmPassword}
                errorMessage={"Invalid email format"}
              />
            </div>
            <GreenButton
              text="Send Email"
              onClick={resetPassword}
              formFilled={!!newpassword && !!confirmpassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
