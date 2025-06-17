"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import fetchInstance from "@/utils/api";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token || Array.isArray(token)) return;

    const activateAccount = async () => {
      const loadingToast = toast.loading("Activating Account...");
      const data = {
        token: token,
      };

      try {
        const response = await fetchInstance("account/activate", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (response) {
          toast.dismiss(loadingToast);
          toast.success("Password Successfully Activated");
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

    activateAccount();
  }, [token, router]);

  if (!token || Array.isArray(token)) {
    return <p>Missing or invalid token.</p>;
  }

  return (
    <div className="bg-black min-h-screen overflow-y-auto font-[family-name:var(--font-euclid-circular-b)] relative flex flex-col">
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

      <div className="flex flex-col grow relative z-10 justify-center items-center animate-pulse">
        <p className="text-white font-bold text-5xl mt-4] mb-8">Loading...</p>
        <p className="text-grey text-xl">
          Please wait as we activate your account
        </p>
      </div>
    </div>
  );
}
