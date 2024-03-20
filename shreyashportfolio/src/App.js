import About from "./Component/About";
import Home from "./Component/Home";
import Section from "./Component/Section";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import {HashRouter} from "react-router-dom";
import "./Styles/MediaQuery.css";

function App() {
  return (
    <>
      <HashRouter>
        <Home />
        <Section />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
