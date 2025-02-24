import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div
      style={{ fontFamily: " Mochiy Pop One " }}
      className="h-full w-full bg-gradient-to-b from-gray-900 via-gray-800 to-slate-900 select-none text-slate-200 p-2">
      <Navbar />
      <Home />
      <Project />
      <About />
      <Contact />
     
    </div>
  );
};

export default App;
