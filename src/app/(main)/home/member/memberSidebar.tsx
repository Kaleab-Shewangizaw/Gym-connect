"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Dumbbell, Star, Settings } from "lucide-react";

interface MemberSidebarProps {
  memberId: string;
}

const navigationItems = [
  { name: "Dashboard", href: "/home/member/[id]", icon: Home },
  { name: "My Trainer", href: "/home/member/[id]/my-trainer", icon: User },
  { name: "My Gyms", href: "/home/member/[id]/my-gyms", icon: Dumbbell },
  { name: "Favorites", href: "/home/member/[id]/favorites", icon: Star },
  { name: "Settings", href: "/home/member/[id]/settings", icon: Settings },
];

export default function MemberSidebar({ memberId }: MemberSidebarProps) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className=" left-0 hidden sm:block  w-64 bg-gray-900/80 backdrop-blur-md border-r border-gray-800 pt-16 p-4 "
    >
      {/* Profile Summary */}
      <div className="mb-8 p-4 bg-gray-800/50 rounded-lg">
        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-3">
          <User className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="font-semibold text-white">Member Profile</h3>
        <p className="text-sm text-gray-400">Active member</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const href = item.href.replace("[id]", memberId);
          const isActive = pathname === href;
          return (
            <Link
              key={item.name}
              href={href}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}
