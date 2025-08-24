"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Filter, Search } from "lucide-react";

import { BsFillLightningFill } from "react-icons/bs";

import { useState } from "react";
import TrainerCard from "@/app/MainSections/TrainerCard";

const trainers = [
  {
    name: "Alex Carter",
    rating: 4.8,
    image: "/trainers/t1.jpg",
    skills: ["Strength Training", "HIIT", "Nutrition"],
    clients: 120,
    experience: "5 years",
    location: "Downtown",
    price: "$65/hr",
    available: true,
  },
  {
    name: "Maya Lee",
    rating: 4.9,
    image: "/trainers/t2.jpg",
    skills: ["Yoga", "Pilates", "Meditation"],
    clients: 95,
    experience: "7 years",
    location: "Westside",
    price: "$70/hr",
    available: true,
  },
  {
    name: "Jake Smith",
    rating: 4.7,
    image: "/trainers/t3.jpg",
    skills: ["Cardio", "CrossFit", "Endurance"],
    clients: 150,
    experience: "4 years",
    location: "Eastside",
    price: "$60/hr",
    available: false,
  },
  {
    name: "Kebedech Chane",
    rating: 4.9,
    image: "/trainers/t4.jpg",
    skills: ["Bodybuilding", "Powerlifting", "Flexibility"],
    clients: 200,
    experience: "8 years",
    location: "Northside",
    price: "$75/hr",
    available: true,
  },
  {
    name: "Demelew",
    rating: 4.8,
    image: "/trainers/t5.jpg",
    skills: ["Calisthenics", "Functional Training", "Mobility"],
    clients: 85,
    experience: "6 years",
    location: "Southside",
    price: "$65/hr",
    available: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TrainerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredTrainers = trainers.filter((trainer) => {
    const matchesSearch =
      trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "available" && trainer.available) ||
      (selectedFilter === "male" &&
        ["Alex Carter", "Jake Smith", "Demelew"].includes(trainer.name)) ||
      (selectedFilter === "female" &&
        ["Maya Lee", "Kebedech Chane"].includes(trainer.name));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen text-white mt-16 pt-7 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 pb-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-green-500 to-green-700 p-2 rounded-full mr-3">
              <BsFillLightningFill className="text-white text-xl" />
            </div>
            <h1 className="text-3xl font-bold">Expert Trainers</h1>
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
                placeholder="Search trainers..."
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
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    selectedFilter === "all"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedFilter("all")}
                >
                  All Trainers
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    selectedFilter === "available"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedFilter("available")}
                >
                  Available
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    selectedFilter === "male"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedFilter("male")}
                >
                  Male
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`p-2 rounded-md cursor-pointer ${
                    selectedFilter === "female"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedFilter("female")}
                >
                  Female
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-400">
            Showing {filteredTrainers.length} of {trainers.length} trainers
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Available now</span>
          </div>
        </div>

        {/* Trainers Grid */}
        {filteredTrainers.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredTrainers.map((trainer) => (
              <TrainerCard key={trainer.name} trainer={trainer} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-800/40 rounded-xl p-8 max-w-md mx-auto">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No trainers found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <Button
                className="mt-4 bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilter("all");
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
