import PropTypes from "prop-types";

export default function ProjectCard({ title, description, features, image }) {
    return (
        <div className="max-w-xs mx-auto bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 sm:max-w-sm lg:max-w-md">
            {/* Image Section */}
            {image && (
                <div className="relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Content Section */}
            <div className="p-4 md:px-6 md:py-5 lg:px-8">
                <h2 className="text-xl font-bold mb-2 text-blue-400 truncate" title={title}>
                    {title}
                </h2>
                <p className="text-gray-400 text-sm mb-3 line-clamp-3" title={description}>
                    {description}
                </p>

                {/* Features */}
                {features && features.length > 0 && (
                    <ul className="space-y-1 text-sm text-gray-400 mb-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Call to Action */}
                <button
                    className="w-full py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:ring-blue-300"
                    aria-label={`Learn more about ${title}`}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
}

// PropTypes for type checking
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
};

// Default props
ProjectCard.defaultProps = {
    features: [],
    image: "https://via.placeholder.com/400x300?text=No+Image",
};
