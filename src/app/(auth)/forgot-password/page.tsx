"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Mail, CheckCircle, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-4">
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

        {/* Back to Login */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <Link
            href="/login"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to login
          </Link>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl border border-gray-700/50 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">
                  Reset Your Password
                </h1>
                <p className="text-gray-400">
                  Enter your email address and we&apos;ll send you instructions
                  to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-green-700/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Reset Instructions"
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-4"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-900/30 rounded-full">
                  <CheckCircle className="w-12 h-12 text-green-400" />
                </div>
              </div>

              <h2 className="text-xl font-bold text-white mb-2">
                Check Your Email
              </h2>

              <p className="text-gray-300 mb-2">
                We&apos;ve sent password reset instructions to:
              </p>

              <p className="text-green-400 font-medium mb-6 break-all">
                {email}
              </p>

              <p className="text-gray-400 text-sm mb-6">
                Didn&apos;t receive the email? Check your spam folder or{" "}
                <button
                  onClick={handleReset}
                  className="text-green-400 hover:text-green-300 underline transition-colors"
                >
                  try again with a different email address
                </button>
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="w-full py-3 px-4 bg-gray-700/50 text-gray-300 font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Reset
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-6"
        >
          <p className="text-gray-400 text-sm">
            Need more help?{" "}
            <Link
              href="/contact"
              className="text-green-400 hover:text-green-300 underline transition-colors"
            >
              Contact support
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
