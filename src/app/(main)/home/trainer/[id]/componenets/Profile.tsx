import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsPeople } from "react-icons/bs";

interface Trainer {
  name: string;
  age: number;
  email: string;
  phone: string;
  rating: number;
  reviews: number;
  image: string;
  specialty: string;
  experience: string;
  clients: number;
  location: string;
  responseTime: string;
  bio: string;
  hourlyRate: number;
  certifications: string[];
  socialMedia: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

export default function Profile({ trainer }: { trainer: Trainer }) {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-bold mb-5">Profile</h2>
      <div className="flex justify-between items-start mb-6 ">
        <div className="space-y-6 w-full">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500">
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">{trainer.name}</h3>
              <p className="text-gray-400">Gym trainer</p>
            </div>
            <div className="flex gap-5 flex-wrap ml-auto">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between gap-10">
                  <div>
                    <p className="text-gray-400 text-sm">Clients</p>
                    <p className="text-2xl font-bold text-white">
                      {trainer.clients}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <BsPeople className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3">Contact Information</h4>
              <div className="space-y-2">
                <p className="text-gray-300">{trainer.email}</p>
                <p className="text-gray-300">{trainer.phone}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Security</h4>
              <Button className="bg-gray-700 hover:bg-gray-600">
                Change Password
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3">Subscription</h4>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">Premium Business Plan</p>
                  <p className="text-gray-400">Renews on Jan 15, 2024</p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  Manage Subscription
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
