"use client";

import { ReactNode } from "react";
import DashboardNavbar from "./dashboardNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <DashboardNavbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}
