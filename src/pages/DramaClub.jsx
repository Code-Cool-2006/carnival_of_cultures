import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Calendar, MapPin, Circle, Award, Trophy, Star, Mail, Phone } from 'lucide-react';
import Carousel from '../components/Carousel';
import clubLogo from '../assets/Drama_club_logo.jpg';

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
    <div style={{ paddingBottom: '4rem', background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* Hero Banner */}
      <div style={{ 
        height: '50vh', 
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), ${club.gradient}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'clamp(1.5rem, 5vw, 3rem)',
        position: 'relative',
        marginBottom: '4rem'
      }}>
        <Link to="/" style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem', borderRadius: '50px', color: '#fff', textDecoration: 'none', backdropFilter: 'blur(5px)' }}>
          ← Back
        </Link>
        <div className="animate-slide-up">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Icon size={48} color="#fff" />
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', margin: 0 }}>{club.name}</h1>
          </div>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px' }}>{club.shortDescription}</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* About Section */}
        <section style={{ display: 'flex', gap: '4rem', marginBottom: '6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
             <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', background: club.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>About Us</h2>
             <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              {club.fullDescription}
             </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <img src={clubLogo} alt="Club Logo" style={{ width: '100%', height: '100%', maxHeight: '300px', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }} />
          </div>
        </section>



        {/* Achievements Section */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Achievements</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
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
               }}>
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
        <section style={{ marginBottom: '6rem' }}>
          <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Past Events</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {club.events.map(event => (
              <div key={event.id} className="event-card" style={{ 
                background: 'var(--card-bg)', 
                padding: '2rem', 
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
               }}>
                <div style={{ marginBottom: '1rem', background: club.gradient, width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Calendar size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{event.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                   <span>{event.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                   <MapPin size={16} />
                   <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Members Section */}
        <section style={{ marginBottom: '6rem' }}>
           <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Team Leaders</h2>
           <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
             {club.members.map(member => (
               <div key={member.id} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--card-bg)', padding: '1rem 2rem 1rem 1rem', borderRadius: '100px', border: '1px solid var(--border-color)' }}>
                 <img src={member.image} alt={member.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
                 <div>
                   <h4 style={{ fontSize: '1.2rem', margin: 0 }}>{member.name}</h4>
                   <p style={{ margin: 0, color: 'var(--accent-primary)', fontSize: '0.9rem' }}>{member.role}</p>
                   <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                     {member.email && (
                       <a href={`mailto:${member.email}`} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} title={member.email}>
                         <Mail size={16} />
                       </a>
                     )}
                     {member.phone && (
                       <a href={`tel:${member.phone}`} style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} title={member.phone}>
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
            <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Gallery</h2>
            <Carousel items={club.gallery} />
          </section>
        )}

      </div>
    </div>
  );
};

export default DramaClub;
