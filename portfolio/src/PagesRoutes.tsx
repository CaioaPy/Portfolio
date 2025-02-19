import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home.tsx';
import Experience from './pages/Experience';

function PagesRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default PagesRoutes;