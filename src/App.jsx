import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import MusicClub from './pages/MusicClub';
import DanceClub from './pages/DanceClub';
import DramaClub from './pages/DramaClub';
import ArtClub from './pages/ArtClub';
import LiteratureClub from './pages/LiteratureClub';
import PhotographyClub from './pages/PhotographyClub';
import QuizClub from './pages/QuizClub';
import FashionClub from './pages/FashionClub';
import GamingClub from './pages/GamingClub';
import SpecialsClub from './pages/SpecialsClub';
import ExClubs from './pages/ExClubs';
import Contact from './pages/Contact';
import Events from './pages/Events';


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
          <Route path="/quiz" element={<QuizClub />} />
          <Route path="/fashion" element={<FashionClub />} />
          <Route path="/gaming" element={<GamingClub />} />
          <Route path="/specials" element={<SpecialsClub />} />
          <Route path="/more-clubs" element={<ExClubs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
