import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-secondary)', paddingTop: '6rem', paddingBottom: '2rem', marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: 'var(--accent-primary)', fontWeight: 800 }}>Carnival of Cultures</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Celebrating diversity through art, music, and expression. Join our vibrant community and let your creativity shine.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ padding: '0.5rem', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}><Facebook size={20} color="var(--accent-secondary)" /></div>
               <div style={{ padding: '0.5rem', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}><Twitter size={20} color="var(--accent-secondary)" /></div>
               <div style={{ padding: '0.5rem', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}><Instagram size={20} color="var(--accent-secondary)" /></div>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)' }}>
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/#clubs" className="nav-link">Communities</a></li>
              <li><a href="/contact" className="nav-link">Contact Us</a></li>
              <li><Link to="/events" className="nav-link">Events Schedule</Link></li>
            </ul>
          </div>

          <div>
             <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Contact Us</h4>
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><Mail size={18} /> clubs@git.edu</li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><Phone size={18} /> +91 98765 43210</li>
              <li style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}><MapPin size={18} /> KLS Gogte Institute of Technology, Belagavi</li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Carnival of Cultures. Crafted by Rishab.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
