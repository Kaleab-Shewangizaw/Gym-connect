"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, MapPin, Star, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import TrainerCard from "@/app/MainSections/TrainerCard";

const gym = {
  name: "Iron Paradise",
  image: "/Gym-images/g1.jpg",
  rating: 4.8,
  price: "15/mo",
  booked: true,
  desc: "State-of-the-art equipment with expert trainers. Perfect for strength training enthusiasts.",
  available: true,
  location: "Downtown",
  equipment: ["Free Weights", "Cardio Machines", "Pool"],
  images: [
    "/Gym-images/g1.jpg",
    "/Gym-images/g1.jpg",
    "/Gym-images/g1.jpg",
    "/Gym-images/g1.jpg",
  ],
  hours: {
    weekdays: "5:00 AM - 11:00 PM",
    weekends: "7:00 AM - 9:00 PM",
  },
  amenities: ["Locker Rooms", "Showers", "Wi-Fi", "Parking", "Protein Bar"],
};

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

export default function SingleGymPage() {
  const [nav, setNav] = useState("overview");

  return (
    <div className="text-white mt-16 pt-3 pb-10  mx-auto ">
      {/* Back button */}
      <Link href="/gyms" className="inline-block mb-4">
        <Button
          variant="ghost"
          className="text-gray-300 border-gray-600 bg-gray-900 hover:bg-gray-600 hover:text-gray-300"
        >
          <ChevronLeft size={16} />
          Back to Gyms
        </Button>
      </Link>

      {/* Gym header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden"
          >
            <Image
              src={gym.image}
              alt={gym.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-gray-900/80 text-white text-xl font-bold px-4 py-2 rounded-full">
              {gym.name}
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/3 bg-gray-900/70 backdrop-blur-sm rounded-xl p-5 border border-gray-800 h-fit">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-green-800/60 text-white text-sm font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <BsStarFill className="text-yellow-300" /> {gym.rating}
                </div>
                <div className="bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {gym.location}
                </div>
              </div>
              <h1 className="text-2xl font-bold">{gym.name}</h1>
              <p className="text-gray-400 text-sm mt-1">{gym.desc}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-green-400">
                ${gym.price}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="text-gray-300 border-gray-600 bg-gray-900 hover:bg-gray-600 hover:text-gray-300"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-gray-300 border-gray-600 bg-gray-900 hover:bg-gray-600 hover:text-gray-300"
                >
                  <Star className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button
              className={`w-full ${
                gym.available
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-700 cursor-not-allowed"
              }`}
              disabled={!gym.available}
              size="lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {gym.booked
                ? "Booked"
                : gym.available
                ? "Book Now"
                : "Fully Booked"}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="flex border-b border-gray-800 mb-6">
        {["Overview", "Trainers", "Photos"].map((naver) => {
          return (
            <button
              key={naver}
              className={`px-4 py-3 font-medium transition-colors relative ${
                nav === naver
                  ? "text-green-400"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setNav(naver)}
            >
              {naver}
              {nav === naver && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                  layoutId="navIndicator"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content based on selected tab */}
      {nav === "Overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gray-900/70 backdrop-blur-sm rounded-xl p-5 border border-gray-800">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-300 mb-6">{gym.desc}</p>

            <h2 className="text-xl font-bold mb-4">Hours</h2>
            <div className="space-y-3 mb-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Weekdays</span>
                <span className="font-medium">{gym.hours.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weekends</span>
                <span className="font-medium">{gym.hours.weekends}</span>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Equipment & Facilities</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {gym.equipment.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-300 text-sm px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {gym.amenities.map((item, i) => (
                <span
                  key={i}
                  className="bg-blue-900/40 text-blue-200 text-sm px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-5 border border-gray-800 h-full">
            <h2 className="text-xl font-bold mt-6 mb-4">Location</h2>
            <div className="flex items-start gap-2 text-gray-300">
              <MapPin className="w-5 h-5 mt-0.5 text-green-400 flex-shrink-0" />
              <span>{gym.location}</span>
            </div>

            <div className="mt-4 bg-gray-800 rounded-lg h-40">
              {/* Map placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map would appear here
              </div>
            </div>
          </div>
        </div>
      )}

      {/* photos */}

      {nav === "Photos" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gym.images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden aspect-square cursor-pointer"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={image}
                  alt="Gym image"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* trainers */}

      {nav === "Trainers" && (
        <div>
          <h2 className="text-xl font-bold mb-6">Our Trainers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.name} trainer={trainer} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
