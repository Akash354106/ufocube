import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ActiveCategoryContext } from "../ActiveCategoryContext";

function Header() {
    const [animate, setAnimate] = useState(false);
    const { activeCat, setActiveCat, categories } = useContext(ActiveCategoryContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const hiddenCategories = ["Projects", "Blog"];
    useEffect(() => {
        setAnimate(true);
    }, []);

    useEffect(() => {
        const currentCategory = categories.find((item) => item.path === location.pathname);
        if (currentCategory) {
            setActiveCat(currentCategory.name);
        }
    }, [location.pathname, categories, setActiveCat]);

    return (
        <header className="bg-[#0f172a] text-white shadow-lg fixed top-0 left-0 w-full z-50 p-4 font-serif">
            <div className="flex justify-between items-center">
                <div className={`text-4xl font-extrabold tracking-wide cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[2000ms] ease-out ${animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                    <div className="flex">
                        <h1>UFOCube</h1>
                        <img src="/ufocube/logo.png" alt="logo" className="w-[45px]" />
                    </div>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex gap-10 text-[17px] font-semibold pr-[75px]">
                        {categories
                            .filter(item => !hiddenCategories.includes(item.name)) 
                            .map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`relative cursor-pointer transition-transform duration-300 ease-out transform hover:scale-110 hover:text-cyan-300 pb-1 ${activeCat === item.name ? "text-cyan-500" : ""}`}
                                    >
                                        {item.name}
                                        {activeCat === item.name && (
                                            <motion.div
                                                className="absolute left-0 bottom-0 h-[2px] bg-cyan-300"
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                    </ul>

                </nav>

                <button
                    className="md:hidden text-blue-500 hover:bg-slate-700 rounded-md"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <motion.div
                        animate={{ rotate: isMenuOpen ? 360 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
                    </motion.div>
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="md:hidden absolute top-16 left-0 w-full bg-[#1a2335] p-5 text-center"
                    >
                        <ul className="flex flex-col gap-4 text-[17px] font-semibold py-4">
                        {categories
                            .filter(item => !hiddenCategories.includes(item.name)) 
                            .map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`relative cursor-pointer transition-transform duration-300 ease-out transform hover:scale-110 hover:text-cyan-300 pb-1 ${activeCat === item.name ? "text-cyan-500" : ""}`}
                                    >
                                        {item.name}
                                        {activeCat === item.name && (
                                            <motion.div
                                                className="absolute left-0 bottom-0 h-[2px] bg-cyan-300"
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;

