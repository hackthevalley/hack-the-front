"use client";

import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import ConfirmationDialog from "@/components/ConfirmationDialog";
import Navbar from "@/components/Navbar";
import fetchInstance from "@/utils/api";
import { UserContext } from "@/utils/auth";

enum Status {
  ACCOUNT_INACTIVE = "ACCOUNT_INACTIVE",
  NOT_APPLIED = "NOT_APPLIED",
  APPLYING = "APPLYING",
  APPLIED = "APPLIED",
  UNDER_REVIEW = "UNDER_REVIEW",
  WAITLISTED = "WAITLISTED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  ACCEPTED_INVITE = "ACCEPTED_INVITE",
  REJECTED_INVITE = "REJECTED_INVITE",
  SCANNED_IN = "SCANNED_IN",
  WALK_IN = "WALK_IN",
  WALK_IN_SUBMITTED = "WALK_IN_SUBMITTED",
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  uid: string;
  role: string;
  is_active: boolean;
  application_status: Status | null;
}

const getApplicationStatus = (status: Status | null) => {
  switch (status) {
    case Status.ACCEPTED:
      return {
        color: "text-green-400",
        label: "Accepted",
        icon: "/dashboard/accepted.svg",
        badge: "bg-green-600",
      };
    case Status.ACCEPTED_INVITE:
      return {
        color: "text-green-400",
        label: "Accepted RSVP",
        icon: "/dashboard/accepted.svg",
        badge: "bg-green-600",
      };
    case Status.REJECTED:
      return {
        color: "text-red-400",
        label: "Declined",
        icon: "/dashboard/declined.svg",
        badge: "bg-gray-400",
      };
    case Status.REJECTED_INVITE:
      return {
        color: "text-red-400",
        label: "Declined RSVP",
        icon: "/dashboard/declined.svg",
        badge: "bg-green-600",
      };
    case Status.APPLYING:
      return {
        color: "text-gray-300",
        label: "Applying",
        icon: "/dashboard/pending.svg",
        badge: "bg-gray-500",
      };
    case Status.APPLIED:
      return {
        color: "text-gray-300",
        label: "Applied",
        icon: "/dashboard/pending.svg",
        badge: "bg-gray-500",
      };
    case Status.WAITLISTED:
      return {
        color: "text-yellow-400",
        label: "Waitlisted",
        icon: "/dashboard/waitlisted.svg",
        badge: "bg-yellow-600",
      };
    case Status.SCANNED_IN:
      return {
        color: "text-green-400",
        label: "Scanned In",
        icon: "/dashboard/accepted.svg",
        badge: "bg-green-600",
      };
    case Status.WALK_IN:
      return {
        color: "text-blue-400",
        label: "Walk-In",
        icon: "/dashboard/pending.svg",
        badge: "bg-blue-600",
      };
    case Status.WALK_IN_SUBMITTED:
      return {
        color: "text-green-400",
        label: "Walk-In Submitted",
        icon: "/dashboard/accepted.svg",
        badge: "bg-green-600",
      };
    default:
      return {
        color: "text-gray-300",
        label: "Not Submitted",
        icon: "/dashboard/notSubmitted.svg",
        badge: "bg-gray-500",
      };
  }
};

interface TimeRange {
  start_at: string;
  end_at: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [timeRange, setTimeRange] = useState<TimeRange | null>(null);
  const ctx = useContext(UserContext);
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingRSVP, setPendingRSVP] = useState<{ uid: string; status: Status } | null>(null);

  const rsvpStatusUpdate = async (uid: string, status: Status) => {
    setPendingRSVP({ uid, status });
    setShowConfirmation(true);
  };

  const getCurrentUser = async (): Promise<User> => {
    return await fetchInstance("account/me", {
      method: "GET",
    });
  };

  const getRegTimeRange = async (): Promise<TimeRange> => {
    return await fetchInstance("forms/registration-timerange", {
      method: "GET",
    });
  };

  const handleLogout = () => {
    ctx?.logout();
    router.push("/login");
  };

  useEffect(() => {
    if (ctx?.loading) return;

    if (!ctx?.isAuthenticated) {
      router.push("/login");
      return;
    }

    getCurrentUser()
      .then(setUser)
      .catch((err) => console.log(err.message));

    getRegTimeRange()
      .then(setTimeRange)
      .catch((err) => console.log(err.message));
  }, [ctx?.isAuthenticated, ctx?.loading, router]);

  const status = getApplicationStatus(user?.application_status || null);
  const isOpen =
    timeRange &&
    new Date() < new Date(timeRange.end_at) &&
    new Date(timeRange.start_at) < new Date();

  const handleRSVPUpdate = async () => {
    if (!pendingRSVP) return;
    const { uid, status } = pendingRSVP;

    try {
      const res = await fetchInstance(`account/users/${uid}/rsvp-status`, {
        method: "PATCH",
        queryParams: { status: status },
      });

      if (res) {
        setUser((oldUserInfo) =>
          oldUserInfo ? { ...oldUserInfo, application_status: res.new_status } : null,
        );

        toast.success(
          res.new_status === Status.ACCEPTED_INVITE ? "RSVP Accepted!" : "RSVP Declined!",
        );
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setShowConfirmation(false);
      setPendingRSVP(null);
    }
  };

  if (ctx?.loading || !ctx?.isAuthenticated) {
    return null;
  }
  return (
    <div>
      <Navbar hide={true} />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-start overflow-hidden bg-black pt-10 font-[family-name:var(--font-euclid-circular-b)]">
        <Image
          width={0}
          height={0}
          src="/backgrounds/smaller-gradient.svg"
          alt="Background Gradient"
          className="pointer-events-none absolute top-6/10 left-1/2 z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-15"
        />
        {/* Mini Browser Border Start */}
        <div className="relative z-10 mx-auto mb-8 w-full max-w-5xl rounded-2xl border border-blue-900 bg-[#12213A] shadow-lg">
          {/* Browser Top Bar */}
          <div className="flex items-center rounded-t-2xl border-b border-blue-900 bg-[#192642] px-4 py-2">
            {/* Circles */}
            <div className="mr-4 flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            {/* URL Bar */}
            <div className="flex-1 truncate rounded-md bg-[#22345a] px-4 py-1 font-mono text-sm text-gray-300">
              hackthevalley - bash - 80x24
            </div>
          </div>
          {/* Main Content Inside Browser */}
          <div className="p-0 md:p-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-grey font-[family-name:var(--font-source-code-pro)] text-xl">
                $ npm start challenge
              </span>
              <button
                onClick={handleLogout}
                className="hover:text-redhover active:text-redactive text-lg font-semibold text-red-400 transition-colors duration-400"
              >
                {/* text-lightgreen hover:text-lightgreenhover active:text-lightgreenactive text-lg font-semibold transition-colors duration-400 */}
                {"< Log Out"}
              </button>
            </div>
            <h1 className="mt-2 mb-6 text-5xl font-bold text-white">
              Welcome Back, {user?.first_name || "Hacker"}
            </h1>
            {/* Application Status Card */}
            <div className="mb-8 flex flex-col items-center gap-6 rounded-xl border border-blue-900 bg-[#0B1627] p-6 md:flex-row md:items-center">
              <div className="flex-1">
                <p className="mb-2 text-lg text-white">Current Application Status</p>
                <div className="mb-2 flex items-center gap-3">
                  <Image
                    width={0}
                    height={0}
                    src={status.icon}
                    alt={status.label}
                    className="h-10 w-10"
                  />
                  <span className={`${status.color} text-3xl font-bold`}>{status.label}</span>
                </div>
                <p className="text-grey text-base">
                  Application due on{" "}
                  <span className="font-semibold text-white">
                    {timeRange?.end_at ? dayjs(timeRange.end_at).format("MMMM D, YYYY") : "TBD"}
                  </span>
                </p>
              </div>
              <div className="flex-shrink-0">
                {user?.application_status === Status.ACCEPTED ? (
                  // Always allow RSVP if Accepted
                  <div className="flex flex-col gap-4 md:flex-row">
                    <button
                      onClick={() => rsvpStatusUpdate(user?.uid || "", Status.ACCEPTED_INVITE)}
                      className="bg-lightgreen hover:bg-lightgreenactive rounded-lg px-6 py-3 text-center text-lg font-semibold text-white transition-colors duration-400"
                    >
                      Accept RSVP
                    </button>
                    <button
                      onClick={() => rsvpStatusUpdate(user?.uid || "", Status.REJECTED_INVITE)}
                      className="rounded-lg bg-red-800 px-6 py-3 text-center text-lg font-semibold text-white transition-colors duration-400 hover:bg-red-900"
                    >
                      Decline RSVP
                    </button>
                    {showConfirmation && (
                      <ConfirmationDialog
                        title="Confirm RSVP Decision"
                        message={`Are you sure you want to ${
                          pendingRSVP?.status === Status.ACCEPTED_INVITE ? "ACCEPT" : "DECLINE"
                        } the RSVP?`}
                        onConfirm={handleRSVPUpdate}
                        onCancel={() => {
                          setShowConfirmation(false);
                          setPendingRSVP(null);
                        }}
                      />
                    )}
                  </div>
                ) : user?.application_status === Status.WALK_IN ? (
                  // Walk-in users can always access the application (bypasses deadline)
                  <Link
                    href="/application"
                    className="bg-lightgreen hover:bg-lightgreenactive rounded-lg px-6 py-3 text-center text-lg font-semibold text-white transition-colors duration-400"
                  >
                    Open
                  </Link>
                ) : user?.application_status === Status.APPLYING ||
                  user?.application_status === null ? (
                  isOpen ? (
                    <Link
                      href="/application"
                      className="bg-lightgreen hover:bg-lightgreenactive rounded-lg px-6 py-3 text-center text-lg font-semibold text-white transition-colors duration-400"
                    >
                      Open
                    </Link>
                  ) : (
                    <div className="cursor-not-allowed rounded-lg bg-gray-400 px-6 py-3 text-center text-lg font-semibold text-white">
                      Closed
                    </div>
                  )
                ) : (
                  <div className="cursor-not-allowed rounded-lg bg-gray-400 px-6 py-3 text-center text-lg font-semibold text-white">
                    Applied
                  </div>
                )}
              </div>
            </div>
            {/* Explore Section */}
            <div>
              <h2 className="mb-4 text-xl font-semibold text-white">Explore</h2>
              <div className="flex flex-col gap-6 md:flex-row">
                {/* Discover Themes Card */}
                {/* <Link
                  href="/#themes"
                  className="flex flex-1 items-center gap-6 rounded-xl bg-[#0B1627] p-6 transition-colors duration-400 hover:bg-[#1a2c4d] active:bg-[#2c3e5e]"
                >
                  <div className="flex min-w-[64px] gap-2">
                    <Image
                      width={0}
                      height={0}
                      src="/dashboard/Themes.svg"
                      alt="Themes"
                      className="h-auto max-h-24 w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">Discover Themes</div>
                    <div className="text-grey text-lg">Factions of HTVX</div>
                  </div>
                </Link> */}
                {/* FAQ Card */}
                <Link
                  href="/#faq"
                  className="flex flex-1 items-center gap-6 rounded-xl bg-[#0B1627] p-6 transition-colors duration-400 hover:bg-[#1a2c4d] active:bg-[#2c3e5e]"
                >
                  <div className="min-w-[64px]">
                    <Image
                      width={0}
                      height={0}
                      src="/dashboard/FAQIcon.svg"
                      alt="FAQ"
                      className="h-14 w-14"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-white">How Can we Help?</div>
                    <div className="text-grey text-lg">Frequently Asked Questions</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mini Browser Border End */}
      </div>
    </div>
  );
}
