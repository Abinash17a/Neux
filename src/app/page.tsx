"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Quote } from "lucide-react"

const features = [
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Building mobile-first solutions with exceptional user experiences.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Responsive and scalable web applications for your business needs.",
  },
  {
    icon: "🚀",
    title: "Cloud Solutions",
    description: "Cloud-based solutions to optimize business operations and scalability.",
  },
  { icon: "⚙️", title: "Automation", description: "Automating repetitive tasks to save time and improve efficiency." },
  {
    icon: "🔒",
    title: "Security",
    description: "Implementing robust security measures to protect your data and assets.",
  },
  {
    icon: "📈",
    title: "Analytics",
    description: "Data-driven insights to help your business grow and make informed decisions.",
  },
]

const testimonials = [
  {
    quote: "NEUX transformed our digital experience and helped us scale faster than we ever thought possible.",
    author: "John Doe",
    role: "CEO - Example Corp",
  },
  {
    quote:
      "Working with NEUX was a game changer for us. They took the time to understand our needs and delivered exactly what we wanted.",
    author: "Jane Smith",
    role: "Founder - Tech Co.",
  },
  {
    quote: "The team at NEUX are true professionals. Their expertise and dedication to our project was unmatched.",
    author: "Alice Johnson",
    role: "CTO - Innovate Inc.",
  },
]

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="text-center min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We are <span className="text-blue-500">NEUX</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Your Partner in Building Cutting-Edge Digital Experiences. From web development to scalable solutions, we
          bring your ideas to life with precision, creativity, and unmatched expertise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <button
            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 shadow-lg hover:shadow-blue-300/50 transition-all duration-100 ease-in-out font-semibold text-lg"
            onClick={() => router.push("/portfolio")}
          >
            View our Work
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="text-center py-20 px-6 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPosition > 200 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-12">Our Features</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: scrollPosition > 300 ? 1 : 0, y: scrollPosition > 300 ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 h-full">
                <motion.div
                  className="flex flex-col items-center h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-5xl text-blue-500 mb-4">{feature.icon}</div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="text-center py-20 px-6 bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPosition > 800 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-500 mb-12">What Our Clients Say</h3>
        <div className="mt-8 relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gray-800 rounded-lg p-8 shadow-lg relative"
            >
              <Quote className="absolute top-4 left-4 text-blue-500 opacity-25 w-12 h-12" />
              <p className="text-lg sm:text-xl text-gray-300 mb-6 relative z-10">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="font-semibold text-blue-400 text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-8 space-x-4">
            <button onClick={prevTestimonial} className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextTestimonial} className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-blue-500 text-center py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPosition > 1100 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h3>
        <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
          Let's work together and turn your ideas into reality. Reach out to us today!
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-200 shadow-lg transition-all duration-100 ease-in-out font-semibold text-lg"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>
        </motion.div>
      </motion.section>
    </div>
  )
}

