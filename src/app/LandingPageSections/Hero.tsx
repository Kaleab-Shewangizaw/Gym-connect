import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import M6 from "../../../public/bg/bg1.png";

export default function HeroSection() {
  return (
    <div className="h-screen w-full border relative ">
      <Image
        src={M6}
        alt="model1"
        fill
        className="absolute object-cover  saturate-200  brightness-[0.4] -z-10"
        priority
      />

      <motion.div className="w-[95%] md:w-[80%] border mx-auto flex justify-center flex-col  items-center h-full relative">
        <div className="px-2 py-1 text-xl font-bold flex items-center rounded-md bg-emerald-600 absolute top-5 left-5">
          <div className=" text-white">GYM</div>
          <div className=" text-fuchsia-700">Fit</div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl text-center lg:w-[50%] mb-1"
        >
          Find the Perfect <span className="text-emerald-500">Gym </span>&
          <span className="text-orange-600">Trainer</span> Near You.
        </motion.h1>
        <motion.p className="lg:w-[40%] text-gray-300 mb-10">
          Book gym sessions, connect with certified trainers, and achieve your
          fitness goal - all in one place.
        </motion.p>
        <motion.div className="flex gap-20">
          <button className="px-3 py-2  rounded-md font-bold text-xl border-emerald-800 border-2 bg-emerald-500 ">
            Find Gyms
          </button>
          <button className="px-3 py-2 border-2 rounded-md font-bold text-xl text-emerald-500 border-emerald-800">
            Join as a Trainer
          </button>
        </motion.div>
      </motion.div>
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
