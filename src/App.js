/*Web Application Development, Jaspreet, 29/1/25*/

import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills"
import Project from "./components/Projects/project"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Intro />  
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
