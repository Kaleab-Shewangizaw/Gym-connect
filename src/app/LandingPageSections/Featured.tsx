"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsStarFill,
  BsTiktok,
  BsTwitterX,
  BsFillLightningFill,
} from "react-icons/bs";
import { FaFacebookF, FaDumbbell } from "react-icons/fa";
import { useEffect, useRef } from "react";

const gyms = [
  {
    name: "Iron Paradise",
    image: "/Gym-images/g1.jpg",
    rating: 4.8,
    price: "15/mo",
    desc: "State-of-the-art equipment with expert trainers. Perfect for strength training enthusiasts.",
    available: true,
    location: "Downtown",
    equipment: ["Free Weights", "Cardio Machines", "Pool"],
  },
  {
    name: "Flex Fitness",
    image: "/Gym-images/g2.jpg",
    rating: 4.6,
    price: "12/mo",
    desc: "Affordable fitness solutions with group classes and personal training options.",
    available: false,
    location: "Midtown",
    equipment: ["Yoga Studio", "Cycling", "Functional Training"],
  },
  {
    name: "Powerhouse Gym",
    image: "/Gym-images/g3.jpg",
    rating: 4.9,
    price: "18/mo",
    desc: "Premium gym experience with luxury amenities and top-tier equipment.",
    available: true,
    location: "Uptown",
    equipment: ["Sauna", "Basketball Court", "CrossFit Area"],
  },
  {
    name: "Elite Fitness",
    image: "/Gym-images/g4.jpg",
    rating: 4.7,
    price: "16/mo",
    desc: "Modern facility with innovative training programs and nutritional guidance.",
    available: true,
    location: "Westside",
    equipment: ["Climbing Wall", "TRX", "Pilates Studio"],
  },
  {
    name: "Peak Performance",
    image: "/Gym-images/g5.jpg",
    rating: 4.9,
    price: "20/mo",
    desc: "High-performance training center for athletes and serious fitness enthusiasts.",
    available: true,
    location: "Eastside",
    equipment: ["Olympic Lifting", "Sports Training", "Recovery Zone"],
  },
];

const trainers = [
  {
    name: "Alex Carter",
    rating: 4.8,
    image: "/trainers/t1.jpg",
    skills: ["Strength Training", "HIIT", "Nutrition"],
    clients: 120,
    experience: "5 years",
  },
  {
    name: "Maya Lee",
    rating: 4.9,
    image: "/trainers/t2.jpg",
    skills: ["Yoga", "Pilates", "Meditation"],
    clients: 95,
    experience: "7 years",
  },
  {
    name: "Jake Smith",
    rating: 4.7,
    image: "/trainers/t3.jpg",
    skills: ["Cardio", "CrossFit", "Endurance"],
    clients: 150,
    experience: "4 years",
  },
  {
    name: "Kebedech Chane",
    rating: 4.9,
    image: "/trainers/t4.jpg",
    skills: ["Bodybuilding", "Powerlifting", "Flexibility"],
    clients: 200,
    experience: "8 years",
  },
  {
    name: "Demelew",
    rating: 4.8,
    image: "/trainers/t5.jpg",
    skills: ["Calisthenics", "Functional Training", "Mobility"],
    clients: 85,
    experience: "6 years",
  },
];

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });
  const inView2 = useInView(section2Ref, { once: false, margin: "-100px" });
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    if (inView2) controls2.start("visible");
  }, [inView, inView2, controls, controls2]);

  return (
    <section className="py-16 w-[95%] md:w-[90%] mx-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute w-0 h-0 shadow-[0_0_200px_150px_rgba(0,131,54,0.15)] bottom-1/4 right-1/4 animate-pulse-slow"></div>
      <div
        className="absolute w-0 h-0 shadow-[0_0_200px_150px_rgba(200,0,222,0.15)] top-1/3 left-1/3 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-green-400">Gyms & Trainers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the best fitness centers and professional trainers to help
            you achieve your goals
          </p>
        </motion.div>

        {/* Gyms Grid */}
        <div className="mb-16">
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <FaDumbbell className="text-green-400" /> Top Rated Gyms
            </h3>
            <Link
              href="/gyms"
              className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm font-medium"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            ref={sectionRef}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {gyms.map((gym) => (
              <motion.div
                key={gym.name}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 12 },
                  },
                }}
                className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-green-400/30 transition-all duration-300 group"
              >
                <div className="relative h-50 overflow-hidden">
                  <Image
                    src={gym.image}
                    alt={gym.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <BsStarFill className="text-yellow-300" /> {gym.rating}
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-900/80 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {gym.location}
                  </div>
                  {!gym.available && (
                    <div className="absolute inset-0 bg-red-900/40 flex items-center justify-center">
                      <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Fully Booked
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
                      {gym.name}
                    </h4>
                    <span className="text-2xl font-bold text-green-400">
                      ${gym.price}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {gym.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {gym.equipment.slice(0, 2).map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {item}
                      </span>
                    ))}
                    {gym.equipment.length > 2 && (
                      <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                        +{gym.equipment.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      size="sm"
                      className={`${
                        gym.available
                          ? "bg-green-600 hover:bg-green-700 text-gray-300"
                          : "bg-gray-700 cursor-not-allowed"
                      }`}
                      disabled={!gym.available}
                    >
                      {gym.available ? "Book Now" : "Fully Booked"}
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-300 border-gray-600 hover:bg-gray-800"
                      >
                        <Heart className="w-4 h-4 mr-1" /> Save
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-300 border-gray-600 hover:bg-gray-800"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trainers Grid */}
        <div>
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <BsFillLightningFill className="text-green-400" /> Expert Trainers
            </h3>
            <Link
              href="/trainers"
              className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm font-medium"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
            ref={section2Ref}
            initial="hidden"
            animate={controls2}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {trainers.map((trainer) => (
              <motion.div
                key={trainer.name}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 12 },
                  },
                }}
                className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-green-400/30 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-85 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <BsStarFill className="text-yellow-300" /> {trainer.rating}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors mb-1">
                    {trainer.name}
                  </h4>

                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <span className="mr-3">
                      {trainer.experience} experience
                    </span>
                    <span>• {trainer.clients}+ clients</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {trainer.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-900/40 text-blue-200 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-2">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Calendar className="w-4 h-4 mr-1" /> Book Session
                    </Button>

                    <div className="flex justify-between items-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-300 border-gray-600 hover:bg-gray-800 text-xs"
                      >
                        View Profile
                      </Button>

                      <div className="flex gap-2 text-gray-400">
                        <a
                          href="#"
                          className="hover:text-blue-400 transition-colors"
                        >
                          <BsInstagram />
                        </a>
                        <a
                          href="#"
                          className="hover:text-blue-500 transition-colors"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="#"
                          className="hover:text-gray-300 transition-colors"
                        >
                          <BsTwitterX />
                        </a>
                        <a
                          href="#"
                          className="hover:text-pink-500 transition-colors"
                        >
                          <BsTiktok />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
