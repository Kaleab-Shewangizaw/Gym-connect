"use client";

import { ReactNode } from "react";

interface MemberLayoutProps {
  children: ReactNode;
}

export default function TrainerLayout({ children }: MemberLayoutProps) {
  return (
    <div className="flex h-full ">
      <div className="flex-1  p-6">{children}</div>
    </div>
  );
}
