"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, Clock, ChevronDown, ChevronUp, Send, Zap, Users, Shield } from "lucide-react"
import { useForm, type SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const contactInfo = [
  { icon: <Phone size={24} />, text: "+1 (555) 123-4567" },
  { icon: <Mail size={24} />, text: "contact@neux.com" },
  { icon: <Clock size={24} />, text: "24/7 Support Available" },
]

const faqs = [
  {
    question: "What services does NEUX provide?",
    answer:
      "NEUX offers a wide range of digital services including web development, mobile app development, cloud solutions, UI/UX design, and digital marketing strategies. We specialize in creating cutting-edge digital experiences tailored to our clients' needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a diverse range of industries including technology, healthcare, finance, education, and e-commerce. Our adaptable approach allows us to understand and meet the unique needs of various sectors.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "To get a quote, you can fill out our contact form with details about your project. Our team will review your requirements and get back to you within 24 hours with an initial estimate. For more complex projects, we may schedule a consultation to better understand your needs.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer 24/7 ongoing support and maintenance for all our projects. This includes regular updates, security patches, performance optimization, and technical support. We can tailor a maintenance plan to suit your specific needs and budget.",
  },
]

const serviceIcons = [
  { icon: <Zap size={40} />, name: "Fast Delivery" },
  { icon: <Users size={40} />, name: "Expert Team" },
  { icon: <Shield size={40} />, name: "Secure Solutions" },
]

export default function ContactPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    reset()
    alert("Thank you for your message. We'll get back to you soon!")
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="rgba(30, 41, 59, 0.3)" />
            <path d="M0 100 C 30 10 70 10 100 100 Z" fill="rgba(30, 41, 59, 0.2)" />
          </svg>
        </div>
        <div className="z-10 text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's Create Something Amazing
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your vision, our expertise - a perfect match
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-blue-500 mb-6">Reach Out to Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  {...register("subject", { required: "Subject is required" })}
                  id="subject"
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-400 shadow-lg hover:shadow-blue-300/50 transition-all duration-150 ease-in-out flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <Send className="mr-2" size={20} />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info and Services Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-blue-500 mb-6">We're Here for You</h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-blue-500">{info.icon}</div>
                  <p className="text-gray-300">{info.text}</p>
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Services</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {serviceIcons.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-blue-500 mb-2">{service.icon}</div>
                  <p className="text-center text-sm">{service.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
              <p className="mb-4">Let's transform your ideas into reality.</p>
              <motion.button
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden"
                initial={false}
                animate={{ height: activeFAQ === index ? "auto" : "60px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <button
                  className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-700 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {activeFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 text-gray-300"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

