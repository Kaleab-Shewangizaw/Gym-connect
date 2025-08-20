"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BiDumbbell } from "react-icons/bi";

export default function HeroNavbar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-end justify-between py-2 px-2 w-[95%] md:w-[80%] z-10  mx-auto  sticky top-0"
    >
      <div className="text-3xl  relative px-1 py-1.5 overflow-hidden bg-green-700 rounded-tr-md rounded-br-xl rounded-tl-xl ">
        <BiDumbbell className="rotate-z-30 text-white" />
        <div className="w-15 h-1 bg-white absolute rotate-z-30 -left-3 -bottom-0.5"></div>
      </div>
      <div className="flex gap-10">
        <ul className=" gap-4 hidden md:flex z-100  ">
          <li>
            <Button
              variant="link"
              onClick={() => {
                alert("Yoo hoo");
              }}
              className="text-white cursor-pointer"
            >
              Home
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white cursor-pointer">
              GYMs
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white cursor-pointer ">
              Trainers
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white  cursor-pointer">
              Pricing
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white  cursor-pointer">
              About
            </Button>
          </li>
        </ul>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className=" px-2 py-0.5 cursor-pointer  rounded-md font-bold text-sm   bg-green-700 text-white"
          >
            Log in
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className=" px-2 py-0.5 cursor-pointer  rounded-md font-bold text-sm   border border-green-700 text-green-700"
          >
            Sign up
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
