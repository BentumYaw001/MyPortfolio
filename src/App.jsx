import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
import { useNavStore } from "./components/Store";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { menu } = useNavStore();

  return (
    <>
      <div className="App">
        {menu ? (
          <SideBar />
        ) : (
          <>
            <NavBar />
            <MainBody id="home" />
            <Projects id="projects" />
            <Skills id="skills" />
            <About id="about" />
            <Contact id="contact" />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
