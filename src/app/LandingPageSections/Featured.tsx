"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsStarFill, BsTiktok, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useRef } from "react";

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
    rating: 4.5,
    image: "/trainers/t1.jpg",
    skills: ["Strength Training", "HIIT"],
  },
  {
    name: "Maya Lee",
    rating: 4.5,
    image: "/trainers/t2.jpg",
    skills: ["Yoga", "Pilates"],
  },
  {
    name: "Jake Smith",
    rating: 4.5,
    image: "/trainers/t3.jpg",
    skills: ["Cardio", "CrossFit"],
  },
  {
    name: "Kebedech Chane",
    rating: 4.5,
    image: "/trainers/t4.jpg",
    skills: ["Cardio", "CrossFit"],
  },
  {
    name: "Demelew",
    rating: 4.5,
    image: "/trainers/t5.jpg",
    skills: ["Cardio", "CrossFit"],
  },
];

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-300px" });
  const inView2 = useInView(section2Ref, { once: false, margin: "-300px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  useEffect(() => {
    if (inView2) controls.start("visible");
  }, [inView2, controls]);
  return (
    <section className="py-16  w-[95%] md:w-[80%] mx-auto relative">
      <div className="absolute  shadow-[0px_0px_300px_70px_#c800de] bottom-50 right-50"></div>
      <div className="absolute  shadow-[0px_0px_300px_60px_#c800de] top-240 left-50"></div>
      <div className="absolute  shadow-[0px_0px_300px_80px_#008236] top-180 right-50"></div>
      <div className="absolute  shadow-[0px_0px_300px_70px_#008236] bottom-150 left-50"></div>
      <div className="">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-5"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Featured Gyms & Trainers
        </motion.h2>
        {/* Gyms Grid */}
        <div className="mb-12">
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Gyms
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            ref={sectionRef}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {gyms.map((gym) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
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
              </motion.div>
            ))}
          </motion.div>
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
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl font-semibold mb-6"
          >
            Trainers
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6"
            ref={section2Ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {trainers.map((trainer) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                key={trainer.name}
                className=" text-white rounded-lg shadow  px-2 pb-2 border w-45 md:w-50  lg:w-60  flex flex-col items-center justify-between gap-2"
              >
                <div className="relative w-45 md:w-50 md:h-90 h-60 lg:w-60 lg:h-95 rounded-md  overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="flex items-center justify-between w-full flex-wrap">
                  <h4 className="text-lg font-bold   text-gray-200">
                    {trainer.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <BsStarFill className="text-yellow-500 text-lg " />{" "}
                    <p className="text-gray-300 text-sm flex items-center font-bold">
                      {" "}
                      {trainer.rating}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {trainer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-900 text-blue-100 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="w-full flex mt-3 justify-around">
                  <Button>Book</Button>
                  <Button>View</Button>
                </div>
                <div className="flex flex-wrap gap-5 mt-5 text-lg  justify-between  w-full self-end ">
                  <BsInstagram />
                  <FaFacebookF />
                  <BsTwitterX />
                  <BsTiktok />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
