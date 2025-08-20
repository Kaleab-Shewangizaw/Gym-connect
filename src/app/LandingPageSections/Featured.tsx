"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";

const gyms = [
  {
    name: "Iron Paradise",
    image: "/Gym-images/g1.jpg",
    rating: 4.8,
    price: "15/mo",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius culpa, id aut mollitia eum.",
    available: true,
  },
  {
    name: "Flex Fitness",
    image: "/Gym-images/g2.jpg",
    rating: 4.6,
    price: "12/mo",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius culpa, id aut mollitia eum.",
    available: false,
  },
  {
    name: "Powerhouse Gym",
    image: "/Gym-images/g3.jpg",
    rating: 4.9,
    price: "18/mo",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius culpa, id aut mollitia eum.",
    available: true,
  },
  {
    name: "Powerhous Gym",
    image: "/Gym-images/g4.jpg",
    rating: 4.9,
    price: "18/mo",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius culpa, id aut mollitia eum.",
    available: true,
  },
  {
    name: "Powerhou Gym",
    image: "/Gym-images/g5.jpg",
    rating: 4.9,
    price: "18/mo",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eius culpa, id aut mollitia eum.",
    available: true,
  },
];

const trainers = [
  {
    name: "Alex Carter",
    image: "/trainers/t1.jpg",
    skills: ["Strength Training", "HIIT"],
  },
  {
    name: "Maya Lee",
    image: "/trainers/t2.jpg",
    skills: ["Yoga", "Pilates"],
  },
  {
    name: "Jake Smith",
    image: "/trainers/t3.jpg",
    skills: ["Cardio", "CrossFit"],
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-16 pt-5 w-[95%] md:w-[80%] mx-auto">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Featured Gyms & Trainers
        </h2>
        {/* Gyms Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Gyms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gyms.map((gym) => (
              <div
                key={gym.name}
                className="rounded-md overflow-hidden shadow-lg  cursor-pointer  bg-[#05310da2]  text-white "
              >
                <div className="relative w-full h-50">
                  <Image
                    src={gym.image}
                    alt={gym.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-2 px-3  flex flex-col items-end gap-2">
                  <div className="flex items-center justify-between w-full ">
                    <h4 className="text-lg font-bold   text-gray-200">
                      {gym.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <BsStarFill className="text-yellow-500 text-lg " />{" "}
                      <p className="text-gray-300 text-sm flex items-center font-bold">
                        {" "}
                        {gym.rating}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{gym.desc}</p>
                  <h1 className="font-bold w-full">
                    Price: <span className="font-normal">${gym.price}</span>
                  </h1>
                  <div className="flex justify-between items-center w-full mt-1">
                    <div>
                      {gym.available ? (
                        <p className="text-sm font-bold text-green-200">
                          Slots Available!
                        </p>
                      ) : (
                        <p className="text-sm font-bold text-red-300">
                          All slots occupied.
                        </p>
                      )}
                    </div>
                    <div className="flex items-end gap-2">
                      <Button variant="ghost">
                        <Star />{" "}
                      </Button>

                      <Button variant="outline">Visit</Button>
                      <Button>Book</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/gyms">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="px-3 py-2 cursor-pointer  rounded-sm font-bold text-lg border-emerald-800 border-2 bg-green-700 text-white"
              >
                View all GYMs
              </motion.button>
            </Link>
          </div>
        </div>
        {/* Trainers Grid */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Trainers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className=" text-white rounded-lg shadow p-4 flex flex-col items-center"
              >
                <div className="relative w-60 h-100 rounded-md  overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover "
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">{trainer.name}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {trainer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
