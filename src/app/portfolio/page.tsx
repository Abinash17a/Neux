"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronRight, ExternalLink } from "lucide-react"

// Types
type Project = {
  id: number
  name: string
  description: string
  features: string[]
  image: string
  category: string
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    name: "Project Nebula",
    description:
      "An innovative digital solution tailored to meet your business goals. Focused on delivering seamless user experiences and scalable performance.",
    features: ["📍 Global Reach", "🚀 Launch Ready"],
    image: "/images/project-nebula.jpg",
    category: "Web Development",
  },
  {
    id: 2,
    name: "Skyline UX",
    description: "A modern user interface toolkit for crafting stunning web and mobile apps with ease and precision.",
    features: ["🎨 Beautiful UI", "⚡ Lightning Fast"],
    image: "/images/skyline-ux.jpg",
    category: "UI/UX Design",
  },
  {
    id: 3,
    name: "DataSphere",
    description: "A scalable data platform designed for analytics, big data processing, and advanced reporting.",
    features: ["📊 Scalable", "📈 Analytics-Ready"],
    image: "/images/datasphere.jpg",
    category: "Data Analytics",
  },
  {
    id: 4,
    name: "Aurora Design Studio",
    description: "Creative design solutions for branding, web design, and marketing materials.",
    features: ["🎨 Custom Branding", "🌐 Web-Ready"],
    image: "/images/aurora-design.jpg",
    category: "Branding",
  },
  {
    id: 5,
    name: "Pulse AI",
    description: "AI-driven health monitoring and diagnostics system for personalized healthcare.",
    features: ["🤖 AI-Powered", "💓 Health Insights"],
    image: "/images/pulse-ai.jpg",
    category: "AI",
  },
  {
    id: 6,
    name: "EcoTrack",
    description: "A sustainability tracking tool for monitoring and improving your environmental impact.",
    features: ["🌱 Eco-Friendly", "📉 Analytics"],
    image: "/images/ecotrack.jpg",
    category: "Sustainability",
  },
  {
    id: 7,
    name: "Chronos Planner",
    description: "Time management and productivity planner app with smart scheduling features.",
    features: ["⏰ Time-Saving", "📅 Smart Planner"],
    image: "/images/chronos-planner.jpg",
    category: "Productivity",
  },
  {
    id: 8,
    name: "Eventify",
    description: "An end-to-end event management platform for creating, promoting, and managing events.",
    features: ["🎟️ Easy Ticketing", "📣 Event Promotion"],
    image: "/images/eventify.jpg",
    category: "Event Management",
  },
  {
    id: 9,
    name: "NovaLearn",
    description: "E-learning platform with gamified courses for a fun and interactive learning experience.",
    features: ["📚 Gamified Learning", "🌟 Certifications"],
    image: "/images/novalearn.jpg",
    category: "Education",
  },
  {
    id: 10,
    name: "CodeSphere IDE",
    description: "A next-gen cloud-based IDE for real-time collaborative coding.",
    features: ["💻 Cloud-Based", "🤝 Collaborative"],
    image: "/images/codesphere.jpg",
    category: "Developer Tools",
  },
  {
    id: 11,
    name: "Snapventory",
    description: "An AI-powered inventory management system with real-time tracking and predictive analytics.",
    features: ["📦 Real-Time Tracking", "📊 Predictive Analytics"],
    image: "/images/snapventory.jpg",
    category: "AI",
  },
  {
    id: 12,
    name: "Foodies Delight",
    description: "A food delivery platform that connects users with gourmet chefs and curated recipes.",
    features: ["🍔 Gourmet Meals", "📍 Local Chefs"],
    image: "/images/foodies-delight.jpg",
    category: "Food & Beverage",
  },
  {
    id: 13,
    name: "Visionary VR",
    description: "An immersive VR platform for entertainment, education, and virtual meetings.",
    features: ["🕶️ Immersive VR", "🌍 Global Collaboration"],
    image: "/images/visionary-vr.jpg",
    category: "Virtual Reality",
  },
  {
    id: 14,
    name: "SafeGuard",
    description: "A cybersecurity tool for businesses to monitor and secure their online assets.",
    features: ["🔒 Secure", "🛡️ Threat Detection"],
    image: "/images/safeguard.jpg",
    category: "Cybersecurity",
  },
  {
    id: 15,
    name: "FitTrack",
    description: "A fitness tracking app with personalized workout plans and nutrition guides.",
    features: ["🏋️‍♂️ Custom Workouts", "🍎 Nutrition Plans"],
    image: "/images/fittrack.jpg",
    category: "Health & Fitness",
  },
  {
    id: 16,
    name: "CryptoVault",
    description: "A secure cryptocurrency wallet with advanced trading and analytics features.",
    features: ["💰 Secure Wallet", "📈 Trade Analytics"],
    image: "/images/cryptovault.jpg",
    category: "Fintech",
  },
  {
    id: 17,
    name: "EduSpark",
    description: "An online platform for educators to create and share interactive lesson plans.",
    features: ["🎓 Teacher Tools", "🌐 Collaborative"],
    image: "/images/eduspark.jpg",
    category: "Education",
  },
  {
    id: 18,
    name: "UrbanFleet",
    description: "A smart transportation system for urban areas, offering real-time updates and eco-friendly options.",
    features: ["🚍 Smart Transit", "🌍 Eco-Friendly"],
    image: "/images/urbanfleet.jpg",
    category: "Transportation",
  },
  {
    id: 19,
    name: "StyleCraft",
    description: "An AI-powered personal stylist app for creating and managing your wardrobe.",
    features: ["👗 AI Styling", "🛒 Shopping Integration"],
    image: "/images/stylecraft.jpg",
    category: "Fashion",
  },
  {
    id: 20,
    name: "MindfulSpace",
    description: "A mindfulness app with guided meditations, breathing exercises, and relaxation techniques.",
    features: ["🧘‍♂️ Guided Meditations", "🌿 Relaxation"],
    image: "/images/mindfulspace.jpg",
    category: "Health & Wellness",
  },
]

export default function PortfolioPage() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

  useEffect(() => {
    const results = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || project.category === selectedCategory),
    )
    setFilteredProjects(results)
  }, [searchTerm, selectedCategory])

  const clearSearch = () => {
    setSearchTerm("")
    setSelectedCategory("All")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-white"
        >
          Our Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-200 text-lg mt-4 max-w-2xl mx-auto"
        >
          Showcasing our best projects and creative solutions with attention to detail and design.
        </motion.p>
      </header>

      {/* Filter and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            {searchTerm && (
              <button onClick={clearSearch} className="absolute right-3 top-2.5 text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="project-card rounded-xl bg-gray-800 overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-3">{project.name}</h2>
                  <p className="text-gray-300 text-base mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{project.category}</span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-blue-400">{selectedProject.name}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="mr-2 text-green-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{selectedProject.category}</span>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                  Visit Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

