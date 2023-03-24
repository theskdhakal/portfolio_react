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

        {/* <!-- banner section 
        <section class="section2">
          <div class="info-container flex">
            <div class="info-lists flex">
              <div class="info-content flex">
                <div class="icon-container flex">
                  <i class="fa-solid fa-award"></i>
                </div>

                <span>
                  <h5>BIT</h5>
                  <p>Graduate</p>
                </span>
              </div>
              <div class="info-divider"></div>

              <div class="info-content flex">
                <div class="icon-container flex">
                  <i class="fa-solid fa-award"></i>
                </div>

                <span>
                  <h5>5+ Project</h5>
                  <p>Completed</p>
                </span>
              </div>
              <div class="info-divider"></div>

              <div class="info-content flex">
                <div class="icon-container flex">
                  <i class="fa-solid fa-award"></i>
                </div>

                <span>
                  <h5>1+ year</h5>
                  <p>Job experience</p>
                </span>
              </div>
            </div>
          </div>
        </section>{" "} */}

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
