"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Calendar, Filter, Search } from "lucide-react";
import Image from "next/image";
import {
  BsFillLightningFill,
  BsInstagram,
  BsPeople,
  BsStarFill,
  BsTiktok,
  BsTwitterX,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

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

export default function TrainerPage() {
  return (
    <div className="text-white mt-16 pt-7 ">
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <BsFillLightningFill className="text-green-400" /> Trainers
          </h3>

          <div className="flex gap-5 items-center">
            {/* search bar */}
            <div className="hidden md:flex items-center  bg-gray-800/80 backdrop-blur-sm rounded-full pl-3 pr-1 py-1 border border-gray-700 hover:border-green-500 transition-colors">
              <Search className="text-gray-400 mr-3" size={15} />
              <input
                type="text"
                placeholder="Search for trainers"
                className="bg-transparent border-none outline-none text-white flex-grow pr-4 placeholder-gray-500 text-sm"
              />
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full px-3 py-1 flex items-center gap-2 hover:from-green-600 hover:to-green-800 transition-all">
                <BsPeople size={15} />
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
                    Male
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-10 py-2 hover:bg-gray-600 text-sm rounded-xl">
                    Female
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
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
                  <span className="mr-3">{trainer.experience} experience</span>
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
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
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
        </div>
      </div>
    </div>
  );
}
