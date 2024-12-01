export default function AboutUsPage() {
    return (
        <div className="relative overflow-hidden bg-gray-900 text-white ">

            <div className="absolute inset-0 z-0">
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#2b2d31"
                        fillOpacity="1"
                        d="M0,32L1440,320L1440,0L0,0Z"
                    ></path>
                </svg>
            </div>


            <div className="relative z-10">
                <section className="text-center py-20">
                    <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
                    <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">
                        At NEUX, we are a team of dedicated professionals who are passionate about building cutting-edge digital experiences. From web development to scalable solutions, we bring your ideas to life with precision, creativity, and unmatched expertise.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10 px-4">
                        {/* Team Section */}
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Team</h3>
                            <p className="text-gray-400 mb-4">
                                Our team consists of experts from various fields of technology, design, and business who work together to create solutions that matter.
                            </p>
                            <p className="text-gray-400 mb-4">
                                With years of experience, we thrive on collaboration and innovation.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-blue-500 mb-4">Our Mission</h3>
                            <p className="text-gray-400 mb-4">
                                Our mission is to empower businesses by creating digital experiences that drive growth, improve user engagement, and achieve measurable success.
                            </p>
                            <p className="text-gray-400">
                                We believe in building strong relationships with our clients and supporting them throughout their journey.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Join Us on Our Journey Section */}
                <section className="bg-gray-800 py-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white mb-6">
                            Join Us on Our Journey
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Let’s work together to create something extraordinary. Get in touch with us today!
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
