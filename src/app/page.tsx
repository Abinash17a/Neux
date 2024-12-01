export default function HomePage() {
    return (
        <div className="text-white">
            <section className="text-center py-20">
                <h2 className="text-6xl font-extrabold">
                    We are <span className="text-blue-500">NEUX</span>
                </h2>
                <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                    Your Partner in Building Cutting-Edge Digital Experiences.
                    From web development to scalable solutions, we bring your ideas to life with precision, creativity, and unmatched expertise.
                </p>
                <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 shadow-lg hover:shadow-blue-300/50 transition-all duration-100 ease-in-out font-semibold text-lg">
                    Get in Touch
                </button>
            </section>
        </div>
    );
}
