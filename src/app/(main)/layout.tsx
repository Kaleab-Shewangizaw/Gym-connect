"use client";

import HeroNavbar from "@/app/LandingPageSections/Navbar";
import MainNavbar from "@/app/MainSections/MainNavbar";

import { ReactNode, useState } from "react";

export default function GymLayout({ children }: { children: ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="relative">
      {isLoggedIn ? <MainNavbar /> : <HeroNavbar />} {children}
    </div>
  );
}
