import React from 'react';
import { motion } from 'framer-motion';

function Main() {
  return (
    <>
      <div className="pt-[76px]">
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 md:px-16 overflow-hidden">
          
          {/* Background Image with Blur Effect */}
          <motion.div 
            className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg')] bg-cover bg-center opacity-30 blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
          
          <div className="relative max-w-6xl text-center md:text-left p-6 z-10 flex-1">
            
            {/* Animated Heading */}
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Elevate Your Web Experience
            </motion.h1>
            
            {/* Subtext */}
            <motion.p 
              className="text-lg mb-6 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              We craft stunning, high-performance websites using the latest technology and innovative designs.
            </motion.p>
            
            {/* Call to Action Button */}
            <motion.button 
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </div>
          
          {/* Animated Image with Fixed Size */}
          <motion.div 
            className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] mt-8 md:mt-0 flex-1"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg" 
              alt="Hero" 
              className="object-cover rounded-lg shadow-lg w-full h-full"
            />
          </motion.div>
        
        </section>
      </div>
    </>
  );
}

export default Main;

