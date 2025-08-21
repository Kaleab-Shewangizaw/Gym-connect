"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Star,
  Users,
  Award,
  ArrowRight,
  Dumbbell,
  HeartPulse,
} from "lucide-react";
import M6 from "../../../public/bg/bg1.png";
import M7 from "../../../public/bg/bg2.png";
import M8 from "../../../public/bg/bg3.png";
import M9 from "../../../public/bg/bg4.png";
import M5 from "../../../public/bg/bg5.png";

export default function HeroSection() {
  const images = [M5, M6, M7, M8, M9];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Floating animation variants
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

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Images with Crossfade */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover saturate-150 brightness-[0.4]"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* Gradient Overlay */}
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

      <div className="w-[95%] md:w-[90%] mx-auto flex flex-col justify-center items-center h-full relative px-4">
        {/* Logo/Brand */}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
          >
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Gym
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-600">
              Trainer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Book gym sessions, connect with certified trainers, and achieve your
            fitness goals - all in one place.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative  max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center  bg-gray-800/80 backdrop-blur-sm rounded-full pl-6 pr-2 py-2 border border-gray-700 hover:border-green-500 transition-colors">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Search for gyms, trainers, or locations..."
                className="bg-transparent border-none outline-none text-white flex-grow pr-4 placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full px-6 py-3 flex items-center gap-2 hover:from-green-600 hover:to-green-800 transition-all">
                <MapPin size={18} />
                Search
              </button>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 cursor-pointer rounded-full font-bold text-lg bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg hover:shadow-green-700/40 transition-all flex items-center gap-2"
            >
              Find GYMs <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 cursor-pointer border-2 rounded-full font-bold text-lg text-green-400 border-green-600 bg-gray-900/50 backdrop-blur-sm hover:bg-green-900/30 transition-all flex items-center gap-2"
            >
              Join as Trainer <Users size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 cursor-pointer border-2 rounded-full font-bold text-lg text-fuchsia-400 border-fuchsia-600 bg-gray-900/50 backdrop-blur-sm hover:bg-fuchsia-900/30 transition-all flex items-center gap-2"
            >
              List Your Gym <Star size={18} />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-gray-800 pt-8"
          >
            {[
              {
                value: "500+",
                label: "Gyms Listed",
                icon: <Dumbbell size={20} />,
              },
              { value: "1.2K+", label: "Trainers", icon: <Users size={20} /> },
              { value: "10K+", label: "Members", icon: <Award size={20} /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="flex justify-center items-center gap-2 text-green-400 mb-2">
                  {stat.icon}
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-green-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
