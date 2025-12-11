import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import clubLogo from '../assets/Quiz_club_logo.jpg';
import './QuizClub.css';

const iconMap = {
  Brain
};

const QuizClub = () => {
  const club = {
    id: 'quiz',
    name: 'Quiz Club of KLS GIT',
    icon: 'Brain',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // Indigo to Purple
    shortDescription: 'Test your knowledge, challenge your wits.',
    fullDescription: 'The Quiz Club of KLS GIT is a battleground for the intellectually curious. From tech trivia and business quizzes to general knowledge and pop culture, we cover it all. Join us to sharpen your mind and compete for glory.',
    events: [
      { id: 1, title: 'Brainiacs Open Quiz', date: '2024-03-10', location: 'Silver Jubilee Auditorium' },
      { id: 2, title: 'Tech Trivia Night', date: '2024-03-25', location: 'CS Seminar Hall' }
    ],
    members: [
      { id: 1, name: 'Aditya Kulkarni', role: 'Quiz Master', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'aditya.k@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Snehal Deshpande', role: 'Event Coordinator', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200', email: 'snehal@example.com', phone: '+91 98765 43211' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800', // Quiz generic
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'  // Conf/Group
    ]
  };

  const Icon = iconMap[club.icon] || Circle;

  // Reusing the same layout as other clubs for consistency
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

export default QuizClub;
