"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Users, Building2, UserCheck } from "lucide-react";
import { useEffect, useRef } from "react";

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-300px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.section className="py-16 relative w-[95%] md:w-[80%] mx-auto text-gray-100">
      <div className="absolute bg-blue-600 w-0 shadow-[0px_0px_300px_70px_#0066ff] bottom-25 left-50 opacity-30"></div>
      <div className="absolute bg-green-600 w-0 shadow-[0px_0px_300px_70px_#00cc66] top-20 right-50 opacity-30"></div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Why Choose GymConnect
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Clients */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <div className="bg-blue-900 p-4 rounded-full mb-4">
              <Users className="w-8 h-8 text-blue-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-blue-400">
              For Clients
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Easy booking</li>
              <li>Transparent pricing</li>
              <li>Nearby gyms</li>
            </ul>
          </motion.div>

          {/* Gym Owners */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <div className="bg-green-900 p-4 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-green-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-green-400">
              For Gym Owners
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Fill empty slots</li>
              <li>Manage bookings</li>
              <li>Attract clients</li>
            </ul>
          </motion.div>

          {/* Trainers */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <div className="bg-purple-900 p-4 rounded-full mb-4">
              <UserCheck className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-purple-400">
              For Trainers
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>More exposure</li>
              <li>Flexible scheduling</li>
              <li>More income</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
