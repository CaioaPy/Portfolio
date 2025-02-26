import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';

function PagesRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default PagesRoutes;