"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote:
        "I found my perfect gym and trainer in minutes! The booking process was seamless and the prices were transparent.",
      author: "Sarah Johnson",
      role: "Fitness Enthusiast",
      rating: 5,
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500",
      textColor: "text-blue-400",
    },
    {
      id: 2,
      quote:
        "We doubled our bookings in just 3 months using GymConnect. It's helped us utilize our off-peak hours effectively.",
      author: "Michael Chen",
      role: "Gym Owner",
      rating: 5,
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500",
      textColor: "text-green-400",
    },
    {
      id: 3,
      quote:
        "As a freelance trainer, GymConnect has given me exposure to clients I wouldn't have reached otherwise. My income has increased by 40%.",
      author: "Jessica Williams",
      role: "Personal Trainer",
      rating: 5,
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-500",
      textColor: "text-purple-400",
    },
    {
      id: 4,
      quote:
        "The flexibility to book gym sessions around my busy schedule has been a game-changer. No more long-term commitments!",
      author: "David Martinez",
      role: "Software Engineer",
      rating: 4,
      bgColor: "bg-amber-900/20",
      borderColor: "border-amber-500",
      textColor: "text-amber-400",
    },
  ];

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-current" : ""}`} />
    ));
  };

  return (
    <motion.section
      className="py-16 relative w-[95%] md:w-[80%] mx-auto text-gray-100 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated background elements */}
      <div className="absolute bg-blue-600/30 w-0 shadow-[0px_0px_200px_60px_#0066ff] bottom-10 left-10 opacity-20 animate-pulse-slow"></div>
      <div
        className="absolute bg-purple-600/30 w-0 shadow-[0px_0px_200px_60px_#8000ff] top-10 right-10 opacity-20 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-4"
        >
          What Our Users Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Discover why thousands of clients, gym owners, and trainers trust
          GymConnect to transform their fitness journey.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              className={`rounded-xl p-6 flex flex-col justify-between h-full relative overflow-hidden border ${testimonial.borderColor} ${testimonial.bgColor} backdrop-blur-sm`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-10 h-10 opacity-10" />

              {/* Rating */}
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              {/* Testimonial text */}
              <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>

              {/* Author info */}
              <div className="flex items-center mt-auto">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${testimonial.bgColor} border ${testimonial.borderColor}`}
                  >
                    <span className="font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className={`text-sm ${testimonial.textColor}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-400">500+</div>
            <div className="text-gray-400">Partner Gyms</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400">1.2K+</div>
            <div className="text-gray-400">Trainers</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-amber-400">95%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
