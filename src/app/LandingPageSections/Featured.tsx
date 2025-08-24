"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import {} from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BsFillLightningFill } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { useEffect, useRef } from "react";
import GymCard from "../MainSections/GymCard";
import TrainerCard from "../MainSections/TrainerCard";

const gyms = [
  {
    id: 1,
    name: "Iron Paradise",
    image: "/Gym-images/g1.jpg",
    rating: 4.8,
    price: "15",
    desc: "State-of-the-art equipment with expert trainers. Perfect for strength training enthusiasts.",
    available: true,
    location: "Downtown",
    equipment: [
      "Free Weights",
      "Cardio Machines",
      "Pool",
      "Sauna",
      "Yoga Studio",
    ],
    amenities: ["Wi-Fi", "Locker Rooms", "Showers", "Parking", "Protein Bar"],
  },
  {
    id: 2,
    name: "Flex Fitness",
    image: "/Gym-images/g2.jpg",
    rating: 4.6,
    price: "12",
    desc: "Affordable fitness solutions with group classes and personal training options.",
    available: false,
    location: "Midtown",
    equipment: ["Yoga Studio", "Cycling", "Functional Training"],
    amenities: ["Wi-Fi", "Locker Rooms", "Showers"],
  },
  {
    id: 3,
    name: "Powerhouse Gym",
    image: "/Gym-images/g3.jpg",
    rating: 4.9,
    price: "18",
    desc: "Premium gym experience with luxury amenities and top-tier equipment.",
    available: true,
    location: "Uptown",
    equipment: ["Sauna", "Basketball Court", "CrossFit Area", "Pool"],
    amenities: ["Wi-Fi", "Locker Rooms", "Showers", "Parking", "Spa", "Cafe"],
  },
  {
    id: 4,
    name: "Elite Fitness",
    image: "/Gym-images/g4.jpg",
    rating: 4.7,
    price: "16",
    desc: "Modern facility with innovative training programs and nutritional guidance.",
    available: true,
    location: "Westside",
    equipment: ["Climbing Wall", "TRX", "Pilates Studio"],
    amenities: ["Wi-Fi", "Locker Rooms", "Childcare", "Parking"],
  },
  {
    id: 5,
    name: "Peak Performance",
    image: "/Gym-images/g5.jpg",
    rating: 4.9,
    price: "20",
    desc: "High-performance training center for athletes and serious fitness enthusiasts.",
    available: true,
    location: "Eastside",
    equipment: ["Olympic Lifting", "Sports Training", "Recovery Zone"],
    amenities: ["Wi-Fi", "Locker Rooms", "Physical Therapy", "Parking"],
  },
  {
    id: 6,
    name: "Urban Fitness",
    image: "/Gym-images/g1.jpg",
    rating: 4.5,
    price: "14",
    desc: "Convenient downtown location with 24/7 access and modern equipment.",
    available: true,
    location: "City Center",
    equipment: ["Cardio", "Strength", "Group Exercise"],
    amenities: ["Wi-Fi", "Locker Rooms", "24/7 Access"],
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
            <h3 className="text-2xl font-semibold flex text-white items-center gap-2">
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
              <GymCard key={gym.id} gym={gym} />
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
              <TrainerCard key={trainer.name} trainer={trainer} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
