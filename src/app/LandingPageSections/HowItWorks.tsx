"use client";

import { motion, useAnimation, useInView } from "framer-motion";

import { MapPin, Dumbbell, CalendarCheck } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-300px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  return (
    <motion.section className="py-16 relative w-[95%] md:w-[80%] mx-auto">
      <div className="absolute bg-fuchsia-600 w-0 shadow-[0px_0px_300px_70px_#c800de] bottom-25 left-50"></div>
      <div className="absolute bg-fuchsia-600 w-0 shadow-[0px_0px_300px_70px_#008236] top-20 right-50"></div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className=" "
      >
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-10"
        >
          How It Works
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Step 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-blue-900 p-4 rounded-full mb-4">
              <MapPin className="w-8 h-8  text-blue-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Browse Gyms</h3>
            <p className=" text-gray-400">
              Find gyms by location, capacity, and price.
            </p>
          </motion.div>
          {/* Step 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-green-900 p-4 rounded-full mb-4">
              <Dumbbell className="w-8 h-8 text-green-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Choose Trainer or Slot
            </h3>
            <p className=" text-gray-400">
              Select a trainer or just book a gym slot.
            </p>
          </motion.div>
          {/* Step 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-purple-900 p-4 rounded-full mb-4">
              <CalendarCheck className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Book & Train</h3>
            <p className="text-gray-400">
              Confirm your spot instantly and start training.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
