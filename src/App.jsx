import Navbar from "./components/Navbar";
import HeroSection from "./Pages/HeroSection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Footer from "./Pages/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons/faCircleArrowUp";


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <div className="top">
        <a href="#top" className="fixed bottom-5 right-5 p-3 text-white
          ">
           <FontAwesomeIcon icon={faCircleArrowUp} className="text-4xl shadow-lg transition-all duration-700 transform" />
                     </a>
      </div>
    </div>
  );
}

export default App;