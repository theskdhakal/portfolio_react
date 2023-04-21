import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import "./style.css";

function App() {
  return (
    <>
      {/* <!-- dark mode button  --> */}
      <input type="checkbox" id="darkmode" class="dark-mode-checkbox" />
      <div class="wrapper">
        <label htmlFor="darkmode">
          <i class="fa fa-toggle-on dark-mode-toggle" aria-hidden="true"></i>
        </label>

        {/* <!-- header --> */}
        <Header />

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
    </>
  );
}

export default App;
