import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MusicClub from './pages/MusicClub';
import DanceClub from './pages/DanceClub';
import DramaClub from './pages/DramaClub';
import ArtClub from './pages/ArtClub';
import LiteratureClub from './pages/LiteratureClub';
import PhotographyClub from './pages/PhotographyClub';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<MusicClub />} />
          <Route path="/dance" element={<DanceClub />} />
          <Route path="/drama" element={<DramaClub />} />
          <Route path="/art" element={<ArtClub />} />
          <Route path="/literature" element={<LiteratureClub />} />
          <Route path="/photography" element={<PhotographyClub />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
