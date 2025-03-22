import { Routes, Route } from "react-router-dom";
import { ActiveCategoryProvider } from "./ActiveCategoryContext";
import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./component/Header";

function App() {
  return (
    <ActiveCategoryProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </ActiveCategoryProvider>
  );
}

export default App;
