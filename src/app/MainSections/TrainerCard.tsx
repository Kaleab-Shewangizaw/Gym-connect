"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { BsInstagram, BsStarFill, BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { Trainer } from "../utils/Types";

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <motion.div
      key={trainer.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-green-400/30 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-70 overflow-hidden">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-fit"
        />
        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <BsStarFill className="text-yellow-300" /> {trainer.rating}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-white mb-1">{trainer.name}</h4>

        <div className="flex items-center text-gray-400 text-sm mb-3">
          <span>{trainer.experience} experience</span>
          <span className="mx-2">•</span>
          <span>{trainer.clients}+ clients</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {trainer.skills.slice(0, 2).map((skill, i) => (
            <span
              key={i}
              className="bg-blue-900/40 text-blue-200 text-xs px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
          {trainer.skills.length > 2 && (
            <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
              +{trainer.skills.length - 2}
            </span>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Calendar className="w-4 h-4 mr-1" /> Book Session
          </Button>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              className="text-gray-300 border-gray-600 bg-gray-900 hover:bg-gray-600 hover:text-gray-300"
            >
              View Profile
            </Button>

            <div className="flex gap-2 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <BsInstagram size={14} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <BsTwitterX size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
