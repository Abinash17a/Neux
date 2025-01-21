"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { inter, poppins } from "../fonts/fonts"
import { Users, Zap, Clock, Award, ChevronRight, Code, Server, Shield, BarChart } from "lucide-react"

const values = [
  {
    icon: <Users size={24} />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication.",
  },
  {
    icon: <Zap size={24} />,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: <Clock size={24} />,
    title: "Timeliness",
    description: "We respect deadlines and deliver projects on time, every time.",
  },
  {
    icon: <Award size={24} />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, no compromises.",
  },
]

const expertiseAreas = [
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Creating responsive and scalable web applications using the latest technologies.",
  },
  {
    icon: <Server size={40} />,
    title: "Cloud Solutions",
    description: "Designing and implementing robust cloud infrastructures for optimal performance.",
  },
  {
    icon: <Shield size={40} />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with state-of-the-art security measures.",
  },
  {
    icon: <BarChart size={40} />,
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights for informed decision-making.",
  },
]

export default function AboutUsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeValue, setActiveValue] = useState(0)
  const [activeExpertise, setActiveExpertise] = useState(0)

  return (
    <div className={`relative overflow-hidden bg-gray-900 text-white ${poppins.className}`}>
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#2b2d31" fillOpacity="1" d="M0,32L1440,320L1440,0L0,0Z"></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.section
          className="text-center py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 ${inter.className}`}>About Us</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12">
            At NEUX, we are a team of dedicated professionals who are passionate about building cutting-edge digital
            experiences. From web development to scalable solutions, we bring your ideas to life with precision,
            creativity, and unmatched expertise.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Team</h3>
              <p className="text-gray-400 mb-4">
                Our team consists of experts from various fields of technology, design, and business who work together
                to create solutions that matter.
              </p>
              <p className="text-gray-400 mb-4">With years of experience, we thrive on collaboration and innovation.</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Mission</h3>
              <p className="text-gray-400 mb-4">
                Our mission is to empower businesses by creating digital experiences that drive growth, improve user
                engagement, and achieve measurable success.
              </p>
              <p className="text-gray-400">
                We believe in building strong relationships with our clients and supporting them throughout their
                journey.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          className="py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${inter.className}`}>Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer ${
                  activeExpertise === index ? "border-2 border-blue-500" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setActiveExpertise(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-500 mr-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold">{area.title}</h3>
                </div>
                <p className="text-gray-400">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="py-20">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${inter.className}`}>Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={`bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer ${
                  activeValue === index ? "border-2 border-blue-500" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setActiveValue(index)}
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-500 mr-4">{value.icon}</div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          className="bg-gray-800 py-20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h2 className={`text-3xl md:text-4xl font-extrabold text-white mb-6 ${inter.className}`}>
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's work together to create something extraordinary. Our team is always looking for new challenges and
              exciting projects. Get in touch with us today and let's start building the future!
            </p>
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition-all duration-300 flex items-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ChevronRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

