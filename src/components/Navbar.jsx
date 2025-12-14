import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import klsLogo from '../assets/KLS.png';
import gitLogo from '../assets/GIT.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
    padding: scrolled ? '0.5rem 2rem' : '1rem 2rem'
  };

  return (
    <nav style={navStyles}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={klsLogo} alt="KLS Logo" height='50px' width='auto' />
          <img src={gitLogo} alt="GIT Logo" height='50px' width='auto' />
          <span style={{ color: 'var(--accent-primary)' }}>KLS GIT</span>Cultural Clubs
        </Link>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ gap: '2rem', alignItems: 'center' }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/more-clubs" className="nav-link">More Clubs</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/contact" style={{ 
            padding: '0.5rem 1.5rem', 
            background: 'var(--accent-primary)',
            color: '#fff',
            borderRadius: '50px', 
            fontWeight: 600,
            transition: 'transform 0.2s'
          }}>Join Now</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 70px)',
          background: 'rgba(255, 255, 255, 0.98)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          zIndex: 999
        }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Home</Link>
          <Link to="/more-clubs" style={{ fontSize: '1.5rem', fontWeight: 600 }}>More Clubs</Link>
          <Link to="/events" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Events</Link>
          <Link to="/contact" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
