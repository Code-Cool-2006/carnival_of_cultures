import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Move, Drama, Palette, BookOpen, Camera, Calendar, MapPin, Circle, Mail, Phone } from 'lucide-react';
import clubLogo from '../assets/music_dance_club_logo.png';
import Carousel from '../components/Carousel';

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
          <h2 style={{ marginBottom: '3rem', paddingLeft: '1rem', borderLeft: `6px solid`, borderImage: `${club.gradient} 1`, fontSize: '2.5rem' }}>Upcoming Events</h2>
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
                     {member.email && <a href={`mailto:${member.email}`} style={{ color: 'var(--text-secondary)' }} title={member.email}><Mail size={16} /></a>}
                     {member.phone && <a href={`tel:${member.phone}`} style={{ color: 'var(--text-secondary)' }} title={member.phone}><Phone size={16} /></a>}
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

export default MusicClub;
