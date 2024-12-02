import NeuxCard from '../components/ProjectCard'; // Assuming the card component is in the same folder

export default function PortfolioPage() {
    const projects = [
        {
            id: 1,
            name: "Project Nebula",
            description:
                "An innovative digital solution tailored to meet your business goals. Focused on delivering seamless user experiences and scalable performance.",
            features: ["📍 Global Reach", "🚀 Launch Ready"],
            image: "/images/project-nebula.jpg",
        },
        {
            id: 2,
            name: "Skyline UX",
            description:
                "A modern user interface toolkit for crafting stunning web and mobile apps with ease and precision.",
            features: ["🎨 Beautiful UI", "⚡ Lightning Fast"],
            image: "/images/skyline-ux.jpg",
        },
        {
            id: 3,
            name: "DataSphere",
            description:
                "A scalable data platform designed for analytics, big data processing, and advanced reporting.",
            features: ["📊 Scalable", "📈 Analytics-Ready"],
            image: "/images/datasphere.jpg",
        },
        {
            id: 4,
            name: "Aurora Design Studio",
            description:
                "Creative design solutions for branding, web design, and marketing materials.",
            features: ["🎨 Custom Branding", "🌐 Web-Ready"],
            image: "/images/aurora-design.jpg",
        },
        {
            id: 5,
            name: "Pulse AI",
            description:
                "AI-driven health monitoring and diagnostics system for personalized healthcare.",
            features: ["🤖 AI-Powered", "💓 Health Insights"],
            image: "/images/pulse-ai.jpg",
        },
        {
            id: 6,
            name: "EcoTrack",
            description:
                "A sustainability tracking tool for monitoring and improving your environmental impact.",
            features: ["🌱 Eco-Friendly", "📉 Analytics"],
            image: "/images/ecotrack.jpg",
        },
        {
            id: 7,
            name: "Chronos Planner",
            description:
                "Time management and productivity planner app with smart scheduling features.",
            features: ["⏰ Time-Saving", "📅 Smart Planner"],
            image: "/images/chronos-planner.jpg",
        },
        {
            id: 8,
            name: "Eventify",
            description:
                "An end-to-end event management platform for creating, promoting, and managing events.",
            features: ["🎟️ Easy Ticketing", "📣 Event Promotion"],
            image: "/images/eventify.jpg",
        },
        {
            id: 9,
            name: "NovaLearn",
            description:
                "E-learning platform with gamified courses for a fun and interactive learning experience.",
            features: ["📚 Gamified Learning", "🌟 Certifications"],
            image: "/images/novalearn.jpg",
        },
        {
            id: 10,
            name: "CodeSphere IDE",
            description:
                "A next-gen cloud-based IDE for real-time collaborative coding.",
            features: ["💻 Cloud-Based", "🤝 Collaborative"],
            image: "/images/codesphere.jpg",
        },
        {
            id: 11,
            name: "Snapventory",
            description:
                "An AI-powered inventory management system with real-time tracking and predictive analytics.",
            features: ["📦 Real-Time Tracking", "📊 Predictive Analytics"],
            image: "/images/snapventory.jpg",
        },
        {
            id: 12,
            name: "Foodies Delight",
            description:
                "A food delivery platform that connects users with gourmet chefs and curated recipes.",
            features: ["🍔 Gourmet Meals", "📍 Local Chefs"],
            image: "/images/foodies-delight.jpg",
        },
        {
            id: 13,
            name: "Visionary VR",
            description:
                "An immersive VR platform for entertainment, education, and virtual meetings.",
            features: ["🕶️ Immersive VR", "🌍 Global Collaboration"],
            image: "/images/visionary-vr.jpg",
        },
        {
            id: 14,
            name: "SafeGuard",
            description:
                "A cybersecurity tool for businesses to monitor and secure their online assets.",
            features: ["🔒 Secure", "🛡️ Threat Detection"],
            image: "/images/safeguard.jpg",
        },
        {
            id: 15,
            name: "FitTrack",
            description:
                "A fitness tracking app with personalized workout plans and nutrition guides.",
            features: ["🏋️‍♂️ Custom Workouts", "🍎 Nutrition Plans"],
            image: "/images/fittrack.jpg",
        },
        {
            id: 16,
            name: "CryptoVault",
            description:
                "A secure cryptocurrency wallet with advanced trading and analytics features.",
            features: ["💰 Secure Wallet", "📈 Trade Analytics"],
            image: "/images/cryptovault.jpg",
        },
        {
            id: 17,
            name: "EduSpark",
            description:
                "An online platform for educators to create and share interactive lesson plans.",
            features: ["🎓 Teacher Tools", "🌐 Collaborative"],
            image: "/images/eduspark.jpg",
        },
        {
            id: 18,
            name: "UrbanFleet",
            description:
                "A smart transportation system for urban areas, offering real-time updates and eco-friendly options.",
            features: ["🚍 Smart Transit", "🌍 Eco-Friendly"],
            image: "/images/urbanfleet.jpg",
        },
        {
            id: 19,
            name: "StyleCraft",
            description:
                "An AI-powered personal stylist app for creating and managing your wardrobe.",
            features: ["👗 AI Styling", "🛒 Shopping Integration"],
            image: "/images/stylecraft.jpg",
        },
        {
            id: 20,
            name: "MindfulSpace",
            description:
                "A mindfulness app with guided meditations, breathing exercises, and relaxation techniques.",
            features: ["🧘‍♂️ Guided Meditations", "🌿 Relaxation"],
            image: "/images/mindfulspace.jpg",
        },
    ];


    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="text-center py-8">
                <h1 className="text-4xl font-extrabold text-blue-400">Portfolio</h1>
                <p className="text-gray-400 text-lg mt-2">
                    Showcasing our best projects and creative solutions.
                </p>
            </header>

            <main className="px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {projects.map((project) => (
                        <NeuxCard
                            key={project.id}
                            title={project.name}
                            description={project.description}
                            features={project.features}
                            image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrkEoB0VpKoiEGo6TY5rz9_XzCztxJY6mYw&s`}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
