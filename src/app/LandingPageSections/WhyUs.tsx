export default function WhyUsSection() {
  return (
    <section className="py-16  text-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose GymConnect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clients */}
          <div className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <h3 className="font-semibold text-lg mb-2 text-blue-400">
              For Clients
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Easy booking</li>
              <li>Transparent pricing</li>
              <li>Nearby gyms</li>
            </ul>
          </div>
          {/* Gym Owners */}
          <div className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <h3 className="font-semibold text-lg mb-2 text-green-400">
              For Gym Owners
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Fill empty slots</li>
              <li>Manage bookings</li>
              <li>Attract clients</li>
            </ul>
          </div>
          {/* Trainers */}
          <div className="bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center text-center">
            <h3 className="font-semibold text-lg mb-2 text-purple-400">
              For Trainers
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>More exposure</li>
              <li>Flexible scheduling</li>
              <li>More income</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
