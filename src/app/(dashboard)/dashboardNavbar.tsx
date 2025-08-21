"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Dumbbell, Search, Bell, User } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50"
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg">
            <Dumbbell className="text-white w-5 h-5" />
          </div>
          <span className="text-white font-bold text-xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text ">
            GymConnect
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search gyms, trainers..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>

          <button className="flex items-center gap-2 p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm">Profile</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
