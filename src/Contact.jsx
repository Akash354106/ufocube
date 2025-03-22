
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./component/Footer.jsx";
import Header from "./component/Header.jsx";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-600 p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-950 bg-opacity-70 backdrop-blur-lg p-8 rounded-xl w-full max-w-lg border-2 border-cyan-400 shadow-lg text-white mt-5"
        >
          <h2 className="text-4xl font-bold text-center mb-4">CONTACT US</h2>
          <form action="https://formsubmit.co/19ed9d0ea1d27485ebb9cfcdc5299fbf" method="POST" target="_blank" >
            <input type="hidden" name="_captcha" value="false" />

            {/* Name Field */}
            <div className="relative mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-cyan-300 text-white outline-none p-[10px] pt-6 focus:border-cyan-500"
                placeholder=" "  
                required
              />
              <label
                className="absolute left-2 top-2 text-gray-300 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
              >
                Your Name
              </label>
            </div>


            {/* Email Field */}
            <div className="relative mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-cyan-300 text-white outline-none p-[10px] pt-6 focus:border-cyan-500"
                placeholder=" "  
                required
              />
              <label
                className="absolute left-2 top-2 text-gray-300 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
              >Your Email</label>
            </div>

            {/* Message Field */}
            <div className="relative mb-6">
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-cyan-300 text-white outline-none p-[10px] pt-6 focus:border-cyan-500"
                placeholder=" "  
                required
              ></textarea>
              <label
                className="absolute left-2 top-2 text-gray-300 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400"
              >Your Message</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-all"
            >
              SUBMIT
            </button>
          </form>

        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

