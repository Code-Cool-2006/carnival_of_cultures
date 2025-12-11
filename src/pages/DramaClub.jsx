import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Calendar, MapPin, Circle, Award, Trophy, Star, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import clubLogo from '../assets/Drama_club_logo.jpg';
import './DramaClub.css';

const iconMap = {
  Music,
  Move,
  Drama,
  Palette,
  BookOpen,
  Camera
};

const DramaClub = () => {
  const club = {
    id: 'drama',
    name: 'Tathva the Drama Club of GIT',
    icon: 'Drama',
    gradient: 'linear-gradient(135deg, #FF9900 0%, #FF5500 100%)', // Orange to Red-Orange
    shortDescription: 'All the world is a stage, especially ours.',
    fullDescription: 'Whether it is Nukkad Natak (Street Play) highlighting social issues or grand stage productions of Ramayana and contemporary theatre, Nautanki is for the storytellers. We focus on method acting, scriptwriting, and keeping the theatre culture alive.',
    events: [
      { id: 1, title: 'Echoes of Murder', date: '2025-06-08', location: 'Campus Quad' },
      { id: 2, title: 'Improv Comedy Night', date: '2025-06-15', location: 'Auditorium' }
    ],
    achievements: [
      { id: 1, title: 'Waves 2024', description: '🥇 1st Place at BITS Goa', icon: 'Trophy' },
      { id: 2, title: 'Incident 2024', description: '🥈 2nd Place at NITK', icon: 'Award' },
      { id: 3, title: 'Inbloom 2025', description: '🥇 1st Place at Christ University', icon: 'Trophy' },
      { id: 4, title: 'Symbhav 2025', description: '🥇 1st Place at Symbiosis Pune', icon: 'Trophy' },
      { id: 5, title: 'Insignia 2025', description: '🥈 2nd Place at SDM Dharwad', icon: 'Award' },
      { id: 6, title: 'Yukti 2025', description: '🥇 1st Place at VTU', icon: 'Trophy' },
      { id: 7, title: 'Invento 2024', description: '🥇 1st Place at KLE Sheshgiri', icon: 'Trophy' },
      { id: 8, title: 'Festivista 2024', description: '🥇 1st Place at Lingaraj Literary', icon: 'Trophy' },
      { id: 9, title: 'Toastmasters 2024', description: '🥇 1st Place at KLS IMER', icon: 'Trophy' }
    ],
    members: [
      { id: 1, name: 'Gaurikh Khoda', role: 'Student Council', image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200', email: 'gaurikh@example.com', phone: '+91 98765 43210' },
      { id: 2, name: 'Bhartesh Mareppagol', role: 'Student Council', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'bhartesh@example.com', phone: '+91 98765 43211' },
      { id: 3, name: 'Kumudini Balobal', role: 'Student Coordinator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'kumudini@example.com', phone: '+91 98765 43212' },
      { id: 4, name: 'Manoj Gugade', role: 'Student Coordinator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', email: 'manoj@example.com', phone: '+91 98765 43213' },
    ],
    gallery: [
      'src/assets/Photos_assests/Nukkad_drama.png',
      'src/assets/Photos_assests/Echoes_drama.png'
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

        {/* Achievements Section */}
        <section className="section-common">
          <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Achievements</h2>
          <div className="events-grid">
            {club.achievements.map(achievement => (
              <div key={achievement.id} style={{ 
                background: 'var(--card-bg)', 
                padding: '2rem', 
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
               }} className="event-card">
                <div style={{ background: club.gradient, padding: '0.8rem', borderRadius: '12px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {achievement.icon === 'Award' && <Award size={24} />}
                  {achievement.icon === 'Trophy' && <Trophy size={24} />}
                  {achievement.icon === 'Star' && <Star size={24} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', marginTop: '0' }}>{achievement.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="section-common">
          <h2 className="section-title" style={{ borderImage: `${club.gradient} 1` }}>Past Events</h2>
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
                     {member.email && (
                       <a href={`mailto:${member.email}`} className="contact-icon" title={member.email}>
                         <Mail size={16} />
                       </a>
                     )}
                     {member.phone && (
                       <a href={`tel:${member.phone}`} className="contact-icon" title={member.phone}>
                         <Phone size={16} />
                       </a>
                     )}
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

export default DramaClub;
