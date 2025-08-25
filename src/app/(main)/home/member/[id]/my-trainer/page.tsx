"use client";

import TrainerShow from "./TrainerShow";

const trainers = [
  {
    name: "Alex Carter",
    image: "/trainers/t1.jpg",
    gymName: "Iron Paradise",
    daysLeft: 20,
    available: false,
  },
];

export default function myTrainerPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-400">Trainers</p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Active now</span>
          </div>
        </div>
        {trainers.map((trainer, i) => {
          return <TrainerShow key={i} trainer={trainer} />;
        })}
      </div>
    </div>
  );
}
