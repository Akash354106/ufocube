import Footer from "./component/Footer.jsx";
import Header from "./component/Header.jsx";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "We create fast, scalable, and modern websites using the latest technologies like React, Next.js, and Node.js. Our web solutions ensure high performance and an excellent user experience.",
    image: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "We craft visually appealing and intuitive interfaces that enhance user engagement. Our design approach focuses on usability and aesthetics to create the best user experience.",
    image: "https://images.squarespace-cdn.com/content/v1/5d139a978680e80001bede30/1722182177331-Z8WYNFCWOMKXMK4LAUOZ/Recognize+Me+Mobile+App+UI+UX+Design+-+Light+Mode+-+Magenta.jpg",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your website ranking with our advanced SEO strategies. We optimize content, implement technical SEO, and ensure high performance for search engines.",
    image: "https://www.wordstream.com/wp-content/uploads/2022/08/what-does-seo-stand-for.png",
  },
  {
    title: "Mobile App Development",
    description:
      "We develop robust mobile applications with native and cross-platform frameworks. Our apps are optimized for speed, usability, and seamless functionality.",
    image: "https://www.binaryfolks.com/media/blog/Reasons%20to%20build%20a%20mobile%20app/4428861.png",
  },
  {
    title: "Cloud Solutions",
    description:
      "We provide secure and scalable cloud-based solutions to help businesses store, manage, and analyze data efficiently. Our cloud services ensure maximum uptime and security.",
    image: "https://cdn.sanity.io/images/0x203nw4/production/038f0395b32cfae7183039488e73a0c9d0d35306-1792x1024.webp?w=1792&q=100&auto=format",
  },
  {
    title: "E-Commerce Development",
    description:
      "We build high-converting e-commerce platforms with seamless user experience, secure payment gateways, and scalable architecture.",
    image: "https://kwebmaker.com/_next/image/?url=https%3A%2F%2Fmykrishna.kwebmaker.com%2Fpublic%2Fadmin%2Fassets%2Fimages%2Fblog-images%2FThe-Ultimate-Guide-to-Ecommerce-Website-Development-in-2023jpg&w=3840&q=75",
  },
];

function Services() {
  return (
    <>
      <Header />
      <div className="pt-[90px] bg-gray-900 text-white min-h-screen overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-cyan-400 mb-12"
        >
          Our <span className="text-white">Services</span>
        </motion.h2>

        {/* Services Section */}
        <div className="container mx-auto px-4 lg:px-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } mb-10`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg border-4 border-cyan-400 w-full transform transition-all duration-700 scale-95 hover:scale-100"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 px-6 md:px-8">
                <h3 className="text-3xl font-semibold text-cyan-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;

