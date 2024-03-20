import About from "./Component/About";
import Home from "./Component/Home";
import Section from "./Component/Section";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import "./Styles/MediaQuery.css";

function App() {
  return (
    <>
        <Home />
        <Section />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
