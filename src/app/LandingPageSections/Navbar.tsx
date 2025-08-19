import { BiDumbbell } from "react-icons/bi";

export default function HeroNavbar() {
  return (
    <div className="text-4xl border relative px-2 py-2 overflow-hidden bg-green-700 rounded-tr-2xl rounded-br-2xl ">
      <BiDumbbell className="rotate-z-30" />
      <div className="w-15 h-1 bg-white absolute rotate-z-35 -left-2 bottom-0"></div>
    </div>
  );
}
