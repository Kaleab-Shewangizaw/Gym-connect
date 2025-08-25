import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface TrainerShow {
  name: string;
  image: string;
  gymName: string;
  daysLeft: number;
  available: boolean;
}

export default function TrainerShow({ trainer }: { trainer: TrainerShow }) {
  return (
    <div className="w-full relative flex justify-between  md:p-2 border border-gray-800 hover:bg-gray-800 rounded-lg transition-all duration-150 ">
      <div className="flex  gap-5 text-white  ">
        <div className="relative h-40 w-30 border rounded-lg border-gray-800">
          <Image
            src={trainer.image}
            alt="trainer image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-around  h-">
          <h1 className="text-xl">{trainer.name}</h1>
          <p className="p-2 pl-0 bg-gray-600 text-xs rounded-full">
            <span className=" bg-green-600/70 rounded-full p-2">at</span>{" "}
            {trainer.gymName}
          </p>
          <div className="flex gap-2">
            {trainer.available ? (
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            ) : (
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around ">
        <p className="bg-green-600/30 p-2 rounded-full text-white text-center text-sm">
          {trainer.daysLeft} Days left
        </p>
        <Link href={"/trainers/" + trainer.name}>
          <Button>View profile</Button>
        </Link>
      </div>
    </div>
  );
}
