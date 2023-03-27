import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useState } from "react";
import { createContext } from "react";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <div class="wrapper" id={theme}>
          <Header />

          <div className="toggler">
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>

          {children}

          <Footer />
        </div>
      </>
    </ThemeContext.Provider>
  );
};
