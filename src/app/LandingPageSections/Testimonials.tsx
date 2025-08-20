export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-950 text-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client Testimonial */}
          <div className="bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-center">
            <p className="text-lg italic mb-4 text-gray-200">
              “I found my gym and trainer in minutes!”
            </p>
            <span className="text-blue-400 font-semibold">— Client</span>
          </div>
          {/* Gym Owner Testimonial */}
          <div className="bg-gray-900 rounded-lg shadow p-6 flex flex-col justify-center">
            <p className="text-lg italic mb-4 text-gray-200">
              “We doubled our bookings in 3 months.”
            </p>
            <span className="text-green-400 font-semibold">— Gym Owner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
