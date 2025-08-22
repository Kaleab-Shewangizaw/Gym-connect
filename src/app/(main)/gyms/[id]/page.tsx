"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs";
import { useState } from "react";
const gym = {
  name: "Iron Paradise",
  image: "/Gym-images/g1.jpg",
  rating: 4.8,
  price: "15/mo",
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
};

export default function SingleGymPage() {
  const [nav, setNav] = useState("images");

  return (
    <div className="text-white mt-16 pt-3 ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.9 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 },
          },
        }}
        className="bg-gray-900/70 rounded-xl overflow-hidden border  transition-all duration-300 group"
      >
        <div className="relative h-50 md:h-60 overflow-hidden">
          <Image
            src={gym.image}
            alt={gym.name}
            fill
            className="object-cover transition-transform duration-500"
          />
          {/* <div className="absolute bottom-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <BsStarFill className="text-yellow-300" /> {gym.name}
          </div> */}
          <div className="absolute bottom-4 left-4 bg-gray-900/80 text-white text-xl font-bold px-4 py-1 rounded-full flex items-center gap-1">
            {gym.name}
          </div>
          {/* <div className="absolute top-4 right-4 bg-gray-900/80 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {gym.location}
          </div> */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className=" bg-gray-900/80 text-white text-lg hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-green-900/90 font-medium p-2 rounded-full ">
              <BsTiktok />
            </div>
            <div className=" bg-gray-900/80 text-white text-lg hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-green-900/90 font-medium p-2 rounded-full ">
              <BsInstagram />
            </div>
            <div className=" bg-gray-900/80 text-white text-lg hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-green-900/90 font-medium p-2 rounded-full ">
              <BsTwitterX />
            </div>
            <div className=" bg-gray-900/80 text-white text-lg hover:scale-105 transition-all duration-200 cursor-pointer hover:bg-green-900/90 font-medium p-2 rounded-full ">
              <BsFacebook />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {gym.desc}
            </p>
            <span className="text-2xl font-bold text-green-400">
              ${gym.price}
            </span>
          </div>

          <div className="flex justify-between items-start mb-2">
            <div className="flex flex-wrap gap-1 mb-4">
              {gym.equipment.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className=" bg-gray-900/80 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {gym.location}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <Button
                  variant="ghost"
                  className={`text-gray-300 hover:text-white  px-3 py-2 rounded-lg font-medium transition-colors relative ${
                    nav === "images"
                      ? "bg-green-600/70 hover:bg-green-600/70"
                      : ""
                  }`}
                  onClick={() => {
                    setNav("images");
                  }}
                >
                  Images
                </Button>
              </div>
              <div>
                <Button
                  variant="ghost"
                  className={`text-gray-300 hover:text-white  px-3 py-2 rounded-lg font-medium transition-colors relative ${
                    nav === "trainers"
                      ? "bg-green-600/70 hover:bg-green-600/70"
                      : ""
                  }`}
                  onClick={() => {
                    setNav("trainers");
                  }}
                >
                  Trainers
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-300 border-gray-600 hover:bg-gray-800"
              >
                <Star className="w-4 h-4 mr-1" /> Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-gray-300 border-gray-600 hover:bg-gray-800"
              >
                View
              </Button>
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
            </div>
          </div>
        </div>
        {nav === "images" && (
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 mx-3 mb-7">
            {gym.images.map((image) => (
              <div key={image} className="rounded-md overflow-hidden">
                <div className="relative h-50 md:h-80 overflow-hidden">
                  <Image
                    src={image}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
