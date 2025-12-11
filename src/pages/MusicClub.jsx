import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import clubLogo from '../assets/Music_club_logo.png';
import Carousel from '../components/Carousel';
import './MusicClub.css';

const iconMap = {
  Music,
  Move,
  Drama,
  Palette,
  BookOpen,
  Camera
};

const MusicClub = () => {
  const club = {
    id: 'music',
    name: 'Music Club of GIT',
    icon: 'Music',
    gradient: 'linear-gradient(135deg, #FF0066 0%, #E60000 100%)', // Pink to Red
    shortDescription: 'From Classical Raagas to Bollywood Beats.',
    fullDescription: 'Sargam is the heartbeat of our campus. We celebrate the rich heritage of Hindustani and Carnatic classical music while also jamming to the latest Bollywood and Indie pop hits. Whether you play the Tabla, Sitar, Guitar, or just love to sing Arijit Singh songs, this is your gharana.',
    events: [
      { id: 1, title: 'Mehfil-e-Sangeet', date: '2023-11-15', location: 'Open Air Theatre' },
      { id: 2, title: 'Bollywood Antakshari', date: '2023-12-05', location: 'Student Lounge' },
      { id: 3, title: 'Battle of Bands: Fusion', date: '2024-01-20', location: 'Main Auditorium' }
    ],
    members: [
      { id: 1, name: 'Ananya Sharma', role: 'President', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', email: 'ananya@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Rahul Verma', role: 'Tabla Lead', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200', email: 'rahul@example.com', phone: '+91 98765 43211' },
      { id: 3, name: 'Priya Iyer', role: 'Classical Vocalist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200', email: 'priya@example.com', phone: '+91 98765 43212' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1465847899078-b413929f7120?auto=format&fit=crop&q=80&w=800', 
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
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

export default MusicClub;
