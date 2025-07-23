import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';


export default function App() {
   return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </Router>   
   )
}

