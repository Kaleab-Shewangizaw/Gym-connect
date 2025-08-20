import { MapPin, Dumbbell, CalendarCheck } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-900 p-4 rounded-full mb-4">
              <MapPin className="w-8 h-8  text-blue-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Browse Gyms</h3>
            <p className=" text-gray-400">
              Find gyms by location, capacity, and price.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-900 p-4 rounded-full mb-4">
              <Dumbbell className="w-8 h-8 text-green-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Choose Trainer or Slot
            </h3>
            <p className=" text-gray-400">
              Select a trainer or just book a gym slot.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-900 p-4 rounded-full mb-4">
              <CalendarCheck className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Book & Train</h3>
            <p className="text-gray-400">
              Confirm your spot instantly and start training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
