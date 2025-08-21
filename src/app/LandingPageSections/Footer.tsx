"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, Dumbbell } from "lucide-react";
import Link from "next/link";
import { BsLinkedin, BsTwitterX, BsInstagram } from "react-icons/bs";

export default function FooterSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <footer className="relative text-gray-100 pt-16 pb-8 overflow-hidden mt-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bg-blue-600/20 w-0 shadow-[0px_0px_150px_40px_#0066ff] bottom-1/4 left-1/4 opacity-20 animate-pulse-slow"></div>
        <div
          className="absolute bg-green-600/20 w-0 shadow-[0px_0px_150px_40px_#00cc66] top-1/3 right-1/3 opacity-20 animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
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
              <Dumbbell className="text-white w-6 h-6" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white font-bold text-2xl bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
            >
              GymConnect
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Start your fitness journey{" "}
            <span className="text-green-400">today</span>!
          </h2>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 cursor-pointer rounded-lg font-bold text-lg bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg hover:shadow-green-700/30 transition-all duration-300"
            >
              Find GYMs
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 cursor-pointer border-2 rounded-lg font-bold text-lg text-green-400 border-emerald-700 bg-gray-900/50 backdrop-blur-sm hover:bg-emerald-900/30 transition-colors duration-300"
            >
              Join as a Trainer
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 cursor-pointer border-2 rounded-lg font-bold text-lg text-green-400 border-emerald-700 bg-gray-900/50 backdrop-blur-sm hover:bg-emerald-900/30 transition-colors duration-300"
            >
              Join as a GYM Owner
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer Links & Socials */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-wrap gap-6 mb-4 md:mb-0 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              "About",
              "Contact",
              "Blog",
              "Privacy Policy",
              "Terms of Service",
            ].map((item, index) => (
              <motion.a
                key={index}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-green-400 transition-colors duration-300 relative group"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-5 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: <BsInstagram className="w-5 h-5" />,
                color: "hover:text-pink-400",
                label: "Instagram",
              },
              {
                icon: <BsTwitterX className="w-5 h-5" />,
                color: "hover:text-blue-400",
                label: "Twitter",
              },
              {
                icon: <BsLinkedin className="w-5 h-5" />,
                color: "hover:text-blue-500",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={`https://${social.label.toLowerCase()}.com`}
                target="_blank"
                rel="noopener"
                aria-label={social.label}
                className={`${social.color} transition-colors duration-300`}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-gray-500 mt-8 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-1 mb-1">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            </motion.div>
            <span>by Kal_X</span>
          </div>
          <div>
            © {new Date().getFullYear()} GymConnect. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
