"use client";

import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950  w-[100%] md:w-[90%] mx-auto flex">
      <main className="pt-16 flex-1">{children}</main>
    </div>
  );
}
