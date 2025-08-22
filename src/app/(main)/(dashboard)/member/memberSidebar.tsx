"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Dumbbell,
  Calendar,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

interface MemberSidebarProps {
  memberId: string;
}

const navigationItems = [
  { name: "Dashboard", href: "/member/[id]", icon: Home },
  { name: "My Trainer", href: "/member/[id]/my-trainer", icon: User },
  { name: "My Gyms", href: "/member/[id]/my-gyms", icon: Dumbbell },
  { name: "Sessions", href: "/member/[id]/sessions", icon: Calendar },
  { name: "Favorites", href: "/member/[id]/favorites", icon: Star },
  { name: "Settings", href: "/member/[id]/settings", icon: Settings },
];

export default function MemberSidebar({ memberId }: MemberSidebarProps) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-16 h-screen w-64 bg-gray-900/80 backdrop-blur-md border-r border-gray-800 p-4"
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

      {/* Logout */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 w-full transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </motion.div>
  );
}
