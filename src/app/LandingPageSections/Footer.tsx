import { Instagram } from "lucide-react";
import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function FooterSection() {
  return (
    <footer className=" text-gray-100 pt-12 pb-6">
      <div className="max-w-4xl mx-auto px-4">
        {/* Call to Action */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Start your fitness journey today!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gyms"
              className="px-6 py-2 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 transition"
            >
              Find a Gym
            </Link>
            <a
              href="/list-gym"
              className="px-6 py-2 bg-green-600 rounded text-white font-semibold hover:bg-green-700 transition"
            >
              List Your Gym
            </a>
          </div>
        </div>
        {/* Footer Links & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/blog" className="hover:underline">
              Blog
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="hover:text-pink-400"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
              className="hover:text-blue-400 text-lg"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="hover:text-blue-500"
            >
              <BsLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} GymConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
