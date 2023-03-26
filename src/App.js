import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./style.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <input type="checkbox" id="darkmode" class="dark-mode-checkbox" />
      <div class="wrapper">
        <label htmlFor="darkmode">
          <i class="fa fa-toggle-on dark-mode-toggle" aria-hidden="true"></i>
        </label>

        <Header />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
