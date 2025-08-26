"use client";

import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className=" bg-gray-950  w-[100%] md:w-[90%] mx-auto flex">
      <main className=" flex-1">{children}</main>
    </div>
  );
}
