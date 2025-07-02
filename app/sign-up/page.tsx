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

export default function SignupPage() {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { isAuthenticated } = useContext(UserContext) ?? {};
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // change to /dashboard after merge
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        if (!!email && !!password && !!fname && !!lname && validInput()) {
          submit(event as unknown as React.FormEvent);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

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

  const matchPasswords = () => {
    return password === confirmPassword;
  };

  const isStrongPassword = () => {
    // Password should start with a capital letter, contain a number, and be at least 8 characters long
    return (
      password === "" ||
      String(password)
        .toLowerCase()
        .match(/^(?=.*\d).{8,}$/)
    );
  };

  const validInput = () => {
    if ((!validEmail() && email !== "") || !matchPasswords() || !isStrongPassword()) {
      return false;
    }
    return true;
  };

  const submit = async (e: React.FormEvent) => {
    const loadingToast = toast.loading("Signing up...");
    e.preventDefault();
    const data = {
      first_name: fname,
      last_name: lname,
      password: password,
      email: email,
    };

    try {
      await fetchInstance("account/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      router.push("/login");
      toast.dismiss(loadingToast);
      toast.success(`Sign up successful`);
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

      <div className="relative z-10 flex flex-col">
        <div className="mx-auto mb-4 w-3/4 items-start">
          <Link className="text-2xl font-semibold text-white" href="/">
            {"<"} Back
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="mt-4 mb-8 text-5xl font-bold text-white">{">"} Hello Hacker,</p>

            <div className="my-8 w-full">
              <div className="flex items-center justify-between">
                <hr className="bg-indigo mr-4 h-[2px] w-full border-none" />
                <p className="w-fit text-2xl font-semibold whitespace-nowrap text-white">
                  Create an account to register
                </p>
                <hr className="bg-indigo ml-4 h-[2px] w-full border-none" />
              </div>
            </div>

            <form className="flex flex-col items-stretch gap-6">
              <div className="flex flex-col gap-4 lg:flex-row">
                <TextField
                  title="First Name"
                  placeholder="first name"
                  required
                  widthClasses="w-full"
                  fieldValue={fname}
                  setFieldValue={setFname}
                />
                <TextField
                  title="Last Name"
                  placeholder="last name"
                  required
                  fieldValue={lname}
                  setFieldValue={setLname}
                />
              </div>
              <TextField
                title="Email"
                placeholder="email"
                required
                widthClasses="w-full"
                type="email"
                fieldValue={email}
                setFieldValue={setEmail}
                hasError={!validEmail()}
                errorMessage="Invalid email format"
              />
              <div className="flex flex-col gap-4 lg:flex-row">
                <TextField
                  title="Password"
                  placeholder="password"
                  type="password"
                  required
                  fieldValue={password}
                  setFieldValue={setPassword}
                  hasError={!isStrongPassword()}
                  errorMessage="Use at least 8 characters, including a number"
                />
                <TextField
                  title="Confirm Password"
                  placeholder="confirm password"
                  required
                  type="password"
                  fieldValue={confirmPassword}
                  setFieldValue={setConfirmPassword}
                  hasError={!matchPasswords()}
                  errorMessage="Passwords do not match"
                />
              </div>
              <GreenButton
                text="Sign Up"
                onClick={submit}
                formFilled={!!email && !!password && !!fname && !!lname && validInput()}
              />
              <div className="my-4 flex">
                <p className="text-grey mr-2 text-lg">Already have an account?</p>
                <Link className="text-lightgreen text-lg font-semibold" href="/login">
                  Sign in.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
