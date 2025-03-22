
import Footer from "./component/Footer.jsx";
import Header from "./component/Header.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function About() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 600); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Header />
      <div className="pt-[90px] bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showImage ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full h-auto"
            >
              <motion.img
                src="https://ufocube.com/images/home_intro.jpg"
                alt="About Us"
                className="rounded-2xl shadow-lg border-4 border-cyan-400 w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={showImage ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
             
              {showImage && (
                <motion.div
                  className="absolute inset-0 bg-gray-900"
                  initial={{ height: "100%" }}
                  animate={{ height: "0%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                ></motion.div>
              )}
            </motion.div>

           
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: showImage ? 1 : 0, x: showImage ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-cyan-400">
                About <span className="text-white">Us</span>
              </h2>
              <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                Welcome to <span className="text-cyan-400 font-semibold">UFOcube</span>, where innovation meets creativity. We specialize in 
                crafting cutting-edge web solutions that help businesses thrive in the digital space. 
              </p>
              <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                Our expertise spans across <span className="text-cyan-400 font-semibold">web design, development, SEO, and branding</span>, ensuring 
                a powerful online presence for our clients.
              </p>
              <button className="mt-6 px-6 py-3 bg-cyan-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition-all">
                Learn More
              </button>
            </motion.div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

