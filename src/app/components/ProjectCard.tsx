export default function ProjectCard({ title, description, features, image }) {
    return (
        <div className="max-w-sm bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-blue-400">{title}</h2>
                <p className="text-gray-400 text-sm mb-4">{description}</p>

                {/* Features */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    {features.map((feature:any, index:any) => (
                        <span key={index}>{feature}</span>
                    ))}
                </div>

                {/* Call to Action */}
                <button className="w-full py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
}
