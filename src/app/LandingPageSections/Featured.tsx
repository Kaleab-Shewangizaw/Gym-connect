import Image from "next/image";
import Link from "next/link";

const gyms = [
  {
    name: "Iron Paradise",
    image: "/Gym-images/g1.jpg",
    rating: 4.8,
    price: 15,
    available: true,
  },
  {
    name: "Flex Fitness",
    image: "/Gym-images/g2.jpg",
    rating: 4.6,
    price: 12,
    available: false,
  },
  {
    name: "Powerhouse Gym",
    image: "/Gym-images/g3.jpg",
    rating: 4.9,
    price: 18,
    available: true,
  },
];

const trainers = [
  {
    name: "Alex Carter",
    image: "/trainers/t1.jpg",
    skills: ["Strength Training", "HIIT"],
  },
  {
    name: "Maya Lee",
    image: "/trainers/t2.jpg",
    skills: ["Yoga", "Pilates"],
  },
  {
    name: "Jake Smith",
    image: "/trainers/t3.jpg",
    skills: ["Cardio", "CrossFit"],
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-16 pt-5">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Featured Gyms & Trainers
        </h2>
        {/* Gyms Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Gyms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {gyms.map((gym) => (
              <div
                key={gym.name}
                className="bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center text-white"
              >
                <Image
                  src={gym.image}
                  alt={gym.name}
                  width={200}
                  height={120}
                  className="rounded-md object-cover mb-3"
                />
                <h4 className="font-bold text-lg mb-1">{gym.name}</h4>
                <div className="flex items-center mb-1">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="font-medium">{gym.rating}</span>
                </div>
                <div className="text-sm text-gray-400 mb-1">
                  ${gym.price}/hour
                </div>
                <div
                  className={`text-xs font-semibold ${
                    gym.available ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {gym.available ? "Available" : "Full"}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/gyms">
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold transition">
                View All Gyms
              </button>
            </Link>
          </div>
        </div>
        {/* Trainers Grid */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Trainers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div
                key={trainer.name}
                className="bg-gray-800 text-white rounded-lg shadow p-4 flex flex-col items-center"
              >
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover mb-3"
                />
                <h4 className="font-bold text-lg mb-1">{trainer.name}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {trainer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
