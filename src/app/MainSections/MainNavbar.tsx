"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Dumbbell, Menu, X, LogOut, User } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathN = path.split("/")[1];

  const navItems = [
    { name: "Home", href: "#" },
    { name: "GYMs", href: "/gyms" },
    { name: "Trainers", href: "/trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={` fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%]  z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 backdrop-blur-md shadow-lg rounded-t-md border border-gray-800/50"
            : "bg-gray-900/70 backdrop-blur-sm rounded-t-md border border-gray-800/30"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <motion.div
              initial={{ rotate: -30 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="p-2 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg"
            >
              <Dumbbell className="text-white w-5 h-5" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white font-bold text-xl hidden sm:block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text "
            >
              GymConnect
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 ">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex  flex-col"
              >
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg font-medium transition-colors relative  "
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = item.href;
                    link.click();
                  }}
                >
                  {item.name}
                </Button>
                <span
                  className={`  mx-auto h-0.5 bg-green-400 transition-all duration-300 ${
                    pathN === item.href.split("/")[1]
                      ? "w-[80%] "
                      : "w-0 group-hover:w-[80%] "
                  }`}
                ></span>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-2 py-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-full shadow-lg hover:shadow-green-700/30 transition-all"
            >
              <User className="text-lg" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log out
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-800/50 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-colors"
                    whileHover={{ x: 5 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-gray-800/50 space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-lg shadow-lg"
                  >
                    <User className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 text-gray-300 hover:text-white font-medium rounded-lg bg-gray-800/50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Log out
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
