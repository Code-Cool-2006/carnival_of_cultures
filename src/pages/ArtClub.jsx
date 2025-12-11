import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import './ArtClub.css';

const iconMap = {
  Music,
  Move,
  Drama,
  Palette,
  BookOpen,
  Camera
};

const ArtClub = () => {
  const club = {
    id: 'art',
    name: 'Fine Arts Club of GIT',
    icon: 'Palette',
    gradient: 'linear-gradient(135deg, #84CC16 0%, #15803D 100%)', // Lime to Green
    shortDescription: 'Filling the canvas with colors of India.',
    fullDescription: 'From Mandala workshops and Madhubani painting to digital art and modern sketching. Rang is a sanctuary for those who think in colors. We organize the annual "Kala Utsav" exhibition.',
    events: [
      { id: 1, title: 'Rangoli Competition', date: '2023-11-20', location: 'College Foyer' },
      { id: 2, title: 'Madhubani Workshop', date: '2023-12-08', location: 'Art Studio' }
    ],
    members: [
      { id: 1, name: 'Ishaan Gupta', role: 'President', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200', email: 'ishaan@example.com', phone: '+91 98765 43210' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460661618165-55008d307f97?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'
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
             <Icon size={150} style={{ opacity: 0.1, color: '#000' }} />
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

export default ArtClub;
