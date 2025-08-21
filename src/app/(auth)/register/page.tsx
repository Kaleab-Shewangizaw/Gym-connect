"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Dumbbell,
  User,
  Mail,
  Lock,
  Calendar,
  HeartPulse,
  Award,
} from "lucide-react";
import { BsGoogle, BsFacebook } from "react-icons/bs";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    userType: "member",
  });
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: ["easeInOut"],
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80 -z-10"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-green-400 opacity-30"
        variants={floatingAnimation}
        animate="animate"
      >
        <Dumbbell size={40} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-20 text-fuchsia-400 opacity-30"
        variants={floatingAnimation}
        animate="animate"
        style={{ animationDelay: "1s" }}
      >
        <HeartPulse size={35} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-blue-400 opacity-30"
        variants={floatingAnimation}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <Award size={30} />
      </motion.div>
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-0 h-0 shadow-[0_0_300px_100px_rgba(0,131,54,0.15)] animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-0 h-0 shadow-[0_0_300px_100px_rgba(200,0,222,0.15)] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg">
              <Dumbbell className="text-white w-6 h-6" />
            </div>
            <span className="text-white font-bold text-2xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text ">
              GymConnect
            </span>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-400">
              Join thousands of fitness enthusiasts
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                I am a
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "member", label: "Member" },
                  { value: "trainer", label: "Trainer" },
                  { value: "owner", label: "Owner" },
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, userType: type.value })
                    }
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      formData.userType === type.value
                        ? "bg-green-600 text-white"
                        : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Date of Birth */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-700/30 transition-all duration-300"
            >
              Create Account
            </motion.button>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-700 flex-grow"></div>
              <span className="px-3 text-gray-400 text-sm">
                or continue with
              </span>
              <div className="border-t border-gray-700 flex-grow"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <BsGoogle className="w-5 h-5" />
                <span>Google</span>
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <BsFacebook className="w-5 h-5 text-blue-400" />
                <span>Facebook</span>
              </motion.button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
