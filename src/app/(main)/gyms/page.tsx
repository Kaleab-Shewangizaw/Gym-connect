"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Filter, Heart, Dumbbell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

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

export default function GymsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const filteredGyms = gyms.filter((gym) => {
    const matchesSearch =
      gym.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gym.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gym.equipment.some((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "under15" && parseInt(gym.price) < 15) ||
      (priceFilter === "15to20" &&
        parseInt(gym.price) >= 15 &&
        parseInt(gym.price) <= 20) ||
      (priceFilter === "over20" && parseInt(gym.price) > 20);

    const matchesRating =
      ratingFilter === "all" ||
      (ratingFilter === "4.5plus" && gym.rating >= 4.5) ||
      (ratingFilter === "4.0plus" && gym.rating >= 4.0);

    return matchesSearch && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen text-white mt-16 pt-7 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 pb-16">
        {/* Header Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-green-500 to-green-700 p-2 rounded-full mr-3">
              <Dumbbell className="text-white text-xl" />
            </div>
            <h1 className="text-3xl font-bold">Find Your Gym</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search gyms or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/80 backdrop-blur-sm rounded-full pl-10 pr-4 py-2.5 border border-gray-700 hover:border-green-500 focus:border-green-500 focus:outline-none transition-colors placeholder-gray-500"
              />
            </div>

            {/* Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white flex items-center gap-2">
                  <Filter size={16} />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border border-gray-700 rounded-lg p-2 mt-2 min-w-[140px] z-50">
                <div className="text-xs text-gray-400 font-medium px-2 py-1">
                  Price Range
                </div>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    priceFilter === "all" ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={() => setPriceFilter("all")}
                >
                  All Prices
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    priceFilter === "under15"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setPriceFilter("under15")}
                >
                  Under $15
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    priceFilter === "15to20"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setPriceFilter("15to20")}
                >
                  $15 - $20
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    priceFilter === "over20"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setPriceFilter("over20")}
                >
                  Over $20
                </DropdownMenuItem>

                <div className="border-t border-gray-700 my-2"></div>

                <div className="text-xs text-gray-400 font-medium px-2 py-1">
                  Rating
                </div>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    ratingFilter === "all" ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                  onClick={() => setRatingFilter("all")}
                >
                  All Ratings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    ratingFilter === "4.5plus"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setRatingFilter("4.5plus")}
                >
                  4.5+ Stars
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    ratingFilter === "4.0plus"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setRatingFilter("4.0plus")}
                >
                  4.0+ Stars
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-400">
            Showing {filteredGyms.length} of {gyms.length} gyms
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Available now</span>
          </div>
        </div>

        {/* Gyms Grid */}
        {filteredGyms.length > 0 ? (
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
            {filteredGyms.map((gym) => (
              <motion.div
                key={gym.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 100, damping: 12 },
                  },
                }}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/30 transition-all duration-300 group"
              >
                <div className="relative h-52 overflow-hidden">
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
                      <span className="text-sm text-gray-400">/mo</span>
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {gym.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {gym.equipment.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                    {gym.equipment.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 text-xs px-2.5 py-1 rounded-full">
                        +{gym.equipment.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      size="sm"
                      className={`${
                        gym.available
                          ? "bg-green-600 hover:bg-green-700"
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
                        className="text-gray-300 border-gray-600 hover:bg-gray-800 p-2"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Link href={`/gyms/${gym.id}`}>
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
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-800/40 rounded-xl p-8 max-w-md mx-auto">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No gyms found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <Button
                className="mt-4 bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setSearchQuery("");
                  setPriceFilter("all");
                  setRatingFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
