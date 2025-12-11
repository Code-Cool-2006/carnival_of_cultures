import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import './GamingClub.css';

const GamingClub = () => {
  const club = {
    id: 'gaming',
    name: 'E-Gaming Club',
    icon: 'Gamepad2',
    gradient: 'linear-gradient(135deg, #10B981 0%, #000000 100%)', // Neon Green to Black
    shortDescription: 'Level up your game.',
    fullDescription: 'The E-Gaming Club brings together gamers of all genres. From competitive Valorant and CS:GO tournaments to casual FIFA nights and retro gaming sessions, we have it all.',
    events: [
      { id: 1, title: 'Valorant Championship', date: '2025-02-20', location: 'Computer Lab 1' },
      { id: 2, title: 'FIFA 25 Tournament', date: '2025-03-05', location: 'Student Lounge' }
    ],
    members: [
      { id: 1, name: 'Gaming Lead 1', role: 'Captain', image: '', email: 'gaming.lead1@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Gaming Lead 2', role: 'Strategist', image: '', email: 'gaming.lead2@example.com', phone: '+91 98765 43211' }
    ],
    gallery: []
  };

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
            <Gamepad2 size={48} color="#fff" />
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
             <Gamepad2 size={150} style={{ opacity: 0.1, color: '#000' }} />
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

export default GamingClub;
