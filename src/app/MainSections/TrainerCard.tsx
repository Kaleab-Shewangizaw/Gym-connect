"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { BsInstagram, BsStarFill, BsTiktok, BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { Trainer } from "../utils/Types";
import Link from "next/link";

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <motion.div
      key={trainer.name}
      className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-400/30 transition-all duration-300 group flex flex-col"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-fit group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <BsStarFill className="text-yellow-300" /> {trainer.rating}
        </div>
        {!trainer.available && (
          <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
              Not Available
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">
            {trainer.name}
          </h4>
          <span className="text-green-400 font-semibold">{trainer.price}</span>
        </div>

        <div className="flex items-center text-gray-400 text-sm mb-3">
          <span className="mr-3">{trainer.experience} experience</span>
          <span>• {trainer.clients}+ clients</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {trainer.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-900/40 text-blue-200 text-xs px-2.5 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 flex items-center gap-1"
            disabled={!trainer.available}
          >
            <Calendar className="w-4 h-4" />
            {trainer.available ? "Book Session" : "Not Available"}
          </Button>

          <div className="flex justify-between items-center">
            <Link href={"/trainers/" + trainer.name}>
              <Button
                variant="outline"
                size="sm"
                className="text-gray-300 border-gray-600 bg-gray-900 hover:bg-gray-600 hover:text-gray-300"
              >
                View Profile
              </Button>
            </Link>

            <div className="flex gap-2 text-gray-400">
              <a href="#" className="hover:text-pink-500 transition-colors p-1">
                <BsInstagram size={16} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors p-1">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors p-1">
                <BsTwitterX size={16} />
              </a>
              <a href="#" className="hover:text-black transition-colors p-1">
                <BsTiktok size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
