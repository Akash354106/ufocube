import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build high-performance websites with modern technologies.",
    icon: "🌐",
    color: "bg-gradient-to-r from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating stunning and user-friendly interfaces with great UX.",
    icon: "🎨",
    color: "bg-gradient-to-r from-pink-500 to-red-600",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Boost your website’s ranking with advanced SEO strategies.",
    icon: "🚀",
    color: "bg-gradient-to-r from-green-500 to-teal-600",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build fast and reliable mobile applications for iOS & Android.",
    icon: "📱",
    color: "bg-gradient-to-r from-purple-500 to-violet-600",
  },
];

function ServicesCard() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-100  mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200 text-white ${service.color}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.description}</p>

              {/* Call to Action Button */}
              <Link to="/services">
                <motion.button
                  className="mt-4 px-6 py-2 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesCard;

