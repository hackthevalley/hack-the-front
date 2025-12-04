"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";
import fetchInstance from "@/utils/api";

export default function ActivatePage() {
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
        const response = await fetchInstance("account/activations", {
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
    <div className="relative flex min-h-screen flex-col overflow-y-auto bg-black font-[family-name:var(--font-euclid-circular-b)]">
      <Image
        width={0}
        height={0}
        alt="Background Gradient"
        className="absolute top-6/10 left-1/2 z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-15"
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

      <div className="relative z-10 flex grow animate-pulse flex-col items-center justify-center">
        <p className="mt-4] mb-8 text-5xl font-bold text-white">Loading...</p>
        <p className="text-grey text-xl">Please wait as we activate your account</p>
      </div>
    </div>
  );
}
