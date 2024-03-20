import About from "./Component/About";
import Home from "./Component/Home";
import Section from "./Component/Section";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { BrowserRouter } from "react-router-dom/BrowserRouter";
import "./Styles/MediaQuery.css";

function App() {
  return (
    <>
    <div className="section-Container">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Home />
        <Section />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
