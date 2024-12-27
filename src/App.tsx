import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <Router basename="/ePortfolio"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element ={<Projects/>}/>
        <Route path="/contactme" element ={<ContactMe/>}/>
      </Routes>
    </Router>
  );
};

export default App;