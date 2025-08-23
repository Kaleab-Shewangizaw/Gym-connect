"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsTiktok,
  BsTwitterX,
  BsStarFill,
  BsPeople,
  BsAward,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

// Mock data for a single trainer
const trainer = {
  name: "Kebedech Chane",
  age: 32,
  rating: 4.9,
  reviews: 147,
  image: "/trainers/t4.jpg",
  coverImage: "/trainers/cover.jpg",
  specialty: "Bodybuilding, Powerlifting, Flexibility",
  experience: "8 years",
  clients: 200,
  location: "Addis Ababa, Ethiopia",
  responseTime: "Within 2 hours",
  skills: ["Bodybuilding", "Powerlifting", "Flexibility", "Nutrition Planning"],
  services: [
    {
      name: "One-on-One Training",
      description: "Personalized workout sessions tailored to your goals",
      duration: "60 mins",
      price: 45,
    },
    {
      name: "Nutrition Planning",
      description: "Custom meal plans to complement your training regimen",
      duration: "N/A",
      price: 35,
    },
    {
      name: "Flexibility Program",
      description: "Improve mobility and prevent injuries",
      duration: "45 mins",
      price: 30,
    },
    {
      name: "Powerlifting Coaching",
      description: "Technique refinement and programming for powerlifters",
      duration: "75 mins",
      price: 55,
    },
  ],
  bio: "Certified personal trainer with 8 years of experience specializing in bodybuilding and powerlifting. My approach combines scientific training methods with personalized attention to help clients achieve their fitness goals. I believe in sustainable progress through proper form, nutrition, and consistency.",
  certifications: [
    "NASM Certified Personal Trainer",
    "ISSA Strength and Conditioning Coach",
    "Precision Nutrition Level 1",
  ],
  socialMedia: {
    instagram: "https://instagram.com/kebedech_fitness",
    facebook: "https://facebook.com/kebedech.fitness",
    twitter: "https://twitter.com/kebedech_fit",
    tiktok: "https://tiktok.com/@kebedech_fitness",
  },
  availability: ["Mon", "Wed", "Fri"],
};

export default function TrainerProfilePage() {
  return (
    <div className="min-h-screen text-white mt-16 pt-7">
      {/* Back button */}
      <div className="container mx-auto mb-6">
        <Link href="/trainers">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Trainers
          </Button>
        </Link>
      </div>

      {/* Cover photo and profile header */}
      <div className="relative">
        <div className="h-48 md:h-64 w-full bg-gradient-to-r from-green-700 to-blue-800 overflow-hidden">
          <Image
            src={trainer.coverImage || "/trainers/cover.jpg"}
            alt="Cover photo"
            fill
            className="object-cover opacity-70"
          />
        </div>

        <div className="container mx-auto px-4 relative -top-12 md:-top-16">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-32 w-32 md:h-40 md:w-40 rounded-2xl overflow-hidden border-4 border-gray-900 shadow-lg"
            >
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex-1 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {trainer.name}, {trainer.age}
                  </h1>
                  <p className="text-green-400 mt-1">{trainer.specialty}</p>

                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm">
                      <BsStarFill className="text-yellow-400" />
                      <span>{trainer.rating}</span>
                      <span className="text-gray-400">
                        ({trainer.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm">
                      <BsPeople className="text-blue-400" />
                      <span>{trainer.clients}+ clients</span>
                    </div>

                    <div className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded-full text-sm">
                      <BsAward className="text-green-400" />
                      <span>{trainer.experience} experience</span>
                    </div>
                  </div>
                </div>

                <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                  <Calendar size={16} />
                  Book Session
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{trainer.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>Response time: {trainer.responseTime}</span>
                </div>
              </div>

              {/* Social media links */}
              <div className="flex gap-3 mt-4">
                <a
                  href={trainer.socialMedia.instagram}
                  className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  href={trainer.socialMedia.facebook}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={trainer.socialMedia.twitter}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX />
                </a>
                <a
                  href={trainer.socialMedia.tiktok}
                  className="bg-gray-800 p-2 rounded-full hover:bg-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 -mt-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Bio and skills */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">{trainer.bio}</p>

              <h3 className="text-lg font-bold mt-6 mb-3">Certifications</h3>
              <ul className="space-y-2">
                {trainer.certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <div className="text-green-400 mt-1">•</div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {trainer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/40 text-blue-200 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Services and booking */}
          <div>
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Services & Pricing</h2>
              <div className="space-y-4">
                {trainer.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-400/30 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {service.description}
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {service.duration}
                        </div>
                      </div>
                      <div className="text-lg font-bold text-green-400">
                        ${service.price}
                      </div>
                    </div>
                    <Button className="w-full mt-3 bg-green-600 hover:bg-green-700">
                      Book Now
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800">
                <h3 className="font-semibold mb-2">Availability</h3>
                <div className="flex gap-2">
                  {trainer.availability.map((day, index) => (
                    <span
                      key={index}
                      className="bg-green-900/30 text-green-400 text-sm px-3 py-1 rounded-full"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
