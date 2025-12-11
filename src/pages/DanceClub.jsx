import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import clubLogo from '../assets/Dance_club_logo.jpg';
import Carousel from '../components/Carousel';
import './DanceClub.css';

const iconMap = {
  Music,
  Move,
  Drama,
  Palette,
  BookOpen,
  Camera
};

const DanceClub = () => {
  const club = {
    id: 'dance',
    name: 'Nrityom the Dance Club of GIT',
    icon: 'Move',
    gradient: 'linear-gradient(135deg, #00A3FF 0%, #4D00FF 100%)', // Blue to Indigo
    shortDescription: 'The rhythm of India, the moves of the world.',
    fullDescription: 'From the grace of Bharatanatyam and Kathak to the high energy of Bhangra and Street Hip-Hop. Taal is where tradition meets modernity. Join us for Garba nights, flash mobs, and our annual showcase "Nritya".',
    events: [
      { id: 1, title: 'Inter-College Dance Off', date: '2023-11-25', location: 'Grand Hall' },
      { id: 2, title: 'Bhangra Workshop', date: '2023-12-10', location: 'Dance Studio A' }
    ],
    members: [
      { id: 1, name: 'Bhavana Kolaki', role: 'Council Member', image: '', email: 'bhavana@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Madhura Gogi', role: 'Council Member', image: '', email: 'madhura.g@example.com', phone: '+91 98765 43211' },
      { id: 3, name: 'Madhura Hangirgekar', role: 'Council Member', image: '', email: 'madhura.h@example.com', phone: '+91 98765 43212' },
      { id: 4, name: 'Sanjana Sugandhi', role: 'Council Member', image: '', email: 'sanjana@example.com', phone: '+91 98765 43213' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1543050688-662584d41fa3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=800'
    ]
  };

  const Icon = iconMap[club.icon] || Circle;

  return (
    <div className="club-page-container">
      {/* Hero Banner */}
      <div 
        className="club-hero" 
        style={{ 
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), ${club.gradient}`
        }}
      >
        <Link to="/" className="back-link">
          ← Back
        </Link>
        <div className="animate-slide-up">
          <div className="club-title-container">
            <Icon size={48} color="#fff" />
            <h1 className="club-title">{club.name}</h1>
          </div>
          <p className="club-tagline">{club.shortDescription}</p>
        </div>
      </div>

      <div className="club-content-wrapper">
        
        {/* About Section */}
        <section className="section-common about-section">
          <div className="about-content">
             <h2 className="about-title" style={{ background: club.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>About Us</h2>
             <p className="about-description">
              {club.fullDescription}
             </p>
          </div>
          <div className="about-image-container">
             <img src={clubLogo} alt="Club Logo" style={{ width: '100%', height: '100%', maxHeight: '300px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }} />
          </div>
        </section>

        {/* Events Section */}
        <section className="section-common">
          <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Upcoming Events</h2>
          <div className="events-grid">
            {club.events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-icon-box" style={{ background: club.gradient }}>
                  <Calendar size={24} />
                </div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-detail">
                   <span>{event.date}</span>
                </div>
                <div className="event-detail">
                   <MapPin size={16} />
                   <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Members Section */}
        <section className="section-common">
           <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Team Leaders</h2>
           <div className="members-grid">
             {club.members.map(member => (
               <div key={member.id} className="member-card">
                 <img src={member.image} alt={member.name} className="member-image" />
                 <div>
                   <h4 className="member-name">{member.name}</h4>
                   <p className="member-role">{member.role}</p>
                   <div className="member-contacts">
                     {member.email && <a href={`mailto:${member.email}`} className="contact-icon" title={member.email}><Mail size={16} /></a>}
                     {member.phone && <a href={`tel:${member.phone}`} className="contact-icon" title={member.phone}><Phone size={16} /></a>}
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* Gallery Section */}
        {club.gallery && club.gallery.length > 0 && (
          <section>
            <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Gallery</h2>
            <Carousel items={club.gallery} />
          </section>
        )}

      </div>
    </div>
  );
};

export default DanceClub;
