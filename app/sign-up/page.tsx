"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import GreenButton from "@/components/GreenButton";
import TextField from "@/components/TextField";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

import { useState, useEffect, useContext } from "react";
import fetchInstance from "@/utils/api";
import { UserContext } from "@/utils/auth";

export default function SignupPage() {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { login, isAuthenticated } = useContext(UserContext) ?? {};
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // change to /dashboard after merge
    }
  }, [isAuthenticated, router]);

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
    if (
      (!validEmail() && email !== "") ||
      !matchPasswords() ||
      !isStrongPassword()
    ) {
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
      const response = await fetchInstance("account/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Assuming it follows same logic as login
      if (response.access_token && login) {
        // Currently does not login after sign up
        await login(response.access_token);
        router.push("/"); // change to /dashboard after merge
      }
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
          <Link className="text-white font-semibold text-2xl" href="/">
            {"<"} Back
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-1/2">
            <p className="text-grey text-xl">$ npm start challenge</p>

            <p className="text-white font-bold text-5xl mt-4 mb-8">
              {">"} Welcome Back Hacker,
            </p>

            <div className="w-full my-8">
              <div className="flex justify-between items-center">
                <hr className="bg-indigo border-none mr-4 w-full h-[2px]" />
                <p className="text-white w-fit whitespace-nowrap font-semibold text-2xl">
                  Create an account to register
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
              <div className="flex flex-col lg:flex-row gap-4">
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
                formFilled={
                  !!email && !!password && !!fname && !!lname && validInput()
                }
              />
              fname, lname, email, password
              <div className="flex my-4">
                <p className="text-grey text-lg mr-2">
                  Already have an account?
                </p>
                <Link
                  className="text-lightgreen text-lg font-semibold"
                  href="/login"
                >
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
