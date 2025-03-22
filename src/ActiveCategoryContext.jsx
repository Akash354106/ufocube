import { createContext, useState } from "react";

export const ActiveCategoryContext = createContext();

// Context Provider Component
export const ActiveCategoryProvider = ({ children }) => {
  const [activeCat, setActiveCat] = useState("Home");
  const categories = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <ActiveCategoryContext.Provider value={{ activeCat, setActiveCat, categories }}>
      {children}
    </ActiveCategoryContext.Provider>
  );
};
