"use client";

import { ReactNode } from "react";

export default function TrainersLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[100%]  md:w-[90%] mx-auto">{children}</div>
  );
}
