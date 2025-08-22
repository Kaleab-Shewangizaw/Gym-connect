"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Search, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { useEffect, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

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

export default function GymsPage() {
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
    <div className="text-white mt-16 pt-7 ">
      <div className="mb-16">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <FaDumbbell className="text-green-400" /> Gyms
          </h3>

          <div className="flex gap-5 items-center">
            {/* search bar */}
            <div className="hidden md:flex items-center  bg-gray-800/80 backdrop-blur-sm rounded-full pl-3 pr-1 py-1 border border-gray-700 hover:border-green-500 transition-colors">
              <Search className="text-gray-400 mr-3" size={15} />
              <input
                type="text"
                placeholder="Search for gyms or locations..."
                className="bg-transparent border-none outline-none text-white flex-grow pr-4 placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full px-3 py-1 flex items-center gap-2 hover:from-green-600 hover:to-green-800 transition-all">
                <MapPin size={15} />
                Search
              </button>
            </div>
            <button className="md:hidden bg-gradient-to-r from-green-500/50 to-green-700/50 text-white rounded-full p-2 flex items-center gap-2 hover:from-green-600 hover:to-green-800 transition-all">
              <Search size={20} />
            </button>
            <div className="z-20">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    size="icon"
                    className="bg-green-400/50 text-white px-10  hover:bg-green-400/80"
                  >
                    <Filter /> Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-[#1a232f] py-2 px-2 rounded-xl mt-1"
                >
                  <DropdownMenuItem className="px-10 py-2 hover:bg-gray-600 text-sm rounded-xl">
                    Name
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-10 py-2 hover:bg-gray-600 text-sm rounded-xl">
                    Rating
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-10 py-2 hover:bg-gray-600 text-sm rounded-xl">
                    Price
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
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
          {gyms.map((gym, i) => (
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
                      <Star className="w-4 h-4 mr-1" /> Save
                    </Button>
                    <Link href={"/gyms/" + i}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-gray-300 border-gray-600 hover:bg-gray-800"
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
