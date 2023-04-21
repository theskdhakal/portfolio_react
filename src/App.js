import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./style.css";
import ReactSwitch from "react-switch";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div class="wrapper" id={theme}>
        {/* <!-- header --> */}
        <Header />

        <div className="themeToggler">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        {/* <!-- hero section  --> */}
        <Hero />

        {/* <!-- skill section  --> */}
        <Skills />

        {/* <!-- project section  --> */}
        <Projects />

        {/* <!-- About section  --> */}
        <About />

        {/* <!-- contact-section  --> */}
        <Contact />

        {/* <!-- footer  --> */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
