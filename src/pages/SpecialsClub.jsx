import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import './SpecialsClub.css';

const SpecialsClub = () => {
  const club = {
    id: 'specials',
    name: 'Specials Club',
    icon: 'Star',
    gradient: 'linear-gradient(135deg, #ffb300ff 50%)', // Rainbow-ish
    shortDescription: 'Celebrating uniqueness and inclusivity.',
    fullDescription: 'The Specials Club is a safe space for everyone to express themselves. We focus on inclusive events, talent shows for differently-abled students, and awareness campaigns.',
    events: [
      { id: 1, title: 'Inclusivity Walk', date: '2025-01-15', location: 'Main Avenue' },
      { id: 2, title: 'Talent Unlimited', date: '2025-02-10', location: 'Auditorium' }
    ],
    members: [
      { id: 1, name: 'Specials Lead 1', role: 'President', image: '', email: 'specials.lead1@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Specials Lead 2', role: 'Coordinator', image: '', email: 'specials.lead2@example.com', phone: '+91 98765 43211' }
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
            <Star size={48} color="#fff" />
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
             <Star size={150} style={{ opacity: 0.1, color: '#000' }} />
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
                   <Star size={32} />
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

export default SpecialsClub;
