import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import './FashionClub.css';

const FashionClub = () => {
  const club = {
    id: 'fashion',
    name: 'Fashion Club',
    icon: 'Scissors',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #FBBF24 100%)', // Pink to Gold
    shortDescription: 'Strut your style on the runway of life.',
    fullDescription: 'The Fashion Club is a platform for aspiring designers, models, and stylists. We organize fashion shows, styling workshops, and design competitions to showcase the latest trends and creativity.',
    events: [
      { id: 1, title: 'Annual Fashion Show', date: '2025-03-15', location: 'Open Air Theatre' },
      { id: 2, title: 'Sustainable Style Workshop', date: '2025-04-10', location: 'Design Studio' }
    ],
    members: [
      { id: 1, name: 'Fashion Lead 1', role: 'President', image: '', email: 'fashion.lead1@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Fashion Lead 2', role: 'Coordinator', image: '', email: 'fashion.lead2@example.com', phone: '+91 98765 43211' }
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
            <Scissors size={48} color="#fff" />
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
             <Scissors size={150} style={{ opacity: 0.1, color: '#000' }} />
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
        {club.members.length > 0 && (
        <section className="section-common">
           <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Team Leaders</h2>
           <div className="members-grid">
             {club.members.map(member => (
               <div key={member.id} className="member-card">
                 <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: club.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                   <Scissors size={32} />
                 </div>
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
        )}

      </div>
    </div>
  );
};

export default FashionClub;
