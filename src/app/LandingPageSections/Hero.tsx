import { Dumbbell, DumbbellIcon, LucideDumbbell } from "lucide-react";
import { FaDumbbell } from "react-icons/fa6";
import { LiaDumbbellSolid } from "react-icons/lia";

export default function HeroSection() {
  return (
    <div>
      <LucideDumbbell />
      <Dumbbell />
      <DumbbellIcon />
      <LiaDumbbellSolid />
      <FaDumbbell />
    </div>
  );
}

// <AnimatePresence mode="wait">
//         <motion.div
//           key={image}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2 }}
//           className="absolute left-1/2 "
//         >
//           {" "}
//           <Image src={M6} alt="model1" width={300} height={500} />
//         </motion.div>
//       </AnimatePresence>

// const images = [M6];
// const [image, setImage] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setImage((prev) => (prev + 1) % images.length);
//   }, 5000);

//   return () => clearInterval(interval);
// }, [images.length]);
