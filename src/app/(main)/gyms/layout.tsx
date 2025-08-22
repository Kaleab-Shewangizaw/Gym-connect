"use client";

import { ReactNode } from "react";

export default function GymLayout({ children }: { children: ReactNode }) {
  return <div className="relative w-[95%]  md:w-[90%] mx-auto">{children}</div>;
}
