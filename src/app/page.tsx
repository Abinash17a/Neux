'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import the router hook
import { motion } from 'framer-motion'; // For animation effects

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter(); // Initialize the router

  // Update scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-6xl font-extrabold">
          We are <span className="text-blue-500">NEUX</span>
        </h2>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Your Partner in Building Cutting-Edge Digital Experiences. From web development to scalable solutions, we bring your ideas to life with precision, creativity, and unmatched expertise.
        </p>
        <motion.button
          className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 shadow-lg hover:shadow-blue-300/50 transition-all duration-100 ease-in-out font-semibold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => router.push('/portfolio')} // Navigate to portfolio
        >
          View our Work
        </motion.button>
      </section>

      {/* Features Section */}
      <motion.section
        className="text-center py-20 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPosition > 350 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-extrabold text-blue-500">Our Features</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl text-blue-500">📱</div>
            <h4 className="mt-4 text-2xl font-bold">Mobile Development</h4>
            <p className="mt-2 text-gray-300">
              Building mobile-first solutions with exceptional user experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt erat sit amet enim vestibulum, sed volutpat ligula facilisis.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-blue-500">💻</div>
            <h4 className="mt-4 text-2xl font-bold">Web Development</h4>
            <p className="mt-2 text-gray-300">
              Responsive and scalable web applications for your business needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non sapien interdum, sollicitudin elit sed, convallis elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl text-blue-500">🚀</div>
            <h4 className="mt-4 text-2xl font-bold">Cloud Solutions</h4>
            <p className="mt-2 text-gray-300">
              Cloud-based solutions to optimize business operations and scalability. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor ligula non risus fringilla, id varius sem viverra.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPosition > 500 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-extrabold text-blue-500">What Our Clients Say</h3>
        <div className="mt-8 space-y-12">
          <div className="max-w-xl mx-auto">
            <p className="text-xl text-gray-300">
              "NEUX transformed our digital experience and helped us scale faster than we ever thought possible. Their team is responsive, creative, and incredibly skilled. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            </p>
            <div className="mt-4 font-semibold">John Doe, CEO - Example Corp</div>
          </div>
          <div className="max-w-xl mx-auto">
            <p className="text-xl text-gray-300">
              "Working with NEUX was a game changer for us. They took the time to understand our needs and delivered exactly what we wanted. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            </p>
            <div className="mt-4 font-semibold">Jane Smith, Founder - Tech Co.</div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-blue-500 text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPosition > 500 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl font-extrabold text-white">Ready to Get Started?</h3>
        <p className="mt-4 text-lg text-gray-100 max-w-2xl mx-auto">
          Let’s work together and turn your ideas into reality. Reach out to us today! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <motion.button
          className="mt-8 bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200 shadow-lg transition-all duration-100 ease-in-out font-semibold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollPosition > 500 ? 1 : 0 }}
          transition={{ duration: 1 }}
          onClick={() => router.push('/contact')} // Navigate to contact
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  );
}
