"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import M6 from "../../../public/bg/bg1.png";

export default function HeroSection() {
  return (
    <div className="h-screen w-full  relative -mt-15">
      <Image
        src={M6}
        alt="model1"
        fill
        className="absolute object-cover  saturate-200  brightness-[0.4] -z-10"
        priority
      />

      <div className="w-[95%] md:w-[80%]  mx-auto flex justify-center flex-col   items-center h-full relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl text-center lg:w-[50%] mb-1 text-white"
        >
          Find the Perfect <span className="text-green-600">Gym </span>&
          <span className="text-fuchsia-600">Trainer</span> Near You.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-[40%] text-gray-300 mb-15 text-center"
        >
          Book gym sessions, connect with certified trainers, and achieve your
          fitness goal - all in one place.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="px-3 py-2 cursor-pointer  rounded-md font-bold text-xl border-emerald-800 border-2 bg-green-700 text-white"
          >
            Find GYMs
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="px-3 py-2 cursor-pointer border-2 rounded-md font-bold text-xl text-green-500 border-emerald-800"
          >
            Join as a Trainer
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

//

// const images = [M6];
// const [image, setImage] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setImage((prev) => (prev + 1) % images.length);
//   }, 5000);

//   return () => clearInterval(interval);
// }, [images.length]);

{
  /* <div className=" text-lg font-bold flex items-center rounded-md overflow-hidden  absolute top-5 left-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" text-white bg-emerald-700 px-2 py-1 relative"
          >
            GYM{" "}
            <div className="w-5 h-1 bg-emerald-700 z-2 rounded-2xl absolute top-0 -right-3"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" text-white bg-fuchsia-800 px-2 py-1 relative"
          >
            Connect{" "}
            <div className="w-5 h-1 bg-fuchsia-800 rounded-lg absolute bottom-0 -left-3"></div>
          </motion.div>
        </div> */
}
