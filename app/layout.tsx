import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const euclidCircularB = localFont({
  variable: "--font-euclid-circular-b",
  src: [
    {
      path: "/public/fonts/Euclid-Circular-B-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-Light-Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-Medium-Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/public/fonts/Euclid-Circular-B-SemiBold-Italic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Hack the Valley X",
  description:
    "Join 750 innovative and creative developers, designers, and creators for 36 hours of hacking. You'll get access to some of the best hardware and APIs on the market. Plus get to meet some experienced and awesome mentors! All this in just one weekend? I know, it's hard to believe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.variable}
          ${euclidCircularB.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
