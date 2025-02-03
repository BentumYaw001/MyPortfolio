import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <>
          <NavBar />
          <MainBody id="home" />
          <Projects id="projects" />
          <Skills id="skills" />
          <About id="about" />
          <Contact id="contact" />
          <Footer />
        </>
      </div>
    </>
  );
}

export default App;
