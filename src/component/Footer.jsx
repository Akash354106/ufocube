
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React, {useContext } from "react";
import { ActiveCategoryContext } from "../ActiveCategoryContext";

export default function Footer() {
  
  const { activeCat,setActiveCat,categories } = useContext(ActiveCategoryContext);

  // Social Media Links (External)
  const socialLinks = [
    { icon: <FaFacebookF size={20} />, path: "https://facebook.com" },
    { icon: <FaInstagram size={20} />, path: "https://instagram.com" },
    { icon: <FaTwitter size={20} />, path: "https://twitter.com" }
  ];

  return (
    <footer className="bg-[#0f172a] text-white font-serif">
      <div className="container mx-auto px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center">
          {/* Branding Section */}
          <div>
            <h1 className="text-2xl font-semibold text-cyan-400">UFOCube</h1>
            <p className="mt-2 text-gray-300">
              UFOcube – A Complete Solution for Web & Software Development. We provide cutting-edge digital solutions to enhance your online presence.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h1 className="text-2xl font-semibold text-cyan-400">Quick Links</h1>
            <div className="grid grid-cols-3 gap-x-1 mt-4 w-[350px]">
              {categories.map((item) => (
                <Link key={item.path} to={item.path} 
                onClick={() => setActiveCat(item.name)}
                className="hover:text-cyan-400">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h1 className="text-2xl font-semibold text-cyan-400">Follow Me</h1>
            <div className="flex justify-start md:justify-center space-x-3 mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; 2025 AkashRksn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

