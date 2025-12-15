import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Mail, Phone, Circle } from 'lucide-react';
import Carousel from './Carousel';
import './ClubLayout.css';

const ClubLayout = ({ club }) => {
  const Icon = club.Icon || Circle;

  return (
    <div className="club-page-container">
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
        
        <section className="section-common about-section">
          <div className="about-content">
             <h2 className="about-title" style={{ background: club.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>About Us</h2>
             <p className="about-description">
              {club.fullDescription}
             </p>
          </div>
          <div className="about-image-container">
            {club.aboutImage ? (
              <img src={club.aboutImage} alt="About Club" style={{ width: '100%', height: '100%', maxHeight: '300px', objectFit: 'contain' }} />
            ) : (
              <Icon size={150} style={{ opacity: 0.1, color: '#000' }} />
            )}
          </div>
        </section>

        {club.achievements && club.achievements.length > 0 && (
          <section className="section-common">
            <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Achievements</h2>
            <div className="events-grid">
              {club.achievements.map(achievement => (
                <div key={achievement.id} className="achievement-card">
                  <div className="achievement-icon-box" style={{ background: club.gradient }}>
                    {achievement.Icon && <achievement.Icon size={24} />}
                  </div>
                  <div>
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="section-common">
          <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>{club.eventsTitle || 'Upcoming Events'}</h2>
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

        {club.members && club.members.length > 0 && (
        <section className="section-common">
           <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Team Leaders</h2>
           <div className="members-grid">
             {club.members.map(member => (
               <div key={member.id} className="member-card">
                 {member.image ? (
                   <img src={member.image} alt={member.name} className="member-image" style={{ borderColor: 'var(--border-color)' }} />
                 ) : (
                   <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: club.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                     <Icon size={32} />
                   </div>
                 )}
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

export default ClubLayout;
