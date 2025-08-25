"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import MemberSidebar from "../memberSidebar";

interface MemberLayoutProps {
  children: ReactNode;
}

export default function MemberLayout({ children }: MemberLayoutProps) {
  const params = useParams();
  const memberId = params.id as string;

  return (
    <div className="flex h-full ">
      <MemberSidebar memberId={memberId} />
      <div className="flex-1  p-6">{children}</div>
    </div>
  );
}
