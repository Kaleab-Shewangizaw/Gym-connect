"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Gym } from "../utils/Types";

export default function GymCard({ gym }: { gym: Gym }) {
  return (
    <motion.div className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/30 transition-all duration-300 group">
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

        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{gym.desc}</p>

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
              className="text-gray-300 border-gray-600 bg-gray-900 hover:bg-gray-600 hover:text-gray-300"
            >
              <Heart className="w-4 h-4" />
            </Button>
            <Link href={`/gyms/${gym.id}`}>
              <Button
                variant="outline"
                color="light"
                size="sm"
                className="text-gray-300 border-gray-600 bg-gray-900 hover:bg-gray-600 hover:text-gray-300"
              >
                View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
