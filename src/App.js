import Navbar from "./Component/Navbar";
import Home from "./Component/Home"
import SocialLink from "./Component/SocialLink";
import About from "./Component/About";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";




function App() {
  return (
 <div>
  <Navbar/>
  <Home/>
  <About/>
  <Project/>
   <Skills/>
   <Contact/>
  <SocialLink/>
 </div>
  );
}

export default App;
