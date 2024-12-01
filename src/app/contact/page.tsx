"use client"
import React, { useState } from "react";


export default function ContactPage() {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10">
            {/* Contact Us Section */}
            <h1 className="text-4xl font-extrabold text-blue-500 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl">
                Got questions or want to work with us? Fill out the form below, and we’ll get back to you as soon as possible.
            </p>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl mb-16">
                <form className="flex flex-col gap-6">
                    <div>
                        <label className="block text-gray-300 font-semibold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 font-semibold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-300 font-semibold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Write your message"
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-400 shadow-lg hover:shadow-blue-300/50 transition-all duration-150 ease-in-out"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* FAQ Section */}
            <section className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-3xl font-extrabold text-blue-500 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        "What services does NEUX provide?",
                        "How long does it take to complete a project?",
                        "What industries do you work with?",
                        "How do I get a quote?",
                    ].map((question, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg">
                            <button
                                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center hover:bg-gray-600 rounded-lg focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-5 h-5 transform transition-transform ${
                                        activeFAQ === index ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeFAQ === index && (
                                <div className="px-4 py-3 text-gray-300 border-t border-gray-600">
                                    <p>Answer goes here. You can edit this content later.</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
